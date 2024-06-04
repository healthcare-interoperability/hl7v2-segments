import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class TQ2 extends Segment {
    static components = {
        SetIdTq2: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDTq2: { aliasOf: 'SetIdTq2' },
        SequenceResultsFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RelatedPlacerNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        RelatedFillerNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        RelatedPlacerGroupNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SequenceConditionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CyclicEntryExitIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SequenceConditionTimeInterval: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CyclicGroupMaximumNumberOfRepeats: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecialServiceRequestRelationship: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdTq2',
        'SequenceResultsFlag',
        'RelatedPlacerNumber',
        'RelatedFillerNumber',
        'RelatedPlacerGroupNumber',
        'SequenceConditionCode',
        'CyclicEntryExitIndicator',
        'SequenceConditionTimeInterval',
        'CyclicGroupMaximumNumberOfRepeats',
        'SpecialServiceRequestRelationship',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('TQ2');
        this.setValues(values);
    }

    get SetIdTq2() {
        return this.getComponent('SetIdTq2');
    }

    set SetIdTq2(value) {
        this.setComponentValue('SetIdTq2', value);
    }

    get SetIDTq2() {
        return this.getComponent('SetIdTq2');
    }

    set SetIDTq2(value) {
        this.setComponentValue('SetIdTq2', value);
    }

    get SequenceResultsFlag() {
        return this.getComponent('SequenceResultsFlag');
    }

    set SequenceResultsFlag(value) {
        this.setComponentValue('SequenceResultsFlag', value);
    }

    get RelatedPlacerNumber() {
        return this.getComponent('RelatedPlacerNumber');
    }

    set RelatedPlacerNumber(value) {
        this.setComponentValue('RelatedPlacerNumber', value);
    }

    get RelatedFillerNumber() {
        return this.getComponent('RelatedFillerNumber');
    }

    set RelatedFillerNumber(value) {
        this.setComponentValue('RelatedFillerNumber', value);
    }

    get RelatedPlacerGroupNumber() {
        return this.getComponent('RelatedPlacerGroupNumber');
    }

    set RelatedPlacerGroupNumber(value) {
        this.setComponentValue('RelatedPlacerGroupNumber', value);
    }

    get SequenceConditionCode() {
        return this.getComponent('SequenceConditionCode');
    }

    set SequenceConditionCode(value) {
        this.setComponentValue('SequenceConditionCode', value);
    }

    get CyclicEntryExitIndicator() {
        return this.getComponent('CyclicEntryExitIndicator');
    }

    set CyclicEntryExitIndicator(value) {
        this.setComponentValue('CyclicEntryExitIndicator', value);
    }

    get SequenceConditionTimeInterval() {
        return this.getComponent('SequenceConditionTimeInterval');
    }

    set SequenceConditionTimeInterval(value) {
        this.setComponentValue('SequenceConditionTimeInterval', value);
    }

    get CyclicGroupMaximumNumberOfRepeats() {
        return this.getComponent('CyclicGroupMaximumNumberOfRepeats');
    }

    set CyclicGroupMaximumNumberOfRepeats(value) {
        this.setComponentValue('CyclicGroupMaximumNumberOfRepeats', value);
    }

    get SpecialServiceRequestRelationship() {
        return this.getComponent('SpecialServiceRequestRelationship');
    }

    set SpecialServiceRequestRelationship(value) {
        this.setComponentValue('SpecialServiceRequestRelationship', value);
    }
}
