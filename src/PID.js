import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DLN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { HD } from '@healthcare-interoperability/hl7v2-datatypes';

export class PID extends Segment {
    static components = {
        SetIdPid: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIdPatientId: { aliasOf: 'SetIdPid' },
        PatientId: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CX, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientIdExternalId: { aliasOf: 'PatientId' },
        PatientIdentifierList: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PatientIdInternalId: { aliasOf: 'PatientIdentifierList' },
        AlternatePatientIdPid: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CX, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        AlternatePatientId: { aliasOf: 'AlternatePatientIdPid' },
        PatientName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        MotherSMaidenName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        DateTimeOfBirth: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateOfBirth: { aliasOf: 'DateTimeOfBirth' },
        AdministrativeSex: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Sex: { aliasOf: 'AdministrativeSex' },
        PatientAlias: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: XPN, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 9,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        Race: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PatientAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CountyCode: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PhoneNumberHome: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PhoneNumberBusiness: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
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
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MaritalStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 16,
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
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientAccountNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SsnNumberPatient: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DriverSLicenseNumberPatient: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: DLN, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DriverSLicenseNumber: { aliasOf: 'DriverSLicenseNumberPatient' },
        MotherSIdentifier: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EthnicGroup: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 22,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        BirthPlace: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MultipleBirthIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BirthOrder: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Citizenship: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 26,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        VeteransMilitaryStatus: {
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
        Nationality: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: ST, versions: ['2.8'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1'] },
            ],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NationalityCode: { aliasOf: 'Nationality' },
        PatientDeathDateAndTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientDeathIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IdentityUnknownIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IdentityReliabilityCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 32,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        LastUpdateDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LastUpdateFacility: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 34,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpeciesCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TaxonomicClassificationCode: { aliasOf: 'SpeciesCode' },
        BreedCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 36,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Strain: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductionClassCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 38,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 2,
        },
        TribalCitizenship: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 39,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PatientTelecommunicationInformation: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 40,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdPid',
        'PatientId',
        'PatientIdentifierList',
        'AlternatePatientIdPid',
        'PatientName',
        'MotherSMaidenName',
        'DateTimeOfBirth',
        'AdministrativeSex',
        'PatientAlias',
        'Race',
        'PatientAddress',
        'CountyCode',
        'PhoneNumberHome',
        'PhoneNumberBusiness',
        'PrimaryLanguage',
        'MaritalStatus',
        'Religion',
        'PatientAccountNumber',
        'SsnNumberPatient',
        'DriverSLicenseNumberPatient',
        'MotherSIdentifier',
        'EthnicGroup',
        'BirthPlace',
        'MultipleBirthIndicator',
        'BirthOrder',
        'Citizenship',
        'VeteransMilitaryStatus',
        'Nationality',
        'PatientDeathDateAndTime',
        'PatientDeathIndicator',
        'IdentityUnknownIndicator',
        'IdentityReliabilityCode',
        'LastUpdateDateTime',
        'LastUpdateFacility',
        'SpeciesCode',
        'BreedCode',
        'Strain',
        'ProductionClassCode',
        'TribalCitizenship',
        'PatientTelecommunicationInformation',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PID');
        this.setValues(values);
    }

    get SetIdPid() {
        return this.getComponent('SetIdPid');
    }

    set SetIdPid(value) {
        this.setComponentValue('SetIdPid', value);
    }

    get SetIdPatientId() {
        return this.getComponent('SetIdPid');
    }

    set SetIdPatientId(value) {
        this.setComponentValue('SetIdPid', value);
    }

    get PatientId() {
        return this.getComponent('PatientId');
    }

    set PatientId(value) {
        this.setComponentValue('PatientId', value);
    }

    get PatientIdExternalId() {
        return this.getComponent('PatientId');
    }

    set PatientIdExternalId(value) {
        this.setComponentValue('PatientId', value);
    }

    get PatientIdentifierList() {
        return this.getComponent('PatientIdentifierList');
    }

    set PatientIdentifierList(value) {
        this.setComponentValue('PatientIdentifierList', value);
    }

    get PatientIdInternalId() {
        return this.getComponent('PatientIdentifierList');
    }

    set PatientIdInternalId(value) {
        this.setComponentValue('PatientIdentifierList', value);
    }

    get AlternatePatientIdPid() {
        return this.getComponent('AlternatePatientIdPid');
    }

    set AlternatePatientIdPid(value) {
        this.setComponentValue('AlternatePatientIdPid', value);
    }

    get AlternatePatientId() {
        return this.getComponent('AlternatePatientIdPid');
    }

    set AlternatePatientId(value) {
        this.setComponentValue('AlternatePatientIdPid', value);
    }

    get PatientName() {
        return this.getComponent('PatientName');
    }

    set PatientName(value) {
        this.setComponentValue('PatientName', value);
    }

    get MotherSMaidenName() {
        return this.getComponent('MotherSMaidenName');
    }

    set MotherSMaidenName(value) {
        this.setComponentValue('MotherSMaidenName', value);
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

    get PatientAlias() {
        return this.getComponent('PatientAlias');
    }

    set PatientAlias(value) {
        this.setComponentValue('PatientAlias', value);
    }

    get Race() {
        return this.getComponent('Race');
    }

    set Race(value) {
        this.setComponentValue('Race', value);
    }

    get PatientAddress() {
        return this.getComponent('PatientAddress');
    }

    set PatientAddress(value) {
        this.setComponentValue('PatientAddress', value);
    }

    get CountyCode() {
        return this.getComponent('CountyCode');
    }

    set CountyCode(value) {
        this.setComponentValue('CountyCode', value);
    }

    get PhoneNumberHome() {
        return this.getComponent('PhoneNumberHome');
    }

    set PhoneNumberHome(value) {
        this.setComponentValue('PhoneNumberHome', value);
    }

    get PhoneNumberBusiness() {
        return this.getComponent('PhoneNumberBusiness');
    }

    set PhoneNumberBusiness(value) {
        this.setComponentValue('PhoneNumberBusiness', value);
    }

    get PrimaryLanguage() {
        return this.getComponent('PrimaryLanguage');
    }

    set PrimaryLanguage(value) {
        this.setComponentValue('PrimaryLanguage', value);
    }

    get MaritalStatus() {
        return this.getComponent('MaritalStatus');
    }

    set MaritalStatus(value) {
        this.setComponentValue('MaritalStatus', value);
    }

    get Religion() {
        return this.getComponent('Religion');
    }

    set Religion(value) {
        this.setComponentValue('Religion', value);
    }

    get PatientAccountNumber() {
        return this.getComponent('PatientAccountNumber');
    }

    set PatientAccountNumber(value) {
        this.setComponentValue('PatientAccountNumber', value);
    }

    get SsnNumberPatient() {
        return this.getComponent('SsnNumberPatient');
    }

    set SsnNumberPatient(value) {
        this.setComponentValue('SsnNumberPatient', value);
    }

    get DriverSLicenseNumberPatient() {
        return this.getComponent('DriverSLicenseNumberPatient');
    }

    set DriverSLicenseNumberPatient(value) {
        this.setComponentValue('DriverSLicenseNumberPatient', value);
    }

    get DriverSLicenseNumber() {
        return this.getComponent('DriverSLicenseNumberPatient');
    }

    set DriverSLicenseNumber(value) {
        this.setComponentValue('DriverSLicenseNumberPatient', value);
    }

    get MotherSIdentifier() {
        return this.getComponent('MotherSIdentifier');
    }

    set MotherSIdentifier(value) {
        this.setComponentValue('MotherSIdentifier', value);
    }

    get EthnicGroup() {
        return this.getComponent('EthnicGroup');
    }

    set EthnicGroup(value) {
        this.setComponentValue('EthnicGroup', value);
    }

    get BirthPlace() {
        return this.getComponent('BirthPlace');
    }

    set BirthPlace(value) {
        this.setComponentValue('BirthPlace', value);
    }

    get MultipleBirthIndicator() {
        return this.getComponent('MultipleBirthIndicator');
    }

    set MultipleBirthIndicator(value) {
        this.setComponentValue('MultipleBirthIndicator', value);
    }

    get BirthOrder() {
        return this.getComponent('BirthOrder');
    }

    set BirthOrder(value) {
        this.setComponentValue('BirthOrder', value);
    }

    get Citizenship() {
        return this.getComponent('Citizenship');
    }

    set Citizenship(value) {
        this.setComponentValue('Citizenship', value);
    }

    get VeteransMilitaryStatus() {
        return this.getComponent('VeteransMilitaryStatus');
    }

    set VeteransMilitaryStatus(value) {
        this.setComponentValue('VeteransMilitaryStatus', value);
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

    get PatientDeathDateAndTime() {
        return this.getComponent('PatientDeathDateAndTime');
    }

    set PatientDeathDateAndTime(value) {
        this.setComponentValue('PatientDeathDateAndTime', value);
    }

    get PatientDeathIndicator() {
        return this.getComponent('PatientDeathIndicator');
    }

    set PatientDeathIndicator(value) {
        this.setComponentValue('PatientDeathIndicator', value);
    }

    get IdentityUnknownIndicator() {
        return this.getComponent('IdentityUnknownIndicator');
    }

    set IdentityUnknownIndicator(value) {
        this.setComponentValue('IdentityUnknownIndicator', value);
    }

    get IdentityReliabilityCode() {
        return this.getComponent('IdentityReliabilityCode');
    }

    set IdentityReliabilityCode(value) {
        this.setComponentValue('IdentityReliabilityCode', value);
    }

    get LastUpdateDateTime() {
        return this.getComponent('LastUpdateDateTime');
    }

    set LastUpdateDateTime(value) {
        this.setComponentValue('LastUpdateDateTime', value);
    }

    get LastUpdateFacility() {
        return this.getComponent('LastUpdateFacility');
    }

    set LastUpdateFacility(value) {
        this.setComponentValue('LastUpdateFacility', value);
    }

    get SpeciesCode() {
        return this.getComponent('SpeciesCode');
    }

    set SpeciesCode(value) {
        this.setComponentValue('SpeciesCode', value);
    }

    get TaxonomicClassificationCode() {
        return this.getComponent('SpeciesCode');
    }

    set TaxonomicClassificationCode(value) {
        this.setComponentValue('SpeciesCode', value);
    }

    get BreedCode() {
        return this.getComponent('BreedCode');
    }

    set BreedCode(value) {
        this.setComponentValue('BreedCode', value);
    }

    get Strain() {
        return this.getComponent('Strain');
    }

    set Strain(value) {
        this.setComponentValue('Strain', value);
    }

    get ProductionClassCode() {
        return this.getComponent('ProductionClassCode');
    }

    set ProductionClassCode(value) {
        this.setComponentValue('ProductionClassCode', value);
    }

    get TribalCitizenship() {
        return this.getComponent('TribalCitizenship');
    }

    set TribalCitizenship(value) {
        this.setComponentValue('TribalCitizenship', value);
    }

    get PatientTelecommunicationInformation() {
        return this.getComponent('PatientTelecommunicationInformation');
    }

    set PatientTelecommunicationInformation(value) {
        this.setComponentValue('PatientTelecommunicationInformation', value);
    }
}
