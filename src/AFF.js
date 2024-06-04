import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { DR } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class AFF extends Segment {
    static components = {
        SetIdAff: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDAFF: { aliasOf: 'SetIdAff' },
        ProfessionalOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProfessionalOrganizationAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProfessionalOrganizationAffiliationDateRange: {
            defaultDataType: DR,
            dataTypes: [{ dataType: DR, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProfessionalAffiliationAdditionalInformation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdAff',
        'ProfessionalOrganization',
        'ProfessionalOrganizationAddress',
        'ProfessionalOrganizationAffiliationDateRange',
        'ProfessionalAffiliationAdditionalInformation',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('AFF');
        this.setValues(values);
    }

    get SetIdAff() {
        return this.getComponent('SetIdAff');
    }

    set SetIdAff(value) {
        this.setComponentValue('SetIdAff', value);
    }

    get SetIDAFF() {
        return this.getComponent('SetIdAff');
    }

    set SetIDAFF(value) {
        this.setComponentValue('SetIdAff', value);
    }

    get ProfessionalOrganization() {
        return this.getComponent('ProfessionalOrganization');
    }

    set ProfessionalOrganization(value) {
        this.setComponentValue('ProfessionalOrganization', value);
    }

    get ProfessionalOrganizationAddress() {
        return this.getComponent('ProfessionalOrganizationAddress');
    }

    set ProfessionalOrganizationAddress(value) {
        this.setComponentValue('ProfessionalOrganizationAddress', value);
    }

    get ProfessionalOrganizationAffiliationDateRange() {
        return this.getComponent('ProfessionalOrganizationAffiliationDateRange');
    }

    set ProfessionalOrganizationAffiliationDateRange(value) {
        this.setComponentValue('ProfessionalOrganizationAffiliationDateRange', value);
    }

    get ProfessionalAffiliationAdditionalInformation() {
        return this.getComponent('ProfessionalAffiliationAdditionalInformation');
    }

    set ProfessionalAffiliationAdditionalInformation(value) {
        this.setComponentValue('ProfessionalAffiliationAdditionalInformation', value);
    }
}
