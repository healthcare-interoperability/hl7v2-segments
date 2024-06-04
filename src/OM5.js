import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class OM5 extends Segment {
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
        TestObservationsIncludedWithinAnOrderedTestBattery: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        TestObservationsIncludedWAnOrderedTestBattery: { aliasOf: 'TestObservationsIncludedWithinAnOrderedTestBattery' },
        ObservationIdSuffixes: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ObservationIDSuffixes: { aliasOf: 'ObservationIdSuffixes' },
    };

    static componentsByIndex = ['', 'SequenceNumberTestObservationMasterFile', 'TestObservationsIncludedWithinAnOrderedTestBattery', 'ObservationIdSuffixes'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('OM5');
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

    get TestObservationsIncludedWithinAnOrderedTestBattery() {
        return this.getComponent('TestObservationsIncludedWithinAnOrderedTestBattery');
    }

    set TestObservationsIncludedWithinAnOrderedTestBattery(value) {
        this.setComponentValue('TestObservationsIncludedWithinAnOrderedTestBattery', value);
    }

    get TestObservationsIncludedWAnOrderedTestBattery() {
        return this.getComponent('TestObservationsIncludedWithinAnOrderedTestBattery');
    }

    set TestObservationsIncludedWAnOrderedTestBattery(value) {
        this.setComponentValue('TestObservationsIncludedWithinAnOrderedTestBattery', value);
    }

    get ObservationIdSuffixes() {
        return this.getComponent('ObservationIdSuffixes');
    }

    set ObservationIdSuffixes(value) {
        this.setComponentValue('ObservationIdSuffixes', value);
    }

    get ObservationIDSuffixes() {
        return this.getComponent('ObservationIdSuffixes');
    }

    set ObservationIDSuffixes(value) {
        this.setComponentValue('ObservationIdSuffixes', value);
    }
}
