import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class IVT extends Segment {
    static components = {
        SetIdIvt: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryLocationIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryLocationName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SourceLocationIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SourceLocationName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ItemStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BinLocationIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OrderPackaging: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IssuePackaging: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DefaultInventoryAssetAccount: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientChargeableIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionAmountUnit: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ItemImportanceCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StockedItemIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsignmentItemIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReusableItemIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReusableCost: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubstituteItemIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        LatexFreeSubstituteItemIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RecommendedReorderTheory: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RecommendedSafetyStockDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RecommendedMaximumDaysInventory: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RecommendedOrderPoint: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RecommendedOrderAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OperatingRoomParLevelIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdIvt',
        'InventoryLocationIdentifier',
        'InventoryLocationName',
        'SourceLocationIdentifier',
        'SourceLocationName',
        'ItemStatus',
        'BinLocationIdentifier',
        'OrderPackaging',
        'IssuePackaging',
        'DefaultInventoryAssetAccount',
        'PatientChargeableIndicator',
        'TransactionCode',
        'TransactionAmountUnit',
        'ItemImportanceCode',
        'StockedItemIndicator',
        'ConsignmentItemIndicator',
        'ReusableItemIndicator',
        'ReusableCost',
        'SubstituteItemIdentifier',
        'LatexFreeSubstituteItemIdentifier',
        'RecommendedReorderTheory',
        'RecommendedSafetyStockDays',
        'RecommendedMaximumDaysInventory',
        'RecommendedOrderPoint',
        'RecommendedOrderAmount',
        'OperatingRoomParLevelIndicator',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('IVT');
        this.setValues(values);
    }

    get SetIdIvt() {
        return this.getComponent('SetIdIvt');
    }

    set SetIdIvt(value) {
        this.setComponentValue('SetIdIvt', value);
    }

    get InventoryLocationIdentifier() {
        return this.getComponent('InventoryLocationIdentifier');
    }

    set InventoryLocationIdentifier(value) {
        this.setComponentValue('InventoryLocationIdentifier', value);
    }

    get InventoryLocationName() {
        return this.getComponent('InventoryLocationName');
    }

    set InventoryLocationName(value) {
        this.setComponentValue('InventoryLocationName', value);
    }

    get SourceLocationIdentifier() {
        return this.getComponent('SourceLocationIdentifier');
    }

    set SourceLocationIdentifier(value) {
        this.setComponentValue('SourceLocationIdentifier', value);
    }

    get SourceLocationName() {
        return this.getComponent('SourceLocationName');
    }

    set SourceLocationName(value) {
        this.setComponentValue('SourceLocationName', value);
    }

    get ItemStatus() {
        return this.getComponent('ItemStatus');
    }

    set ItemStatus(value) {
        this.setComponentValue('ItemStatus', value);
    }

    get BinLocationIdentifier() {
        return this.getComponent('BinLocationIdentifier');
    }

    set BinLocationIdentifier(value) {
        this.setComponentValue('BinLocationIdentifier', value);
    }

    get OrderPackaging() {
        return this.getComponent('OrderPackaging');
    }

    set OrderPackaging(value) {
        this.setComponentValue('OrderPackaging', value);
    }

    get IssuePackaging() {
        return this.getComponent('IssuePackaging');
    }

    set IssuePackaging(value) {
        this.setComponentValue('IssuePackaging', value);
    }

    get DefaultInventoryAssetAccount() {
        return this.getComponent('DefaultInventoryAssetAccount');
    }

    set DefaultInventoryAssetAccount(value) {
        this.setComponentValue('DefaultInventoryAssetAccount', value);
    }

    get PatientChargeableIndicator() {
        return this.getComponent('PatientChargeableIndicator');
    }

    set PatientChargeableIndicator(value) {
        this.setComponentValue('PatientChargeableIndicator', value);
    }

    get TransactionCode() {
        return this.getComponent('TransactionCode');
    }

    set TransactionCode(value) {
        this.setComponentValue('TransactionCode', value);
    }

    get TransactionAmountUnit() {
        return this.getComponent('TransactionAmountUnit');
    }

    set TransactionAmountUnit(value) {
        this.setComponentValue('TransactionAmountUnit', value);
    }

    get ItemImportanceCode() {
        return this.getComponent('ItemImportanceCode');
    }

    set ItemImportanceCode(value) {
        this.setComponentValue('ItemImportanceCode', value);
    }

    get StockedItemIndicator() {
        return this.getComponent('StockedItemIndicator');
    }

    set StockedItemIndicator(value) {
        this.setComponentValue('StockedItemIndicator', value);
    }

    get ConsignmentItemIndicator() {
        return this.getComponent('ConsignmentItemIndicator');
    }

    set ConsignmentItemIndicator(value) {
        this.setComponentValue('ConsignmentItemIndicator', value);
    }

    get ReusableItemIndicator() {
        return this.getComponent('ReusableItemIndicator');
    }

    set ReusableItemIndicator(value) {
        this.setComponentValue('ReusableItemIndicator', value);
    }

    get ReusableCost() {
        return this.getComponent('ReusableCost');
    }

    set ReusableCost(value) {
        this.setComponentValue('ReusableCost', value);
    }

    get SubstituteItemIdentifier() {
        return this.getComponent('SubstituteItemIdentifier');
    }

    set SubstituteItemIdentifier(value) {
        this.setComponentValue('SubstituteItemIdentifier', value);
    }

    get LatexFreeSubstituteItemIdentifier() {
        return this.getComponent('LatexFreeSubstituteItemIdentifier');
    }

    set LatexFreeSubstituteItemIdentifier(value) {
        this.setComponentValue('LatexFreeSubstituteItemIdentifier', value);
    }

    get RecommendedReorderTheory() {
        return this.getComponent('RecommendedReorderTheory');
    }

    set RecommendedReorderTheory(value) {
        this.setComponentValue('RecommendedReorderTheory', value);
    }

    get RecommendedSafetyStockDays() {
        return this.getComponent('RecommendedSafetyStockDays');
    }

    set RecommendedSafetyStockDays(value) {
        this.setComponentValue('RecommendedSafetyStockDays', value);
    }

    get RecommendedMaximumDaysInventory() {
        return this.getComponent('RecommendedMaximumDaysInventory');
    }

    set RecommendedMaximumDaysInventory(value) {
        this.setComponentValue('RecommendedMaximumDaysInventory', value);
    }

    get RecommendedOrderPoint() {
        return this.getComponent('RecommendedOrderPoint');
    }

    set RecommendedOrderPoint(value) {
        this.setComponentValue('RecommendedOrderPoint', value);
    }

    get RecommendedOrderAmount() {
        return this.getComponent('RecommendedOrderAmount');
    }

    set RecommendedOrderAmount(value) {
        this.setComponentValue('RecommendedOrderAmount', value);
    }

    get OperatingRoomParLevelIndicator() {
        return this.getComponent('OperatingRoomParLevelIndicator');
    }

    set OperatingRoomParLevelIndicator(value) {
        this.setComponentValue('OperatingRoomParLevelIndicator', value);
    }
}
