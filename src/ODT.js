import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class ODT extends Segment {
    static components = {
        TrayType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ServicePeriod: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: true,
            maxOccurence: 10,
            minOccurence: 1,
        },
        TextInstruction: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'TrayType', 'ServicePeriod', 'TextInstruction'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ODT');
        this.setValues(values);
    }

    get TrayType() {
        return this.getComponent('TrayType');
    }

    set TrayType(value) {
        this.setComponentValue('TrayType', value);
    }

    get ServicePeriod() {
        return this.getComponent('ServicePeriod');
    }

    set ServicePeriod(value) {
        this.setComponentValue('ServicePeriod', value);
    }

    get TextInstruction() {
        return this.getComponent('TextInstruction');
    }

    set TextInstruction(value) {
        this.setComponentValue('TextInstruction', value);
    }
}
