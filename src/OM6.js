import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';

export class OM6 extends Segment {
    static components = {
        SequenceNumberTestObservationMasterFile: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SequenceNumber: { aliasOf: 'SequenceNumberTestObservationMasterFile' },
        DerivationRule: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SequenceNumberTestObservationMasterFile', 'DerivationRule'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('OM6');
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

    get DerivationRule() {
        return this.getComponent('DerivationRule');
    }

    set DerivationRule(value) {
        this.setComponentValue('DerivationRule', value);
    }
}
