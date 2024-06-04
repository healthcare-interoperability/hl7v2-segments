import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class SID extends Segment {
    static components = {
        ApplicationMethodIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubstanceLotNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubstanceContainerIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubstanceManufacturerIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'ApplicationMethodIdentifier', 'SubstanceLotNumber', 'SubstanceContainerIdentifier', 'SubstanceManufacturerIdentifier'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('SID');
        this.setValues(values);
    }

    get ApplicationMethodIdentifier() {
        return this.getComponent('ApplicationMethodIdentifier');
    }

    set ApplicationMethodIdentifier(value) {
        this.setComponentValue('ApplicationMethodIdentifier', value);
    }

    get SubstanceLotNumber() {
        return this.getComponent('SubstanceLotNumber');
    }

    set SubstanceLotNumber(value) {
        this.setComponentValue('SubstanceLotNumber', value);
    }

    get SubstanceContainerIdentifier() {
        return this.getComponent('SubstanceContainerIdentifier');
    }

    set SubstanceContainerIdentifier(value) {
        this.setComponentValue('SubstanceContainerIdentifier', value);
    }

    get SubstanceManufacturerIdentifier() {
        return this.getComponent('SubstanceManufacturerIdentifier');
    }

    set SubstanceManufacturerIdentifier(value) {
        this.setComponentValue('SubstanceManufacturerIdentifier', value);
    }
}
