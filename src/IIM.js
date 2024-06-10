import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { MO } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class IIM extends Segment {
    static components = {
        PrimaryKeyValueIim: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryKeyValueIIM: { aliasOf: 'PrimaryKeyValueIim' },
        ServiceItemCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryLotNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryExpirationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryManufacturerName: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryLocation: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryReceivedDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryReceivedQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryReceivedQuantityUnit: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryReceivedItemCost: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryOnHandDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryOnHandQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryOnHandQuantityUnit: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureCodeModifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'PrimaryKeyValueIim',
        'ServiceItemCode',
        'InventoryLotNumber',
        'InventoryExpirationDate',
        'InventoryManufacturerName',
        'InventoryLocation',
        'InventoryReceivedDate',
        'InventoryReceivedQuantity',
        'InventoryReceivedQuantityUnit',
        'InventoryReceivedItemCost',
        'InventoryOnHandDate',
        'InventoryOnHandQuantity',
        'InventoryOnHandQuantityUnit',
        'ProcedureCode',
        'ProcedureCodeModifier',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('IIM');
        this.setValues(values);
    }

    get PrimaryKeyValueIim() {
        return this.getComponent('PrimaryKeyValueIim');
    }

    set PrimaryKeyValueIim(value) {
        this.setComponentValue('PrimaryKeyValueIim', value);
    }

    get PrimaryKeyValueIIM() {
        return this.getComponent('PrimaryKeyValueIim');
    }

    set PrimaryKeyValueIIM(value) {
        this.setComponentValue('PrimaryKeyValueIim', value);
    }

    get ServiceItemCode() {
        return this.getComponent('ServiceItemCode');
    }

    set ServiceItemCode(value) {
        this.setComponentValue('ServiceItemCode', value);
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

    get InventoryManufacturerName() {
        return this.getComponent('InventoryManufacturerName');
    }

    set InventoryManufacturerName(value) {
        this.setComponentValue('InventoryManufacturerName', value);
    }

    get InventoryLocation() {
        return this.getComponent('InventoryLocation');
    }

    set InventoryLocation(value) {
        this.setComponentValue('InventoryLocation', value);
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

    get ProcedureCode() {
        return this.getComponent('ProcedureCode');
    }

    set ProcedureCode(value) {
        this.setComponentValue('ProcedureCode', value);
    }

    get ProcedureCodeModifier() {
        return this.getComponent('ProcedureCodeModifier');
    }

    set ProcedureCodeModifier(value) {
        this.setComponentValue('ProcedureCodeModifier', value);
    }
}
