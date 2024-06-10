import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { JCC } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class NK1 extends Segment {
    static components = {
        SetIdNk1: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDNextOfKin: { aliasOf: 'SetIdNk1' },
        SetIDNk1: { aliasOf: 'SetIdNk1' },
        Name: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        NKName: { aliasOf: 'Name' },
        Relationship: {
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
        Address: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        BusinessPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactRole: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StartDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EndDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NextOfKinAssociatedPartiesJobTitle: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NextOfKinAssociatedPartiesJobCodeClass: {
            defaultDataType: JCC,
            dataTypes: [{ dataType: JCC, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NextOfKinJobAssociatedPartiesCodeClass: { aliasOf: 'NextOfKinAssociatedPartiesJobCodeClass' },
        NextOfKinAssociatedPartiesEmployeeNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrganizationNameNk1: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OrganizationName: { aliasOf: 'OrganizationNameNk1' },
        MaritalStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministrativeSex: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Sex: { aliasOf: 'AdministrativeSex' },
        DateTimeOfBirth: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateOfBirth: { aliasOf: 'DateTimeOfBirth' },
        LivingDependency: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 17,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AmbulatoryStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 18,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        Citizenship: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 19,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PrimaryLanguage: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LivingArrangement: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PublicityCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PublicityIndicator: { aliasOf: 'PublicityCode' },
        ProtectionIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StudentIndicator: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Religion: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MothersMaidenName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        MotherSMaidenName: { aliasOf: 'MothersMaidenName' },
        Nationality: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NationalityCode: { aliasOf: 'Nationality' },
        EthnicGroup: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 28,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ContactReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 29,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactPersonsName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 30,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactPersonSName: { aliasOf: 'ContactPersonsName' },
        ContactPersonsTelephoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 31,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactPersonSTelephoneNumber: { aliasOf: 'ContactPersonsTelephoneNumber' },
        ContactPersonsAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 32,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactPersonSAddress: { aliasOf: 'ContactPersonsAddress' },
        NextOfKinAssociatedPartysIdentifiers: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 33,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        NextOfKinAssociatedPartyIdentifiers: { aliasOf: 'NextOfKinAssociatedPartysIdentifiers' },
        NextOfKinAssociatedPartySIdentifiers: { aliasOf: 'NextOfKinAssociatedPartysIdentifiers' },
        JobStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 34,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Race: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 35,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        Handicap: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 36,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContactPersonSocialSecurityNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NextOfKinBirthPlace: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 38,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VIPIndicator: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 39,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VipIndicator: { aliasOf: 'VIPIndicator' },
        NextOfKinTelecommunicationInformation: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 40,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContactPersonsTelecommunicationInformation: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 41,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdNk1',
        'Name',
        'Relationship',
        'Address',
        'PhoneNumber',
        'BusinessPhoneNumber',
        'ContactRole',
        'StartDate',
        'EndDate',
        'NextOfKinAssociatedPartiesJobTitle',
        'NextOfKinAssociatedPartiesJobCodeClass',
        'NextOfKinAssociatedPartiesEmployeeNumber',
        'OrganizationNameNk1',
        'MaritalStatus',
        'AdministrativeSex',
        'DateTimeOfBirth',
        'LivingDependency',
        'AmbulatoryStatus',
        'Citizenship',
        'PrimaryLanguage',
        'LivingArrangement',
        'PublicityCode',
        'ProtectionIndicator',
        'StudentIndicator',
        'Religion',
        'MothersMaidenName',
        'Nationality',
        'EthnicGroup',
        'ContactReason',
        'ContactPersonsName',
        'ContactPersonsTelephoneNumber',
        'ContactPersonsAddress',
        'NextOfKinAssociatedPartysIdentifiers',
        'JobStatus',
        'Race',
        'Handicap',
        'ContactPersonSocialSecurityNumber',
        'NextOfKinBirthPlace',
        'VIPIndicator',
        'NextOfKinTelecommunicationInformation',
        'ContactPersonsTelecommunicationInformation',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('NK1');
        this.setValues(values);
    }

    get SetIdNk1() {
        return this.getComponent('SetIdNk1');
    }

    set SetIdNk1(value) {
        this.setComponentValue('SetIdNk1', value);
    }

    get SetIDNextOfKin() {
        return this.getComponent('SetIdNk1');
    }

    set SetIDNextOfKin(value) {
        this.setComponentValue('SetIdNk1', value);
    }

    get SetIDNk1() {
        return this.getComponent('SetIdNk1');
    }

    set SetIDNk1(value) {
        this.setComponentValue('SetIdNk1', value);
    }

    get Name() {
        return this.getComponent('Name');
    }

    set Name(value) {
        this.setComponentValue('Name', value);
    }

    get NKName() {
        return this.getComponent('Name');
    }

    set NKName(value) {
        this.setComponentValue('Name', value);
    }

    get Relationship() {
        return this.getComponent('Relationship');
    }

    set Relationship(value) {
        this.setComponentValue('Relationship', value);
    }

    get Address() {
        return this.getComponent('Address');
    }

    set Address(value) {
        this.setComponentValue('Address', value);
    }

    get PhoneNumber() {
        return this.getComponent('PhoneNumber');
    }

    set PhoneNumber(value) {
        this.setComponentValue('PhoneNumber', value);
    }

    get BusinessPhoneNumber() {
        return this.getComponent('BusinessPhoneNumber');
    }

    set BusinessPhoneNumber(value) {
        this.setComponentValue('BusinessPhoneNumber', value);
    }

    get ContactRole() {
        return this.getComponent('ContactRole');
    }

    set ContactRole(value) {
        this.setComponentValue('ContactRole', value);
    }

    get StartDate() {
        return this.getComponent('StartDate');
    }

    set StartDate(value) {
        this.setComponentValue('StartDate', value);
    }

    get EndDate() {
        return this.getComponent('EndDate');
    }

    set EndDate(value) {
        this.setComponentValue('EndDate', value);
    }

    get NextOfKinAssociatedPartiesJobTitle() {
        return this.getComponent('NextOfKinAssociatedPartiesJobTitle');
    }

    set NextOfKinAssociatedPartiesJobTitle(value) {
        this.setComponentValue('NextOfKinAssociatedPartiesJobTitle', value);
    }

    get NextOfKinAssociatedPartiesJobCodeClass() {
        return this.getComponent('NextOfKinAssociatedPartiesJobCodeClass');
    }

    set NextOfKinAssociatedPartiesJobCodeClass(value) {
        this.setComponentValue('NextOfKinAssociatedPartiesJobCodeClass', value);
    }

    get NextOfKinJobAssociatedPartiesCodeClass() {
        return this.getComponent('NextOfKinAssociatedPartiesJobCodeClass');
    }

    set NextOfKinJobAssociatedPartiesCodeClass(value) {
        this.setComponentValue('NextOfKinAssociatedPartiesJobCodeClass', value);
    }

    get NextOfKinAssociatedPartiesEmployeeNumber() {
        return this.getComponent('NextOfKinAssociatedPartiesEmployeeNumber');
    }

    set NextOfKinAssociatedPartiesEmployeeNumber(value) {
        this.setComponentValue('NextOfKinAssociatedPartiesEmployeeNumber', value);
    }

    get OrganizationNameNk1() {
        return this.getComponent('OrganizationNameNk1');
    }

    set OrganizationNameNk1(value) {
        this.setComponentValue('OrganizationNameNk1', value);
    }

    get OrganizationName() {
        return this.getComponent('OrganizationNameNk1');
    }

    set OrganizationName(value) {
        this.setComponentValue('OrganizationNameNk1', value);
    }

    get MaritalStatus() {
        return this.getComponent('MaritalStatus');
    }

    set MaritalStatus(value) {
        this.setComponentValue('MaritalStatus', value);
    }

    get AdministrativeSex() {
        return this.getComponent('AdministrativeSex');
    }

    set AdministrativeSex(value) {
        this.setComponentValue('AdministrativeSex', value);
    }

    get Sex() {
        return this.getComponent('AdministrativeSex');
    }

    set Sex(value) {
        this.setComponentValue('AdministrativeSex', value);
    }

    get DateTimeOfBirth() {
        return this.getComponent('DateTimeOfBirth');
    }

    set DateTimeOfBirth(value) {
        this.setComponentValue('DateTimeOfBirth', value);
    }

    get DateOfBirth() {
        return this.getComponent('DateTimeOfBirth');
    }

    set DateOfBirth(value) {
        this.setComponentValue('DateTimeOfBirth', value);
    }

    get LivingDependency() {
        return this.getComponent('LivingDependency');
    }

    set LivingDependency(value) {
        this.setComponentValue('LivingDependency', value);
    }

    get AmbulatoryStatus() {
        return this.getComponent('AmbulatoryStatus');
    }

    set AmbulatoryStatus(value) {
        this.setComponentValue('AmbulatoryStatus', value);
    }

    get Citizenship() {
        return this.getComponent('Citizenship');
    }

    set Citizenship(value) {
        this.setComponentValue('Citizenship', value);
    }

    get PrimaryLanguage() {
        return this.getComponent('PrimaryLanguage');
    }

    set PrimaryLanguage(value) {
        this.setComponentValue('PrimaryLanguage', value);
    }

    get LivingArrangement() {
        return this.getComponent('LivingArrangement');
    }

    set LivingArrangement(value) {
        this.setComponentValue('LivingArrangement', value);
    }

    get PublicityCode() {
        return this.getComponent('PublicityCode');
    }

    set PublicityCode(value) {
        this.setComponentValue('PublicityCode', value);
    }

    get PublicityIndicator() {
        return this.getComponent('PublicityCode');
    }

    set PublicityIndicator(value) {
        this.setComponentValue('PublicityCode', value);
    }

    get ProtectionIndicator() {
        return this.getComponent('ProtectionIndicator');
    }

    set ProtectionIndicator(value) {
        this.setComponentValue('ProtectionIndicator', value);
    }

    get StudentIndicator() {
        return this.getComponent('StudentIndicator');
    }

    set StudentIndicator(value) {
        this.setComponentValue('StudentIndicator', value);
    }

    get Religion() {
        return this.getComponent('Religion');
    }

    set Religion(value) {
        this.setComponentValue('Religion', value);
    }

    get MothersMaidenName() {
        return this.getComponent('MothersMaidenName');
    }

    set MothersMaidenName(value) {
        this.setComponentValue('MothersMaidenName', value);
    }

    get MotherSMaidenName() {
        return this.getComponent('MothersMaidenName');
    }

    set MotherSMaidenName(value) {
        this.setComponentValue('MothersMaidenName', value);
    }

    get Nationality() {
        return this.getComponent('Nationality');
    }

    set Nationality(value) {
        this.setComponentValue('Nationality', value);
    }

    get NationalityCode() {
        return this.getComponent('Nationality');
    }

    set NationalityCode(value) {
        this.setComponentValue('Nationality', value);
    }

    get EthnicGroup() {
        return this.getComponent('EthnicGroup');
    }

    set EthnicGroup(value) {
        this.setComponentValue('EthnicGroup', value);
    }

    get ContactReason() {
        return this.getComponent('ContactReason');
    }

    set ContactReason(value) {
        this.setComponentValue('ContactReason', value);
    }

    get ContactPersonsName() {
        return this.getComponent('ContactPersonsName');
    }

    set ContactPersonsName(value) {
        this.setComponentValue('ContactPersonsName', value);
    }

    get ContactPersonSName() {
        return this.getComponent('ContactPersonsName');
    }

    set ContactPersonSName(value) {
        this.setComponentValue('ContactPersonsName', value);
    }

    get ContactPersonsTelephoneNumber() {
        return this.getComponent('ContactPersonsTelephoneNumber');
    }

    set ContactPersonsTelephoneNumber(value) {
        this.setComponentValue('ContactPersonsTelephoneNumber', value);
    }

    get ContactPersonSTelephoneNumber() {
        return this.getComponent('ContactPersonsTelephoneNumber');
    }

    set ContactPersonSTelephoneNumber(value) {
        this.setComponentValue('ContactPersonsTelephoneNumber', value);
    }

    get ContactPersonsAddress() {
        return this.getComponent('ContactPersonsAddress');
    }

    set ContactPersonsAddress(value) {
        this.setComponentValue('ContactPersonsAddress', value);
    }

    get ContactPersonSAddress() {
        return this.getComponent('ContactPersonsAddress');
    }

    set ContactPersonSAddress(value) {
        this.setComponentValue('ContactPersonsAddress', value);
    }

    get NextOfKinAssociatedPartysIdentifiers() {
        return this.getComponent('NextOfKinAssociatedPartysIdentifiers');
    }

    set NextOfKinAssociatedPartysIdentifiers(value) {
        this.setComponentValue('NextOfKinAssociatedPartysIdentifiers', value);
    }

    get NextOfKinAssociatedPartyIdentifiers() {
        return this.getComponent('NextOfKinAssociatedPartysIdentifiers');
    }

    set NextOfKinAssociatedPartyIdentifiers(value) {
        this.setComponentValue('NextOfKinAssociatedPartysIdentifiers', value);
    }

    get NextOfKinAssociatedPartySIdentifiers() {
        return this.getComponent('NextOfKinAssociatedPartysIdentifiers');
    }

    set NextOfKinAssociatedPartySIdentifiers(value) {
        this.setComponentValue('NextOfKinAssociatedPartysIdentifiers', value);
    }

    get JobStatus() {
        return this.getComponent('JobStatus');
    }

    set JobStatus(value) {
        this.setComponentValue('JobStatus', value);
    }

    get Race() {
        return this.getComponent('Race');
    }

    set Race(value) {
        this.setComponentValue('Race', value);
    }

    get Handicap() {
        return this.getComponent('Handicap');
    }

    set Handicap(value) {
        this.setComponentValue('Handicap', value);
    }

    get ContactPersonSocialSecurityNumber() {
        return this.getComponent('ContactPersonSocialSecurityNumber');
    }

    set ContactPersonSocialSecurityNumber(value) {
        this.setComponentValue('ContactPersonSocialSecurityNumber', value);
    }

    get NextOfKinBirthPlace() {
        return this.getComponent('NextOfKinBirthPlace');
    }

    set NextOfKinBirthPlace(value) {
        this.setComponentValue('NextOfKinBirthPlace', value);
    }

    get VIPIndicator() {
        return this.getComponent('VIPIndicator');
    }

    set VIPIndicator(value) {
        this.setComponentValue('VIPIndicator', value);
    }

    get VipIndicator() {
        return this.getComponent('VIPIndicator');
    }

    set VipIndicator(value) {
        this.setComponentValue('VIPIndicator', value);
    }

    get NextOfKinTelecommunicationInformation() {
        return this.getComponent('NextOfKinTelecommunicationInformation');
    }

    set NextOfKinTelecommunicationInformation(value) {
        this.setComponentValue('NextOfKinTelecommunicationInformation', value);
    }

    get ContactPersonsTelecommunicationInformation() {
        return this.getComponent('ContactPersonsTelecommunicationInformation');
    }

    set ContactPersonsTelecommunicationInformation(value) {
        this.setComponentValue('ContactPersonsTelecommunicationInformation', value);
    }
}
