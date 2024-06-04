import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class PSS extends Segment {
    static components = {
        ProviderProductServiceSectionNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayerProductServiceSectionNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceSectionSequenceNumber: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BilledAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SectionDescriptionOrHeading: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'ProviderProductServiceSectionNumber', 'PayerProductServiceSectionNumber', 'ProductServiceSectionSequenceNumber', 'BilledAmount', 'SectionDescriptionOrHeading'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PSS');
        this.setValues(values);
    }

    get ProviderProductServiceSectionNumber() {
        return this.getComponent('ProviderProductServiceSectionNumber');
    }

    set ProviderProductServiceSectionNumber(value) {
        this.setComponentValue('ProviderProductServiceSectionNumber', value);
    }

    get PayerProductServiceSectionNumber() {
        return this.getComponent('PayerProductServiceSectionNumber');
    }

    set PayerProductServiceSectionNumber(value) {
        this.setComponentValue('PayerProductServiceSectionNumber', value);
    }

    get ProductServiceSectionSequenceNumber() {
        return this.getComponent('ProductServiceSectionSequenceNumber');
    }

    set ProductServiceSectionSequenceNumber(value) {
        this.setComponentValue('ProductServiceSectionSequenceNumber', value);
    }

    get BilledAmount() {
        return this.getComponent('BilledAmount');
    }

    set BilledAmount(value) {
        this.setComponentValue('BilledAmount', value);
    }

    get SectionDescriptionOrHeading() {
        return this.getComponent('SectionDescriptionOrHeading');
    }

    set SectionDescriptionOrHeading(value) {
        this.setComponentValue('SectionDescriptionOrHeading', value);
    }
}
