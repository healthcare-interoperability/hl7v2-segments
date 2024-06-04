import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';

export class AL1 extends Segment {
    static components = {
        SetIdAl1: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AllergenTypeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AllergyType: { aliasOf: 'AllergenTypeCode' },
        AllergenCodeMnemonicDescription: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AllergyCodeMnemonicDescription: { aliasOf: 'AllergenCodeMnemonicDescription' },
        AllergySeverityCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AllergySeverity: { aliasOf: 'AllergySeverityCode' },
        AllergyReactionCode: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        AllergyReaction: { aliasOf: 'AllergyReactionCode' },
        IdentificationDate: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: DT, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdAl1', 'AllergenTypeCode', 'AllergenCodeMnemonicDescription', 'AllergySeverityCode', 'AllergyReactionCode', 'IdentificationDate'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('AL1');
        this.setValues(values);
    }

    get SetIdAl1() {
        return this.getComponent('SetIdAl1');
    }

    set SetIdAl1(value) {
        this.setComponentValue('SetIdAl1', value);
    }

    get AllergenTypeCode() {
        return this.getComponent('AllergenTypeCode');
    }

    set AllergenTypeCode(value) {
        this.setComponentValue('AllergenTypeCode', value);
    }

    get AllergyType() {
        return this.getComponent('AllergenTypeCode');
    }

    set AllergyType(value) {
        this.setComponentValue('AllergenTypeCode', value);
    }

    get AllergenCodeMnemonicDescription() {
        return this.getComponent('AllergenCodeMnemonicDescription');
    }

    set AllergenCodeMnemonicDescription(value) {
        this.setComponentValue('AllergenCodeMnemonicDescription', value);
    }

    get AllergyCodeMnemonicDescription() {
        return this.getComponent('AllergenCodeMnemonicDescription');
    }

    set AllergyCodeMnemonicDescription(value) {
        this.setComponentValue('AllergenCodeMnemonicDescription', value);
    }

    get AllergySeverityCode() {
        return this.getComponent('AllergySeverityCode');
    }

    set AllergySeverityCode(value) {
        this.setComponentValue('AllergySeverityCode', value);
    }

    get AllergySeverity() {
        return this.getComponent('AllergySeverityCode');
    }

    set AllergySeverity(value) {
        this.setComponentValue('AllergySeverityCode', value);
    }

    get AllergyReactionCode() {
        return this.getComponent('AllergyReactionCode');
    }

    set AllergyReactionCode(value) {
        this.setComponentValue('AllergyReactionCode', value);
    }

    get AllergyReaction() {
        return this.getComponent('AllergyReactionCode');
    }

    set AllergyReaction(value) {
        this.setComponentValue('AllergyReactionCode', value);
    }

    get IdentificationDate() {
        return this.getComponent('IdentificationDate');
    }

    set IdentificationDate(value) {
        this.setComponentValue('IdentificationDate', value);
    }
}
