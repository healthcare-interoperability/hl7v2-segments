import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class LAN extends Segment {
    static components = {
        SetIdLan: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDLAN: { aliasOf: 'SetIdLan' },
        LanguageCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LanguageAbilityCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        LanguageProficiencyCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdLan', 'LanguageCode', 'LanguageAbilityCode', 'LanguageProficiencyCode'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('LAN');
        this.setValues(values);
    }

    get SetIdLan() {
        return this.getComponent('SetIdLan');
    }

    set SetIdLan(value) {
        this.setComponentValue('SetIdLan', value);
    }

    get SetIDLAN() {
        return this.getComponent('SetIdLan');
    }

    set SetIDLAN(value) {
        this.setComponentValue('SetIdLan', value);
    }

    get LanguageCode() {
        return this.getComponent('LanguageCode');
    }

    set LanguageCode(value) {
        this.setComponentValue('LanguageCode', value);
    }

    get LanguageAbilityCode() {
        return this.getComponent('LanguageAbilityCode');
    }

    set LanguageAbilityCode(value) {
        this.setComponentValue('LanguageAbilityCode', value);
    }

    get LanguageProficiencyCode() {
        return this.getComponent('LanguageProficiencyCode');
    }

    set LanguageProficiencyCode(value) {
        this.setComponentValue('LanguageProficiencyCode', value);
    }
}
