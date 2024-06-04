import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class SLT extends Segment {
    static components = {
        DeviceNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeviceName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LotNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ItemIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BarCode: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'DeviceNumber', 'DeviceName', 'LotNumber', 'ItemIdentifier', 'BarCode'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('SLT');
        this.setValues(values);
    }

    get DeviceNumber() {
        return this.getComponent('DeviceNumber');
    }

    set DeviceNumber(value) {
        this.setComponentValue('DeviceNumber', value);
    }

    get DeviceName() {
        return this.getComponent('DeviceName');
    }

    set DeviceName(value) {
        this.setComponentValue('DeviceName', value);
    }

    get LotNumber() {
        return this.getComponent('LotNumber');
    }

    set LotNumber(value) {
        this.setComponentValue('LotNumber', value);
    }

    get ItemIdentifier() {
        return this.getComponent('ItemIdentifier');
    }

    set ItemIdentifier(value) {
        this.setComponentValue('ItemIdentifier', value);
    }

    get BarCode() {
        return this.getComponent('BarCode');
    }

    set BarCode(value) {
        this.setComponentValue('BarCode', value);
    }
}
