import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class ODS extends Segment {
    static components = {
        Type: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
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
        DietSupplementOrPreferenceCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: true,
            maxOccurence: 20,
            minOccurence: 1,
        },
        TextInstruction: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 2,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'Type', 'ServicePeriod', 'DietSupplementOrPreferenceCode', 'TextInstruction'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ODS');
        this.setValues(values);
    }

    get Type() {
        return this.getComponent('Type');
    }

    set Type(value) {
        this.setComponentValue('Type', value);
    }

    get ServicePeriod() {
        return this.getComponent('ServicePeriod');
    }

    set ServicePeriod(value) {
        this.setComponentValue('ServicePeriod', value);
    }

    get DietSupplementOrPreferenceCode() {
        return this.getComponent('DietSupplementOrPreferenceCode');
    }

    set DietSupplementOrPreferenceCode(value) {
        this.setComponentValue('DietSupplementOrPreferenceCode', value);
    }

    get TextInstruction() {
        return this.getComponent('TextInstruction');
    }

    set TextInstruction(value) {
        this.setComponentValue('TextInstruction', value);
    }
}
