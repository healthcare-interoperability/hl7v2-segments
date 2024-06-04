import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { RMC } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_RMC } from '@healthcare-interoperability/hl7v2-datatypes';
import { PTA } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_PTA } from '@healthcare-interoperability/hl7v2-datatypes';
import { DDI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_DDI } from '@healthcare-interoperability/hl7v2-datatypes';
import { JCC } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';

export class IN2 extends Segment {
    static components = {
        InsuredSEmployeeId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredSEmployeeID: { aliasOf: 'InsuredSEmployeeId' },
        InsuredSSocialSecurityNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsuredSEmployerSNameAndId: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredSEmployerName: { aliasOf: 'InsuredSEmployerSNameAndId' },
        InsuredSEmployerSNameAndID: { aliasOf: 'InsuredSEmployerSNameAndId' },
        EmployerInformationData: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MailClaimParty: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        MedicareHealthInsCardNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MedicaidCaseName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        MedicaidCaseNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MilitarySponsorName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ChampusSponsorName: { aliasOf: 'MilitarySponsorName' },
        MilitaryIdNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChampusIDNumber: { aliasOf: 'MilitaryIdNumber' },
        MilitaryIDNumber: { aliasOf: 'MilitaryIdNumber' },
        DependentOfMilitaryRecipient: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DependentOfChampusRecipient: { aliasOf: 'DependentOfMilitaryRecipient' },
        MilitaryOrganization: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChampusOrganization: { aliasOf: 'MilitaryOrganization' },
        MilitaryStation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChampusStation: { aliasOf: 'MilitaryStation' },
        MilitaryService: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChampusService: { aliasOf: 'MilitaryService' },
        MilitaryRankGrade: {
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
        ChampusRankGrade: { aliasOf: 'MilitaryRankGrade' },
        MilitaryStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChampusStatus: { aliasOf: 'MilitaryStatus' },
        MilitaryRetireDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChampusRetireDate: { aliasOf: 'MilitaryRetireDate' },
        MilitaryNonAvailCertOnFile: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChampusNonAvailCertOnFile: { aliasOf: 'MilitaryNonAvailCertOnFile' },
        BabyCoverage: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CombineBabyBill: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BloodDeductible: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecialCoverageApprovalName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecialCoverageApprovalTitle: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NonCoveredInsuranceCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 24,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PayorId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PayorID: { aliasOf: 'PayorId' },
        PayorSubscriberId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PayorSubscriberID: { aliasOf: 'PayorSubscriberId' },
        EligibilitySource: {
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
        RoomCoverageTypeAmount: {
            defaultDataType: RMC,
            dataTypes: [
                { dataType: RMC, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_RMC, versions: ['2.3'] },
            ],
            position: 28,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PolicyTypeAmount: {
            defaultDataType: PTA,
            dataTypes: [
                { dataType: PTA, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_PTA, versions: ['2.3'] },
            ],
            position: 29,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DailyDeductible: {
            defaultDataType: DDI,
            dataTypes: [
                { dataType: DDI, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_DDI, versions: ['2.3'] },
            ],
            position: 30,
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
            position: 31,
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
            position: 32,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        Citizenship: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 33,
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
            position: 34,
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
            position: 35,
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
            position: 36,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PublicityIndicator: { aliasOf: 'PublicityCode' },
        ProtectionIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 37,
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
            position: 38,
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
            position: 39,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MotherSMaidenName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 40,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        Nationality: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 41,
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
            position: 42,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        MaritalStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 43,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredSEmploymentStartDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 44,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EmploymentStartDate: { aliasOf: 'InsuredSEmploymentStartDate' },
        EmploymentStopDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 45,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        JobTitle: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 46,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        JobCodeClass: {
            defaultDataType: JCC,
            dataTypes: [{ dataType: JCC, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 47,
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
            position: 48,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EmployerContactPersonName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 49,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EmployerContactPersonPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 50,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EmployerContactReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 51,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsuredSContactPersonSName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 52,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredSContactPersonName: { aliasOf: 'InsuredSContactPersonSName' },
        InsuredSContactPersonPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 53,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredSContactPersonTelephoneNumber: { aliasOf: 'InsuredSContactPersonPhoneNumber' },
        InsuredSContactPersonReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 54,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        RelationshipToThePatientStartDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 55,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RelationshipToThePatientStopDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 56,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuranceCoContactReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 57,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsuranceCompanyContactReason: { aliasOf: 'InsuranceCoContactReason' },
        InsuranceCoContactPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 58,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        InsuranceCompanyContactPhoneNumber: { aliasOf: 'InsuranceCoContactPhoneNumber' },
        PolicyScope: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 59,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PolicySource: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 60,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientMemberNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 61,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GuarantorSRelationshipToInsured: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 62,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsuredSPhoneNumberHome: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 63,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredSTelephoneNumberHome: { aliasOf: 'InsuredSPhoneNumberHome' },
        InsuredSEmployerPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 64,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredSEmployerTelephoneNumber: { aliasOf: 'InsuredSEmployerPhoneNumber' },
        MilitaryHandicappedProgram: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 65,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SuspendFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 66,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CopayLimitFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 67,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CoPayLimitFlag: { aliasOf: 'CopayLimitFlag' },
        StoplossLimitFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 68,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsuredOrganizationNameAndId: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 69,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredOrganizationNameAndID: { aliasOf: 'InsuredOrganizationNameAndId' },
        InsuredEmployerOrganizationNameAndId: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 70,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InsuredEmployerOrganizationNameAndID: { aliasOf: 'InsuredEmployerOrganizationNameAndId' },
        Race: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 71,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PatientSRelationshipToInsured: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 72,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientRelationshipToInsured: { aliasOf: 'PatientSRelationshipToInsured' },
        HCFAPatientSRelationshipToInsured: { aliasOf: 'PatientSRelationshipToInsured' },
        CMSPatientSRelationshipToInsured: { aliasOf: 'PatientSRelationshipToInsured' },
    };

    static componentsByIndex = [
        '',
        'InsuredSEmployeeId',
        'InsuredSSocialSecurityNumber',
        'InsuredSEmployerSNameAndId',
        'EmployerInformationData',
        'MailClaimParty',
        'MedicareHealthInsCardNumber',
        'MedicaidCaseName',
        'MedicaidCaseNumber',
        'MilitarySponsorName',
        'MilitaryIdNumber',
        'DependentOfMilitaryRecipient',
        'MilitaryOrganization',
        'MilitaryStation',
        'MilitaryService',
        'MilitaryRankGrade',
        'MilitaryStatus',
        'MilitaryRetireDate',
        'MilitaryNonAvailCertOnFile',
        'BabyCoverage',
        'CombineBabyBill',
        'BloodDeductible',
        'SpecialCoverageApprovalName',
        'SpecialCoverageApprovalTitle',
        'NonCoveredInsuranceCode',
        'PayorId',
        'PayorSubscriberId',
        'EligibilitySource',
        'RoomCoverageTypeAmount',
        'PolicyTypeAmount',
        'DailyDeductible',
        'LivingDependency',
        'AmbulatoryStatus',
        'Citizenship',
        'PrimaryLanguage',
        'LivingArrangement',
        'PublicityCode',
        'ProtectionIndicator',
        'StudentIndicator',
        'Religion',
        'MotherSMaidenName',
        'Nationality',
        'EthnicGroup',
        'MaritalStatus',
        'InsuredSEmploymentStartDate',
        'EmploymentStopDate',
        'JobTitle',
        'JobCodeClass',
        'JobStatus',
        'EmployerContactPersonName',
        'EmployerContactPersonPhoneNumber',
        'EmployerContactReason',
        'InsuredSContactPersonSName',
        'InsuredSContactPersonPhoneNumber',
        'InsuredSContactPersonReason',
        'RelationshipToThePatientStartDate',
        'RelationshipToThePatientStopDate',
        'InsuranceCoContactReason',
        'InsuranceCoContactPhoneNumber',
        'PolicyScope',
        'PolicySource',
        'PatientMemberNumber',
        'GuarantorSRelationshipToInsured',
        'InsuredSPhoneNumberHome',
        'InsuredSEmployerPhoneNumber',
        'MilitaryHandicappedProgram',
        'SuspendFlag',
        'CopayLimitFlag',
        'StoplossLimitFlag',
        'InsuredOrganizationNameAndId',
        'InsuredEmployerOrganizationNameAndId',
        'Race',
        'PatientSRelationshipToInsured',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('IN2');
        this.setValues(values);
    }

    get InsuredSEmployeeId() {
        return this.getComponent('InsuredSEmployeeId');
    }

    set InsuredSEmployeeId(value) {
        this.setComponentValue('InsuredSEmployeeId', value);
    }

    get InsuredSEmployeeID() {
        return this.getComponent('InsuredSEmployeeId');
    }

    set InsuredSEmployeeID(value) {
        this.setComponentValue('InsuredSEmployeeId', value);
    }

    get InsuredSSocialSecurityNumber() {
        return this.getComponent('InsuredSSocialSecurityNumber');
    }

    set InsuredSSocialSecurityNumber(value) {
        this.setComponentValue('InsuredSSocialSecurityNumber', value);
    }

    get InsuredSEmployerSNameAndId() {
        return this.getComponent('InsuredSEmployerSNameAndId');
    }

    set InsuredSEmployerSNameAndId(value) {
        this.setComponentValue('InsuredSEmployerSNameAndId', value);
    }

    get InsuredSEmployerName() {
        return this.getComponent('InsuredSEmployerSNameAndId');
    }

    set InsuredSEmployerName(value) {
        this.setComponentValue('InsuredSEmployerSNameAndId', value);
    }

    get InsuredSEmployerSNameAndID() {
        return this.getComponent('InsuredSEmployerSNameAndId');
    }

    set InsuredSEmployerSNameAndID(value) {
        this.setComponentValue('InsuredSEmployerSNameAndId', value);
    }

    get EmployerInformationData() {
        return this.getComponent('EmployerInformationData');
    }

    set EmployerInformationData(value) {
        this.setComponentValue('EmployerInformationData', value);
    }

    get MailClaimParty() {
        return this.getComponent('MailClaimParty');
    }

    set MailClaimParty(value) {
        this.setComponentValue('MailClaimParty', value);
    }

    get MedicareHealthInsCardNumber() {
        return this.getComponent('MedicareHealthInsCardNumber');
    }

    set MedicareHealthInsCardNumber(value) {
        this.setComponentValue('MedicareHealthInsCardNumber', value);
    }

    get MedicaidCaseName() {
        return this.getComponent('MedicaidCaseName');
    }

    set MedicaidCaseName(value) {
        this.setComponentValue('MedicaidCaseName', value);
    }

    get MedicaidCaseNumber() {
        return this.getComponent('MedicaidCaseNumber');
    }

    set MedicaidCaseNumber(value) {
        this.setComponentValue('MedicaidCaseNumber', value);
    }

    get MilitarySponsorName() {
        return this.getComponent('MilitarySponsorName');
    }

    set MilitarySponsorName(value) {
        this.setComponentValue('MilitarySponsorName', value);
    }

    get ChampusSponsorName() {
        return this.getComponent('MilitarySponsorName');
    }

    set ChampusSponsorName(value) {
        this.setComponentValue('MilitarySponsorName', value);
    }

    get MilitaryIdNumber() {
        return this.getComponent('MilitaryIdNumber');
    }

    set MilitaryIdNumber(value) {
        this.setComponentValue('MilitaryIdNumber', value);
    }

    get ChampusIDNumber() {
        return this.getComponent('MilitaryIdNumber');
    }

    set ChampusIDNumber(value) {
        this.setComponentValue('MilitaryIdNumber', value);
    }

    get MilitaryIDNumber() {
        return this.getComponent('MilitaryIdNumber');
    }

    set MilitaryIDNumber(value) {
        this.setComponentValue('MilitaryIdNumber', value);
    }

    get DependentOfMilitaryRecipient() {
        return this.getComponent('DependentOfMilitaryRecipient');
    }

    set DependentOfMilitaryRecipient(value) {
        this.setComponentValue('DependentOfMilitaryRecipient', value);
    }

    get DependentOfChampusRecipient() {
        return this.getComponent('DependentOfMilitaryRecipient');
    }

    set DependentOfChampusRecipient(value) {
        this.setComponentValue('DependentOfMilitaryRecipient', value);
    }

    get MilitaryOrganization() {
        return this.getComponent('MilitaryOrganization');
    }

    set MilitaryOrganization(value) {
        this.setComponentValue('MilitaryOrganization', value);
    }

    get ChampusOrganization() {
        return this.getComponent('MilitaryOrganization');
    }

    set ChampusOrganization(value) {
        this.setComponentValue('MilitaryOrganization', value);
    }

    get MilitaryStation() {
        return this.getComponent('MilitaryStation');
    }

    set MilitaryStation(value) {
        this.setComponentValue('MilitaryStation', value);
    }

    get ChampusStation() {
        return this.getComponent('MilitaryStation');
    }

    set ChampusStation(value) {
        this.setComponentValue('MilitaryStation', value);
    }

    get MilitaryService() {
        return this.getComponent('MilitaryService');
    }

    set MilitaryService(value) {
        this.setComponentValue('MilitaryService', value);
    }

    get ChampusService() {
        return this.getComponent('MilitaryService');
    }

    set ChampusService(value) {
        this.setComponentValue('MilitaryService', value);
    }

    get MilitaryRankGrade() {
        return this.getComponent('MilitaryRankGrade');
    }

    set MilitaryRankGrade(value) {
        this.setComponentValue('MilitaryRankGrade', value);
    }

    get ChampusRankGrade() {
        return this.getComponent('MilitaryRankGrade');
    }

    set ChampusRankGrade(value) {
        this.setComponentValue('MilitaryRankGrade', value);
    }

    get MilitaryStatus() {
        return this.getComponent('MilitaryStatus');
    }

    set MilitaryStatus(value) {
        this.setComponentValue('MilitaryStatus', value);
    }

    get ChampusStatus() {
        return this.getComponent('MilitaryStatus');
    }

    set ChampusStatus(value) {
        this.setComponentValue('MilitaryStatus', value);
    }

    get MilitaryRetireDate() {
        return this.getComponent('MilitaryRetireDate');
    }

    set MilitaryRetireDate(value) {
        this.setComponentValue('MilitaryRetireDate', value);
    }

    get ChampusRetireDate() {
        return this.getComponent('MilitaryRetireDate');
    }

    set ChampusRetireDate(value) {
        this.setComponentValue('MilitaryRetireDate', value);
    }

    get MilitaryNonAvailCertOnFile() {
        return this.getComponent('MilitaryNonAvailCertOnFile');
    }

    set MilitaryNonAvailCertOnFile(value) {
        this.setComponentValue('MilitaryNonAvailCertOnFile', value);
    }

    get ChampusNonAvailCertOnFile() {
        return this.getComponent('MilitaryNonAvailCertOnFile');
    }

    set ChampusNonAvailCertOnFile(value) {
        this.setComponentValue('MilitaryNonAvailCertOnFile', value);
    }

    get BabyCoverage() {
        return this.getComponent('BabyCoverage');
    }

    set BabyCoverage(value) {
        this.setComponentValue('BabyCoverage', value);
    }

    get CombineBabyBill() {
        return this.getComponent('CombineBabyBill');
    }

    set CombineBabyBill(value) {
        this.setComponentValue('CombineBabyBill', value);
    }

    get BloodDeductible() {
        return this.getComponent('BloodDeductible');
    }

    set BloodDeductible(value) {
        this.setComponentValue('BloodDeductible', value);
    }

    get SpecialCoverageApprovalName() {
        return this.getComponent('SpecialCoverageApprovalName');
    }

    set SpecialCoverageApprovalName(value) {
        this.setComponentValue('SpecialCoverageApprovalName', value);
    }

    get SpecialCoverageApprovalTitle() {
        return this.getComponent('SpecialCoverageApprovalTitle');
    }

    set SpecialCoverageApprovalTitle(value) {
        this.setComponentValue('SpecialCoverageApprovalTitle', value);
    }

    get NonCoveredInsuranceCode() {
        return this.getComponent('NonCoveredInsuranceCode');
    }

    set NonCoveredInsuranceCode(value) {
        this.setComponentValue('NonCoveredInsuranceCode', value);
    }

    get PayorId() {
        return this.getComponent('PayorId');
    }

    set PayorId(value) {
        this.setComponentValue('PayorId', value);
    }

    get PayorID() {
        return this.getComponent('PayorId');
    }

    set PayorID(value) {
        this.setComponentValue('PayorId', value);
    }

    get PayorSubscriberId() {
        return this.getComponent('PayorSubscriberId');
    }

    set PayorSubscriberId(value) {
        this.setComponentValue('PayorSubscriberId', value);
    }

    get PayorSubscriberID() {
        return this.getComponent('PayorSubscriberId');
    }

    set PayorSubscriberID(value) {
        this.setComponentValue('PayorSubscriberId', value);
    }

    get EligibilitySource() {
        return this.getComponent('EligibilitySource');
    }

    set EligibilitySource(value) {
        this.setComponentValue('EligibilitySource', value);
    }

    get RoomCoverageTypeAmount() {
        return this.getComponent('RoomCoverageTypeAmount');
    }

    set RoomCoverageTypeAmount(value) {
        this.setComponentValue('RoomCoverageTypeAmount', value);
    }

    get PolicyTypeAmount() {
        return this.getComponent('PolicyTypeAmount');
    }

    set PolicyTypeAmount(value) {
        this.setComponentValue('PolicyTypeAmount', value);
    }

    get DailyDeductible() {
        return this.getComponent('DailyDeductible');
    }

    set DailyDeductible(value) {
        this.setComponentValue('DailyDeductible', value);
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

    get MotherSMaidenName() {
        return this.getComponent('MotherSMaidenName');
    }

    set MotherSMaidenName(value) {
        this.setComponentValue('MotherSMaidenName', value);
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

    get MaritalStatus() {
        return this.getComponent('MaritalStatus');
    }

    set MaritalStatus(value) {
        this.setComponentValue('MaritalStatus', value);
    }

    get InsuredSEmploymentStartDate() {
        return this.getComponent('InsuredSEmploymentStartDate');
    }

    set InsuredSEmploymentStartDate(value) {
        this.setComponentValue('InsuredSEmploymentStartDate', value);
    }

    get EmploymentStartDate() {
        return this.getComponent('InsuredSEmploymentStartDate');
    }

    set EmploymentStartDate(value) {
        this.setComponentValue('InsuredSEmploymentStartDate', value);
    }

    get EmploymentStopDate() {
        return this.getComponent('EmploymentStopDate');
    }

    set EmploymentStopDate(value) {
        this.setComponentValue('EmploymentStopDate', value);
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

    get JobStatus() {
        return this.getComponent('JobStatus');
    }

    set JobStatus(value) {
        this.setComponentValue('JobStatus', value);
    }

    get EmployerContactPersonName() {
        return this.getComponent('EmployerContactPersonName');
    }

    set EmployerContactPersonName(value) {
        this.setComponentValue('EmployerContactPersonName', value);
    }

    get EmployerContactPersonPhoneNumber() {
        return this.getComponent('EmployerContactPersonPhoneNumber');
    }

    set EmployerContactPersonPhoneNumber(value) {
        this.setComponentValue('EmployerContactPersonPhoneNumber', value);
    }

    get EmployerContactReason() {
        return this.getComponent('EmployerContactReason');
    }

    set EmployerContactReason(value) {
        this.setComponentValue('EmployerContactReason', value);
    }

    get InsuredSContactPersonSName() {
        return this.getComponent('InsuredSContactPersonSName');
    }

    set InsuredSContactPersonSName(value) {
        this.setComponentValue('InsuredSContactPersonSName', value);
    }

    get InsuredSContactPersonName() {
        return this.getComponent('InsuredSContactPersonSName');
    }

    set InsuredSContactPersonName(value) {
        this.setComponentValue('InsuredSContactPersonSName', value);
    }

    get InsuredSContactPersonPhoneNumber() {
        return this.getComponent('InsuredSContactPersonPhoneNumber');
    }

    set InsuredSContactPersonPhoneNumber(value) {
        this.setComponentValue('InsuredSContactPersonPhoneNumber', value);
    }

    get InsuredSContactPersonTelephoneNumber() {
        return this.getComponent('InsuredSContactPersonPhoneNumber');
    }

    set InsuredSContactPersonTelephoneNumber(value) {
        this.setComponentValue('InsuredSContactPersonPhoneNumber', value);
    }

    get InsuredSContactPersonReason() {
        return this.getComponent('InsuredSContactPersonReason');
    }

    set InsuredSContactPersonReason(value) {
        this.setComponentValue('InsuredSContactPersonReason', value);
    }

    get RelationshipToThePatientStartDate() {
        return this.getComponent('RelationshipToThePatientStartDate');
    }

    set RelationshipToThePatientStartDate(value) {
        this.setComponentValue('RelationshipToThePatientStartDate', value);
    }

    get RelationshipToThePatientStopDate() {
        return this.getComponent('RelationshipToThePatientStopDate');
    }

    set RelationshipToThePatientStopDate(value) {
        this.setComponentValue('RelationshipToThePatientStopDate', value);
    }

    get InsuranceCoContactReason() {
        return this.getComponent('InsuranceCoContactReason');
    }

    set InsuranceCoContactReason(value) {
        this.setComponentValue('InsuranceCoContactReason', value);
    }

    get InsuranceCompanyContactReason() {
        return this.getComponent('InsuranceCoContactReason');
    }

    set InsuranceCompanyContactReason(value) {
        this.setComponentValue('InsuranceCoContactReason', value);
    }

    get InsuranceCoContactPhoneNumber() {
        return this.getComponent('InsuranceCoContactPhoneNumber');
    }

    set InsuranceCoContactPhoneNumber(value) {
        this.setComponentValue('InsuranceCoContactPhoneNumber', value);
    }

    get InsuranceCompanyContactPhoneNumber() {
        return this.getComponent('InsuranceCoContactPhoneNumber');
    }

    set InsuranceCompanyContactPhoneNumber(value) {
        this.setComponentValue('InsuranceCoContactPhoneNumber', value);
    }

    get PolicyScope() {
        return this.getComponent('PolicyScope');
    }

    set PolicyScope(value) {
        this.setComponentValue('PolicyScope', value);
    }

    get PolicySource() {
        return this.getComponent('PolicySource');
    }

    set PolicySource(value) {
        this.setComponentValue('PolicySource', value);
    }

    get PatientMemberNumber() {
        return this.getComponent('PatientMemberNumber');
    }

    set PatientMemberNumber(value) {
        this.setComponentValue('PatientMemberNumber', value);
    }

    get GuarantorSRelationshipToInsured() {
        return this.getComponent('GuarantorSRelationshipToInsured');
    }

    set GuarantorSRelationshipToInsured(value) {
        this.setComponentValue('GuarantorSRelationshipToInsured', value);
    }

    get InsuredSPhoneNumberHome() {
        return this.getComponent('InsuredSPhoneNumberHome');
    }

    set InsuredSPhoneNumberHome(value) {
        this.setComponentValue('InsuredSPhoneNumberHome', value);
    }

    get InsuredSTelephoneNumberHome() {
        return this.getComponent('InsuredSPhoneNumberHome');
    }

    set InsuredSTelephoneNumberHome(value) {
        this.setComponentValue('InsuredSPhoneNumberHome', value);
    }

    get InsuredSEmployerPhoneNumber() {
        return this.getComponent('InsuredSEmployerPhoneNumber');
    }

    set InsuredSEmployerPhoneNumber(value) {
        this.setComponentValue('InsuredSEmployerPhoneNumber', value);
    }

    get InsuredSEmployerTelephoneNumber() {
        return this.getComponent('InsuredSEmployerPhoneNumber');
    }

    set InsuredSEmployerTelephoneNumber(value) {
        this.setComponentValue('InsuredSEmployerPhoneNumber', value);
    }

    get MilitaryHandicappedProgram() {
        return this.getComponent('MilitaryHandicappedProgram');
    }

    set MilitaryHandicappedProgram(value) {
        this.setComponentValue('MilitaryHandicappedProgram', value);
    }

    get SuspendFlag() {
        return this.getComponent('SuspendFlag');
    }

    set SuspendFlag(value) {
        this.setComponentValue('SuspendFlag', value);
    }

    get CopayLimitFlag() {
        return this.getComponent('CopayLimitFlag');
    }

    set CopayLimitFlag(value) {
        this.setComponentValue('CopayLimitFlag', value);
    }

    get CoPayLimitFlag() {
        return this.getComponent('CopayLimitFlag');
    }

    set CoPayLimitFlag(value) {
        this.setComponentValue('CopayLimitFlag', value);
    }

    get StoplossLimitFlag() {
        return this.getComponent('StoplossLimitFlag');
    }

    set StoplossLimitFlag(value) {
        this.setComponentValue('StoplossLimitFlag', value);
    }

    get InsuredOrganizationNameAndId() {
        return this.getComponent('InsuredOrganizationNameAndId');
    }

    set InsuredOrganizationNameAndId(value) {
        this.setComponentValue('InsuredOrganizationNameAndId', value);
    }

    get InsuredOrganizationNameAndID() {
        return this.getComponent('InsuredOrganizationNameAndId');
    }

    set InsuredOrganizationNameAndID(value) {
        this.setComponentValue('InsuredOrganizationNameAndId', value);
    }

    get InsuredEmployerOrganizationNameAndId() {
        return this.getComponent('InsuredEmployerOrganizationNameAndId');
    }

    set InsuredEmployerOrganizationNameAndId(value) {
        this.setComponentValue('InsuredEmployerOrganizationNameAndId', value);
    }

    get InsuredEmployerOrganizationNameAndID() {
        return this.getComponent('InsuredEmployerOrganizationNameAndId');
    }

    set InsuredEmployerOrganizationNameAndID(value) {
        this.setComponentValue('InsuredEmployerOrganizationNameAndId', value);
    }

    get Race() {
        return this.getComponent('Race');
    }

    set Race(value) {
        this.setComponentValue('Race', value);
    }

    get PatientSRelationshipToInsured() {
        return this.getComponent('PatientSRelationshipToInsured');
    }

    set PatientSRelationshipToInsured(value) {
        this.setComponentValue('PatientSRelationshipToInsured', value);
    }

    get PatientRelationshipToInsured() {
        return this.getComponent('PatientSRelationshipToInsured');
    }

    set PatientRelationshipToInsured(value) {
        this.setComponentValue('PatientSRelationshipToInsured', value);
    }

    get HCFAPatientSRelationshipToInsured() {
        return this.getComponent('PatientSRelationshipToInsured');
    }

    set HCFAPatientSRelationshipToInsured(value) {
        this.setComponentValue('PatientSRelationshipToInsured', value);
    }

    get CMSPatientSRelationshipToInsured() {
        return this.getComponent('PatientSRelationshipToInsured');
    }

    set CMSPatientSRelationshipToInsured(value) {
        this.setComponentValue('PatientSRelationshipToInsured', value);
    }
}
