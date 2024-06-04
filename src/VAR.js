import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class VAR extends Segment {
    static components = {
        VarianceInstanceId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DocumentedDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatedVarianceDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VarianceOriginator: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        VarianceClassification: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VarianceDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'VarianceInstanceId', 'DocumentedDateTime', 'StatedVarianceDateTime', 'VarianceOriginator', 'VarianceClassification', 'VarianceDescription'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('VAR');
        this.setValues(values);
    }

    get VarianceInstanceId() {
        return this.getComponent('VarianceInstanceId');
    }

    set VarianceInstanceId(value) {
        this.setComponentValue('VarianceInstanceId', value);
    }

    get DocumentedDateTime() {
        return this.getComponent('DocumentedDateTime');
    }

    set DocumentedDateTime(value) {
        this.setComponentValue('DocumentedDateTime', value);
    }

    get StatedVarianceDateTime() {
        return this.getComponent('StatedVarianceDateTime');
    }

    set StatedVarianceDateTime(value) {
        this.setComponentValue('StatedVarianceDateTime', value);
    }

    get VarianceOriginator() {
        return this.getComponent('VarianceOriginator');
    }

    set VarianceOriginator(value) {
        this.setComponentValue('VarianceOriginator', value);
    }

    get VarianceClassification() {
        return this.getComponent('VarianceClassification');
    }

    set VarianceClassification(value) {
        this.setComponentValue('VarianceClassification', value);
    }

    get VarianceDescription() {
        return this.getComponent('VarianceDescription');
    }

    set VarianceDescription(value) {
        this.setComponentValue('VarianceDescription', value);
    }
}
