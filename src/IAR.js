import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class IAR extends Segment {
    static components = {
        AllergyReactionCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AllergySeverityCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SensitivityToCausativeAgentCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Management: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'AllergyReactionCode', 'AllergySeverityCode', 'SensitivityToCausativeAgentCode', 'Management'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('IAR');
        this.setValues(values);
    }

    get AllergyReactionCode() {
        return this.getComponent('AllergyReactionCode');
    }

    set AllergyReactionCode(value) {
        this.setComponentValue('AllergyReactionCode', value);
    }

    get AllergySeverityCode() {
        return this.getComponent('AllergySeverityCode');
    }

    set AllergySeverityCode(value) {
        this.setComponentValue('AllergySeverityCode', value);
    }

    get SensitivityToCausativeAgentCode() {
        return this.getComponent('SensitivityToCausativeAgentCode');
    }

    set SensitivityToCausativeAgentCode(value) {
        this.setComponentValue('SensitivityToCausativeAgentCode', value);
    }

    get Management() {
        return this.getComponent('Management');
    }

    set Management(value) {
        this.setComponentValue('Management', value);
    }
}
