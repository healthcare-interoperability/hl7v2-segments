import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class GP2 extends Segment {
    static components = {
        RevenueCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfServiceUnits: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Charge: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReimbursementActionCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DenialOrRejectionCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OceEditCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OCEEditCode: { aliasOf: 'OceEditCode' },
        AmbulatoryPaymentClassificationCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ModifierEditCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PaymentAdjustmentCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PackagingStatusCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedCmsPaymentAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedHCFAPaymentAmount: { aliasOf: 'ExpectedCmsPaymentAmount' },
        ExpectedCMSPaymentAmount: { aliasOf: 'ExpectedCmsPaymentAmount' },
        ReimbursementTypeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CoPayAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayRatePerServiceUnit: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayRatePerUnit: { aliasOf: 'PayRatePerServiceUnit' },
    };

    static componentsByIndex = [
        '',
        'RevenueCode',
        'NumberOfServiceUnits',
        'Charge',
        'ReimbursementActionCode',
        'DenialOrRejectionCode',
        'OceEditCode',
        'AmbulatoryPaymentClassificationCode',
        'ModifierEditCode',
        'PaymentAdjustmentCode',
        'PackagingStatusCode',
        'ExpectedCmsPaymentAmount',
        'ReimbursementTypeCode',
        'CoPayAmount',
        'PayRatePerServiceUnit',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('GP2');
        this.setValues(values);
    }

    get RevenueCode() {
        return this.getComponent('RevenueCode');
    }

    set RevenueCode(value) {
        this.setComponentValue('RevenueCode', value);
    }

    get NumberOfServiceUnits() {
        return this.getComponent('NumberOfServiceUnits');
    }

    set NumberOfServiceUnits(value) {
        this.setComponentValue('NumberOfServiceUnits', value);
    }

    get Charge() {
        return this.getComponent('Charge');
    }

    set Charge(value) {
        this.setComponentValue('Charge', value);
    }

    get ReimbursementActionCode() {
        return this.getComponent('ReimbursementActionCode');
    }

    set ReimbursementActionCode(value) {
        this.setComponentValue('ReimbursementActionCode', value);
    }

    get DenialOrRejectionCode() {
        return this.getComponent('DenialOrRejectionCode');
    }

    set DenialOrRejectionCode(value) {
        this.setComponentValue('DenialOrRejectionCode', value);
    }

    get OceEditCode() {
        return this.getComponent('OceEditCode');
    }

    set OceEditCode(value) {
        this.setComponentValue('OceEditCode', value);
    }

    get OCEEditCode() {
        return this.getComponent('OceEditCode');
    }

    set OCEEditCode(value) {
        this.setComponentValue('OceEditCode', value);
    }

    get AmbulatoryPaymentClassificationCode() {
        return this.getComponent('AmbulatoryPaymentClassificationCode');
    }

    set AmbulatoryPaymentClassificationCode(value) {
        this.setComponentValue('AmbulatoryPaymentClassificationCode', value);
    }

    get ModifierEditCode() {
        return this.getComponent('ModifierEditCode');
    }

    set ModifierEditCode(value) {
        this.setComponentValue('ModifierEditCode', value);
    }

    get PaymentAdjustmentCode() {
        return this.getComponent('PaymentAdjustmentCode');
    }

    set PaymentAdjustmentCode(value) {
        this.setComponentValue('PaymentAdjustmentCode', value);
    }

    get PackagingStatusCode() {
        return this.getComponent('PackagingStatusCode');
    }

    set PackagingStatusCode(value) {
        this.setComponentValue('PackagingStatusCode', value);
    }

    get ExpectedCmsPaymentAmount() {
        return this.getComponent('ExpectedCmsPaymentAmount');
    }

    set ExpectedCmsPaymentAmount(value) {
        this.setComponentValue('ExpectedCmsPaymentAmount', value);
    }

    get ExpectedHCFAPaymentAmount() {
        return this.getComponent('ExpectedCmsPaymentAmount');
    }

    set ExpectedHCFAPaymentAmount(value) {
        this.setComponentValue('ExpectedCmsPaymentAmount', value);
    }

    get ExpectedCMSPaymentAmount() {
        return this.getComponent('ExpectedCmsPaymentAmount');
    }

    set ExpectedCMSPaymentAmount(value) {
        this.setComponentValue('ExpectedCmsPaymentAmount', value);
    }

    get ReimbursementTypeCode() {
        return this.getComponent('ReimbursementTypeCode');
    }

    set ReimbursementTypeCode(value) {
        this.setComponentValue('ReimbursementTypeCode', value);
    }

    get CoPayAmount() {
        return this.getComponent('CoPayAmount');
    }

    set CoPayAmount(value) {
        this.setComponentValue('CoPayAmount', value);
    }

    get PayRatePerServiceUnit() {
        return this.getComponent('PayRatePerServiceUnit');
    }

    set PayRatePerServiceUnit(value) {
        this.setComponentValue('PayRatePerServiceUnit', value);
    }

    get PayRatePerUnit() {
        return this.getComponent('PayRatePerServiceUnit');
    }

    set PayRatePerUnit(value) {
        this.setComponentValue('PayRatePerServiceUnit', value);
    }
}
