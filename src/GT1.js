import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { JCC } from '@healthcare-interoperability/hl7v2-datatypes';
import { FC } from '@healthcare-interoperability/hl7v2-datatypes';

export class GT1 extends Segment {
    static components = {
        SetIdGt1: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDGuarantor: { aliasOf: 'SetIdGt1' },
        SetIDGt1: { aliasOf: 'SetIdGt1' },
        GuarantorNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorSpouseName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorPhNumHome: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorPhNumBusiness: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorDateTimeOfBirth: {
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
        GuarantorAdministrativeSex: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorSex: { aliasOf: 'GuarantorAdministrativeSex' },
        GuarantorType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorRelationship: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorSsn: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorSSN: { aliasOf: 'GuarantorSsn' },
        GuarantorDateBegin: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorDateEnd: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorPriority: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorEmployerName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorEmployerAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorEmployerPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorEmployPhoneNumber: { aliasOf: 'GuarantorEmployerPhoneNumber' },
        GuarantorEmployeeIdNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorEmployeeIDNumber: { aliasOf: 'GuarantorEmployeeIdNumber' },
        GuarantorEmploymentStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorOrganizationName: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorOrganization: { aliasOf: 'GuarantorOrganizationName' },
        GuarantorBillingHoldFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorCreditRatingCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorDeathDateAndTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorDeathFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorChargeAdjustmentCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorHouseholdAnnualIncome: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorHouseholdSize: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorEmployerIdNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 29,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorEmployerIDNumber: { aliasOf: 'GuarantorEmployerIdNumber' },
        GuarantorMaritalStatusCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorHireEffectiveDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EmploymentStopDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LivingDependency: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AmbulatoryStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 34,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        AmbulatoryStatusCode: { aliasOf: 'AmbulatoryStatus' },
        Citizenship: {
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
        PrimaryLanguage: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 36,
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
            position: 37,
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
            position: 38,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PublicityIndicator: { aliasOf: 'PublicityCode' },
        ProtectionIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 39,
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
            position: 40,
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
            position: 41,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MothersMaidenName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 42,
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
            position: 43,
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
            position: 44,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ContactPersonsName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 45,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactPersonSName: { aliasOf: 'ContactPersonsName' },
        ContactPersonsTelephoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 46,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactPersonSTelephoneNumber: { aliasOf: 'ContactPersonsTelephoneNumber' },
        ContactReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 47,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContactRelationship: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 48,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContactRelationshipCode: { aliasOf: 'ContactRelationship' },
        JobTitle: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 49,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        JobCodeClass: {
            defaultDataType: JCC,
            dataTypes: [{ dataType: JCC, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 50,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorEmployersOrganizationName: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 51,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GuarantorEmployerSOrganizationName: { aliasOf: 'GuarantorEmployersOrganizationName' },
        Handicap: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 52,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        JobStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 53,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorFinancialClass: {
            defaultDataType: FC,
            dataTypes: [{ dataType: FC, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 54,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorRace: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 55,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        GuarantorBirthPlace: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 56,
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
            position: 57,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VipIndicator: { aliasOf: 'VIPIndicator' },
    };

    static componentsByIndex = [
        '',
        'SetIdGt1',
        'GuarantorNumber',
        'GuarantorName',
        'GuarantorSpouseName',
        'GuarantorAddress',
        'GuarantorPhNumHome',
        'GuarantorPhNumBusiness',
        'GuarantorDateTimeOfBirth',
        'GuarantorAdministrativeSex',
        'GuarantorType',
        'GuarantorRelationship',
        'GuarantorSsn',
        'GuarantorDateBegin',
        'GuarantorDateEnd',
        'GuarantorPriority',
        'GuarantorEmployerName',
        'GuarantorEmployerAddress',
        'GuarantorEmployerPhoneNumber',
        'GuarantorEmployeeIdNumber',
        'GuarantorEmploymentStatus',
        'GuarantorOrganizationName',
        'GuarantorBillingHoldFlag',
        'GuarantorCreditRatingCode',
        'GuarantorDeathDateAndTime',
        'GuarantorDeathFlag',
        'GuarantorChargeAdjustmentCode',
        'GuarantorHouseholdAnnualIncome',
        'GuarantorHouseholdSize',
        'GuarantorEmployerIdNumber',
        'GuarantorMaritalStatusCode',
        'GuarantorHireEffectiveDate',
        'EmploymentStopDate',
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
        'ContactPersonsName',
        'ContactPersonsTelephoneNumber',
        'ContactReason',
        'ContactRelationship',
        'JobTitle',
        'JobCodeClass',
        'GuarantorEmployersOrganizationName',
        'Handicap',
        'JobStatus',
        'GuarantorFinancialClass',
        'GuarantorRace',
        'GuarantorBirthPlace',
        'VIPIndicator',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('GT1');
        this.setValues(values);
    }

    get SetIdGt1() {
        return this.getComponent('SetIdGt1');
    }

    set SetIdGt1(value) {
        this.setComponentValue('SetIdGt1', value);
    }

    get SetIDGuarantor() {
        return this.getComponent('SetIdGt1');
    }

    set SetIDGuarantor(value) {
        this.setComponentValue('SetIdGt1', value);
    }

    get SetIDGt1() {
        return this.getComponent('SetIdGt1');
    }

    set SetIDGt1(value) {
        this.setComponentValue('SetIdGt1', value);
    }

    get GuarantorNumber() {
        return this.getComponent('GuarantorNumber');
    }

    set GuarantorNumber(value) {
        this.setComponentValue('GuarantorNumber', value);
    }

    get GuarantorName() {
        return this.getComponent('GuarantorName');
    }

    set GuarantorName(value) {
        this.setComponentValue('GuarantorName', value);
    }

    get GuarantorSpouseName() {
        return this.getComponent('GuarantorSpouseName');
    }

    set GuarantorSpouseName(value) {
        this.setComponentValue('GuarantorSpouseName', value);
    }

    get GuarantorAddress() {
        return this.getComponent('GuarantorAddress');
    }

    set GuarantorAddress(value) {
        this.setComponentValue('GuarantorAddress', value);
    }

    get GuarantorPhNumHome() {
        return this.getComponent('GuarantorPhNumHome');
    }

    set GuarantorPhNumHome(value) {
        this.setComponentValue('GuarantorPhNumHome', value);
    }

    get GuarantorPhNumBusiness() {
        return this.getComponent('GuarantorPhNumBusiness');
    }

    set GuarantorPhNumBusiness(value) {
        this.setComponentValue('GuarantorPhNumBusiness', value);
    }

    get GuarantorDateTimeOfBirth() {
        return this.getComponent('GuarantorDateTimeOfBirth');
    }

    set GuarantorDateTimeOfBirth(value) {
        this.setComponentValue('GuarantorDateTimeOfBirth', value);
    }

    get GuarantorAdministrativeSex() {
        return this.getComponent('GuarantorAdministrativeSex');
    }

    set GuarantorAdministrativeSex(value) {
        this.setComponentValue('GuarantorAdministrativeSex', value);
    }

    get GuarantorSex() {
        return this.getComponent('GuarantorAdministrativeSex');
    }

    set GuarantorSex(value) {
        this.setComponentValue('GuarantorAdministrativeSex', value);
    }

    get GuarantorType() {
        return this.getComponent('GuarantorType');
    }

    set GuarantorType(value) {
        this.setComponentValue('GuarantorType', value);
    }

    get GuarantorRelationship() {
        return this.getComponent('GuarantorRelationship');
    }

    set GuarantorRelationship(value) {
        this.setComponentValue('GuarantorRelationship', value);
    }

    get GuarantorSsn() {
        return this.getComponent('GuarantorSsn');
    }

    set GuarantorSsn(value) {
        this.setComponentValue('GuarantorSsn', value);
    }

    get GuarantorSSN() {
        return this.getComponent('GuarantorSsn');
    }

    set GuarantorSSN(value) {
        this.setComponentValue('GuarantorSsn', value);
    }

    get GuarantorDateBegin() {
        return this.getComponent('GuarantorDateBegin');
    }

    set GuarantorDateBegin(value) {
        this.setComponentValue('GuarantorDateBegin', value);
    }

    get GuarantorDateEnd() {
        return this.getComponent('GuarantorDateEnd');
    }

    set GuarantorDateEnd(value) {
        this.setComponentValue('GuarantorDateEnd', value);
    }

    get GuarantorPriority() {
        return this.getComponent('GuarantorPriority');
    }

    set GuarantorPriority(value) {
        this.setComponentValue('GuarantorPriority', value);
    }

    get GuarantorEmployerName() {
        return this.getComponent('GuarantorEmployerName');
    }

    set GuarantorEmployerName(value) {
        this.setComponentValue('GuarantorEmployerName', value);
    }

    get GuarantorEmployerAddress() {
        return this.getComponent('GuarantorEmployerAddress');
    }

    set GuarantorEmployerAddress(value) {
        this.setComponentValue('GuarantorEmployerAddress', value);
    }

    get GuarantorEmployerPhoneNumber() {
        return this.getComponent('GuarantorEmployerPhoneNumber');
    }

    set GuarantorEmployerPhoneNumber(value) {
        this.setComponentValue('GuarantorEmployerPhoneNumber', value);
    }

    get GuarantorEmployPhoneNumber() {
        return this.getComponent('GuarantorEmployerPhoneNumber');
    }

    set GuarantorEmployPhoneNumber(value) {
        this.setComponentValue('GuarantorEmployerPhoneNumber', value);
    }

    get GuarantorEmployeeIdNumber() {
        return this.getComponent('GuarantorEmployeeIdNumber');
    }

    set GuarantorEmployeeIdNumber(value) {
        this.setComponentValue('GuarantorEmployeeIdNumber', value);
    }

    get GuarantorEmployeeIDNumber() {
        return this.getComponent('GuarantorEmployeeIdNumber');
    }

    set GuarantorEmployeeIDNumber(value) {
        this.setComponentValue('GuarantorEmployeeIdNumber', value);
    }

    get GuarantorEmploymentStatus() {
        return this.getComponent('GuarantorEmploymentStatus');
    }

    set GuarantorEmploymentStatus(value) {
        this.setComponentValue('GuarantorEmploymentStatus', value);
    }

    get GuarantorOrganizationName() {
        return this.getComponent('GuarantorOrganizationName');
    }

    set GuarantorOrganizationName(value) {
        this.setComponentValue('GuarantorOrganizationName', value);
    }

    get GuarantorOrganization() {
        return this.getComponent('GuarantorOrganizationName');
    }

    set GuarantorOrganization(value) {
        this.setComponentValue('GuarantorOrganizationName', value);
    }

    get GuarantorBillingHoldFlag() {
        return this.getComponent('GuarantorBillingHoldFlag');
    }

    set GuarantorBillingHoldFlag(value) {
        this.setComponentValue('GuarantorBillingHoldFlag', value);
    }

    get GuarantorCreditRatingCode() {
        return this.getComponent('GuarantorCreditRatingCode');
    }

    set GuarantorCreditRatingCode(value) {
        this.setComponentValue('GuarantorCreditRatingCode', value);
    }

    get GuarantorDeathDateAndTime() {
        return this.getComponent('GuarantorDeathDateAndTime');
    }

    set GuarantorDeathDateAndTime(value) {
        this.setComponentValue('GuarantorDeathDateAndTime', value);
    }

    get GuarantorDeathFlag() {
        return this.getComponent('GuarantorDeathFlag');
    }

    set GuarantorDeathFlag(value) {
        this.setComponentValue('GuarantorDeathFlag', value);
    }

    get GuarantorChargeAdjustmentCode() {
        return this.getComponent('GuarantorChargeAdjustmentCode');
    }

    set GuarantorChargeAdjustmentCode(value) {
        this.setComponentValue('GuarantorChargeAdjustmentCode', value);
    }

    get GuarantorHouseholdAnnualIncome() {
        return this.getComponent('GuarantorHouseholdAnnualIncome');
    }

    set GuarantorHouseholdAnnualIncome(value) {
        this.setComponentValue('GuarantorHouseholdAnnualIncome', value);
    }

    get GuarantorHouseholdSize() {
        return this.getComponent('GuarantorHouseholdSize');
    }

    set GuarantorHouseholdSize(value) {
        this.setComponentValue('GuarantorHouseholdSize', value);
    }

    get GuarantorEmployerIdNumber() {
        return this.getComponent('GuarantorEmployerIdNumber');
    }

    set GuarantorEmployerIdNumber(value) {
        this.setComponentValue('GuarantorEmployerIdNumber', value);
    }

    get GuarantorEmployerIDNumber() {
        return this.getComponent('GuarantorEmployerIdNumber');
    }

    set GuarantorEmployerIDNumber(value) {
        this.setComponentValue('GuarantorEmployerIdNumber', value);
    }

    get GuarantorMaritalStatusCode() {
        return this.getComponent('GuarantorMaritalStatusCode');
    }

    set GuarantorMaritalStatusCode(value) {
        this.setComponentValue('GuarantorMaritalStatusCode', value);
    }

    get GuarantorHireEffectiveDate() {
        return this.getComponent('GuarantorHireEffectiveDate');
    }

    set GuarantorHireEffectiveDate(value) {
        this.setComponentValue('GuarantorHireEffectiveDate', value);
    }

    get EmploymentStopDate() {
        return this.getComponent('EmploymentStopDate');
    }

    set EmploymentStopDate(value) {
        this.setComponentValue('EmploymentStopDate', value);
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

    get AmbulatoryStatusCode() {
        return this.getComponent('AmbulatoryStatus');
    }

    set AmbulatoryStatusCode(value) {
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

    get ContactReason() {
        return this.getComponent('ContactReason');
    }

    set ContactReason(value) {
        this.setComponentValue('ContactReason', value);
    }

    get ContactRelationship() {
        return this.getComponent('ContactRelationship');
    }

    set ContactRelationship(value) {
        this.setComponentValue('ContactRelationship', value);
    }

    get ContactRelationshipCode() {
        return this.getComponent('ContactRelationship');
    }

    set ContactRelationshipCode(value) {
        this.setComponentValue('ContactRelationship', value);
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

    get GuarantorEmployersOrganizationName() {
        return this.getComponent('GuarantorEmployersOrganizationName');
    }

    set GuarantorEmployersOrganizationName(value) {
        this.setComponentValue('GuarantorEmployersOrganizationName', value);
    }

    get GuarantorEmployerSOrganizationName() {
        return this.getComponent('GuarantorEmployersOrganizationName');
    }

    set GuarantorEmployerSOrganizationName(value) {
        this.setComponentValue('GuarantorEmployersOrganizationName', value);
    }

    get Handicap() {
        return this.getComponent('Handicap');
    }

    set Handicap(value) {
        this.setComponentValue('Handicap', value);
    }

    get JobStatus() {
        return this.getComponent('JobStatus');
    }

    set JobStatus(value) {
        this.setComponentValue('JobStatus', value);
    }

    get GuarantorFinancialClass() {
        return this.getComponent('GuarantorFinancialClass');
    }

    set GuarantorFinancialClass(value) {
        this.setComponentValue('GuarantorFinancialClass', value);
    }

    get GuarantorRace() {
        return this.getComponent('GuarantorRace');
    }

    set GuarantorRace(value) {
        this.setComponentValue('GuarantorRace', value);
    }

    get GuarantorBirthPlace() {
        return this.getComponent('GuarantorBirthPlace');
    }

    set GuarantorBirthPlace(value) {
        this.setComponentValue('GuarantorBirthPlace', value);
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
}
