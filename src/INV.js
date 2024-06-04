import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { TQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';

export class INV extends Segment {
    static components = {
        SubstanceIdentifier: {
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
        SubstanceStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SubstanceType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryContainerIdentifier: {
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
        ContainerCarrierIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PositionOnCarrier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InitialQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CurrentQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AvailableQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsumptionQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QuantityUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpirationDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FirstUsedDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OnBoardStabilityDuration: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: TQ, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TestFluidIdentifierS: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        TestFluidIdentifier: { aliasOf: 'TestFluidIdentifierS' },
        ManufacturerLotNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ManufacturerIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SupplierIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OnBoardStabilityTime: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TargetValue: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SubstanceIdentifier',
        'SubstanceStatus',
        'SubstanceType',
        'InventoryContainerIdentifier',
        'ContainerCarrierIdentifier',
        'PositionOnCarrier',
        'InitialQuantity',
        'CurrentQuantity',
        'AvailableQuantity',
        'ConsumptionQuantity',
        'QuantityUnits',
        'ExpirationDateTime',
        'FirstUsedDateTime',
        'OnBoardStabilityDuration',
        'TestFluidIdentifierS',
        'ManufacturerLotNumber',
        'ManufacturerIdentifier',
        'SupplierIdentifier',
        'OnBoardStabilityTime',
        'TargetValue',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('INV');
        this.setValues(values);
    }

    get SubstanceIdentifier() {
        return this.getComponent('SubstanceIdentifier');
    }

    set SubstanceIdentifier(value) {
        this.setComponentValue('SubstanceIdentifier', value);
    }

    get SubstanceStatus() {
        return this.getComponent('SubstanceStatus');
    }

    set SubstanceStatus(value) {
        this.setComponentValue('SubstanceStatus', value);
    }

    get SubstanceType() {
        return this.getComponent('SubstanceType');
    }

    set SubstanceType(value) {
        this.setComponentValue('SubstanceType', value);
    }

    get InventoryContainerIdentifier() {
        return this.getComponent('InventoryContainerIdentifier');
    }

    set InventoryContainerIdentifier(value) {
        this.setComponentValue('InventoryContainerIdentifier', value);
    }

    get ContainerCarrierIdentifier() {
        return this.getComponent('ContainerCarrierIdentifier');
    }

    set ContainerCarrierIdentifier(value) {
        this.setComponentValue('ContainerCarrierIdentifier', value);
    }

    get PositionOnCarrier() {
        return this.getComponent('PositionOnCarrier');
    }

    set PositionOnCarrier(value) {
        this.setComponentValue('PositionOnCarrier', value);
    }

    get InitialQuantity() {
        return this.getComponent('InitialQuantity');
    }

    set InitialQuantity(value) {
        this.setComponentValue('InitialQuantity', value);
    }

    get CurrentQuantity() {
        return this.getComponent('CurrentQuantity');
    }

    set CurrentQuantity(value) {
        this.setComponentValue('CurrentQuantity', value);
    }

    get AvailableQuantity() {
        return this.getComponent('AvailableQuantity');
    }

    set AvailableQuantity(value) {
        this.setComponentValue('AvailableQuantity', value);
    }

    get ConsumptionQuantity() {
        return this.getComponent('ConsumptionQuantity');
    }

    set ConsumptionQuantity(value) {
        this.setComponentValue('ConsumptionQuantity', value);
    }

    get QuantityUnits() {
        return this.getComponent('QuantityUnits');
    }

    set QuantityUnits(value) {
        this.setComponentValue('QuantityUnits', value);
    }

    get ExpirationDateTime() {
        return this.getComponent('ExpirationDateTime');
    }

    set ExpirationDateTime(value) {
        this.setComponentValue('ExpirationDateTime', value);
    }

    get FirstUsedDateTime() {
        return this.getComponent('FirstUsedDateTime');
    }

    set FirstUsedDateTime(value) {
        this.setComponentValue('FirstUsedDateTime', value);
    }

    get OnBoardStabilityDuration() {
        return this.getComponent('OnBoardStabilityDuration');
    }

    set OnBoardStabilityDuration(value) {
        this.setComponentValue('OnBoardStabilityDuration', value);
    }

    get TestFluidIdentifierS() {
        return this.getComponent('TestFluidIdentifierS');
    }

    set TestFluidIdentifierS(value) {
        this.setComponentValue('TestFluidIdentifierS', value);
    }

    get TestFluidIdentifier() {
        return this.getComponent('TestFluidIdentifierS');
    }

    set TestFluidIdentifier(value) {
        this.setComponentValue('TestFluidIdentifierS', value);
    }

    get ManufacturerLotNumber() {
        return this.getComponent('ManufacturerLotNumber');
    }

    set ManufacturerLotNumber(value) {
        this.setComponentValue('ManufacturerLotNumber', value);
    }

    get ManufacturerIdentifier() {
        return this.getComponent('ManufacturerIdentifier');
    }

    set ManufacturerIdentifier(value) {
        this.setComponentValue('ManufacturerIdentifier', value);
    }

    get SupplierIdentifier() {
        return this.getComponent('SupplierIdentifier');
    }

    set SupplierIdentifier(value) {
        this.setComponentValue('SupplierIdentifier', value);
    }

    get OnBoardStabilityTime() {
        return this.getComponent('OnBoardStabilityTime');
    }

    set OnBoardStabilityTime(value) {
        this.setComponentValue('OnBoardStabilityTime', value);
    }

    get TargetValue() {
        return this.getComponent('TargetValue');
    }

    set TargetValue(value) {
        this.setComponentValue('TargetValue', value);
    }
}
