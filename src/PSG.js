import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class PSG extends Segment {
    static components = {
        ProviderProductServiceGroupNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayerProductServiceGroupNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceGroupSequenceNumber: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdjudicateAsGroup: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceGroupBilledAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductServiceGroupDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ProviderProductServiceGroupNumber',
        'PayerProductServiceGroupNumber',
        'ProductServiceGroupSequenceNumber',
        'AdjudicateAsGroup',
        'ProductServiceGroupBilledAmount',
        'ProductServiceGroupDescription',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PSG');
        this.setValues(values);
    }

    get ProviderProductServiceGroupNumber() {
        return this.getComponent('ProviderProductServiceGroupNumber');
    }

    set ProviderProductServiceGroupNumber(value) {
        this.setComponentValue('ProviderProductServiceGroupNumber', value);
    }

    get PayerProductServiceGroupNumber() {
        return this.getComponent('PayerProductServiceGroupNumber');
    }

    set PayerProductServiceGroupNumber(value) {
        this.setComponentValue('PayerProductServiceGroupNumber', value);
    }

    get ProductServiceGroupSequenceNumber() {
        return this.getComponent('ProductServiceGroupSequenceNumber');
    }

    set ProductServiceGroupSequenceNumber(value) {
        this.setComponentValue('ProductServiceGroupSequenceNumber', value);
    }

    get AdjudicateAsGroup() {
        return this.getComponent('AdjudicateAsGroup');
    }

    set AdjudicateAsGroup(value) {
        this.setComponentValue('AdjudicateAsGroup', value);
    }

    get ProductServiceGroupBilledAmount() {
        return this.getComponent('ProductServiceGroupBilledAmount');
    }

    set ProductServiceGroupBilledAmount(value) {
        this.setComponentValue('ProductServiceGroupBilledAmount', value);
    }

    get ProductServiceGroupDescription() {
        return this.getComponent('ProductServiceGroupDescription');
    }

    set ProductServiceGroupDescription(value) {
        this.setComponentValue('ProductServiceGroupDescription', value);
    }
}
