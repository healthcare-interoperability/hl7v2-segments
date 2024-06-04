import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { MO } from '@healthcare-interoperability/hl7v2-datatypes';

export class ITM extends Segment {
    static components = {
        ItemIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ItemDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ItemStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ItemType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ItemCategory: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubjectToExpirationIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ManufacturerIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ManufacturerName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ManufacturerCatalogNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ManufacturerLabelerIdentificationCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
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
        StockedItemIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SupplyRiskCodes: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ApprovingRegulatoryAgency: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        LatexIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RulingAct: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ItemNaturalAccountCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ApprovedToBuyQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ApprovedToBuyPrice: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TaxableItemIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FreightChargeIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ItemSetIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ItemSetIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TrackDepartmentUsageIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureCode: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureCodeModifier: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 28,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecialHandlingCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        HazardousIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SterileIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MaterialDataSafetySheetNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        UnitedNationsStandardProductsAndServicesCodeUNSPSC: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ItemIdentifier',
        'ItemDescription',
        'ItemStatus',
        'ItemType',
        'ItemCategory',
        'SubjectToExpirationIndicator',
        'ManufacturerIdentifier',
        'ManufacturerName',
        'ManufacturerCatalogNumber',
        'ManufacturerLabelerIdentificationCode',
        'PatientChargeableIndicator',
        'TransactionCode',
        'TransactionAmountUnit',
        'StockedItemIndicator',
        'SupplyRiskCodes',
        'ApprovingRegulatoryAgency',
        'LatexIndicator',
        'RulingAct',
        'ItemNaturalAccountCode',
        'ApprovedToBuyQuantity',
        'ApprovedToBuyPrice',
        'TaxableItemIndicator',
        'FreightChargeIndicator',
        'ItemSetIndicator',
        'ItemSetIdentifier',
        'TrackDepartmentUsageIndicator',
        'ProcedureCode',
        'ProcedureCodeModifier',
        'SpecialHandlingCode',
        'HazardousIndicator',
        'SterileIndicator',
        'MaterialDataSafetySheetNumber',
        'UnitedNationsStandardProductsAndServicesCodeUNSPSC',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ITM');
        this.setValues(values);
    }

    get ItemIdentifier() {
        return this.getComponent('ItemIdentifier');
    }

    set ItemIdentifier(value) {
        this.setComponentValue('ItemIdentifier', value);
    }

    get ItemDescription() {
        return this.getComponent('ItemDescription');
    }

    set ItemDescription(value) {
        this.setComponentValue('ItemDescription', value);
    }

    get ItemStatus() {
        return this.getComponent('ItemStatus');
    }

    set ItemStatus(value) {
        this.setComponentValue('ItemStatus', value);
    }

    get ItemType() {
        return this.getComponent('ItemType');
    }

    set ItemType(value) {
        this.setComponentValue('ItemType', value);
    }

    get ItemCategory() {
        return this.getComponent('ItemCategory');
    }

    set ItemCategory(value) {
        this.setComponentValue('ItemCategory', value);
    }

    get SubjectToExpirationIndicator() {
        return this.getComponent('SubjectToExpirationIndicator');
    }

    set SubjectToExpirationIndicator(value) {
        this.setComponentValue('SubjectToExpirationIndicator', value);
    }

    get ManufacturerIdentifier() {
        return this.getComponent('ManufacturerIdentifier');
    }

    set ManufacturerIdentifier(value) {
        this.setComponentValue('ManufacturerIdentifier', value);
    }

    get ManufacturerName() {
        return this.getComponent('ManufacturerName');
    }

    set ManufacturerName(value) {
        this.setComponentValue('ManufacturerName', value);
    }

    get ManufacturerCatalogNumber() {
        return this.getComponent('ManufacturerCatalogNumber');
    }

    set ManufacturerCatalogNumber(value) {
        this.setComponentValue('ManufacturerCatalogNumber', value);
    }

    get ManufacturerLabelerIdentificationCode() {
        return this.getComponent('ManufacturerLabelerIdentificationCode');
    }

    set ManufacturerLabelerIdentificationCode(value) {
        this.setComponentValue('ManufacturerLabelerIdentificationCode', value);
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

    get StockedItemIndicator() {
        return this.getComponent('StockedItemIndicator');
    }

    set StockedItemIndicator(value) {
        this.setComponentValue('StockedItemIndicator', value);
    }

    get SupplyRiskCodes() {
        return this.getComponent('SupplyRiskCodes');
    }

    set SupplyRiskCodes(value) {
        this.setComponentValue('SupplyRiskCodes', value);
    }

    get ApprovingRegulatoryAgency() {
        return this.getComponent('ApprovingRegulatoryAgency');
    }

    set ApprovingRegulatoryAgency(value) {
        this.setComponentValue('ApprovingRegulatoryAgency', value);
    }

    get LatexIndicator() {
        return this.getComponent('LatexIndicator');
    }

    set LatexIndicator(value) {
        this.setComponentValue('LatexIndicator', value);
    }

    get RulingAct() {
        return this.getComponent('RulingAct');
    }

    set RulingAct(value) {
        this.setComponentValue('RulingAct', value);
    }

    get ItemNaturalAccountCode() {
        return this.getComponent('ItemNaturalAccountCode');
    }

    set ItemNaturalAccountCode(value) {
        this.setComponentValue('ItemNaturalAccountCode', value);
    }

    get ApprovedToBuyQuantity() {
        return this.getComponent('ApprovedToBuyQuantity');
    }

    set ApprovedToBuyQuantity(value) {
        this.setComponentValue('ApprovedToBuyQuantity', value);
    }

    get ApprovedToBuyPrice() {
        return this.getComponent('ApprovedToBuyPrice');
    }

    set ApprovedToBuyPrice(value) {
        this.setComponentValue('ApprovedToBuyPrice', value);
    }

    get TaxableItemIndicator() {
        return this.getComponent('TaxableItemIndicator');
    }

    set TaxableItemIndicator(value) {
        this.setComponentValue('TaxableItemIndicator', value);
    }

    get FreightChargeIndicator() {
        return this.getComponent('FreightChargeIndicator');
    }

    set FreightChargeIndicator(value) {
        this.setComponentValue('FreightChargeIndicator', value);
    }

    get ItemSetIndicator() {
        return this.getComponent('ItemSetIndicator');
    }

    set ItemSetIndicator(value) {
        this.setComponentValue('ItemSetIndicator', value);
    }

    get ItemSetIdentifier() {
        return this.getComponent('ItemSetIdentifier');
    }

    set ItemSetIdentifier(value) {
        this.setComponentValue('ItemSetIdentifier', value);
    }

    get TrackDepartmentUsageIndicator() {
        return this.getComponent('TrackDepartmentUsageIndicator');
    }

    set TrackDepartmentUsageIndicator(value) {
        this.setComponentValue('TrackDepartmentUsageIndicator', value);
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

    get SpecialHandlingCode() {
        return this.getComponent('SpecialHandlingCode');
    }

    set SpecialHandlingCode(value) {
        this.setComponentValue('SpecialHandlingCode', value);
    }

    get HazardousIndicator() {
        return this.getComponent('HazardousIndicator');
    }

    set HazardousIndicator(value) {
        this.setComponentValue('HazardousIndicator', value);
    }

    get SterileIndicator() {
        return this.getComponent('SterileIndicator');
    }

    set SterileIndicator(value) {
        this.setComponentValue('SterileIndicator', value);
    }

    get MaterialDataSafetySheetNumber() {
        return this.getComponent('MaterialDataSafetySheetNumber');
    }

    set MaterialDataSafetySheetNumber(value) {
        this.setComponentValue('MaterialDataSafetySheetNumber', value);
    }

    get UnitedNationsStandardProductsAndServicesCodeUNSPSC() {
        return this.getComponent('UnitedNationsStandardProductsAndServicesCodeUNSPSC');
    }

    set UnitedNationsStandardProductsAndServicesCodeUNSPSC(value) {
        this.setComponentValue('UnitedNationsStandardProductsAndServicesCodeUNSPSC', value);
    }
}
