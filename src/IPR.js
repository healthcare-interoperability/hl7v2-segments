import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class IPR extends Segment {
    static components = {
        IprIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IPRIdentifier: { aliasOf: 'IprIdentifier' },
        ProviderCrossReferenceIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayerCrossReferenceIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IprStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IPRStatus: { aliasOf: 'IprStatus' },
        IprDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IPRDateTime: { aliasOf: 'IprDateTime' },
        AdjudicatedPaidAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedPaymentDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IprChecksum: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IPRChecksum: { aliasOf: 'IprChecksum' },
    };

    static componentsByIndex = [
        '',
        'IprIdentifier',
        'ProviderCrossReferenceIdentifier',
        'PayerCrossReferenceIdentifier',
        'IprStatus',
        'IprDateTime',
        'AdjudicatedPaidAmount',
        'ExpectedPaymentDateTime',
        'IprChecksum',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('IPR');
        this.setValues(values);
    }

    get IprIdentifier() {
        return this.getComponent('IprIdentifier');
    }

    set IprIdentifier(value) {
        this.setComponentValue('IprIdentifier', value);
    }

    get IPRIdentifier() {
        return this.getComponent('IprIdentifier');
    }

    set IPRIdentifier(value) {
        this.setComponentValue('IprIdentifier', value);
    }

    get ProviderCrossReferenceIdentifier() {
        return this.getComponent('ProviderCrossReferenceIdentifier');
    }

    set ProviderCrossReferenceIdentifier(value) {
        this.setComponentValue('ProviderCrossReferenceIdentifier', value);
    }

    get PayerCrossReferenceIdentifier() {
        return this.getComponent('PayerCrossReferenceIdentifier');
    }

    set PayerCrossReferenceIdentifier(value) {
        this.setComponentValue('PayerCrossReferenceIdentifier', value);
    }

    get IprStatus() {
        return this.getComponent('IprStatus');
    }

    set IprStatus(value) {
        this.setComponentValue('IprStatus', value);
    }

    get IPRStatus() {
        return this.getComponent('IprStatus');
    }

    set IPRStatus(value) {
        this.setComponentValue('IprStatus', value);
    }

    get IprDateTime() {
        return this.getComponent('IprDateTime');
    }

    set IprDateTime(value) {
        this.setComponentValue('IprDateTime', value);
    }

    get IPRDateTime() {
        return this.getComponent('IprDateTime');
    }

    set IPRDateTime(value) {
        this.setComponentValue('IprDateTime', value);
    }

    get AdjudicatedPaidAmount() {
        return this.getComponent('AdjudicatedPaidAmount');
    }

    set AdjudicatedPaidAmount(value) {
        this.setComponentValue('AdjudicatedPaidAmount', value);
    }

    get ExpectedPaymentDateTime() {
        return this.getComponent('ExpectedPaymentDateTime');
    }

    set ExpectedPaymentDateTime(value) {
        this.setComponentValue('ExpectedPaymentDateTime', value);
    }

    get IprChecksum() {
        return this.getComponent('IprChecksum');
    }

    set IprChecksum(value) {
        this.setComponentValue('IprChecksum', value);
    }

    get IPRChecksum() {
        return this.getComponent('IprChecksum');
    }

    set IPRChecksum(value) {
        this.setComponentValue('IprChecksum', value);
    }
}
