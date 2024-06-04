import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { FC } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { DLD } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_DLD } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';

export class PV1 extends Segment {
    static components = {
        SetIdPv1: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDPatientVisit: { aliasOf: 'SetIdPv1' },
        SetIDPv1: { aliasOf: 'SetIdPv1' },
        PatientClass: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AssignedPatientLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdmissionType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PreadmitNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PriorPatientLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AttendingDoctor: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ReferringDoctor: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ConsultingDoctor: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        HospitalService: {
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
        TemporaryLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PreadmitTestIndicator: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReAdmissionIndicator: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReadmissionIndicator: { aliasOf: 'ReAdmissionIndicator' },
        AdmitSource: {
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
        AmbulatoryStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 15,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        VipIndicator: {
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
        VIPIndicator: { aliasOf: 'VipIndicator' },
        AdmittingDoctor: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PatientType: {
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
        VisitNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FinancialClass: {
            defaultDataType: FC,
            dataTypes: [{ dataType: FC, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ChargePriceIndicator: {
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
        CourtesyCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CreditRating: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContractCode: {
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
        ContractEffectiveDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContractAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContractPeriod: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 27,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InterestCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransferToBadDebtCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransferToBadDebtDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BadDebtAgencyCode: {
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
        BadDebtTransferAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BadDebtRecoveryAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeleteAccountIndicator: {
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
        DeleteAccountDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DischargeDisposition: {
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
        DischargedToLocation: {
            defaultDataType: DLD,
            dataTypes: [
                { dataType: DLD, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_DLD, versions: ['2.3'] },
            ],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DietType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 38,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ServicingFacility: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 39,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BedStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: ST, versions: ['2.8'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1'] },
            ],
            position: 40,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccountStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 41,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PendingLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 42,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PriorTemporaryLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 43,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdmitDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 44,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DischargeDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 45,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        CurrentPatientBalance: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 46,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalCharges: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 47,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalAdjustments: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 48,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalPayments: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 49,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AlternateVisitId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 50,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AlternateVisitID: { aliasOf: 'AlternateVisitId' },
        VisitIndicator: {
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
        OtherHealthcareProvider: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: XCN, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 52,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ServiceEpisodeDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 53,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ServiceEpisodeIdentifier: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 54,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdPv1',
        'PatientClass',
        'AssignedPatientLocation',
        'AdmissionType',
        'PreadmitNumber',
        'PriorPatientLocation',
        'AttendingDoctor',
        'ReferringDoctor',
        'ConsultingDoctor',
        'HospitalService',
        'TemporaryLocation',
        'PreadmitTestIndicator',
        'ReAdmissionIndicator',
        'AdmitSource',
        'AmbulatoryStatus',
        'VipIndicator',
        'AdmittingDoctor',
        'PatientType',
        'VisitNumber',
        'FinancialClass',
        'ChargePriceIndicator',
        'CourtesyCode',
        'CreditRating',
        'ContractCode',
        'ContractEffectiveDate',
        'ContractAmount',
        'ContractPeriod',
        'InterestCode',
        'TransferToBadDebtCode',
        'TransferToBadDebtDate',
        'BadDebtAgencyCode',
        'BadDebtTransferAmount',
        'BadDebtRecoveryAmount',
        'DeleteAccountIndicator',
        'DeleteAccountDate',
        'DischargeDisposition',
        'DischargedToLocation',
        'DietType',
        'ServicingFacility',
        'BedStatus',
        'AccountStatus',
        'PendingLocation',
        'PriorTemporaryLocation',
        'AdmitDateTime',
        'DischargeDateTime',
        'CurrentPatientBalance',
        'TotalCharges',
        'TotalAdjustments',
        'TotalPayments',
        'AlternateVisitId',
        'VisitIndicator',
        'OtherHealthcareProvider',
        'ServiceEpisodeDescription',
        'ServiceEpisodeIdentifier',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PV1');
        this.setValues(values);
    }

    get SetIdPv1() {
        return this.getComponent('SetIdPv1');
    }

    set SetIdPv1(value) {
        this.setComponentValue('SetIdPv1', value);
    }

    get SetIDPatientVisit() {
        return this.getComponent('SetIdPv1');
    }

    set SetIDPatientVisit(value) {
        this.setComponentValue('SetIdPv1', value);
    }

    get SetIDPv1() {
        return this.getComponent('SetIdPv1');
    }

    set SetIDPv1(value) {
        this.setComponentValue('SetIdPv1', value);
    }

    get PatientClass() {
        return this.getComponent('PatientClass');
    }

    set PatientClass(value) {
        this.setComponentValue('PatientClass', value);
    }

    get AssignedPatientLocation() {
        return this.getComponent('AssignedPatientLocation');
    }

    set AssignedPatientLocation(value) {
        this.setComponentValue('AssignedPatientLocation', value);
    }

    get AdmissionType() {
        return this.getComponent('AdmissionType');
    }

    set AdmissionType(value) {
        this.setComponentValue('AdmissionType', value);
    }

    get PreadmitNumber() {
        return this.getComponent('PreadmitNumber');
    }

    set PreadmitNumber(value) {
        this.setComponentValue('PreadmitNumber', value);
    }

    get PriorPatientLocation() {
        return this.getComponent('PriorPatientLocation');
    }

    set PriorPatientLocation(value) {
        this.setComponentValue('PriorPatientLocation', value);
    }

    get AttendingDoctor() {
        return this.getComponent('AttendingDoctor');
    }

    set AttendingDoctor(value) {
        this.setComponentValue('AttendingDoctor', value);
    }

    get ReferringDoctor() {
        return this.getComponent('ReferringDoctor');
    }

    set ReferringDoctor(value) {
        this.setComponentValue('ReferringDoctor', value);
    }

    get ConsultingDoctor() {
        return this.getComponent('ConsultingDoctor');
    }

    set ConsultingDoctor(value) {
        this.setComponentValue('ConsultingDoctor', value);
    }

    get HospitalService() {
        return this.getComponent('HospitalService');
    }

    set HospitalService(value) {
        this.setComponentValue('HospitalService', value);
    }

    get TemporaryLocation() {
        return this.getComponent('TemporaryLocation');
    }

    set TemporaryLocation(value) {
        this.setComponentValue('TemporaryLocation', value);
    }

    get PreadmitTestIndicator() {
        return this.getComponent('PreadmitTestIndicator');
    }

    set PreadmitTestIndicator(value) {
        this.setComponentValue('PreadmitTestIndicator', value);
    }

    get ReAdmissionIndicator() {
        return this.getComponent('ReAdmissionIndicator');
    }

    set ReAdmissionIndicator(value) {
        this.setComponentValue('ReAdmissionIndicator', value);
    }

    get ReadmissionIndicator() {
        return this.getComponent('ReAdmissionIndicator');
    }

    set ReadmissionIndicator(value) {
        this.setComponentValue('ReAdmissionIndicator', value);
    }

    get AdmitSource() {
        return this.getComponent('AdmitSource');
    }

    set AdmitSource(value) {
        this.setComponentValue('AdmitSource', value);
    }

    get AmbulatoryStatus() {
        return this.getComponent('AmbulatoryStatus');
    }

    set AmbulatoryStatus(value) {
        this.setComponentValue('AmbulatoryStatus', value);
    }

    get VipIndicator() {
        return this.getComponent('VipIndicator');
    }

    set VipIndicator(value) {
        this.setComponentValue('VipIndicator', value);
    }

    get VIPIndicator() {
        return this.getComponent('VipIndicator');
    }

    set VIPIndicator(value) {
        this.setComponentValue('VipIndicator', value);
    }

    get AdmittingDoctor() {
        return this.getComponent('AdmittingDoctor');
    }

    set AdmittingDoctor(value) {
        this.setComponentValue('AdmittingDoctor', value);
    }

    get PatientType() {
        return this.getComponent('PatientType');
    }

    set PatientType(value) {
        this.setComponentValue('PatientType', value);
    }

    get VisitNumber() {
        return this.getComponent('VisitNumber');
    }

    set VisitNumber(value) {
        this.setComponentValue('VisitNumber', value);
    }

    get FinancialClass() {
        return this.getComponent('FinancialClass');
    }

    set FinancialClass(value) {
        this.setComponentValue('FinancialClass', value);
    }

    get ChargePriceIndicator() {
        return this.getComponent('ChargePriceIndicator');
    }

    set ChargePriceIndicator(value) {
        this.setComponentValue('ChargePriceIndicator', value);
    }

    get CourtesyCode() {
        return this.getComponent('CourtesyCode');
    }

    set CourtesyCode(value) {
        this.setComponentValue('CourtesyCode', value);
    }

    get CreditRating() {
        return this.getComponent('CreditRating');
    }

    set CreditRating(value) {
        this.setComponentValue('CreditRating', value);
    }

    get ContractCode() {
        return this.getComponent('ContractCode');
    }

    set ContractCode(value) {
        this.setComponentValue('ContractCode', value);
    }

    get ContractEffectiveDate() {
        return this.getComponent('ContractEffectiveDate');
    }

    set ContractEffectiveDate(value) {
        this.setComponentValue('ContractEffectiveDate', value);
    }

    get ContractAmount() {
        return this.getComponent('ContractAmount');
    }

    set ContractAmount(value) {
        this.setComponentValue('ContractAmount', value);
    }

    get ContractPeriod() {
        return this.getComponent('ContractPeriod');
    }

    set ContractPeriod(value) {
        this.setComponentValue('ContractPeriod', value);
    }

    get InterestCode() {
        return this.getComponent('InterestCode');
    }

    set InterestCode(value) {
        this.setComponentValue('InterestCode', value);
    }

    get TransferToBadDebtCode() {
        return this.getComponent('TransferToBadDebtCode');
    }

    set TransferToBadDebtCode(value) {
        this.setComponentValue('TransferToBadDebtCode', value);
    }

    get TransferToBadDebtDate() {
        return this.getComponent('TransferToBadDebtDate');
    }

    set TransferToBadDebtDate(value) {
        this.setComponentValue('TransferToBadDebtDate', value);
    }

    get BadDebtAgencyCode() {
        return this.getComponent('BadDebtAgencyCode');
    }

    set BadDebtAgencyCode(value) {
        this.setComponentValue('BadDebtAgencyCode', value);
    }

    get BadDebtTransferAmount() {
        return this.getComponent('BadDebtTransferAmount');
    }

    set BadDebtTransferAmount(value) {
        this.setComponentValue('BadDebtTransferAmount', value);
    }

    get BadDebtRecoveryAmount() {
        return this.getComponent('BadDebtRecoveryAmount');
    }

    set BadDebtRecoveryAmount(value) {
        this.setComponentValue('BadDebtRecoveryAmount', value);
    }

    get DeleteAccountIndicator() {
        return this.getComponent('DeleteAccountIndicator');
    }

    set DeleteAccountIndicator(value) {
        this.setComponentValue('DeleteAccountIndicator', value);
    }

    get DeleteAccountDate() {
        return this.getComponent('DeleteAccountDate');
    }

    set DeleteAccountDate(value) {
        this.setComponentValue('DeleteAccountDate', value);
    }

    get DischargeDisposition() {
        return this.getComponent('DischargeDisposition');
    }

    set DischargeDisposition(value) {
        this.setComponentValue('DischargeDisposition', value);
    }

    get DischargedToLocation() {
        return this.getComponent('DischargedToLocation');
    }

    set DischargedToLocation(value) {
        this.setComponentValue('DischargedToLocation', value);
    }

    get DietType() {
        return this.getComponent('DietType');
    }

    set DietType(value) {
        this.setComponentValue('DietType', value);
    }

    get ServicingFacility() {
        return this.getComponent('ServicingFacility');
    }

    set ServicingFacility(value) {
        this.setComponentValue('ServicingFacility', value);
    }

    get BedStatus() {
        return this.getComponent('BedStatus');
    }

    set BedStatus(value) {
        this.setComponentValue('BedStatus', value);
    }

    get AccountStatus() {
        return this.getComponent('AccountStatus');
    }

    set AccountStatus(value) {
        this.setComponentValue('AccountStatus', value);
    }

    get PendingLocation() {
        return this.getComponent('PendingLocation');
    }

    set PendingLocation(value) {
        this.setComponentValue('PendingLocation', value);
    }

    get PriorTemporaryLocation() {
        return this.getComponent('PriorTemporaryLocation');
    }

    set PriorTemporaryLocation(value) {
        this.setComponentValue('PriorTemporaryLocation', value);
    }

    get AdmitDateTime() {
        return this.getComponent('AdmitDateTime');
    }

    set AdmitDateTime(value) {
        this.setComponentValue('AdmitDateTime', value);
    }

    get DischargeDateTime() {
        return this.getComponent('DischargeDateTime');
    }

    set DischargeDateTime(value) {
        this.setComponentValue('DischargeDateTime', value);
    }

    get CurrentPatientBalance() {
        return this.getComponent('CurrentPatientBalance');
    }

    set CurrentPatientBalance(value) {
        this.setComponentValue('CurrentPatientBalance', value);
    }

    get TotalCharges() {
        return this.getComponent('TotalCharges');
    }

    set TotalCharges(value) {
        this.setComponentValue('TotalCharges', value);
    }

    get TotalAdjustments() {
        return this.getComponent('TotalAdjustments');
    }

    set TotalAdjustments(value) {
        this.setComponentValue('TotalAdjustments', value);
    }

    get TotalPayments() {
        return this.getComponent('TotalPayments');
    }

    set TotalPayments(value) {
        this.setComponentValue('TotalPayments', value);
    }

    get AlternateVisitId() {
        return this.getComponent('AlternateVisitId');
    }

    set AlternateVisitId(value) {
        this.setComponentValue('AlternateVisitId', value);
    }

    get AlternateVisitID() {
        return this.getComponent('AlternateVisitId');
    }

    set AlternateVisitID(value) {
        this.setComponentValue('AlternateVisitId', value);
    }

    get VisitIndicator() {
        return this.getComponent('VisitIndicator');
    }

    set VisitIndicator(value) {
        this.setComponentValue('VisitIndicator', value);
    }

    get OtherHealthcareProvider() {
        return this.getComponent('OtherHealthcareProvider');
    }

    set OtherHealthcareProvider(value) {
        this.setComponentValue('OtherHealthcareProvider', value);
    }

    get ServiceEpisodeDescription() {
        return this.getComponent('ServiceEpisodeDescription');
    }

    set ServiceEpisodeDescription(value) {
        this.setComponentValue('ServiceEpisodeDescription', value);
    }

    get ServiceEpisodeIdentifier() {
        return this.getComponent('ServiceEpisodeIdentifier');
    }

    set ServiceEpisodeIdentifier(value) {
        this.setComponentValue('ServiceEpisodeIdentifier', value);
    }
}
