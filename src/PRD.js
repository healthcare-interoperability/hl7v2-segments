import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { PLN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_PI } from '@healthcare-interoperability/hl7v2-datatypes';
import { PI } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';

export class PRD extends Segment {
    static components = {
        ProviderRole: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        Role: { aliasOf: 'ProviderRole' },
        ProviderName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProviderAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ProviderLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProviderCommunicationInformation: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PreferredMethodOfContact: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProviderIdentifiers: {
            defaultDataType: PLN,
            dataTypes: [
                { dataType: PLN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_PI, versions: ['2.3'] },
                { dataType: PI, versions: ['2.3.1', '2.4'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EffectiveStartDateOfProviderRole: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EffectiveStartDateOfRole: { aliasOf: 'EffectiveStartDateOfProviderRole' },
        EffectiveEndDateOfProviderRole: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        EffectiveEndDateOfRole: { aliasOf: 'EffectiveEndDateOfProviderRole' },
        ProviderOrganizationNameAndIdentifier: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProviderOrganizationAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProviderOrganizationLocationInformation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 12,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProviderOrganizationCommunicationInformation: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProviderOrganizationMethodOfContact: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ProviderRole',
        'ProviderName',
        'ProviderAddress',
        'ProviderLocation',
        'ProviderCommunicationInformation',
        'PreferredMethodOfContact',
        'ProviderIdentifiers',
        'EffectiveStartDateOfProviderRole',
        'EffectiveEndDateOfProviderRole',
        'ProviderOrganizationNameAndIdentifier',
        'ProviderOrganizationAddress',
        'ProviderOrganizationLocationInformation',
        'ProviderOrganizationCommunicationInformation',
        'ProviderOrganizationMethodOfContact',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PRD');
        this.setValues(values);
    }

    get ProviderRole() {
        return this.getComponent('ProviderRole');
    }

    set ProviderRole(value) {
        this.setComponentValue('ProviderRole', value);
    }

    get Role() {
        return this.getComponent('ProviderRole');
    }

    set Role(value) {
        this.setComponentValue('ProviderRole', value);
    }

    get ProviderName() {
        return this.getComponent('ProviderName');
    }

    set ProviderName(value) {
        this.setComponentValue('ProviderName', value);
    }

    get ProviderAddress() {
        return this.getComponent('ProviderAddress');
    }

    set ProviderAddress(value) {
        this.setComponentValue('ProviderAddress', value);
    }

    get ProviderLocation() {
        return this.getComponent('ProviderLocation');
    }

    set ProviderLocation(value) {
        this.setComponentValue('ProviderLocation', value);
    }

    get ProviderCommunicationInformation() {
        return this.getComponent('ProviderCommunicationInformation');
    }

    set ProviderCommunicationInformation(value) {
        this.setComponentValue('ProviderCommunicationInformation', value);
    }

    get PreferredMethodOfContact() {
        return this.getComponent('PreferredMethodOfContact');
    }

    set PreferredMethodOfContact(value) {
        this.setComponentValue('PreferredMethodOfContact', value);
    }

    get ProviderIdentifiers() {
        return this.getComponent('ProviderIdentifiers');
    }

    set ProviderIdentifiers(value) {
        this.setComponentValue('ProviderIdentifiers', value);
    }

    get EffectiveStartDateOfProviderRole() {
        return this.getComponent('EffectiveStartDateOfProviderRole');
    }

    set EffectiveStartDateOfProviderRole(value) {
        this.setComponentValue('EffectiveStartDateOfProviderRole', value);
    }

    get EffectiveStartDateOfRole() {
        return this.getComponent('EffectiveStartDateOfProviderRole');
    }

    set EffectiveStartDateOfRole(value) {
        this.setComponentValue('EffectiveStartDateOfProviderRole', value);
    }

    get EffectiveEndDateOfProviderRole() {
        return this.getComponent('EffectiveEndDateOfProviderRole');
    }

    set EffectiveEndDateOfProviderRole(value) {
        this.setComponentValue('EffectiveEndDateOfProviderRole', value);
    }

    get EffectiveEndDateOfRole() {
        return this.getComponent('EffectiveEndDateOfProviderRole');
    }

    set EffectiveEndDateOfRole(value) {
        this.setComponentValue('EffectiveEndDateOfProviderRole', value);
    }

    get ProviderOrganizationNameAndIdentifier() {
        return this.getComponent('ProviderOrganizationNameAndIdentifier');
    }

    set ProviderOrganizationNameAndIdentifier(value) {
        this.setComponentValue('ProviderOrganizationNameAndIdentifier', value);
    }

    get ProviderOrganizationAddress() {
        return this.getComponent('ProviderOrganizationAddress');
    }

    set ProviderOrganizationAddress(value) {
        this.setComponentValue('ProviderOrganizationAddress', value);
    }

    get ProviderOrganizationLocationInformation() {
        return this.getComponent('ProviderOrganizationLocationInformation');
    }

    set ProviderOrganizationLocationInformation(value) {
        this.setComponentValue('ProviderOrganizationLocationInformation', value);
    }

    get ProviderOrganizationCommunicationInformation() {
        return this.getComponent('ProviderOrganizationCommunicationInformation');
    }

    set ProviderOrganizationCommunicationInformation(value) {
        this.setComponentValue('ProviderOrganizationCommunicationInformation', value);
    }

    get ProviderOrganizationMethodOfContact() {
        return this.getComponent('ProviderOrganizationMethodOfContact');
    }

    set ProviderOrganizationMethodOfContact(value) {
        this.setComponentValue('ProviderOrganizationMethodOfContact', value);
    }
}
