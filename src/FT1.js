import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DR } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';

export class FT1 extends Segment {
    static components = {
        SetIdFt1: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIdFinancialTransaction: { aliasOf: 'SetIdFt1' },
        TransactionId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionBatchId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionDate: {
            defaultDataType: DR,
            dataTypes: [
                { dataType: DR, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionPostingDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionCode: {
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
        TransactionDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionDescriptionAlt: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionDescriptionAlternate: { aliasOf: 'TransactionDescriptionAlt' },
        TransactionQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionAmountExtended: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionAmountUnit: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DepartmentCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        HealthPlanId: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InsurancePlanId: { aliasOf: 'HealthPlanId' },
        InsuranceAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AssignedPatientLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FeeSchedule: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 17,
            isArray: false,
            maxOccurence: 0,
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
        DiagnosisCodeFt1: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 19,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DiagnosisCode: { aliasOf: 'DiagnosisCodeFt1' },
        PerformedByCode: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        OrderedByCode: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        UnitCost: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillerOrderNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EnteredByCode: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ProcedureCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureCodeModifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CNE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 26,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AdvancedBeneficiaryNoticeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MedicallyNecessaryDuplicateProcedureReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NdcCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CNE, versions: ['2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PaymentReferenceId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionReferenceKey: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 31,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PerformingFacility: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 32,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OrderingFacility: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ItemNumber: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 34,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ModelNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecialProcessingCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 36,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ClinicCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReferralNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 38,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AuthorizationNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 39,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ServiceProviderTaxonomyCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 40,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RevenueCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 41,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrescriptionNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 42,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NdcQtyAndUom: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 43,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdFt1',
        'TransactionId',
        'TransactionBatchId',
        'TransactionDate',
        'TransactionPostingDate',
        'TransactionType',
        'TransactionCode',
        'TransactionDescription',
        'TransactionDescriptionAlt',
        'TransactionQuantity',
        'TransactionAmountExtended',
        'TransactionAmountUnit',
        'DepartmentCode',
        'HealthPlanId',
        'InsuranceAmount',
        'AssignedPatientLocation',
        'FeeSchedule',
        'PatientType',
        'DiagnosisCodeFt1',
        'PerformedByCode',
        'OrderedByCode',
        'UnitCost',
        'FillerOrderNumber',
        'EnteredByCode',
        'ProcedureCode',
        'ProcedureCodeModifier',
        'AdvancedBeneficiaryNoticeCode',
        'MedicallyNecessaryDuplicateProcedureReason',
        'NdcCode',
        'PaymentReferenceId',
        'TransactionReferenceKey',
        'PerformingFacility',
        'OrderingFacility',
        'ItemNumber',
        'ModelNumber',
        'SpecialProcessingCode',
        'ClinicCode',
        'ReferralNumber',
        'AuthorizationNumber',
        'ServiceProviderTaxonomyCode',
        'RevenueCode',
        'PrescriptionNumber',
        'NdcQtyAndUom',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('FT1');
        this.setValues(values);
    }

    get SetIdFt1() {
        return this.getComponent('SetIdFt1');
    }

    set SetIdFt1(value) {
        this.setComponentValue('SetIdFt1', value);
    }

    get SetIdFinancialTransaction() {
        return this.getComponent('SetIdFt1');
    }

    set SetIdFinancialTransaction(value) {
        this.setComponentValue('SetIdFt1', value);
    }

    get TransactionId() {
        return this.getComponent('TransactionId');
    }

    set TransactionId(value) {
        this.setComponentValue('TransactionId', value);
    }

    get TransactionBatchId() {
        return this.getComponent('TransactionBatchId');
    }

    set TransactionBatchId(value) {
        this.setComponentValue('TransactionBatchId', value);
    }

    get TransactionDate() {
        return this.getComponent('TransactionDate');
    }

    set TransactionDate(value) {
        this.setComponentValue('TransactionDate', value);
    }

    get TransactionPostingDate() {
        return this.getComponent('TransactionPostingDate');
    }

    set TransactionPostingDate(value) {
        this.setComponentValue('TransactionPostingDate', value);
    }

    get TransactionType() {
        return this.getComponent('TransactionType');
    }

    set TransactionType(value) {
        this.setComponentValue('TransactionType', value);
    }

    get TransactionCode() {
        return this.getComponent('TransactionCode');
    }

    set TransactionCode(value) {
        this.setComponentValue('TransactionCode', value);
    }

    get TransactionDescription() {
        return this.getComponent('TransactionDescription');
    }

    set TransactionDescription(value) {
        this.setComponentValue('TransactionDescription', value);
    }

    get TransactionDescriptionAlt() {
        return this.getComponent('TransactionDescriptionAlt');
    }

    set TransactionDescriptionAlt(value) {
        this.setComponentValue('TransactionDescriptionAlt', value);
    }

    get TransactionDescriptionAlternate() {
        return this.getComponent('TransactionDescriptionAlt');
    }

    set TransactionDescriptionAlternate(value) {
        this.setComponentValue('TransactionDescriptionAlt', value);
    }

    get TransactionQuantity() {
        return this.getComponent('TransactionQuantity');
    }

    set TransactionQuantity(value) {
        this.setComponentValue('TransactionQuantity', value);
    }

    get TransactionAmountExtended() {
        return this.getComponent('TransactionAmountExtended');
    }

    set TransactionAmountExtended(value) {
        this.setComponentValue('TransactionAmountExtended', value);
    }

    get TransactionAmountUnit() {
        return this.getComponent('TransactionAmountUnit');
    }

    set TransactionAmountUnit(value) {
        this.setComponentValue('TransactionAmountUnit', value);
    }

    get DepartmentCode() {
        return this.getComponent('DepartmentCode');
    }

    set DepartmentCode(value) {
        this.setComponentValue('DepartmentCode', value);
    }

    get HealthPlanId() {
        return this.getComponent('HealthPlanId');
    }

    set HealthPlanId(value) {
        this.setComponentValue('HealthPlanId', value);
    }

    get InsurancePlanId() {
        return this.getComponent('HealthPlanId');
    }

    set InsurancePlanId(value) {
        this.setComponentValue('HealthPlanId', value);
    }

    get InsuranceAmount() {
        return this.getComponent('InsuranceAmount');
    }

    set InsuranceAmount(value) {
        this.setComponentValue('InsuranceAmount', value);
    }

    get AssignedPatientLocation() {
        return this.getComponent('AssignedPatientLocation');
    }

    set AssignedPatientLocation(value) {
        this.setComponentValue('AssignedPatientLocation', value);
    }

    get FeeSchedule() {
        return this.getComponent('FeeSchedule');
    }

    set FeeSchedule(value) {
        this.setComponentValue('FeeSchedule', value);
    }

    get PatientType() {
        return this.getComponent('PatientType');
    }

    set PatientType(value) {
        this.setComponentValue('PatientType', value);
    }

    get DiagnosisCodeFt1() {
        return this.getComponent('DiagnosisCodeFt1');
    }

    set DiagnosisCodeFt1(value) {
        this.setComponentValue('DiagnosisCodeFt1', value);
    }

    get DiagnosisCode() {
        return this.getComponent('DiagnosisCodeFt1');
    }

    set DiagnosisCode(value) {
        this.setComponentValue('DiagnosisCodeFt1', value);
    }

    get PerformedByCode() {
        return this.getComponent('PerformedByCode');
    }

    set PerformedByCode(value) {
        this.setComponentValue('PerformedByCode', value);
    }

    get OrderedByCode() {
        return this.getComponent('OrderedByCode');
    }

    set OrderedByCode(value) {
        this.setComponentValue('OrderedByCode', value);
    }

    get UnitCost() {
        return this.getComponent('UnitCost');
    }

    set UnitCost(value) {
        this.setComponentValue('UnitCost', value);
    }

    get FillerOrderNumber() {
        return this.getComponent('FillerOrderNumber');
    }

    set FillerOrderNumber(value) {
        this.setComponentValue('FillerOrderNumber', value);
    }

    get EnteredByCode() {
        return this.getComponent('EnteredByCode');
    }

    set EnteredByCode(value) {
        this.setComponentValue('EnteredByCode', value);
    }

    get ProcedureCode() {
        return this.getComponent('ProcedureCode');
    }

    set ProcedureCode(value) {
        this.setComponentValue('ProcedureCode', value);
    }

    get ProcedureCodeModifier() {
        return this.getComponent('ProcedureCodeModifier');
    }

    set ProcedureCodeModifier(value) {
        this.setComponentValue('ProcedureCodeModifier', value);
    }

    get AdvancedBeneficiaryNoticeCode() {
        return this.getComponent('AdvancedBeneficiaryNoticeCode');
    }

    set AdvancedBeneficiaryNoticeCode(value) {
        this.setComponentValue('AdvancedBeneficiaryNoticeCode', value);
    }

    get MedicallyNecessaryDuplicateProcedureReason() {
        return this.getComponent('MedicallyNecessaryDuplicateProcedureReason');
    }

    set MedicallyNecessaryDuplicateProcedureReason(value) {
        this.setComponentValue('MedicallyNecessaryDuplicateProcedureReason', value);
    }

    get NdcCode() {
        return this.getComponent('NdcCode');
    }

    set NdcCode(value) {
        this.setComponentValue('NdcCode', value);
    }

    get PaymentReferenceId() {
        return this.getComponent('PaymentReferenceId');
    }

    set PaymentReferenceId(value) {
        this.setComponentValue('PaymentReferenceId', value);
    }

    get TransactionReferenceKey() {
        return this.getComponent('TransactionReferenceKey');
    }

    set TransactionReferenceKey(value) {
        this.setComponentValue('TransactionReferenceKey', value);
    }

    get PerformingFacility() {
        return this.getComponent('PerformingFacility');
    }

    set PerformingFacility(value) {
        this.setComponentValue('PerformingFacility', value);
    }

    get OrderingFacility() {
        return this.getComponent('OrderingFacility');
    }

    set OrderingFacility(value) {
        this.setComponentValue('OrderingFacility', value);
    }

    get ItemNumber() {
        return this.getComponent('ItemNumber');
    }

    set ItemNumber(value) {
        this.setComponentValue('ItemNumber', value);
    }

    get ModelNumber() {
        return this.getComponent('ModelNumber');
    }

    set ModelNumber(value) {
        this.setComponentValue('ModelNumber', value);
    }

    get SpecialProcessingCode() {
        return this.getComponent('SpecialProcessingCode');
    }

    set SpecialProcessingCode(value) {
        this.setComponentValue('SpecialProcessingCode', value);
    }

    get ClinicCode() {
        return this.getComponent('ClinicCode');
    }

    set ClinicCode(value) {
        this.setComponentValue('ClinicCode', value);
    }

    get ReferralNumber() {
        return this.getComponent('ReferralNumber');
    }

    set ReferralNumber(value) {
        this.setComponentValue('ReferralNumber', value);
    }

    get AuthorizationNumber() {
        return this.getComponent('AuthorizationNumber');
    }

    set AuthorizationNumber(value) {
        this.setComponentValue('AuthorizationNumber', value);
    }

    get ServiceProviderTaxonomyCode() {
        return this.getComponent('ServiceProviderTaxonomyCode');
    }

    set ServiceProviderTaxonomyCode(value) {
        this.setComponentValue('ServiceProviderTaxonomyCode', value);
    }

    get RevenueCode() {
        return this.getComponent('RevenueCode');
    }

    set RevenueCode(value) {
        this.setComponentValue('RevenueCode', value);
    }

    get PrescriptionNumber() {
        return this.getComponent('PrescriptionNumber');
    }

    set PrescriptionNumber(value) {
        this.setComponentValue('PrescriptionNumber', value);
    }

    get NdcQtyAndUom() {
        return this.getComponent('NdcQtyAndUom');
    }

    set NdcQtyAndUom(value) {
        this.setComponentValue('NdcQtyAndUom', value);
    }
}
