import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { DR } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';

export class PSL extends Segment {
    static components = {
        ProviderProductServiceLineItemNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayerProductServiceLineItemNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceLineItemSequenceNumber: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProviderTrackingId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayerTrackingId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceLineItemStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceCodeModifier: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: true,
            maxOccurence: 5,
            minOccurence: 1,
        },
        ProductServiceCodeDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceEffectiveDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceExpirationDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceQuantity: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceUnitCost: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfItemsPerUnit: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceGrossAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceBilledAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceClarificationCodeType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 17,
            isArray: true,
            maxOccurence: 20,
            minOccurence: 1,
        },
        ProductServiceClarificationCodeValue: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: true,
            maxOccurence: 20,
            minOccurence: 1,
        },
        HealthDocumentReferenceIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: true,
            maxOccurence: 5,
            minOccurence: 1,
        },
        ProcessingConsiderationCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 20,
            isArray: true,
            maxOccurence: 20,
            minOccurence: 1,
        },
        RestrictedDisclosureIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RelatedProductServiceCodeIndicator: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceAmountForPhysician: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceCostFactor: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CostCenter: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BillingPeriod: {
            defaultDataType: DR,
            dataTypes: [{ dataType: DR, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DaysWithoutBilling: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SessionNo: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExecutingPhysicianId: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResponsiblePhysicianId: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RoleExecutingPhysician: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MedicalRoleExecutingPhysician: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SideOfBody: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfTpSPp: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 34,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TpValuePp: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InternalScalingFactorPp: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 36,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExternalScalingFactorPp: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AmountPp: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 38,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfTpSTechnicalPart: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 39,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TpValueTechnicalPart: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 40,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InternalScalingFactorTechnicalPart: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 41,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExternalScalingFactorTechnicalPart: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 42,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AmountTechnicalPart: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 43,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalAmountProfessionalPartTechnicalPart: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 44,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VatRate: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 45,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MainService: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 46,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Validation: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 47,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Comment: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 48,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ProviderProductServiceLineItemNumber',
        'PayerProductServiceLineItemNumber',
        'ProductServiceLineItemSequenceNumber',
        'ProviderTrackingId',
        'PayerTrackingId',
        'ProductServiceLineItemStatus',
        'ProductServiceCode',
        'ProductServiceCodeModifier',
        'ProductServiceCodeDescription',
        'ProductServiceEffectiveDate',
        'ProductServiceExpirationDate',
        'ProductServiceQuantity',
        'ProductServiceUnitCost',
        'NumberOfItemsPerUnit',
        'ProductServiceGrossAmount',
        'ProductServiceBilledAmount',
        'ProductServiceClarificationCodeType',
        'ProductServiceClarificationCodeValue',
        'HealthDocumentReferenceIdentifier',
        'ProcessingConsiderationCode',
        'RestrictedDisclosureIndicator',
        'RelatedProductServiceCodeIndicator',
        'ProductServiceAmountForPhysician',
        'ProductServiceCostFactor',
        'CostCenter',
        'BillingPeriod',
        'DaysWithoutBilling',
        'SessionNo',
        'ExecutingPhysicianId',
        'ResponsiblePhysicianId',
        'RoleExecutingPhysician',
        'MedicalRoleExecutingPhysician',
        'SideOfBody',
        'NumberOfTpSPp',
        'TpValuePp',
        'InternalScalingFactorPp',
        'ExternalScalingFactorPp',
        'AmountPp',
        'NumberOfTpSTechnicalPart',
        'TpValueTechnicalPart',
        'InternalScalingFactorTechnicalPart',
        'ExternalScalingFactorTechnicalPart',
        'AmountTechnicalPart',
        'TotalAmountProfessionalPartTechnicalPart',
        'VatRate',
        'MainService',
        'Validation',
        'Comment',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PSL');
        this.setValues(values);
    }

    get ProviderProductServiceLineItemNumber() {
        return this.getComponent('ProviderProductServiceLineItemNumber');
    }

    set ProviderProductServiceLineItemNumber(value) {
        this.setComponentValue('ProviderProductServiceLineItemNumber', value);
    }

    get PayerProductServiceLineItemNumber() {
        return this.getComponent('PayerProductServiceLineItemNumber');
    }

    set PayerProductServiceLineItemNumber(value) {
        this.setComponentValue('PayerProductServiceLineItemNumber', value);
    }

    get ProductServiceLineItemSequenceNumber() {
        return this.getComponent('ProductServiceLineItemSequenceNumber');
    }

    set ProductServiceLineItemSequenceNumber(value) {
        this.setComponentValue('ProductServiceLineItemSequenceNumber', value);
    }

    get ProviderTrackingId() {
        return this.getComponent('ProviderTrackingId');
    }

    set ProviderTrackingId(value) {
        this.setComponentValue('ProviderTrackingId', value);
    }

    get PayerTrackingId() {
        return this.getComponent('PayerTrackingId');
    }

    set PayerTrackingId(value) {
        this.setComponentValue('PayerTrackingId', value);
    }

    get ProductServiceLineItemStatus() {
        return this.getComponent('ProductServiceLineItemStatus');
    }

    set ProductServiceLineItemStatus(value) {
        this.setComponentValue('ProductServiceLineItemStatus', value);
    }

    get ProductServiceCode() {
        return this.getComponent('ProductServiceCode');
    }

    set ProductServiceCode(value) {
        this.setComponentValue('ProductServiceCode', value);
    }

    get ProductServiceCodeModifier() {
        return this.getComponent('ProductServiceCodeModifier');
    }

    set ProductServiceCodeModifier(value) {
        this.setComponentValue('ProductServiceCodeModifier', value);
    }

    get ProductServiceCodeDescription() {
        return this.getComponent('ProductServiceCodeDescription');
    }

    set ProductServiceCodeDescription(value) {
        this.setComponentValue('ProductServiceCodeDescription', value);
    }

    get ProductServiceEffectiveDate() {
        return this.getComponent('ProductServiceEffectiveDate');
    }

    set ProductServiceEffectiveDate(value) {
        this.setComponentValue('ProductServiceEffectiveDate', value);
    }

    get ProductServiceExpirationDate() {
        return this.getComponent('ProductServiceExpirationDate');
    }

    set ProductServiceExpirationDate(value) {
        this.setComponentValue('ProductServiceExpirationDate', value);
    }

    get ProductServiceQuantity() {
        return this.getComponent('ProductServiceQuantity');
    }

    set ProductServiceQuantity(value) {
        this.setComponentValue('ProductServiceQuantity', value);
    }

    get ProductServiceUnitCost() {
        return this.getComponent('ProductServiceUnitCost');
    }

    set ProductServiceUnitCost(value) {
        this.setComponentValue('ProductServiceUnitCost', value);
    }

    get NumberOfItemsPerUnit() {
        return this.getComponent('NumberOfItemsPerUnit');
    }

    set NumberOfItemsPerUnit(value) {
        this.setComponentValue('NumberOfItemsPerUnit', value);
    }

    get ProductServiceGrossAmount() {
        return this.getComponent('ProductServiceGrossAmount');
    }

    set ProductServiceGrossAmount(value) {
        this.setComponentValue('ProductServiceGrossAmount', value);
    }

    get ProductServiceBilledAmount() {
        return this.getComponent('ProductServiceBilledAmount');
    }

    set ProductServiceBilledAmount(value) {
        this.setComponentValue('ProductServiceBilledAmount', value);
    }

    get ProductServiceClarificationCodeType() {
        return this.getComponent('ProductServiceClarificationCodeType');
    }

    set ProductServiceClarificationCodeType(value) {
        this.setComponentValue('ProductServiceClarificationCodeType', value);
    }

    get ProductServiceClarificationCodeValue() {
        return this.getComponent('ProductServiceClarificationCodeValue');
    }

    set ProductServiceClarificationCodeValue(value) {
        this.setComponentValue('ProductServiceClarificationCodeValue', value);
    }

    get HealthDocumentReferenceIdentifier() {
        return this.getComponent('HealthDocumentReferenceIdentifier');
    }

    set HealthDocumentReferenceIdentifier(value) {
        this.setComponentValue('HealthDocumentReferenceIdentifier', value);
    }

    get ProcessingConsiderationCode() {
        return this.getComponent('ProcessingConsiderationCode');
    }

    set ProcessingConsiderationCode(value) {
        this.setComponentValue('ProcessingConsiderationCode', value);
    }

    get RestrictedDisclosureIndicator() {
        return this.getComponent('RestrictedDisclosureIndicator');
    }

    set RestrictedDisclosureIndicator(value) {
        this.setComponentValue('RestrictedDisclosureIndicator', value);
    }

    get RelatedProductServiceCodeIndicator() {
        return this.getComponent('RelatedProductServiceCodeIndicator');
    }

    set RelatedProductServiceCodeIndicator(value) {
        this.setComponentValue('RelatedProductServiceCodeIndicator', value);
    }

    get ProductServiceAmountForPhysician() {
        return this.getComponent('ProductServiceAmountForPhysician');
    }

    set ProductServiceAmountForPhysician(value) {
        this.setComponentValue('ProductServiceAmountForPhysician', value);
    }

    get ProductServiceCostFactor() {
        return this.getComponent('ProductServiceCostFactor');
    }

    set ProductServiceCostFactor(value) {
        this.setComponentValue('ProductServiceCostFactor', value);
    }

    get CostCenter() {
        return this.getComponent('CostCenter');
    }

    set CostCenter(value) {
        this.setComponentValue('CostCenter', value);
    }

    get BillingPeriod() {
        return this.getComponent('BillingPeriod');
    }

    set BillingPeriod(value) {
        this.setComponentValue('BillingPeriod', value);
    }

    get DaysWithoutBilling() {
        return this.getComponent('DaysWithoutBilling');
    }

    set DaysWithoutBilling(value) {
        this.setComponentValue('DaysWithoutBilling', value);
    }

    get SessionNo() {
        return this.getComponent('SessionNo');
    }

    set SessionNo(value) {
        this.setComponentValue('SessionNo', value);
    }

    get ExecutingPhysicianId() {
        return this.getComponent('ExecutingPhysicianId');
    }

    set ExecutingPhysicianId(value) {
        this.setComponentValue('ExecutingPhysicianId', value);
    }

    get ResponsiblePhysicianId() {
        return this.getComponent('ResponsiblePhysicianId');
    }

    set ResponsiblePhysicianId(value) {
        this.setComponentValue('ResponsiblePhysicianId', value);
    }

    get RoleExecutingPhysician() {
        return this.getComponent('RoleExecutingPhysician');
    }

    set RoleExecutingPhysician(value) {
        this.setComponentValue('RoleExecutingPhysician', value);
    }

    get MedicalRoleExecutingPhysician() {
        return this.getComponent('MedicalRoleExecutingPhysician');
    }

    set MedicalRoleExecutingPhysician(value) {
        this.setComponentValue('MedicalRoleExecutingPhysician', value);
    }

    get SideOfBody() {
        return this.getComponent('SideOfBody');
    }

    set SideOfBody(value) {
        this.setComponentValue('SideOfBody', value);
    }

    get NumberOfTpSPp() {
        return this.getComponent('NumberOfTpSPp');
    }

    set NumberOfTpSPp(value) {
        this.setComponentValue('NumberOfTpSPp', value);
    }

    get TpValuePp() {
        return this.getComponent('TpValuePp');
    }

    set TpValuePp(value) {
        this.setComponentValue('TpValuePp', value);
    }

    get InternalScalingFactorPp() {
        return this.getComponent('InternalScalingFactorPp');
    }

    set InternalScalingFactorPp(value) {
        this.setComponentValue('InternalScalingFactorPp', value);
    }

    get ExternalScalingFactorPp() {
        return this.getComponent('ExternalScalingFactorPp');
    }

    set ExternalScalingFactorPp(value) {
        this.setComponentValue('ExternalScalingFactorPp', value);
    }

    get AmountPp() {
        return this.getComponent('AmountPp');
    }

    set AmountPp(value) {
        this.setComponentValue('AmountPp', value);
    }

    get NumberOfTpSTechnicalPart() {
        return this.getComponent('NumberOfTpSTechnicalPart');
    }

    set NumberOfTpSTechnicalPart(value) {
        this.setComponentValue('NumberOfTpSTechnicalPart', value);
    }

    get TpValueTechnicalPart() {
        return this.getComponent('TpValueTechnicalPart');
    }

    set TpValueTechnicalPart(value) {
        this.setComponentValue('TpValueTechnicalPart', value);
    }

    get InternalScalingFactorTechnicalPart() {
        return this.getComponent('InternalScalingFactorTechnicalPart');
    }

    set InternalScalingFactorTechnicalPart(value) {
        this.setComponentValue('InternalScalingFactorTechnicalPart', value);
    }

    get ExternalScalingFactorTechnicalPart() {
        return this.getComponent('ExternalScalingFactorTechnicalPart');
    }

    set ExternalScalingFactorTechnicalPart(value) {
        this.setComponentValue('ExternalScalingFactorTechnicalPart', value);
    }

    get AmountTechnicalPart() {
        return this.getComponent('AmountTechnicalPart');
    }

    set AmountTechnicalPart(value) {
        this.setComponentValue('AmountTechnicalPart', value);
    }

    get TotalAmountProfessionalPartTechnicalPart() {
        return this.getComponent('TotalAmountProfessionalPartTechnicalPart');
    }

    set TotalAmountProfessionalPartTechnicalPart(value) {
        this.setComponentValue('TotalAmountProfessionalPartTechnicalPart', value);
    }

    get VatRate() {
        return this.getComponent('VatRate');
    }

    set VatRate(value) {
        this.setComponentValue('VatRate', value);
    }

    get MainService() {
        return this.getComponent('MainService');
    }

    set MainService(value) {
        this.setComponentValue('MainService', value);
    }

    get Validation() {
        return this.getComponent('Validation');
    }

    set Validation(value) {
        this.setComponentValue('Validation', value);
    }

    get Comment() {
        return this.getComponent('Comment');
    }

    set Comment(value) {
        this.setComponentValue('Comment', value);
    }
}
