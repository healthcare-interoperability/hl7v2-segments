import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class RQ1 extends Segment {
    static components = {
        AnticipatedPrice: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ManufacturerIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ManufacturedId: { aliasOf: 'ManufacturerIdentifier' },
        ManufacturerId: { aliasOf: 'ManufacturerIdentifier' },
        ManufacturerSCatalog: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VendorId: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VendorCatalog: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Taxable: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubstituteAllowed: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'AnticipatedPrice', 'ManufacturerIdentifier', 'ManufacturerSCatalog', 'VendorId', 'VendorCatalog', 'Taxable', 'SubstituteAllowed'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RQ1');
        this.setValues(values);
    }

    get AnticipatedPrice() {
        return this.getComponent('AnticipatedPrice');
    }

    set AnticipatedPrice(value) {
        this.setComponentValue('AnticipatedPrice', value);
    }

    get ManufacturerIdentifier() {
        return this.getComponent('ManufacturerIdentifier');
    }

    set ManufacturerIdentifier(value) {
        this.setComponentValue('ManufacturerIdentifier', value);
    }

    get ManufacturedId() {
        return this.getComponent('ManufacturerIdentifier');
    }

    set ManufacturedId(value) {
        this.setComponentValue('ManufacturerIdentifier', value);
    }

    get ManufacturerId() {
        return this.getComponent('ManufacturerIdentifier');
    }

    set ManufacturerId(value) {
        this.setComponentValue('ManufacturerIdentifier', value);
    }

    get ManufacturerSCatalog() {
        return this.getComponent('ManufacturerSCatalog');
    }

    set ManufacturerSCatalog(value) {
        this.setComponentValue('ManufacturerSCatalog', value);
    }

    get VendorId() {
        return this.getComponent('VendorId');
    }

    set VendorId(value) {
        this.setComponentValue('VendorId', value);
    }

    get VendorCatalog() {
        return this.getComponent('VendorCatalog');
    }

    set VendorCatalog(value) {
        this.setComponentValue('VendorCatalog', value);
    }

    get Taxable() {
        return this.getComponent('Taxable');
    }

    set Taxable(value) {
        this.setComponentValue('Taxable', value);
    }

    get SubstituteAllowed() {
        return this.getComponent('SubstituteAllowed');
    }

    set SubstituteAllowed(value) {
        this.setComponentValue('SubstituteAllowed', value);
    }
}
