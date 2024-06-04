import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class ECR extends Segment {
    static components = {
        CommandResponse: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateTimeCompleted: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CommandResponseParameters: {
            defaultDataType: TX,
            dataTypes: [
                { dataType: TX, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.4'] },
            ],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'CommandResponse', 'DateTimeCompleted', 'CommandResponseParameters'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ECR');
        this.setValues(values);
    }

    get CommandResponse() {
        return this.getComponent('CommandResponse');
    }

    set CommandResponse(value) {
        this.setComponentValue('CommandResponse', value);
    }

    get DateTimeCompleted() {
        return this.getComponent('DateTimeCompleted');
    }

    set DateTimeCompleted(value) {
        this.setComponentValue('DateTimeCompleted', value);
    }

    get CommandResponseParameters() {
        return this.getComponent('CommandResponseParameters');
    }

    set CommandResponseParameters(value) {
        this.setComponentValue('CommandResponseParameters', value);
    }
}
