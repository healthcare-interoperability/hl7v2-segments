import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';

export class VND extends Segment {
    static components = {
        SetIdVnd: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VendorIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VendorName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VendorCatalogNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryVendorIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdVnd', 'VendorIdentifier', 'VendorName', 'VendorCatalogNumber', 'PrimaryVendorIndicator'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('VND');
        this.setValues(values);
    }

    get SetIdVnd() {
        return this.getComponent('SetIdVnd');
    }

    set SetIdVnd(value) {
        this.setComponentValue('SetIdVnd', value);
    }

    get VendorIdentifier() {
        return this.getComponent('VendorIdentifier');
    }

    set VendorIdentifier(value) {
        this.setComponentValue('VendorIdentifier', value);
    }

    get VendorName() {
        return this.getComponent('VendorName');
    }

    set VendorName(value) {
        this.setComponentValue('VendorName', value);
    }

    get VendorCatalogNumber() {
        return this.getComponent('VendorCatalogNumber');
    }

    set VendorCatalogNumber(value) {
        this.setComponentValue('VendorCatalogNumber', value);
    }

    get PrimaryVendorIndicator() {
        return this.getComponent('PrimaryVendorIndicator');
    }

    set PrimaryVendorIndicator(value) {
        this.setComponentValue('PrimaryVendorIndicator', value);
    }
}
