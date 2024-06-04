import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class FAC extends Segment {
    static components = {
        FacilityIdFac: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FacilityId: { aliasOf: 'FacilityIdFac' },
        FacilityType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FacilityAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        FacilityTelecommunication: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContactPerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactTitle: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactTelecommunication: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SignatureAuthority: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        SignatureAuthorityTitle: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SignatureAuthorityAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        SignatureAuthorityTelecommunication: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'FacilityIdFac',
        'FacilityType',
        'FacilityAddress',
        'FacilityTelecommunication',
        'ContactPerson',
        'ContactTitle',
        'ContactAddress',
        'ContactTelecommunication',
        'SignatureAuthority',
        'SignatureAuthorityTitle',
        'SignatureAuthorityAddress',
        'SignatureAuthorityTelecommunication',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('FAC');
        this.setValues(values);
    }

    get FacilityIdFac() {
        return this.getComponent('FacilityIdFac');
    }

    set FacilityIdFac(value) {
        this.setComponentValue('FacilityIdFac', value);
    }

    get FacilityId() {
        return this.getComponent('FacilityIdFac');
    }

    set FacilityId(value) {
        this.setComponentValue('FacilityIdFac', value);
    }

    get FacilityType() {
        return this.getComponent('FacilityType');
    }

    set FacilityType(value) {
        this.setComponentValue('FacilityType', value);
    }

    get FacilityAddress() {
        return this.getComponent('FacilityAddress');
    }

    set FacilityAddress(value) {
        this.setComponentValue('FacilityAddress', value);
    }

    get FacilityTelecommunication() {
        return this.getComponent('FacilityTelecommunication');
    }

    set FacilityTelecommunication(value) {
        this.setComponentValue('FacilityTelecommunication', value);
    }

    get ContactPerson() {
        return this.getComponent('ContactPerson');
    }

    set ContactPerson(value) {
        this.setComponentValue('ContactPerson', value);
    }

    get ContactTitle() {
        return this.getComponent('ContactTitle');
    }

    set ContactTitle(value) {
        this.setComponentValue('ContactTitle', value);
    }

    get ContactAddress() {
        return this.getComponent('ContactAddress');
    }

    set ContactAddress(value) {
        this.setComponentValue('ContactAddress', value);
    }

    get ContactTelecommunication() {
        return this.getComponent('ContactTelecommunication');
    }

    set ContactTelecommunication(value) {
        this.setComponentValue('ContactTelecommunication', value);
    }

    get SignatureAuthority() {
        return this.getComponent('SignatureAuthority');
    }

    set SignatureAuthority(value) {
        this.setComponentValue('SignatureAuthority', value);
    }

    get SignatureAuthorityTitle() {
        return this.getComponent('SignatureAuthorityTitle');
    }

    set SignatureAuthorityTitle(value) {
        this.setComponentValue('SignatureAuthorityTitle', value);
    }

    get SignatureAuthorityAddress() {
        return this.getComponent('SignatureAuthorityAddress');
    }

    set SignatureAuthorityAddress(value) {
        this.setComponentValue('SignatureAuthorityAddress', value);
    }

    get SignatureAuthorityTelecommunication() {
        return this.getComponent('SignatureAuthorityTelecommunication');
    }

    set SignatureAuthorityTelecommunication(value) {
        this.setComponentValue('SignatureAuthorityTelecommunication', value);
    }
}
