import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { RPT } from '@healthcare-interoperability/hl7v2-datatypes';
import { TM } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class TQ1 extends Segment {
    static components = {
        SetIdTq1: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Quantity: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RepeatPattern: {
            defaultDataType: RPT,
            dataTypes: [{ dataType: RPT, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ExplicitTime: {
            defaultDataType: TM,
            dataTypes: [{ dataType: TM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        RelativeTimeAndUnits: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ServiceDuration: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StartDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EndDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Priority: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ConditionText: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TextInstruction: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Conjunction: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OccurrenceDuration: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalOccurrences: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdTq1',
        'Quantity',
        'RepeatPattern',
        'ExplicitTime',
        'RelativeTimeAndUnits',
        'ServiceDuration',
        'StartDateTime',
        'EndDateTime',
        'Priority',
        'ConditionText',
        'TextInstruction',
        'Conjunction',
        'OccurrenceDuration',
        'TotalOccurrences',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('TQ1');
        this.setValues(values);
    }

    get SetIdTq1() {
        return this.getComponent('SetIdTq1');
    }

    set SetIdTq1(value) {
        this.setComponentValue('SetIdTq1', value);
    }

    get Quantity() {
        return this.getComponent('Quantity');
    }

    set Quantity(value) {
        this.setComponentValue('Quantity', value);
    }

    get RepeatPattern() {
        return this.getComponent('RepeatPattern');
    }

    set RepeatPattern(value) {
        this.setComponentValue('RepeatPattern', value);
    }

    get ExplicitTime() {
        return this.getComponent('ExplicitTime');
    }

    set ExplicitTime(value) {
        this.setComponentValue('ExplicitTime', value);
    }

    get RelativeTimeAndUnits() {
        return this.getComponent('RelativeTimeAndUnits');
    }

    set RelativeTimeAndUnits(value) {
        this.setComponentValue('RelativeTimeAndUnits', value);
    }

    get ServiceDuration() {
        return this.getComponent('ServiceDuration');
    }

    set ServiceDuration(value) {
        this.setComponentValue('ServiceDuration', value);
    }

    get StartDateTime() {
        return this.getComponent('StartDateTime');
    }

    set StartDateTime(value) {
        this.setComponentValue('StartDateTime', value);
    }

    get EndDateTime() {
        return this.getComponent('EndDateTime');
    }

    set EndDateTime(value) {
        this.setComponentValue('EndDateTime', value);
    }

    get Priority() {
        return this.getComponent('Priority');
    }

    set Priority(value) {
        this.setComponentValue('Priority', value);
    }

    get ConditionText() {
        return this.getComponent('ConditionText');
    }

    set ConditionText(value) {
        this.setComponentValue('ConditionText', value);
    }

    get TextInstruction() {
        return this.getComponent('TextInstruction');
    }

    set TextInstruction(value) {
        this.setComponentValue('TextInstruction', value);
    }

    get Conjunction() {
        return this.getComponent('Conjunction');
    }

    set Conjunction(value) {
        this.setComponentValue('Conjunction', value);
    }

    get OccurrenceDuration() {
        return this.getComponent('OccurrenceDuration');
    }

    set OccurrenceDuration(value) {
        this.setComponentValue('OccurrenceDuration', value);
    }

    get TotalOccurrences() {
        return this.getComponent('TotalOccurrences');
    }

    set TotalOccurrences(value) {
        this.setComponentValue('TotalOccurrences', value);
    }
}
