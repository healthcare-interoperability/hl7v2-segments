import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { MO } from '@healthcare-interoperability/hl7v2-datatypes';

export class ILT extends Segment {
    static components = {
        SetIdIlt: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIdILT: { aliasOf: 'SetIdIlt' },
        InventoryLotNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryExpirationDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryReceivedDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryReceivedQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryReceivedQuantityUnit: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryReceivedItemCost: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryOnHandDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryOnHandQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryOnHandQuantityUnit: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdIlt',
        'InventoryLotNumber',
        'InventoryExpirationDate',
        'InventoryReceivedDate',
        'InventoryReceivedQuantity',
        'InventoryReceivedQuantityUnit',
        'InventoryReceivedItemCost',
        'InventoryOnHandDate',
        'InventoryOnHandQuantity',
        'InventoryOnHandQuantityUnit',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ILT');
        this.setValues(values);
    }

    get SetIdIlt() {
        return this.getComponent('SetIdIlt');
    }

    set SetIdIlt(value) {
        this.setComponentValue('SetIdIlt', value);
    }

    get SetIdILT() {
        return this.getComponent('SetIdIlt');
    }

    set SetIdILT(value) {
        this.setComponentValue('SetIdIlt', value);
    }

    get InventoryLotNumber() {
        return this.getComponent('InventoryLotNumber');
    }

    set InventoryLotNumber(value) {
        this.setComponentValue('InventoryLotNumber', value);
    }

    get InventoryExpirationDate() {
        return this.getComponent('InventoryExpirationDate');
    }

    set InventoryExpirationDate(value) {
        this.setComponentValue('InventoryExpirationDate', value);
    }

    get InventoryReceivedDate() {
        return this.getComponent('InventoryReceivedDate');
    }

    set InventoryReceivedDate(value) {
        this.setComponentValue('InventoryReceivedDate', value);
    }

    get InventoryReceivedQuantity() {
        return this.getComponent('InventoryReceivedQuantity');
    }

    set InventoryReceivedQuantity(value) {
        this.setComponentValue('InventoryReceivedQuantity', value);
    }

    get InventoryReceivedQuantityUnit() {
        return this.getComponent('InventoryReceivedQuantityUnit');
    }

    set InventoryReceivedQuantityUnit(value) {
        this.setComponentValue('InventoryReceivedQuantityUnit', value);
    }

    get InventoryReceivedItemCost() {
        return this.getComponent('InventoryReceivedItemCost');
    }

    set InventoryReceivedItemCost(value) {
        this.setComponentValue('InventoryReceivedItemCost', value);
    }

    get InventoryOnHandDate() {
        return this.getComponent('InventoryOnHandDate');
    }

    set InventoryOnHandDate(value) {
        this.setComponentValue('InventoryOnHandDate', value);
    }

    get InventoryOnHandQuantity() {
        return this.getComponent('InventoryOnHandQuantity');
    }

    set InventoryOnHandQuantity(value) {
        this.setComponentValue('InventoryOnHandQuantity', value);
    }

    get InventoryOnHandQuantityUnit() {
        return this.getComponent('InventoryOnHandQuantityUnit');
    }

    set InventoryOnHandQuantityUnit(value) {
        this.setComponentValue('InventoryOnHandQuantityUnit', value);
    }
}
