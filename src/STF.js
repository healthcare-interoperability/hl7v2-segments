import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { DIN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_DIN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { JCC } from '@healthcare-interoperability/hl7v2-datatypes';
import { DLN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { DR } from '@healthcare-interoperability/hl7v2-datatypes';
import { ED } from '@healthcare-interoperability/hl7v2-datatypes';

export class STF extends Segment {
    static components = {
        PrimaryKeyValueStf: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StfPrimaryKeyValue: { aliasOf: 'PrimaryKeyValueStf' },
        StaffIdentifierList: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        StaffIdCode: { aliasOf: 'StaffIdentifierList' },
        StaffName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        StaffType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AdministrativeSex: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 5,
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
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateOfBirth: { aliasOf: 'DateTimeOfBirth' },
        ActiveInactiveFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Department: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        HospitalServiceStf: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        Service: { aliasOf: 'HospitalServiceStf' },
        HospitalService: { aliasOf: 'HospitalServiceStf' },
        Phone: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OfficeHomeAddressBirthplace: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OfficeHomeAddress: { aliasOf: 'OfficeHomeAddressBirthplace' },
        InstitutionActivationDate: {
            defaultDataType: DIN,
            dataTypes: [
                { dataType: DIN, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_DIN, versions: ['2.3'] },
            ],
            position: 12,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ActivationDate: { aliasOf: 'InstitutionActivationDate' },
        InstitutionInactivationDate: {
            defaultDataType: DIN,
            dataTypes: [
                { dataType: DIN, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_DIN, versions: ['2.3'] },
            ],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InactivationDate: { aliasOf: 'InstitutionInactivationDate' },
        BackupPersonId: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EMailAddress: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PreferredMethodOfContact: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 16,
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
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        JobTitle: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        JobCodeClass: {
            defaultDataType: JCC,
            dataTypes: [{ dataType: JCC, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EmploymentStatusCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EmploymentStatus: { aliasOf: 'EmploymentStatusCode' },
        AdditionalInsuredOnAuto: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DriverSLicenseNumberStaff: {
            defaultDataType: DLN,
            dataTypes: [{ dataType: DLN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DriverSLicenseNumber: { aliasOf: 'DriverSLicenseNumberStaff' },
        CopyAutoIns: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AutoInsExpires: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateLastDmvReview: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateNextDmvReview: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Race: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EthnicGroup: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReActivationApprovalIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Citizenship: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 30,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DeathDateAndTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateTimeOfDeath: { aliasOf: 'DeathDateAndTime' },
        DeathIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InstitutionRelationshipTypeCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InstitutionRelationshipPeriod: {
            defaultDataType: DR,
            dataTypes: [{ dataType: DR, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 34,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedReturnDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CostCenterCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 36,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GenericClassificationIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InactiveReasonCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 38,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GenericResourceTypeOrCategory: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 39,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        Religion: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 40,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Signature: {
            defaultDataType: ED,
            dataTypes: [{ dataType: ED, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 41,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'PrimaryKeyValueStf',
        'StaffIdentifierList',
        'StaffName',
        'StaffType',
        'AdministrativeSex',
        'DateTimeOfBirth',
        'ActiveInactiveFlag',
        'Department',
        'HospitalServiceStf',
        'Phone',
        'OfficeHomeAddressBirthplace',
        'InstitutionActivationDate',
        'InstitutionInactivationDate',
        'BackupPersonId',
        'EMailAddress',
        'PreferredMethodOfContact',
        'MaritalStatus',
        'JobTitle',
        'JobCodeClass',
        'EmploymentStatusCode',
        'AdditionalInsuredOnAuto',
        'DriverSLicenseNumberStaff',
        'CopyAutoIns',
        'AutoInsExpires',
        'DateLastDmvReview',
        'DateNextDmvReview',
        'Race',
        'EthnicGroup',
        'ReActivationApprovalIndicator',
        'Citizenship',
        'DeathDateAndTime',
        'DeathIndicator',
        'InstitutionRelationshipTypeCode',
        'InstitutionRelationshipPeriod',
        'ExpectedReturnDate',
        'CostCenterCode',
        'GenericClassificationIndicator',
        'InactiveReasonCode',
        'GenericResourceTypeOrCategory',
        'Religion',
        'Signature',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('STF');
        this.setValues(values);
    }

    get PrimaryKeyValueStf() {
        return this.getComponent('PrimaryKeyValueStf');
    }

    set PrimaryKeyValueStf(value) {
        this.setComponentValue('PrimaryKeyValueStf', value);
    }

    get StfPrimaryKeyValue() {
        return this.getComponent('PrimaryKeyValueStf');
    }

    set StfPrimaryKeyValue(value) {
        this.setComponentValue('PrimaryKeyValueStf', value);
    }

    get StaffIdentifierList() {
        return this.getComponent('StaffIdentifierList');
    }

    set StaffIdentifierList(value) {
        this.setComponentValue('StaffIdentifierList', value);
    }

    get StaffIdCode() {
        return this.getComponent('StaffIdentifierList');
    }

    set StaffIdCode(value) {
        this.setComponentValue('StaffIdentifierList', value);
    }

    get StaffName() {
        return this.getComponent('StaffName');
    }

    set StaffName(value) {
        this.setComponentValue('StaffName', value);
    }

    get StaffType() {
        return this.getComponent('StaffType');
    }

    set StaffType(value) {
        this.setComponentValue('StaffType', value);
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

    get ActiveInactiveFlag() {
        return this.getComponent('ActiveInactiveFlag');
    }

    set ActiveInactiveFlag(value) {
        this.setComponentValue('ActiveInactiveFlag', value);
    }

    get Department() {
        return this.getComponent('Department');
    }

    set Department(value) {
        this.setComponentValue('Department', value);
    }

    get HospitalServiceStf() {
        return this.getComponent('HospitalServiceStf');
    }

    set HospitalServiceStf(value) {
        this.setComponentValue('HospitalServiceStf', value);
    }

    get Service() {
        return this.getComponent('HospitalServiceStf');
    }

    set Service(value) {
        this.setComponentValue('HospitalServiceStf', value);
    }

    get HospitalService() {
        return this.getComponent('HospitalServiceStf');
    }

    set HospitalService(value) {
        this.setComponentValue('HospitalServiceStf', value);
    }

    get Phone() {
        return this.getComponent('Phone');
    }

    set Phone(value) {
        this.setComponentValue('Phone', value);
    }

    get OfficeHomeAddressBirthplace() {
        return this.getComponent('OfficeHomeAddressBirthplace');
    }

    set OfficeHomeAddressBirthplace(value) {
        this.setComponentValue('OfficeHomeAddressBirthplace', value);
    }

    get OfficeHomeAddress() {
        return this.getComponent('OfficeHomeAddressBirthplace');
    }

    set OfficeHomeAddress(value) {
        this.setComponentValue('OfficeHomeAddressBirthplace', value);
    }

    get InstitutionActivationDate() {
        return this.getComponent('InstitutionActivationDate');
    }

    set InstitutionActivationDate(value) {
        this.setComponentValue('InstitutionActivationDate', value);
    }

    get ActivationDate() {
        return this.getComponent('InstitutionActivationDate');
    }

    set ActivationDate(value) {
        this.setComponentValue('InstitutionActivationDate', value);
    }

    get InstitutionInactivationDate() {
        return this.getComponent('InstitutionInactivationDate');
    }

    set InstitutionInactivationDate(value) {
        this.setComponentValue('InstitutionInactivationDate', value);
    }

    get InactivationDate() {
        return this.getComponent('InstitutionInactivationDate');
    }

    set InactivationDate(value) {
        this.setComponentValue('InstitutionInactivationDate', value);
    }

    get BackupPersonId() {
        return this.getComponent('BackupPersonId');
    }

    set BackupPersonId(value) {
        this.setComponentValue('BackupPersonId', value);
    }

    get EMailAddress() {
        return this.getComponent('EMailAddress');
    }

    set EMailAddress(value) {
        this.setComponentValue('EMailAddress', value);
    }

    get PreferredMethodOfContact() {
        return this.getComponent('PreferredMethodOfContact');
    }

    set PreferredMethodOfContact(value) {
        this.setComponentValue('PreferredMethodOfContact', value);
    }

    get MaritalStatus() {
        return this.getComponent('MaritalStatus');
    }

    set MaritalStatus(value) {
        this.setComponentValue('MaritalStatus', value);
    }

    get JobTitle() {
        return this.getComponent('JobTitle');
    }

    set JobTitle(value) {
        this.setComponentValue('JobTitle', value);
    }

    get JobCodeClass() {
        return this.getComponent('JobCodeClass');
    }

    set JobCodeClass(value) {
        this.setComponentValue('JobCodeClass', value);
    }

    get EmploymentStatusCode() {
        return this.getComponent('EmploymentStatusCode');
    }

    set EmploymentStatusCode(value) {
        this.setComponentValue('EmploymentStatusCode', value);
    }

    get EmploymentStatus() {
        return this.getComponent('EmploymentStatusCode');
    }

    set EmploymentStatus(value) {
        this.setComponentValue('EmploymentStatusCode', value);
    }

    get AdditionalInsuredOnAuto() {
        return this.getComponent('AdditionalInsuredOnAuto');
    }

    set AdditionalInsuredOnAuto(value) {
        this.setComponentValue('AdditionalInsuredOnAuto', value);
    }

    get DriverSLicenseNumberStaff() {
        return this.getComponent('DriverSLicenseNumberStaff');
    }

    set DriverSLicenseNumberStaff(value) {
        this.setComponentValue('DriverSLicenseNumberStaff', value);
    }

    get DriverSLicenseNumber() {
        return this.getComponent('DriverSLicenseNumberStaff');
    }

    set DriverSLicenseNumber(value) {
        this.setComponentValue('DriverSLicenseNumberStaff', value);
    }

    get CopyAutoIns() {
        return this.getComponent('CopyAutoIns');
    }

    set CopyAutoIns(value) {
        this.setComponentValue('CopyAutoIns', value);
    }

    get AutoInsExpires() {
        return this.getComponent('AutoInsExpires');
    }

    set AutoInsExpires(value) {
        this.setComponentValue('AutoInsExpires', value);
    }

    get DateLastDmvReview() {
        return this.getComponent('DateLastDmvReview');
    }

    set DateLastDmvReview(value) {
        this.setComponentValue('DateLastDmvReview', value);
    }

    get DateNextDmvReview() {
        return this.getComponent('DateNextDmvReview');
    }

    set DateNextDmvReview(value) {
        this.setComponentValue('DateNextDmvReview', value);
    }

    get Race() {
        return this.getComponent('Race');
    }

    set Race(value) {
        this.setComponentValue('Race', value);
    }

    get EthnicGroup() {
        return this.getComponent('EthnicGroup');
    }

    set EthnicGroup(value) {
        this.setComponentValue('EthnicGroup', value);
    }

    get ReActivationApprovalIndicator() {
        return this.getComponent('ReActivationApprovalIndicator');
    }

    set ReActivationApprovalIndicator(value) {
        this.setComponentValue('ReActivationApprovalIndicator', value);
    }

    get Citizenship() {
        return this.getComponent('Citizenship');
    }

    set Citizenship(value) {
        this.setComponentValue('Citizenship', value);
    }

    get DeathDateAndTime() {
        return this.getComponent('DeathDateAndTime');
    }

    set DeathDateAndTime(value) {
        this.setComponentValue('DeathDateAndTime', value);
    }

    get DateTimeOfDeath() {
        return this.getComponent('DeathDateAndTime');
    }

    set DateTimeOfDeath(value) {
        this.setComponentValue('DeathDateAndTime', value);
    }

    get DeathIndicator() {
        return this.getComponent('DeathIndicator');
    }

    set DeathIndicator(value) {
        this.setComponentValue('DeathIndicator', value);
    }

    get InstitutionRelationshipTypeCode() {
        return this.getComponent('InstitutionRelationshipTypeCode');
    }

    set InstitutionRelationshipTypeCode(value) {
        this.setComponentValue('InstitutionRelationshipTypeCode', value);
    }

    get InstitutionRelationshipPeriod() {
        return this.getComponent('InstitutionRelationshipPeriod');
    }

    set InstitutionRelationshipPeriod(value) {
        this.setComponentValue('InstitutionRelationshipPeriod', value);
    }

    get ExpectedReturnDate() {
        return this.getComponent('ExpectedReturnDate');
    }

    set ExpectedReturnDate(value) {
        this.setComponentValue('ExpectedReturnDate', value);
    }

    get CostCenterCode() {
        return this.getComponent('CostCenterCode');
    }

    set CostCenterCode(value) {
        this.setComponentValue('CostCenterCode', value);
    }

    get GenericClassificationIndicator() {
        return this.getComponent('GenericClassificationIndicator');
    }

    set GenericClassificationIndicator(value) {
        this.setComponentValue('GenericClassificationIndicator', value);
    }

    get InactiveReasonCode() {
        return this.getComponent('InactiveReasonCode');
    }

    set InactiveReasonCode(value) {
        this.setComponentValue('InactiveReasonCode', value);
    }

    get GenericResourceTypeOrCategory() {
        return this.getComponent('GenericResourceTypeOrCategory');
    }

    set GenericResourceTypeOrCategory(value) {
        this.setComponentValue('GenericResourceTypeOrCategory', value);
    }

    get Religion() {
        return this.getComponent('Religion');
    }

    set Religion(value) {
        this.setComponentValue('Religion', value);
    }

    get Signature() {
        return this.getComponent('Signature');
    }

    set Signature(value) {
        this.setComponentValue('Signature', value);
    }
}
