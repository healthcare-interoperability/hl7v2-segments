import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class OM3 extends Segment {
    static components = {
        SequenceNumberTestObservationMasterFile: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SequenceNumber: { aliasOf: 'SequenceNumberTestObservationMasterFile' },
        PreferredCodingSystem: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ValidCodedAnswers: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        NormalTextCodesForCategoricalObservations: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AbnormalTextCodesForCategoricalObservations: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        CriticalTextCodesForCategoricalObservations: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ValueType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SequenceNumberTestObservationMasterFile',
        'PreferredCodingSystem',
        'ValidCodedAnswers',
        'NormalTextCodesForCategoricalObservations',
        'AbnormalTextCodesForCategoricalObservations',
        'CriticalTextCodesForCategoricalObservations',
        'ValueType',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('OM3');
        this.setValues(values);
    }

    get SequenceNumberTestObservationMasterFile() {
        return this.getComponent('SequenceNumberTestObservationMasterFile');
    }

    set SequenceNumberTestObservationMasterFile(value) {
        this.setComponentValue('SequenceNumberTestObservationMasterFile', value);
    }

    get SequenceNumber() {
        return this.getComponent('SequenceNumberTestObservationMasterFile');
    }

    set SequenceNumber(value) {
        this.setComponentValue('SequenceNumberTestObservationMasterFile', value);
    }

    get PreferredCodingSystem() {
        return this.getComponent('PreferredCodingSystem');
    }

    set PreferredCodingSystem(value) {
        this.setComponentValue('PreferredCodingSystem', value);
    }

    get ValidCodedAnswers() {
        return this.getComponent('ValidCodedAnswers');
    }

    set ValidCodedAnswers(value) {
        this.setComponentValue('ValidCodedAnswers', value);
    }

    get NormalTextCodesForCategoricalObservations() {
        return this.getComponent('NormalTextCodesForCategoricalObservations');
    }

    set NormalTextCodesForCategoricalObservations(value) {
        this.setComponentValue('NormalTextCodesForCategoricalObservations', value);
    }

    get AbnormalTextCodesForCategoricalObservations() {
        return this.getComponent('AbnormalTextCodesForCategoricalObservations');
    }

    set AbnormalTextCodesForCategoricalObservations(value) {
        this.setComponentValue('AbnormalTextCodesForCategoricalObservations', value);
    }

    get CriticalTextCodesForCategoricalObservations() {
        return this.getComponent('CriticalTextCodesForCategoricalObservations');
    }

    set CriticalTextCodesForCategoricalObservations(value) {
        this.setComponentValue('CriticalTextCodesForCategoricalObservations', value);
    }

    get ValueType() {
        return this.getComponent('ValueType');
    }

    set ValueType(value) {
        this.setComponentValue('ValueType', value);
    }
}
