import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { DR } from '@healthcare-interoperability/hl7v2-datatypes';

export class ORG extends Segment {
    static components = {
        SetIdOrg: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDORG: { aliasOf: 'SetIdOrg' },
        OrganizationUnitCode: {
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
        OrganizationUnitTypeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrganizationUnitTypeCodeORG: { aliasOf: 'OrganizationUnitTypeCode' },
        PrimaryOrgUnitIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PractitionerOrgUnitIdentifier: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        HealthCareProviderTypeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        HealthCareProviderClassificationCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        HealthCareProviderAreaOfSpecializationCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EffectiveDateRange: {
            defaultDataType: DR,
            dataTypes: [{ dataType: DR, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EmploymentStatusCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BoardApprovalIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryCarePhysicianIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CostCenterCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdOrg',
        'OrganizationUnitCode',
        'OrganizationUnitTypeCode',
        'PrimaryOrgUnitIndicator',
        'PractitionerOrgUnitIdentifier',
        'HealthCareProviderTypeCode',
        'HealthCareProviderClassificationCode',
        'HealthCareProviderAreaOfSpecializationCode',
        'EffectiveDateRange',
        'EmploymentStatusCode',
        'BoardApprovalIndicator',
        'PrimaryCarePhysicianIndicator',
        'CostCenterCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ORG');
        this.setValues(values);
    }

    get SetIdOrg() {
        return this.getComponent('SetIdOrg');
    }

    set SetIdOrg(value) {
        this.setComponentValue('SetIdOrg', value);
    }

    get SetIDORG() {
        return this.getComponent('SetIdOrg');
    }

    set SetIDORG(value) {
        this.setComponentValue('SetIdOrg', value);
    }

    get OrganizationUnitCode() {
        return this.getComponent('OrganizationUnitCode');
    }

    set OrganizationUnitCode(value) {
        this.setComponentValue('OrganizationUnitCode', value);
    }

    get OrganizationUnitTypeCode() {
        return this.getComponent('OrganizationUnitTypeCode');
    }

    set OrganizationUnitTypeCode(value) {
        this.setComponentValue('OrganizationUnitTypeCode', value);
    }

    get OrganizationUnitTypeCodeORG() {
        return this.getComponent('OrganizationUnitTypeCode');
    }

    set OrganizationUnitTypeCodeORG(value) {
        this.setComponentValue('OrganizationUnitTypeCode', value);
    }

    get PrimaryOrgUnitIndicator() {
        return this.getComponent('PrimaryOrgUnitIndicator');
    }

    set PrimaryOrgUnitIndicator(value) {
        this.setComponentValue('PrimaryOrgUnitIndicator', value);
    }

    get PractitionerOrgUnitIdentifier() {
        return this.getComponent('PractitionerOrgUnitIdentifier');
    }

    set PractitionerOrgUnitIdentifier(value) {
        this.setComponentValue('PractitionerOrgUnitIdentifier', value);
    }

    get HealthCareProviderTypeCode() {
        return this.getComponent('HealthCareProviderTypeCode');
    }

    set HealthCareProviderTypeCode(value) {
        this.setComponentValue('HealthCareProviderTypeCode', value);
    }

    get HealthCareProviderClassificationCode() {
        return this.getComponent('HealthCareProviderClassificationCode');
    }

    set HealthCareProviderClassificationCode(value) {
        this.setComponentValue('HealthCareProviderClassificationCode', value);
    }

    get HealthCareProviderAreaOfSpecializationCode() {
        return this.getComponent('HealthCareProviderAreaOfSpecializationCode');
    }

    set HealthCareProviderAreaOfSpecializationCode(value) {
        this.setComponentValue('HealthCareProviderAreaOfSpecializationCode', value);
    }

    get EffectiveDateRange() {
        return this.getComponent('EffectiveDateRange');
    }

    set EffectiveDateRange(value) {
        this.setComponentValue('EffectiveDateRange', value);
    }

    get EmploymentStatusCode() {
        return this.getComponent('EmploymentStatusCode');
    }

    set EmploymentStatusCode(value) {
        this.setComponentValue('EmploymentStatusCode', value);
    }

    get BoardApprovalIndicator() {
        return this.getComponent('BoardApprovalIndicator');
    }

    set BoardApprovalIndicator(value) {
        this.setComponentValue('BoardApprovalIndicator', value);
    }

    get PrimaryCarePhysicianIndicator() {
        return this.getComponent('PrimaryCarePhysicianIndicator');
    }

    set PrimaryCarePhysicianIndicator(value) {
        this.setComponentValue('PrimaryCarePhysicianIndicator', value);
    }

    get CostCenterCode() {
        return this.getComponent('CostCenterCode');
    }

    set CostCenterCode(value) {
        this.setComponentValue('CostCenterCode', value);
    }
}
