import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { AUI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_AUI } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';

export class IN1 extends Segment {
    static components = {
        SetIdIn1: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDInsurance: { aliasOf: 'SetIdIn1' },
        SetIDIn1: { aliasOf: 'SetIdIn1' },
        HealthPlanId: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsurancePlanID: { aliasOf: 'HealthPlanId' },
        InsuranceCompanyId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuranceCompanyID: { aliasOf: 'InsuranceCompanyId' },
        InsuranceCompanyName: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuranceCompanyAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuranceCoContactPerson: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuranceCoPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GroupNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GroupName: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredsGroupEmpId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredsGroupEmployerID: { aliasOf: 'InsuredsGroupEmpId' },
        InsuredSGroupEmpID: { aliasOf: 'InsuredsGroupEmpId' },
        InsuredsGroupEmpID: { aliasOf: 'InsuredsGroupEmpId' },
        InsuredsGroupEmpName: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredSGroupEmpName: { aliasOf: 'InsuredsGroupEmpName' },
        PlanEffectiveDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlanExpirationDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AuthorizationInformation: {
            defaultDataType: AUI,
            dataTypes: [
                { dataType: AUI, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_AUI, versions: ['2.3'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlanType: {
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
        NameOfInsured: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredsRelationshipToPatient: {
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
        InsuredSRelationshipToPatient: { aliasOf: 'InsuredsRelationshipToPatient' },
        InsuredsDateOfBirth: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsuredSDateOfBirth: { aliasOf: 'InsuredsDateOfBirth' },
        InsuredsAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredSAddress: { aliasOf: 'InsuredsAddress' },
        AssignmentOfBenefits: {
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
        CoordinationOfBenefits: {
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
        CoordOfBenPriority: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NoticeOfAdmissionFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NoticeOfAdmissionCode: { aliasOf: 'NoticeOfAdmissionFlag' },
        NoticeOfAdmissionDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReportOfEligibilityFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReportOfEigibilityCode: { aliasOf: 'ReportOfEligibilityFlag' },
        ReportOfEligibilityDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReleaseInformationCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PreAdmitCertPac: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PreAdmitCert: { aliasOf: 'PreAdmitCertPac' },
        PreAdmitCertPAC: { aliasOf: 'PreAdmitCertPac' },
        VerificationDateTime: {
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
        VerificationBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 30,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        TypeOfAgreementCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BillingStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LifetimeReserveDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DelayBeforeLRDay: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 34,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DelayBeforeLifetimeReserveDays: { aliasOf: 'DelayBeforeLRDay' },
        CompanyPlanCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PolicyNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 36,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PolicyDeductible: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PolicyLimitAmount: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CP, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 38,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PolicyLimitDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 39,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RoomRateSemiPrivate: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CP, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 40,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RoomRatePrivate: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CP, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 41,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsuredsEmploymentStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 42,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsuredSEmploymentStatus: { aliasOf: 'InsuredsEmploymentStatus' },
        InsuredsAdministrativeSex: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 43,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsuredsSex: { aliasOf: 'InsuredsAdministrativeSex' },
        InsuredSSex: { aliasOf: 'InsuredsAdministrativeSex' },
        InsuredsEmployersAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 44,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredsEmployerAddress: { aliasOf: 'InsuredsEmployersAddress' },
        InsuredSEmployerSAddress: { aliasOf: 'InsuredsEmployersAddress' },
        VerificationStatus: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 45,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PriorInsurancePlanId: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 46,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PriorInsurancePlanID: { aliasOf: 'PriorInsurancePlanId' },
        CoverageType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 47,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Handicap: {
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
        InsuredsIdNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 49,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredsIDNumber: { aliasOf: 'InsuredsIdNumber' },
        InsuredSIDNumber: { aliasOf: 'InsuredsIdNumber' },
        SignatureCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 50,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SignatureCodeDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 51,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsuredsBirthPlace: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 52,
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
            position: 53,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VipIndicator: { aliasOf: 'VIPIndicator' },
        ExternalHealthPlanIdentifiers: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 54,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuranceActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 55,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdIn1',
        'HealthPlanId',
        'InsuranceCompanyId',
        'InsuranceCompanyName',
        'InsuranceCompanyAddress',
        'InsuranceCoContactPerson',
        'InsuranceCoPhoneNumber',
        'GroupNumber',
        'GroupName',
        'InsuredsGroupEmpId',
        'InsuredsGroupEmpName',
        'PlanEffectiveDate',
        'PlanExpirationDate',
        'AuthorizationInformation',
        'PlanType',
        'NameOfInsured',
        'InsuredsRelationshipToPatient',
        'InsuredsDateOfBirth',
        'InsuredsAddress',
        'AssignmentOfBenefits',
        'CoordinationOfBenefits',
        'CoordOfBenPriority',
        'NoticeOfAdmissionFlag',
        'NoticeOfAdmissionDate',
        'ReportOfEligibilityFlag',
        'ReportOfEligibilityDate',
        'ReleaseInformationCode',
        'PreAdmitCertPac',
        'VerificationDateTime',
        'VerificationBy',
        'TypeOfAgreementCode',
        'BillingStatus',
        'LifetimeReserveDays',
        'DelayBeforeLRDay',
        'CompanyPlanCode',
        'PolicyNumber',
        'PolicyDeductible',
        'PolicyLimitAmount',
        'PolicyLimitDays',
        'RoomRateSemiPrivate',
        'RoomRatePrivate',
        'InsuredsEmploymentStatus',
        'InsuredsAdministrativeSex',
        'InsuredsEmployersAddress',
        'VerificationStatus',
        'PriorInsurancePlanId',
        'CoverageType',
        'Handicap',
        'InsuredsIdNumber',
        'SignatureCode',
        'SignatureCodeDate',
        'InsuredsBirthPlace',
        'VIPIndicator',
        'ExternalHealthPlanIdentifiers',
        'InsuranceActionCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('IN1');
        this.setValues(values);
    }

    get SetIdIn1() {
        return this.getComponent('SetIdIn1');
    }

    set SetIdIn1(value) {
        this.setComponentValue('SetIdIn1', value);
    }

    get SetIDInsurance() {
        return this.getComponent('SetIdIn1');
    }

    set SetIDInsurance(value) {
        this.setComponentValue('SetIdIn1', value);
    }

    get SetIDIn1() {
        return this.getComponent('SetIdIn1');
    }

    set SetIDIn1(value) {
        this.setComponentValue('SetIdIn1', value);
    }

    get HealthPlanId() {
        return this.getComponent('HealthPlanId');
    }

    set HealthPlanId(value) {
        this.setComponentValue('HealthPlanId', value);
    }

    get InsurancePlanID() {
        return this.getComponent('HealthPlanId');
    }

    set InsurancePlanID(value) {
        this.setComponentValue('HealthPlanId', value);
    }

    get InsuranceCompanyId() {
        return this.getComponent('InsuranceCompanyId');
    }

    set InsuranceCompanyId(value) {
        this.setComponentValue('InsuranceCompanyId', value);
    }

    get InsuranceCompanyID() {
        return this.getComponent('InsuranceCompanyId');
    }

    set InsuranceCompanyID(value) {
        this.setComponentValue('InsuranceCompanyId', value);
    }

    get InsuranceCompanyName() {
        return this.getComponent('InsuranceCompanyName');
    }

    set InsuranceCompanyName(value) {
        this.setComponentValue('InsuranceCompanyName', value);
    }

    get InsuranceCompanyAddress() {
        return this.getComponent('InsuranceCompanyAddress');
    }

    set InsuranceCompanyAddress(value) {
        this.setComponentValue('InsuranceCompanyAddress', value);
    }

    get InsuranceCoContactPerson() {
        return this.getComponent('InsuranceCoContactPerson');
    }

    set InsuranceCoContactPerson(value) {
        this.setComponentValue('InsuranceCoContactPerson', value);
    }

    get InsuranceCoPhoneNumber() {
        return this.getComponent('InsuranceCoPhoneNumber');
    }

    set InsuranceCoPhoneNumber(value) {
        this.setComponentValue('InsuranceCoPhoneNumber', value);
    }

    get GroupNumber() {
        return this.getComponent('GroupNumber');
    }

    set GroupNumber(value) {
        this.setComponentValue('GroupNumber', value);
    }

    get GroupName() {
        return this.getComponent('GroupName');
    }

    set GroupName(value) {
        this.setComponentValue('GroupName', value);
    }

    get InsuredsGroupEmpId() {
        return this.getComponent('InsuredsGroupEmpId');
    }

    set InsuredsGroupEmpId(value) {
        this.setComponentValue('InsuredsGroupEmpId', value);
    }

    get InsuredsGroupEmployerID() {
        return this.getComponent('InsuredsGroupEmpId');
    }

    set InsuredsGroupEmployerID(value) {
        this.setComponentValue('InsuredsGroupEmpId', value);
    }

    get InsuredSGroupEmpID() {
        return this.getComponent('InsuredsGroupEmpId');
    }

    set InsuredSGroupEmpID(value) {
        this.setComponentValue('InsuredsGroupEmpId', value);
    }

    get InsuredsGroupEmpID() {
        return this.getComponent('InsuredsGroupEmpId');
    }

    set InsuredsGroupEmpID(value) {
        this.setComponentValue('InsuredsGroupEmpId', value);
    }

    get InsuredsGroupEmpName() {
        return this.getComponent('InsuredsGroupEmpName');
    }

    set InsuredsGroupEmpName(value) {
        this.setComponentValue('InsuredsGroupEmpName', value);
    }

    get InsuredSGroupEmpName() {
        return this.getComponent('InsuredsGroupEmpName');
    }

    set InsuredSGroupEmpName(value) {
        this.setComponentValue('InsuredsGroupEmpName', value);
    }

    get PlanEffectiveDate() {
        return this.getComponent('PlanEffectiveDate');
    }

    set PlanEffectiveDate(value) {
        this.setComponentValue('PlanEffectiveDate', value);
    }

    get PlanExpirationDate() {
        return this.getComponent('PlanExpirationDate');
    }

    set PlanExpirationDate(value) {
        this.setComponentValue('PlanExpirationDate', value);
    }

    get AuthorizationInformation() {
        return this.getComponent('AuthorizationInformation');
    }

    set AuthorizationInformation(value) {
        this.setComponentValue('AuthorizationInformation', value);
    }

    get PlanType() {
        return this.getComponent('PlanType');
    }

    set PlanType(value) {
        this.setComponentValue('PlanType', value);
    }

    get NameOfInsured() {
        return this.getComponent('NameOfInsured');
    }

    set NameOfInsured(value) {
        this.setComponentValue('NameOfInsured', value);
    }

    get InsuredsRelationshipToPatient() {
        return this.getComponent('InsuredsRelationshipToPatient');
    }

    set InsuredsRelationshipToPatient(value) {
        this.setComponentValue('InsuredsRelationshipToPatient', value);
    }

    get InsuredSRelationshipToPatient() {
        return this.getComponent('InsuredsRelationshipToPatient');
    }

    set InsuredSRelationshipToPatient(value) {
        this.setComponentValue('InsuredsRelationshipToPatient', value);
    }

    get InsuredsDateOfBirth() {
        return this.getComponent('InsuredsDateOfBirth');
    }

    set InsuredsDateOfBirth(value) {
        this.setComponentValue('InsuredsDateOfBirth', value);
    }

    get InsuredSDateOfBirth() {
        return this.getComponent('InsuredsDateOfBirth');
    }

    set InsuredSDateOfBirth(value) {
        this.setComponentValue('InsuredsDateOfBirth', value);
    }

    get InsuredsAddress() {
        return this.getComponent('InsuredsAddress');
    }

    set InsuredsAddress(value) {
        this.setComponentValue('InsuredsAddress', value);
    }

    get InsuredSAddress() {
        return this.getComponent('InsuredsAddress');
    }

    set InsuredSAddress(value) {
        this.setComponentValue('InsuredsAddress', value);
    }

    get AssignmentOfBenefits() {
        return this.getComponent('AssignmentOfBenefits');
    }

    set AssignmentOfBenefits(value) {
        this.setComponentValue('AssignmentOfBenefits', value);
    }

    get CoordinationOfBenefits() {
        return this.getComponent('CoordinationOfBenefits');
    }

    set CoordinationOfBenefits(value) {
        this.setComponentValue('CoordinationOfBenefits', value);
    }

    get CoordOfBenPriority() {
        return this.getComponent('CoordOfBenPriority');
    }

    set CoordOfBenPriority(value) {
        this.setComponentValue('CoordOfBenPriority', value);
    }

    get NoticeOfAdmissionFlag() {
        return this.getComponent('NoticeOfAdmissionFlag');
    }

    set NoticeOfAdmissionFlag(value) {
        this.setComponentValue('NoticeOfAdmissionFlag', value);
    }

    get NoticeOfAdmissionCode() {
        return this.getComponent('NoticeOfAdmissionFlag');
    }

    set NoticeOfAdmissionCode(value) {
        this.setComponentValue('NoticeOfAdmissionFlag', value);
    }

    get NoticeOfAdmissionDate() {
        return this.getComponent('NoticeOfAdmissionDate');
    }

    set NoticeOfAdmissionDate(value) {
        this.setComponentValue('NoticeOfAdmissionDate', value);
    }

    get ReportOfEligibilityFlag() {
        return this.getComponent('ReportOfEligibilityFlag');
    }

    set ReportOfEligibilityFlag(value) {
        this.setComponentValue('ReportOfEligibilityFlag', value);
    }

    get ReportOfEigibilityCode() {
        return this.getComponent('ReportOfEligibilityFlag');
    }

    set ReportOfEigibilityCode(value) {
        this.setComponentValue('ReportOfEligibilityFlag', value);
    }

    get ReportOfEligibilityDate() {
        return this.getComponent('ReportOfEligibilityDate');
    }

    set ReportOfEligibilityDate(value) {
        this.setComponentValue('ReportOfEligibilityDate', value);
    }

    get ReleaseInformationCode() {
        return this.getComponent('ReleaseInformationCode');
    }

    set ReleaseInformationCode(value) {
        this.setComponentValue('ReleaseInformationCode', value);
    }

    get PreAdmitCertPac() {
        return this.getComponent('PreAdmitCertPac');
    }

    set PreAdmitCertPac(value) {
        this.setComponentValue('PreAdmitCertPac', value);
    }

    get PreAdmitCert() {
        return this.getComponent('PreAdmitCertPac');
    }

    set PreAdmitCert(value) {
        this.setComponentValue('PreAdmitCertPac', value);
    }

    get PreAdmitCertPAC() {
        return this.getComponent('PreAdmitCertPac');
    }

    set PreAdmitCertPAC(value) {
        this.setComponentValue('PreAdmitCertPac', value);
    }

    get VerificationDateTime() {
        return this.getComponent('VerificationDateTime');
    }

    set VerificationDateTime(value) {
        this.setComponentValue('VerificationDateTime', value);
    }

    get VerificationBy() {
        return this.getComponent('VerificationBy');
    }

    set VerificationBy(value) {
        this.setComponentValue('VerificationBy', value);
    }

    get TypeOfAgreementCode() {
        return this.getComponent('TypeOfAgreementCode');
    }

    set TypeOfAgreementCode(value) {
        this.setComponentValue('TypeOfAgreementCode', value);
    }

    get BillingStatus() {
        return this.getComponent('BillingStatus');
    }

    set BillingStatus(value) {
        this.setComponentValue('BillingStatus', value);
    }

    get LifetimeReserveDays() {
        return this.getComponent('LifetimeReserveDays');
    }

    set LifetimeReserveDays(value) {
        this.setComponentValue('LifetimeReserveDays', value);
    }

    get DelayBeforeLRDay() {
        return this.getComponent('DelayBeforeLRDay');
    }

    set DelayBeforeLRDay(value) {
        this.setComponentValue('DelayBeforeLRDay', value);
    }

    get DelayBeforeLifetimeReserveDays() {
        return this.getComponent('DelayBeforeLRDay');
    }

    set DelayBeforeLifetimeReserveDays(value) {
        this.setComponentValue('DelayBeforeLRDay', value);
    }

    get CompanyPlanCode() {
        return this.getComponent('CompanyPlanCode');
    }

    set CompanyPlanCode(value) {
        this.setComponentValue('CompanyPlanCode', value);
    }

    get PolicyNumber() {
        return this.getComponent('PolicyNumber');
    }

    set PolicyNumber(value) {
        this.setComponentValue('PolicyNumber', value);
    }

    get PolicyDeductible() {
        return this.getComponent('PolicyDeductible');
    }

    set PolicyDeductible(value) {
        this.setComponentValue('PolicyDeductible', value);
    }

    get PolicyLimitAmount() {
        return this.getComponent('PolicyLimitAmount');
    }

    set PolicyLimitAmount(value) {
        this.setComponentValue('PolicyLimitAmount', value);
    }

    get PolicyLimitDays() {
        return this.getComponent('PolicyLimitDays');
    }

    set PolicyLimitDays(value) {
        this.setComponentValue('PolicyLimitDays', value);
    }

    get RoomRateSemiPrivate() {
        return this.getComponent('RoomRateSemiPrivate');
    }

    set RoomRateSemiPrivate(value) {
        this.setComponentValue('RoomRateSemiPrivate', value);
    }

    get RoomRatePrivate() {
        return this.getComponent('RoomRatePrivate');
    }

    set RoomRatePrivate(value) {
        this.setComponentValue('RoomRatePrivate', value);
    }

    get InsuredsEmploymentStatus() {
        return this.getComponent('InsuredsEmploymentStatus');
    }

    set InsuredsEmploymentStatus(value) {
        this.setComponentValue('InsuredsEmploymentStatus', value);
    }

    get InsuredSEmploymentStatus() {
        return this.getComponent('InsuredsEmploymentStatus');
    }

    set InsuredSEmploymentStatus(value) {
        this.setComponentValue('InsuredsEmploymentStatus', value);
    }

    get InsuredsAdministrativeSex() {
        return this.getComponent('InsuredsAdministrativeSex');
    }

    set InsuredsAdministrativeSex(value) {
        this.setComponentValue('InsuredsAdministrativeSex', value);
    }

    get InsuredsSex() {
        return this.getComponent('InsuredsAdministrativeSex');
    }

    set InsuredsSex(value) {
        this.setComponentValue('InsuredsAdministrativeSex', value);
    }

    get InsuredSSex() {
        return this.getComponent('InsuredsAdministrativeSex');
    }

    set InsuredSSex(value) {
        this.setComponentValue('InsuredsAdministrativeSex', value);
    }

    get InsuredsEmployersAddress() {
        return this.getComponent('InsuredsEmployersAddress');
    }

    set InsuredsEmployersAddress(value) {
        this.setComponentValue('InsuredsEmployersAddress', value);
    }

    get InsuredsEmployerAddress() {
        return this.getComponent('InsuredsEmployersAddress');
    }

    set InsuredsEmployerAddress(value) {
        this.setComponentValue('InsuredsEmployersAddress', value);
    }

    get InsuredSEmployerSAddress() {
        return this.getComponent('InsuredsEmployersAddress');
    }

    set InsuredSEmployerSAddress(value) {
        this.setComponentValue('InsuredsEmployersAddress', value);
    }

    get VerificationStatus() {
        return this.getComponent('VerificationStatus');
    }

    set VerificationStatus(value) {
        this.setComponentValue('VerificationStatus', value);
    }

    get PriorInsurancePlanId() {
        return this.getComponent('PriorInsurancePlanId');
    }

    set PriorInsurancePlanId(value) {
        this.setComponentValue('PriorInsurancePlanId', value);
    }

    get PriorInsurancePlanID() {
        return this.getComponent('PriorInsurancePlanId');
    }

    set PriorInsurancePlanID(value) {
        this.setComponentValue('PriorInsurancePlanId', value);
    }

    get CoverageType() {
        return this.getComponent('CoverageType');
    }

    set CoverageType(value) {
        this.setComponentValue('CoverageType', value);
    }

    get Handicap() {
        return this.getComponent('Handicap');
    }

    set Handicap(value) {
        this.setComponentValue('Handicap', value);
    }

    get InsuredsIdNumber() {
        return this.getComponent('InsuredsIdNumber');
    }

    set InsuredsIdNumber(value) {
        this.setComponentValue('InsuredsIdNumber', value);
    }

    get InsuredsIDNumber() {
        return this.getComponent('InsuredsIdNumber');
    }

    set InsuredsIDNumber(value) {
        this.setComponentValue('InsuredsIdNumber', value);
    }

    get InsuredSIDNumber() {
        return this.getComponent('InsuredsIdNumber');
    }

    set InsuredSIDNumber(value) {
        this.setComponentValue('InsuredsIdNumber', value);
    }

    get SignatureCode() {
        return this.getComponent('SignatureCode');
    }

    set SignatureCode(value) {
        this.setComponentValue('SignatureCode', value);
    }

    get SignatureCodeDate() {
        return this.getComponent('SignatureCodeDate');
    }

    set SignatureCodeDate(value) {
        this.setComponentValue('SignatureCodeDate', value);
    }

    get InsuredsBirthPlace() {
        return this.getComponent('InsuredsBirthPlace');
    }

    set InsuredsBirthPlace(value) {
        this.setComponentValue('InsuredsBirthPlace', value);
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

    get ExternalHealthPlanIdentifiers() {
        return this.getComponent('ExternalHealthPlanIdentifiers');
    }

    set ExternalHealthPlanIdentifiers(value) {
        this.setComponentValue('ExternalHealthPlanIdentifiers', value);
    }

    get InsuranceActionCode() {
        return this.getComponent('InsuranceActionCode');
    }

    set InsuranceActionCode(value) {
        this.setComponentValue('InsuranceActionCode', value);
    }
}
