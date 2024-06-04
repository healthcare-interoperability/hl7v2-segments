import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';

export class OM7 extends Segment {
    static components = {
        SequenceNumberTestObservationMasterFile: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        UniversalServiceIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CategoryIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CategoryDescription: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CategorySynonym: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EffectiveTestServiceStartDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EffectiveTestServiceEndDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TestServiceDefaultDurationQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TestServiceDefaultDurationUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TestServiceDefaultFrequency: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentEffectiveStartDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentEffectiveEndDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentIntervalQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentIntervalUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentWaitingPeriodQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentWaitingPeriodUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EffectiveDateTimeOfChange: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EnteredBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrderableAtLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        FormularyStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecialOrderIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryKeyValueCdm: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 24,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SequenceNumberTestObservationMasterFile',
        'UniversalServiceIdentifier',
        'CategoryIdentifier',
        'CategoryDescription',
        'CategorySynonym',
        'EffectiveTestServiceStartDateTime',
        'EffectiveTestServiceEndDateTime',
        'TestServiceDefaultDurationQuantity',
        'TestServiceDefaultDurationUnits',
        'TestServiceDefaultFrequency',
        'ConsentIndicator',
        'ConsentIdentifier',
        'ConsentEffectiveStartDateTime',
        'ConsentEffectiveEndDateTime',
        'ConsentIntervalQuantity',
        'ConsentIntervalUnits',
        'ConsentWaitingPeriodQuantity',
        'ConsentWaitingPeriodUnits',
        'EffectiveDateTimeOfChange',
        'EnteredBy',
        'OrderableAtLocation',
        'FormularyStatus',
        'SpecialOrderIndicator',
        'PrimaryKeyValueCdm',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('OM7');
        this.setValues(values);
    }

    get SequenceNumberTestObservationMasterFile() {
        return this.getComponent('SequenceNumberTestObservationMasterFile');
    }

    set SequenceNumberTestObservationMasterFile(value) {
        this.setComponentValue('SequenceNumberTestObservationMasterFile', value);
    }

    get UniversalServiceIdentifier() {
        return this.getComponent('UniversalServiceIdentifier');
    }

    set UniversalServiceIdentifier(value) {
        this.setComponentValue('UniversalServiceIdentifier', value);
    }

    get CategoryIdentifier() {
        return this.getComponent('CategoryIdentifier');
    }

    set CategoryIdentifier(value) {
        this.setComponentValue('CategoryIdentifier', value);
    }

    get CategoryDescription() {
        return this.getComponent('CategoryDescription');
    }

    set CategoryDescription(value) {
        this.setComponentValue('CategoryDescription', value);
    }

    get CategorySynonym() {
        return this.getComponent('CategorySynonym');
    }

    set CategorySynonym(value) {
        this.setComponentValue('CategorySynonym', value);
    }

    get EffectiveTestServiceStartDateTime() {
        return this.getComponent('EffectiveTestServiceStartDateTime');
    }

    set EffectiveTestServiceStartDateTime(value) {
        this.setComponentValue('EffectiveTestServiceStartDateTime', value);
    }

    get EffectiveTestServiceEndDateTime() {
        return this.getComponent('EffectiveTestServiceEndDateTime');
    }

    set EffectiveTestServiceEndDateTime(value) {
        this.setComponentValue('EffectiveTestServiceEndDateTime', value);
    }

    get TestServiceDefaultDurationQuantity() {
        return this.getComponent('TestServiceDefaultDurationQuantity');
    }

    set TestServiceDefaultDurationQuantity(value) {
        this.setComponentValue('TestServiceDefaultDurationQuantity', value);
    }

    get TestServiceDefaultDurationUnits() {
        return this.getComponent('TestServiceDefaultDurationUnits');
    }

    set TestServiceDefaultDurationUnits(value) {
        this.setComponentValue('TestServiceDefaultDurationUnits', value);
    }

    get TestServiceDefaultFrequency() {
        return this.getComponent('TestServiceDefaultFrequency');
    }

    set TestServiceDefaultFrequency(value) {
        this.setComponentValue('TestServiceDefaultFrequency', value);
    }

    get ConsentIndicator() {
        return this.getComponent('ConsentIndicator');
    }

    set ConsentIndicator(value) {
        this.setComponentValue('ConsentIndicator', value);
    }

    get ConsentIdentifier() {
        return this.getComponent('ConsentIdentifier');
    }

    set ConsentIdentifier(value) {
        this.setComponentValue('ConsentIdentifier', value);
    }

    get ConsentEffectiveStartDateTime() {
        return this.getComponent('ConsentEffectiveStartDateTime');
    }

    set ConsentEffectiveStartDateTime(value) {
        this.setComponentValue('ConsentEffectiveStartDateTime', value);
    }

    get ConsentEffectiveEndDateTime() {
        return this.getComponent('ConsentEffectiveEndDateTime');
    }

    set ConsentEffectiveEndDateTime(value) {
        this.setComponentValue('ConsentEffectiveEndDateTime', value);
    }

    get ConsentIntervalQuantity() {
        return this.getComponent('ConsentIntervalQuantity');
    }

    set ConsentIntervalQuantity(value) {
        this.setComponentValue('ConsentIntervalQuantity', value);
    }

    get ConsentIntervalUnits() {
        return this.getComponent('ConsentIntervalUnits');
    }

    set ConsentIntervalUnits(value) {
        this.setComponentValue('ConsentIntervalUnits', value);
    }

    get ConsentWaitingPeriodQuantity() {
        return this.getComponent('ConsentWaitingPeriodQuantity');
    }

    set ConsentWaitingPeriodQuantity(value) {
        this.setComponentValue('ConsentWaitingPeriodQuantity', value);
    }

    get ConsentWaitingPeriodUnits() {
        return this.getComponent('ConsentWaitingPeriodUnits');
    }

    set ConsentWaitingPeriodUnits(value) {
        this.setComponentValue('ConsentWaitingPeriodUnits', value);
    }

    get EffectiveDateTimeOfChange() {
        return this.getComponent('EffectiveDateTimeOfChange');
    }

    set EffectiveDateTimeOfChange(value) {
        this.setComponentValue('EffectiveDateTimeOfChange', value);
    }

    get EnteredBy() {
        return this.getComponent('EnteredBy');
    }

    set EnteredBy(value) {
        this.setComponentValue('EnteredBy', value);
    }

    get OrderableAtLocation() {
        return this.getComponent('OrderableAtLocation');
    }

    set OrderableAtLocation(value) {
        this.setComponentValue('OrderableAtLocation', value);
    }

    get FormularyStatus() {
        return this.getComponent('FormularyStatus');
    }

    set FormularyStatus(value) {
        this.setComponentValue('FormularyStatus', value);
    }

    get SpecialOrderIndicator() {
        return this.getComponent('SpecialOrderIndicator');
    }

    set SpecialOrderIndicator(value) {
        this.setComponentValue('SpecialOrderIndicator', value);
    }

    get PrimaryKeyValueCdm() {
        return this.getComponent('PrimaryKeyValueCdm');
    }

    set PrimaryKeyValueCdm(value) {
        this.setComponentValue('PrimaryKeyValueCdm', value);
    }
}
