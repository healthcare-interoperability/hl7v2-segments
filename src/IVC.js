import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class IVC extends Segment {
    static components = {
        ProviderInvoiceNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayerInvoiceNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContractAgreementNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InvoiceControl: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InvoiceReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InvoiceType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InvoiceDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InvoiceAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PaymentTerms: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProviderOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayerOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Attention: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LastInvoiceIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InvoiceBookingPeriod: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Origin: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InvoiceFixedAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecialCosts: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AmountForDoctorsTreatment: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResponsiblePhysician: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CostCenter: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InvoicePrepaidAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalInvoiceAmountWithoutPrepaidAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalAmountOfVat: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VatRatesApplied: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        BenefitGroup: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProviderTaxId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayerTaxId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProviderTaxStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayerTaxStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SalesTaxId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ProviderInvoiceNumber',
        'PayerInvoiceNumber',
        'ContractAgreementNumber',
        'InvoiceControl',
        'InvoiceReason',
        'InvoiceType',
        'InvoiceDateTime',
        'InvoiceAmount',
        'PaymentTerms',
        'ProviderOrganization',
        'PayerOrganization',
        'Attention',
        'LastInvoiceIndicator',
        'InvoiceBookingPeriod',
        'Origin',
        'InvoiceFixedAmount',
        'SpecialCosts',
        'AmountForDoctorsTreatment',
        'ResponsiblePhysician',
        'CostCenter',
        'InvoicePrepaidAmount',
        'TotalInvoiceAmountWithoutPrepaidAmount',
        'TotalAmountOfVat',
        'VatRatesApplied',
        'BenefitGroup',
        'ProviderTaxId',
        'PayerTaxId',
        'ProviderTaxStatus',
        'PayerTaxStatus',
        'SalesTaxId',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('IVC');
        this.setValues(values);
    }

    get ProviderInvoiceNumber() {
        return this.getComponent('ProviderInvoiceNumber');
    }

    set ProviderInvoiceNumber(value) {
        this.setComponentValue('ProviderInvoiceNumber', value);
    }

    get PayerInvoiceNumber() {
        return this.getComponent('PayerInvoiceNumber');
    }

    set PayerInvoiceNumber(value) {
        this.setComponentValue('PayerInvoiceNumber', value);
    }

    get ContractAgreementNumber() {
        return this.getComponent('ContractAgreementNumber');
    }

    set ContractAgreementNumber(value) {
        this.setComponentValue('ContractAgreementNumber', value);
    }

    get InvoiceControl() {
        return this.getComponent('InvoiceControl');
    }

    set InvoiceControl(value) {
        this.setComponentValue('InvoiceControl', value);
    }

    get InvoiceReason() {
        return this.getComponent('InvoiceReason');
    }

    set InvoiceReason(value) {
        this.setComponentValue('InvoiceReason', value);
    }

    get InvoiceType() {
        return this.getComponent('InvoiceType');
    }

    set InvoiceType(value) {
        this.setComponentValue('InvoiceType', value);
    }

    get InvoiceDateTime() {
        return this.getComponent('InvoiceDateTime');
    }

    set InvoiceDateTime(value) {
        this.setComponentValue('InvoiceDateTime', value);
    }

    get InvoiceAmount() {
        return this.getComponent('InvoiceAmount');
    }

    set InvoiceAmount(value) {
        this.setComponentValue('InvoiceAmount', value);
    }

    get PaymentTerms() {
        return this.getComponent('PaymentTerms');
    }

    set PaymentTerms(value) {
        this.setComponentValue('PaymentTerms', value);
    }

    get ProviderOrganization() {
        return this.getComponent('ProviderOrganization');
    }

    set ProviderOrganization(value) {
        this.setComponentValue('ProviderOrganization', value);
    }

    get PayerOrganization() {
        return this.getComponent('PayerOrganization');
    }

    set PayerOrganization(value) {
        this.setComponentValue('PayerOrganization', value);
    }

    get Attention() {
        return this.getComponent('Attention');
    }

    set Attention(value) {
        this.setComponentValue('Attention', value);
    }

    get LastInvoiceIndicator() {
        return this.getComponent('LastInvoiceIndicator');
    }

    set LastInvoiceIndicator(value) {
        this.setComponentValue('LastInvoiceIndicator', value);
    }

    get InvoiceBookingPeriod() {
        return this.getComponent('InvoiceBookingPeriod');
    }

    set InvoiceBookingPeriod(value) {
        this.setComponentValue('InvoiceBookingPeriod', value);
    }

    get Origin() {
        return this.getComponent('Origin');
    }

    set Origin(value) {
        this.setComponentValue('Origin', value);
    }

    get InvoiceFixedAmount() {
        return this.getComponent('InvoiceFixedAmount');
    }

    set InvoiceFixedAmount(value) {
        this.setComponentValue('InvoiceFixedAmount', value);
    }

    get SpecialCosts() {
        return this.getComponent('SpecialCosts');
    }

    set SpecialCosts(value) {
        this.setComponentValue('SpecialCosts', value);
    }

    get AmountForDoctorsTreatment() {
        return this.getComponent('AmountForDoctorsTreatment');
    }

    set AmountForDoctorsTreatment(value) {
        this.setComponentValue('AmountForDoctorsTreatment', value);
    }

    get ResponsiblePhysician() {
        return this.getComponent('ResponsiblePhysician');
    }

    set ResponsiblePhysician(value) {
        this.setComponentValue('ResponsiblePhysician', value);
    }

    get CostCenter() {
        return this.getComponent('CostCenter');
    }

    set CostCenter(value) {
        this.setComponentValue('CostCenter', value);
    }

    get InvoicePrepaidAmount() {
        return this.getComponent('InvoicePrepaidAmount');
    }

    set InvoicePrepaidAmount(value) {
        this.setComponentValue('InvoicePrepaidAmount', value);
    }

    get TotalInvoiceAmountWithoutPrepaidAmount() {
        return this.getComponent('TotalInvoiceAmountWithoutPrepaidAmount');
    }

    set TotalInvoiceAmountWithoutPrepaidAmount(value) {
        this.setComponentValue('TotalInvoiceAmountWithoutPrepaidAmount', value);
    }

    get TotalAmountOfVat() {
        return this.getComponent('TotalAmountOfVat');
    }

    set TotalAmountOfVat(value) {
        this.setComponentValue('TotalAmountOfVat', value);
    }

    get VatRatesApplied() {
        return this.getComponent('VatRatesApplied');
    }

    set VatRatesApplied(value) {
        this.setComponentValue('VatRatesApplied', value);
    }

    get BenefitGroup() {
        return this.getComponent('BenefitGroup');
    }

    set BenefitGroup(value) {
        this.setComponentValue('BenefitGroup', value);
    }

    get ProviderTaxId() {
        return this.getComponent('ProviderTaxId');
    }

    set ProviderTaxId(value) {
        this.setComponentValue('ProviderTaxId', value);
    }

    get PayerTaxId() {
        return this.getComponent('PayerTaxId');
    }

    set PayerTaxId(value) {
        this.setComponentValue('PayerTaxId', value);
    }

    get ProviderTaxStatus() {
        return this.getComponent('ProviderTaxStatus');
    }

    set ProviderTaxStatus(value) {
        this.setComponentValue('ProviderTaxStatus', value);
    }

    get PayerTaxStatus() {
        return this.getComponent('PayerTaxStatus');
    }

    set PayerTaxStatus(value) {
        this.setComponentValue('PayerTaxStatus', value);
    }

    get SalesTaxId() {
        return this.getComponent('SalesTaxId');
    }

    set SalesTaxId(value) {
        this.setComponentValue('SalesTaxId', value);
    }
}
