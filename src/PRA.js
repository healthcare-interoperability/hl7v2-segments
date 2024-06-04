import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { SPD } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_SPD } from '@healthcare-interoperability/hl7v2-datatypes';
import { PLN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_PLN } from '@healthcare-interoperability/hl7v2-datatypes';
import { PIP } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_PIP } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';

export class PRA extends Segment {
    static components = {
        PrimaryKeyValuePra: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PRAPrimaryKeyValue: { aliasOf: 'PrimaryKeyValuePra' },
        PrimaryKeyValuePRA: { aliasOf: 'PrimaryKeyValuePra' },
        PractitionerGroup: {
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
        PractionerGroup: { aliasOf: 'PractitionerGroup' },
        PractitionerCategory: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PractionerCategory: { aliasOf: 'PractitionerCategory' },
        ProviderBilling: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Specialty: {
            defaultDataType: SPD,
            dataTypes: [
                { dataType: SPD, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_SPD, versions: ['2.3'] },
            ],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PractitionerIdNumbers: {
            defaultDataType: PLN,
            dataTypes: [
                { dataType: PLN, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_PLN, versions: ['2.3'] },
            ],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PractitionerIDNumbers: { aliasOf: 'PractitionerIdNumbers' },
        Privileges: {
            defaultDataType: PIP,
            dataTypes: [
                { dataType: PIP, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_PIP, versions: ['2.3'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DateEnteredPractice: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Institution: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateLeftPractice: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GovernmentReimbursementBillingEligibility: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SetIDPRA: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIdPra: { aliasOf: 'SetIDPRA' },
    };

    static componentsByIndex = [
        '',
        'PrimaryKeyValuePra',
        'PractitionerGroup',
        'PractitionerCategory',
        'ProviderBilling',
        'Specialty',
        'PractitionerIdNumbers',
        'Privileges',
        'DateEnteredPractice',
        'Institution',
        'DateLeftPractice',
        'GovernmentReimbursementBillingEligibility',
        'SetIDPRA',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PRA');
        this.setValues(values);
    }

    get PrimaryKeyValuePra() {
        return this.getComponent('PrimaryKeyValuePra');
    }

    set PrimaryKeyValuePra(value) {
        this.setComponentValue('PrimaryKeyValuePra', value);
    }

    get PRAPrimaryKeyValue() {
        return this.getComponent('PrimaryKeyValuePra');
    }

    set PRAPrimaryKeyValue(value) {
        this.setComponentValue('PrimaryKeyValuePra', value);
    }

    get PrimaryKeyValuePRA() {
        return this.getComponent('PrimaryKeyValuePra');
    }

    set PrimaryKeyValuePRA(value) {
        this.setComponentValue('PrimaryKeyValuePra', value);
    }

    get PractitionerGroup() {
        return this.getComponent('PractitionerGroup');
    }

    set PractitionerGroup(value) {
        this.setComponentValue('PractitionerGroup', value);
    }

    get PractionerGroup() {
        return this.getComponent('PractitionerGroup');
    }

    set PractionerGroup(value) {
        this.setComponentValue('PractitionerGroup', value);
    }

    get PractitionerCategory() {
        return this.getComponent('PractitionerCategory');
    }

    set PractitionerCategory(value) {
        this.setComponentValue('PractitionerCategory', value);
    }

    get PractionerCategory() {
        return this.getComponent('PractitionerCategory');
    }

    set PractionerCategory(value) {
        this.setComponentValue('PractitionerCategory', value);
    }

    get ProviderBilling() {
        return this.getComponent('ProviderBilling');
    }

    set ProviderBilling(value) {
        this.setComponentValue('ProviderBilling', value);
    }

    get Specialty() {
        return this.getComponent('Specialty');
    }

    set Specialty(value) {
        this.setComponentValue('Specialty', value);
    }

    get PractitionerIdNumbers() {
        return this.getComponent('PractitionerIdNumbers');
    }

    set PractitionerIdNumbers(value) {
        this.setComponentValue('PractitionerIdNumbers', value);
    }

    get PractitionerIDNumbers() {
        return this.getComponent('PractitionerIdNumbers');
    }

    set PractitionerIDNumbers(value) {
        this.setComponentValue('PractitionerIdNumbers', value);
    }

    get Privileges() {
        return this.getComponent('Privileges');
    }

    set Privileges(value) {
        this.setComponentValue('Privileges', value);
    }

    get DateEnteredPractice() {
        return this.getComponent('DateEnteredPractice');
    }

    set DateEnteredPractice(value) {
        this.setComponentValue('DateEnteredPractice', value);
    }

    get Institution() {
        return this.getComponent('Institution');
    }

    set Institution(value) {
        this.setComponentValue('Institution', value);
    }

    get DateLeftPractice() {
        return this.getComponent('DateLeftPractice');
    }

    set DateLeftPractice(value) {
        this.setComponentValue('DateLeftPractice', value);
    }

    get GovernmentReimbursementBillingEligibility() {
        return this.getComponent('GovernmentReimbursementBillingEligibility');
    }

    set GovernmentReimbursementBillingEligibility(value) {
        this.setComponentValue('GovernmentReimbursementBillingEligibility', value);
    }

    get SetIDPRA() {
        return this.getComponent('SetIDPRA');
    }

    set SetIDPRA(value) {
        this.setComponentValue('SetIDPRA', value);
    }

    get SetIdPra() {
        return this.getComponent('SetIDPRA');
    }

    set SetIdPra(value) {
        this.setComponentValue('SetIDPRA', value);
    }
}
