import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { MO } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class DRG extends Segment {
    static components = {
        DiagnosticRelatedGroup: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgAssignedDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgApprovalIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgGrouperReviewCode: {
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
        OutlierType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OutlierDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OutlierCost: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgPayor: {
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
        OutlierReimbursement: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConfidentialIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgTransferType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NameOfCoder: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GrouperStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PcclValueCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EffectiveWeight: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MonetaryAmount: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusPatient: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GrouperSoftwareName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GrouperSoftwareVersion: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusFinancialCalculation: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RelativeDiscountSurcharge: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BasicCharge: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalCharge: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DiscountSurcharge: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CalculatedDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusGender: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusAge: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusLengthOfStay: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusSameDayFlag: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusSeparationMode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusWeightAtBirth: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusRespirationMinutes: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusAdmission: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'DiagnosticRelatedGroup',
        'DrgAssignedDateTime',
        'DrgApprovalIndicator',
        'DrgGrouperReviewCode',
        'OutlierType',
        'OutlierDays',
        'OutlierCost',
        'DrgPayor',
        'OutlierReimbursement',
        'ConfidentialIndicator',
        'DrgTransferType',
        'NameOfCoder',
        'GrouperStatus',
        'PcclValueCode',
        'EffectiveWeight',
        'MonetaryAmount',
        'StatusPatient',
        'GrouperSoftwareName',
        'GrouperSoftwareVersion',
        'StatusFinancialCalculation',
        'RelativeDiscountSurcharge',
        'BasicCharge',
        'TotalCharge',
        'DiscountSurcharge',
        'CalculatedDays',
        'StatusGender',
        'StatusAge',
        'StatusLengthOfStay',
        'StatusSameDayFlag',
        'StatusSeparationMode',
        'StatusWeightAtBirth',
        'StatusRespirationMinutes',
        'StatusAdmission',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('DRG');
        this.setValues(values);
    }

    get DiagnosticRelatedGroup() {
        return this.getComponent('DiagnosticRelatedGroup');
    }

    set DiagnosticRelatedGroup(value) {
        this.setComponentValue('DiagnosticRelatedGroup', value);
    }

    get DrgAssignedDateTime() {
        return this.getComponent('DrgAssignedDateTime');
    }

    set DrgAssignedDateTime(value) {
        this.setComponentValue('DrgAssignedDateTime', value);
    }

    get DrgApprovalIndicator() {
        return this.getComponent('DrgApprovalIndicator');
    }

    set DrgApprovalIndicator(value) {
        this.setComponentValue('DrgApprovalIndicator', value);
    }

    get DrgGrouperReviewCode() {
        return this.getComponent('DrgGrouperReviewCode');
    }

    set DrgGrouperReviewCode(value) {
        this.setComponentValue('DrgGrouperReviewCode', value);
    }

    get OutlierType() {
        return this.getComponent('OutlierType');
    }

    set OutlierType(value) {
        this.setComponentValue('OutlierType', value);
    }

    get OutlierDays() {
        return this.getComponent('OutlierDays');
    }

    set OutlierDays(value) {
        this.setComponentValue('OutlierDays', value);
    }

    get OutlierCost() {
        return this.getComponent('OutlierCost');
    }

    set OutlierCost(value) {
        this.setComponentValue('OutlierCost', value);
    }

    get DrgPayor() {
        return this.getComponent('DrgPayor');
    }

    set DrgPayor(value) {
        this.setComponentValue('DrgPayor', value);
    }

    get OutlierReimbursement() {
        return this.getComponent('OutlierReimbursement');
    }

    set OutlierReimbursement(value) {
        this.setComponentValue('OutlierReimbursement', value);
    }

    get ConfidentialIndicator() {
        return this.getComponent('ConfidentialIndicator');
    }

    set ConfidentialIndicator(value) {
        this.setComponentValue('ConfidentialIndicator', value);
    }

    get DrgTransferType() {
        return this.getComponent('DrgTransferType');
    }

    set DrgTransferType(value) {
        this.setComponentValue('DrgTransferType', value);
    }

    get NameOfCoder() {
        return this.getComponent('NameOfCoder');
    }

    set NameOfCoder(value) {
        this.setComponentValue('NameOfCoder', value);
    }

    get GrouperStatus() {
        return this.getComponent('GrouperStatus');
    }

    set GrouperStatus(value) {
        this.setComponentValue('GrouperStatus', value);
    }

    get PcclValueCode() {
        return this.getComponent('PcclValueCode');
    }

    set PcclValueCode(value) {
        this.setComponentValue('PcclValueCode', value);
    }

    get EffectiveWeight() {
        return this.getComponent('EffectiveWeight');
    }

    set EffectiveWeight(value) {
        this.setComponentValue('EffectiveWeight', value);
    }

    get MonetaryAmount() {
        return this.getComponent('MonetaryAmount');
    }

    set MonetaryAmount(value) {
        this.setComponentValue('MonetaryAmount', value);
    }

    get StatusPatient() {
        return this.getComponent('StatusPatient');
    }

    set StatusPatient(value) {
        this.setComponentValue('StatusPatient', value);
    }

    get GrouperSoftwareName() {
        return this.getComponent('GrouperSoftwareName');
    }

    set GrouperSoftwareName(value) {
        this.setComponentValue('GrouperSoftwareName', value);
    }

    get GrouperSoftwareVersion() {
        return this.getComponent('GrouperSoftwareVersion');
    }

    set GrouperSoftwareVersion(value) {
        this.setComponentValue('GrouperSoftwareVersion', value);
    }

    get StatusFinancialCalculation() {
        return this.getComponent('StatusFinancialCalculation');
    }

    set StatusFinancialCalculation(value) {
        this.setComponentValue('StatusFinancialCalculation', value);
    }

    get RelativeDiscountSurcharge() {
        return this.getComponent('RelativeDiscountSurcharge');
    }

    set RelativeDiscountSurcharge(value) {
        this.setComponentValue('RelativeDiscountSurcharge', value);
    }

    get BasicCharge() {
        return this.getComponent('BasicCharge');
    }

    set BasicCharge(value) {
        this.setComponentValue('BasicCharge', value);
    }

    get TotalCharge() {
        return this.getComponent('TotalCharge');
    }

    set TotalCharge(value) {
        this.setComponentValue('TotalCharge', value);
    }

    get DiscountSurcharge() {
        return this.getComponent('DiscountSurcharge');
    }

    set DiscountSurcharge(value) {
        this.setComponentValue('DiscountSurcharge', value);
    }

    get CalculatedDays() {
        return this.getComponent('CalculatedDays');
    }

    set CalculatedDays(value) {
        this.setComponentValue('CalculatedDays', value);
    }

    get StatusGender() {
        return this.getComponent('StatusGender');
    }

    set StatusGender(value) {
        this.setComponentValue('StatusGender', value);
    }

    get StatusAge() {
        return this.getComponent('StatusAge');
    }

    set StatusAge(value) {
        this.setComponentValue('StatusAge', value);
    }

    get StatusLengthOfStay() {
        return this.getComponent('StatusLengthOfStay');
    }

    set StatusLengthOfStay(value) {
        this.setComponentValue('StatusLengthOfStay', value);
    }

    get StatusSameDayFlag() {
        return this.getComponent('StatusSameDayFlag');
    }

    set StatusSameDayFlag(value) {
        this.setComponentValue('StatusSameDayFlag', value);
    }

    get StatusSeparationMode() {
        return this.getComponent('StatusSeparationMode');
    }

    set StatusSeparationMode(value) {
        this.setComponentValue('StatusSeparationMode', value);
    }

    get StatusWeightAtBirth() {
        return this.getComponent('StatusWeightAtBirth');
    }

    set StatusWeightAtBirth(value) {
        this.setComponentValue('StatusWeightAtBirth', value);
    }

    get StatusRespirationMinutes() {
        return this.getComponent('StatusRespirationMinutes');
    }

    set StatusRespirationMinutes(value) {
        this.setComponentValue('StatusRespirationMinutes', value);
    }

    get StatusAdmission() {
        return this.getComponent('StatusAdmission');
    }

    set StatusAdmission(value) {
        this.setComponentValue('StatusAdmission', value);
    }
}
