import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';

export class PV2 extends Segment {
    static components = {
        PriorPendingLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccommodationCode: {
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
        AdmitReason: {
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
        TransferReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientValuables: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PatientValuablesLocation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VisitUserCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ExpectedAdmitDateTime: {
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
        ExpectedAdmitDate: { aliasOf: 'ExpectedAdmitDateTime' },
        ExpectedDischargeDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedDischargeDate: { aliasOf: 'ExpectedDischargeDateTime' },
        EstimatedLengthOfInpatientStay: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActualLengthOfInpatientStay: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VisitDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReferralSourceCode: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PreviousServiceDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EmploymentIllnessRelatedIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PurgeStatusCode: {
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
        PurgeStatusDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecialProgramCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RetentionIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedNumberOfInsurancePlans: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VisitPublicityCode: {
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
        VisitProtectionIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ClinicOrganizationName: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PatientStatusCode: {
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
        VisitPriorityCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PreviousTreatmentDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedDischargeDisposition: {
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
        SignatureOnFileDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FirstSimilarIllnessDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientChargeAdjustmentCode: {
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
        RecurringServiceCode: {
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
        BillingMediaCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedSurgeryDateAndTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedSurgeryDateTime: { aliasOf: 'ExpectedSurgeryDateAndTime' },
        MilitaryPartnershipCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 34,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MilitaryNonAvailabilityCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MilitaryNonAvailabiltiyCode: { aliasOf: 'MilitaryNonAvailabilityCode' },
        NewbornBabyIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 36,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BabyDetainedIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ModeOfArrivalCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 38,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RecreationalDrugUseCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 39,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AdmissionLevelOfCareCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 40,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrecautionCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 41,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PatientConditionCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 42,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LivingWillCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 43,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrganDonorCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 44,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdvanceDirectiveCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 45,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PatientStatusEffectiveDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 46,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedLoaReturnDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 47,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedPreAdmissionTestingDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 48,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NotifyClergyCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 49,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AdvanceDirectiveLastVerifiedDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 50,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'PriorPendingLocation',
        'AccommodationCode',
        'AdmitReason',
        'TransferReason',
        'PatientValuables',
        'PatientValuablesLocation',
        'VisitUserCode',
        'ExpectedAdmitDateTime',
        'ExpectedDischargeDateTime',
        'EstimatedLengthOfInpatientStay',
        'ActualLengthOfInpatientStay',
        'VisitDescription',
        'ReferralSourceCode',
        'PreviousServiceDate',
        'EmploymentIllnessRelatedIndicator',
        'PurgeStatusCode',
        'PurgeStatusDate',
        'SpecialProgramCode',
        'RetentionIndicator',
        'ExpectedNumberOfInsurancePlans',
        'VisitPublicityCode',
        'VisitProtectionIndicator',
        'ClinicOrganizationName',
        'PatientStatusCode',
        'VisitPriorityCode',
        'PreviousTreatmentDate',
        'ExpectedDischargeDisposition',
        'SignatureOnFileDate',
        'FirstSimilarIllnessDate',
        'PatientChargeAdjustmentCode',
        'RecurringServiceCode',
        'BillingMediaCode',
        'ExpectedSurgeryDateAndTime',
        'MilitaryPartnershipCode',
        'MilitaryNonAvailabilityCode',
        'NewbornBabyIndicator',
        'BabyDetainedIndicator',
        'ModeOfArrivalCode',
        'RecreationalDrugUseCode',
        'AdmissionLevelOfCareCode',
        'PrecautionCode',
        'PatientConditionCode',
        'LivingWillCode',
        'OrganDonorCode',
        'AdvanceDirectiveCode',
        'PatientStatusEffectiveDate',
        'ExpectedLoaReturnDateTime',
        'ExpectedPreAdmissionTestingDateTime',
        'NotifyClergyCode',
        'AdvanceDirectiveLastVerifiedDate',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PV2');
        this.setValues(values);
    }

    get PriorPendingLocation() {
        return this.getComponent('PriorPendingLocation');
    }

    set PriorPendingLocation(value) {
        this.setComponentValue('PriorPendingLocation', value);
    }

    get AccommodationCode() {
        return this.getComponent('AccommodationCode');
    }

    set AccommodationCode(value) {
        this.setComponentValue('AccommodationCode', value);
    }

    get AdmitReason() {
        return this.getComponent('AdmitReason');
    }

    set AdmitReason(value) {
        this.setComponentValue('AdmitReason', value);
    }

    get TransferReason() {
        return this.getComponent('TransferReason');
    }

    set TransferReason(value) {
        this.setComponentValue('TransferReason', value);
    }

    get PatientValuables() {
        return this.getComponent('PatientValuables');
    }

    set PatientValuables(value) {
        this.setComponentValue('PatientValuables', value);
    }

    get PatientValuablesLocation() {
        return this.getComponent('PatientValuablesLocation');
    }

    set PatientValuablesLocation(value) {
        this.setComponentValue('PatientValuablesLocation', value);
    }

    get VisitUserCode() {
        return this.getComponent('VisitUserCode');
    }

    set VisitUserCode(value) {
        this.setComponentValue('VisitUserCode', value);
    }

    get ExpectedAdmitDateTime() {
        return this.getComponent('ExpectedAdmitDateTime');
    }

    set ExpectedAdmitDateTime(value) {
        this.setComponentValue('ExpectedAdmitDateTime', value);
    }

    get ExpectedAdmitDate() {
        return this.getComponent('ExpectedAdmitDateTime');
    }

    set ExpectedAdmitDate(value) {
        this.setComponentValue('ExpectedAdmitDateTime', value);
    }

    get ExpectedDischargeDateTime() {
        return this.getComponent('ExpectedDischargeDateTime');
    }

    set ExpectedDischargeDateTime(value) {
        this.setComponentValue('ExpectedDischargeDateTime', value);
    }

    get ExpectedDischargeDate() {
        return this.getComponent('ExpectedDischargeDateTime');
    }

    set ExpectedDischargeDate(value) {
        this.setComponentValue('ExpectedDischargeDateTime', value);
    }

    get EstimatedLengthOfInpatientStay() {
        return this.getComponent('EstimatedLengthOfInpatientStay');
    }

    set EstimatedLengthOfInpatientStay(value) {
        this.setComponentValue('EstimatedLengthOfInpatientStay', value);
    }

    get ActualLengthOfInpatientStay() {
        return this.getComponent('ActualLengthOfInpatientStay');
    }

    set ActualLengthOfInpatientStay(value) {
        this.setComponentValue('ActualLengthOfInpatientStay', value);
    }

    get VisitDescription() {
        return this.getComponent('VisitDescription');
    }

    set VisitDescription(value) {
        this.setComponentValue('VisitDescription', value);
    }

    get ReferralSourceCode() {
        return this.getComponent('ReferralSourceCode');
    }

    set ReferralSourceCode(value) {
        this.setComponentValue('ReferralSourceCode', value);
    }

    get PreviousServiceDate() {
        return this.getComponent('PreviousServiceDate');
    }

    set PreviousServiceDate(value) {
        this.setComponentValue('PreviousServiceDate', value);
    }

    get EmploymentIllnessRelatedIndicator() {
        return this.getComponent('EmploymentIllnessRelatedIndicator');
    }

    set EmploymentIllnessRelatedIndicator(value) {
        this.setComponentValue('EmploymentIllnessRelatedIndicator', value);
    }

    get PurgeStatusCode() {
        return this.getComponent('PurgeStatusCode');
    }

    set PurgeStatusCode(value) {
        this.setComponentValue('PurgeStatusCode', value);
    }

    get PurgeStatusDate() {
        return this.getComponent('PurgeStatusDate');
    }

    set PurgeStatusDate(value) {
        this.setComponentValue('PurgeStatusDate', value);
    }

    get SpecialProgramCode() {
        return this.getComponent('SpecialProgramCode');
    }

    set SpecialProgramCode(value) {
        this.setComponentValue('SpecialProgramCode', value);
    }

    get RetentionIndicator() {
        return this.getComponent('RetentionIndicator');
    }

    set RetentionIndicator(value) {
        this.setComponentValue('RetentionIndicator', value);
    }

    get ExpectedNumberOfInsurancePlans() {
        return this.getComponent('ExpectedNumberOfInsurancePlans');
    }

    set ExpectedNumberOfInsurancePlans(value) {
        this.setComponentValue('ExpectedNumberOfInsurancePlans', value);
    }

    get VisitPublicityCode() {
        return this.getComponent('VisitPublicityCode');
    }

    set VisitPublicityCode(value) {
        this.setComponentValue('VisitPublicityCode', value);
    }

    get VisitProtectionIndicator() {
        return this.getComponent('VisitProtectionIndicator');
    }

    set VisitProtectionIndicator(value) {
        this.setComponentValue('VisitProtectionIndicator', value);
    }

    get ClinicOrganizationName() {
        return this.getComponent('ClinicOrganizationName');
    }

    set ClinicOrganizationName(value) {
        this.setComponentValue('ClinicOrganizationName', value);
    }

    get PatientStatusCode() {
        return this.getComponent('PatientStatusCode');
    }

    set PatientStatusCode(value) {
        this.setComponentValue('PatientStatusCode', value);
    }

    get VisitPriorityCode() {
        return this.getComponent('VisitPriorityCode');
    }

    set VisitPriorityCode(value) {
        this.setComponentValue('VisitPriorityCode', value);
    }

    get PreviousTreatmentDate() {
        return this.getComponent('PreviousTreatmentDate');
    }

    set PreviousTreatmentDate(value) {
        this.setComponentValue('PreviousTreatmentDate', value);
    }

    get ExpectedDischargeDisposition() {
        return this.getComponent('ExpectedDischargeDisposition');
    }

    set ExpectedDischargeDisposition(value) {
        this.setComponentValue('ExpectedDischargeDisposition', value);
    }

    get SignatureOnFileDate() {
        return this.getComponent('SignatureOnFileDate');
    }

    set SignatureOnFileDate(value) {
        this.setComponentValue('SignatureOnFileDate', value);
    }

    get FirstSimilarIllnessDate() {
        return this.getComponent('FirstSimilarIllnessDate');
    }

    set FirstSimilarIllnessDate(value) {
        this.setComponentValue('FirstSimilarIllnessDate', value);
    }

    get PatientChargeAdjustmentCode() {
        return this.getComponent('PatientChargeAdjustmentCode');
    }

    set PatientChargeAdjustmentCode(value) {
        this.setComponentValue('PatientChargeAdjustmentCode', value);
    }

    get RecurringServiceCode() {
        return this.getComponent('RecurringServiceCode');
    }

    set RecurringServiceCode(value) {
        this.setComponentValue('RecurringServiceCode', value);
    }

    get BillingMediaCode() {
        return this.getComponent('BillingMediaCode');
    }

    set BillingMediaCode(value) {
        this.setComponentValue('BillingMediaCode', value);
    }

    get ExpectedSurgeryDateAndTime() {
        return this.getComponent('ExpectedSurgeryDateAndTime');
    }

    set ExpectedSurgeryDateAndTime(value) {
        this.setComponentValue('ExpectedSurgeryDateAndTime', value);
    }

    get ExpectedSurgeryDateTime() {
        return this.getComponent('ExpectedSurgeryDateAndTime');
    }

    set ExpectedSurgeryDateTime(value) {
        this.setComponentValue('ExpectedSurgeryDateAndTime', value);
    }

    get MilitaryPartnershipCode() {
        return this.getComponent('MilitaryPartnershipCode');
    }

    set MilitaryPartnershipCode(value) {
        this.setComponentValue('MilitaryPartnershipCode', value);
    }

    get MilitaryNonAvailabilityCode() {
        return this.getComponent('MilitaryNonAvailabilityCode');
    }

    set MilitaryNonAvailabilityCode(value) {
        this.setComponentValue('MilitaryNonAvailabilityCode', value);
    }

    get MilitaryNonAvailabiltiyCode() {
        return this.getComponent('MilitaryNonAvailabilityCode');
    }

    set MilitaryNonAvailabiltiyCode(value) {
        this.setComponentValue('MilitaryNonAvailabilityCode', value);
    }

    get NewbornBabyIndicator() {
        return this.getComponent('NewbornBabyIndicator');
    }

    set NewbornBabyIndicator(value) {
        this.setComponentValue('NewbornBabyIndicator', value);
    }

    get BabyDetainedIndicator() {
        return this.getComponent('BabyDetainedIndicator');
    }

    set BabyDetainedIndicator(value) {
        this.setComponentValue('BabyDetainedIndicator', value);
    }

    get ModeOfArrivalCode() {
        return this.getComponent('ModeOfArrivalCode');
    }

    set ModeOfArrivalCode(value) {
        this.setComponentValue('ModeOfArrivalCode', value);
    }

    get RecreationalDrugUseCode() {
        return this.getComponent('RecreationalDrugUseCode');
    }

    set RecreationalDrugUseCode(value) {
        this.setComponentValue('RecreationalDrugUseCode', value);
    }

    get AdmissionLevelOfCareCode() {
        return this.getComponent('AdmissionLevelOfCareCode');
    }

    set AdmissionLevelOfCareCode(value) {
        this.setComponentValue('AdmissionLevelOfCareCode', value);
    }

    get PrecautionCode() {
        return this.getComponent('PrecautionCode');
    }

    set PrecautionCode(value) {
        this.setComponentValue('PrecautionCode', value);
    }

    get PatientConditionCode() {
        return this.getComponent('PatientConditionCode');
    }

    set PatientConditionCode(value) {
        this.setComponentValue('PatientConditionCode', value);
    }

    get LivingWillCode() {
        return this.getComponent('LivingWillCode');
    }

    set LivingWillCode(value) {
        this.setComponentValue('LivingWillCode', value);
    }

    get OrganDonorCode() {
        return this.getComponent('OrganDonorCode');
    }

    set OrganDonorCode(value) {
        this.setComponentValue('OrganDonorCode', value);
    }

    get AdvanceDirectiveCode() {
        return this.getComponent('AdvanceDirectiveCode');
    }

    set AdvanceDirectiveCode(value) {
        this.setComponentValue('AdvanceDirectiveCode', value);
    }

    get PatientStatusEffectiveDate() {
        return this.getComponent('PatientStatusEffectiveDate');
    }

    set PatientStatusEffectiveDate(value) {
        this.setComponentValue('PatientStatusEffectiveDate', value);
    }

    get ExpectedLoaReturnDateTime() {
        return this.getComponent('ExpectedLoaReturnDateTime');
    }

    set ExpectedLoaReturnDateTime(value) {
        this.setComponentValue('ExpectedLoaReturnDateTime', value);
    }

    get ExpectedPreAdmissionTestingDateTime() {
        return this.getComponent('ExpectedPreAdmissionTestingDateTime');
    }

    set ExpectedPreAdmissionTestingDateTime(value) {
        this.setComponentValue('ExpectedPreAdmissionTestingDateTime', value);
    }

    get NotifyClergyCode() {
        return this.getComponent('NotifyClergyCode');
    }

    set NotifyClergyCode(value) {
        this.setComponentValue('NotifyClergyCode', value);
    }

    get AdvanceDirectiveLastVerifiedDate() {
        return this.getComponent('AdvanceDirectiveLastVerifiedDate');
    }

    set AdvanceDirectiveLastVerifiedDate(value) {
        this.setComponentValue('AdvanceDirectiveLastVerifiedDate', value);
    }
}
