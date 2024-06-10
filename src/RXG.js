import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { TQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { LA2 } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';

export class RXG extends Segment {
    static components = {
        GiveSubIdCounter: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveSubIDCounter: { aliasOf: 'GiveSubIdCounter' },
        DispenseSubIdCounter: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseSubIDCounter: { aliasOf: 'DispenseSubIdCounter' },
        QuantityTiming: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: TQ, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveCode: {
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
        GiveAmountMinimum: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveAmountMaximum: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveDosageForm: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministrationNotes: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SubstitutionStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseToLocation: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8'] },
                { dataType: LA2, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NeedsHumanReview: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PharmacyTreatmentSuppliersSpecialAdministrationInstructions: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PharmacySpecialAdministrationInstructions: { aliasOf: 'PharmacyTreatmentSuppliersSpecialAdministrationInstructions' },
        PharmacyTreatmentSupplierSSpecialAdministrationInstructions: { aliasOf: 'PharmacyTreatmentSuppliersSpecialAdministrationInstructions' },
        GivePerTimeUnit: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GivePer: { aliasOf: 'GivePerTimeUnit' },
        GiveRateAmount: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveRateUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveStrength: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveStrengthUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubstanceLotNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SubstanceExpirationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 20,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SubstanceManufacturerName: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 21,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        Indication: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 22,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GiveDrugStrengthVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveDrugStrengthVolumeUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveBarcodeIdentifier: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PharmacyOrderType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseToPharmacy: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseToPharmacyAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeliverToPatientLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeliverToAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveTagIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8'] }],
            position: 31,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DispenseAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseUnits: {
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
        'GiveSubIdCounter',
        'DispenseSubIdCounter',
        'QuantityTiming',
        'GiveCode',
        'GiveAmountMinimum',
        'GiveAmountMaximum',
        'GiveUnits',
        'GiveDosageForm',
        'AdministrationNotes',
        'SubstitutionStatus',
        'DispenseToLocation',
        'NeedsHumanReview',
        'PharmacyTreatmentSuppliersSpecialAdministrationInstructions',
        'GivePerTimeUnit',
        'GiveRateAmount',
        'GiveRateUnits',
        'GiveStrength',
        'GiveStrengthUnits',
        'SubstanceLotNumber',
        'SubstanceExpirationDate',
        'SubstanceManufacturerName',
        'Indication',
        'GiveDrugStrengthVolume',
        'GiveDrugStrengthVolumeUnits',
        'GiveBarcodeIdentifier',
        'PharmacyOrderType',
        'DispenseToPharmacy',
        'DispenseToPharmacyAddress',
        'DeliverToPatientLocation',
        'DeliverToAddress',
        'GiveTagIdentifier',
        'DispenseAmount',
        'DispenseUnits',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RXG');
        this.setValues(values);
    }

    get GiveSubIdCounter() {
        return this.getComponent('GiveSubIdCounter');
    }

    set GiveSubIdCounter(value) {
        this.setComponentValue('GiveSubIdCounter', value);
    }

    get GiveSubIDCounter() {
        return this.getComponent('GiveSubIdCounter');
    }

    set GiveSubIDCounter(value) {
        this.setComponentValue('GiveSubIdCounter', value);
    }

    get DispenseSubIdCounter() {
        return this.getComponent('DispenseSubIdCounter');
    }

    set DispenseSubIdCounter(value) {
        this.setComponentValue('DispenseSubIdCounter', value);
    }

    get DispenseSubIDCounter() {
        return this.getComponent('DispenseSubIdCounter');
    }

    set DispenseSubIDCounter(value) {
        this.setComponentValue('DispenseSubIdCounter', value);
    }

    get QuantityTiming() {
        return this.getComponent('QuantityTiming');
    }

    set QuantityTiming(value) {
        this.setComponentValue('QuantityTiming', value);
    }

    get GiveCode() {
        return this.getComponent('GiveCode');
    }

    set GiveCode(value) {
        this.setComponentValue('GiveCode', value);
    }

    get GiveAmountMinimum() {
        return this.getComponent('GiveAmountMinimum');
    }

    set GiveAmountMinimum(value) {
        this.setComponentValue('GiveAmountMinimum', value);
    }

    get GiveAmountMaximum() {
        return this.getComponent('GiveAmountMaximum');
    }

    set GiveAmountMaximum(value) {
        this.setComponentValue('GiveAmountMaximum', value);
    }

    get GiveUnits() {
        return this.getComponent('GiveUnits');
    }

    set GiveUnits(value) {
        this.setComponentValue('GiveUnits', value);
    }

    get GiveDosageForm() {
        return this.getComponent('GiveDosageForm');
    }

    set GiveDosageForm(value) {
        this.setComponentValue('GiveDosageForm', value);
    }

    get AdministrationNotes() {
        return this.getComponent('AdministrationNotes');
    }

    set AdministrationNotes(value) {
        this.setComponentValue('AdministrationNotes', value);
    }

    get SubstitutionStatus() {
        return this.getComponent('SubstitutionStatus');
    }

    set SubstitutionStatus(value) {
        this.setComponentValue('SubstitutionStatus', value);
    }

    get DispenseToLocation() {
        return this.getComponent('DispenseToLocation');
    }

    set DispenseToLocation(value) {
        this.setComponentValue('DispenseToLocation', value);
    }

    get NeedsHumanReview() {
        return this.getComponent('NeedsHumanReview');
    }

    set NeedsHumanReview(value) {
        this.setComponentValue('NeedsHumanReview', value);
    }

    get PharmacyTreatmentSuppliersSpecialAdministrationInstructions() {
        return this.getComponent('PharmacyTreatmentSuppliersSpecialAdministrationInstructions');
    }

    set PharmacyTreatmentSuppliersSpecialAdministrationInstructions(value) {
        this.setComponentValue('PharmacyTreatmentSuppliersSpecialAdministrationInstructions', value);
    }

    get PharmacySpecialAdministrationInstructions() {
        return this.getComponent('PharmacyTreatmentSuppliersSpecialAdministrationInstructions');
    }

    set PharmacySpecialAdministrationInstructions(value) {
        this.setComponentValue('PharmacyTreatmentSuppliersSpecialAdministrationInstructions', value);
    }

    get PharmacyTreatmentSupplierSSpecialAdministrationInstructions() {
        return this.getComponent('PharmacyTreatmentSuppliersSpecialAdministrationInstructions');
    }

    set PharmacyTreatmentSupplierSSpecialAdministrationInstructions(value) {
        this.setComponentValue('PharmacyTreatmentSuppliersSpecialAdministrationInstructions', value);
    }

    get GivePerTimeUnit() {
        return this.getComponent('GivePerTimeUnit');
    }

    set GivePerTimeUnit(value) {
        this.setComponentValue('GivePerTimeUnit', value);
    }

    get GivePer() {
        return this.getComponent('GivePerTimeUnit');
    }

    set GivePer(value) {
        this.setComponentValue('GivePerTimeUnit', value);
    }

    get GiveRateAmount() {
        return this.getComponent('GiveRateAmount');
    }

    set GiveRateAmount(value) {
        this.setComponentValue('GiveRateAmount', value);
    }

    get GiveRateUnits() {
        return this.getComponent('GiveRateUnits');
    }

    set GiveRateUnits(value) {
        this.setComponentValue('GiveRateUnits', value);
    }

    get GiveStrength() {
        return this.getComponent('GiveStrength');
    }

    set GiveStrength(value) {
        this.setComponentValue('GiveStrength', value);
    }

    get GiveStrengthUnits() {
        return this.getComponent('GiveStrengthUnits');
    }

    set GiveStrengthUnits(value) {
        this.setComponentValue('GiveStrengthUnits', value);
    }

    get SubstanceLotNumber() {
        return this.getComponent('SubstanceLotNumber');
    }

    set SubstanceLotNumber(value) {
        this.setComponentValue('SubstanceLotNumber', value);
    }

    get SubstanceExpirationDate() {
        return this.getComponent('SubstanceExpirationDate');
    }

    set SubstanceExpirationDate(value) {
        this.setComponentValue('SubstanceExpirationDate', value);
    }

    get SubstanceManufacturerName() {
        return this.getComponent('SubstanceManufacturerName');
    }

    set SubstanceManufacturerName(value) {
        this.setComponentValue('SubstanceManufacturerName', value);
    }

    get Indication() {
        return this.getComponent('Indication');
    }

    set Indication(value) {
        this.setComponentValue('Indication', value);
    }

    get GiveDrugStrengthVolume() {
        return this.getComponent('GiveDrugStrengthVolume');
    }

    set GiveDrugStrengthVolume(value) {
        this.setComponentValue('GiveDrugStrengthVolume', value);
    }

    get GiveDrugStrengthVolumeUnits() {
        return this.getComponent('GiveDrugStrengthVolumeUnits');
    }

    set GiveDrugStrengthVolumeUnits(value) {
        this.setComponentValue('GiveDrugStrengthVolumeUnits', value);
    }

    get GiveBarcodeIdentifier() {
        return this.getComponent('GiveBarcodeIdentifier');
    }

    set GiveBarcodeIdentifier(value) {
        this.setComponentValue('GiveBarcodeIdentifier', value);
    }

    get PharmacyOrderType() {
        return this.getComponent('PharmacyOrderType');
    }

    set PharmacyOrderType(value) {
        this.setComponentValue('PharmacyOrderType', value);
    }

    get DispenseToPharmacy() {
        return this.getComponent('DispenseToPharmacy');
    }

    set DispenseToPharmacy(value) {
        this.setComponentValue('DispenseToPharmacy', value);
    }

    get DispenseToPharmacyAddress() {
        return this.getComponent('DispenseToPharmacyAddress');
    }

    set DispenseToPharmacyAddress(value) {
        this.setComponentValue('DispenseToPharmacyAddress', value);
    }

    get DeliverToPatientLocation() {
        return this.getComponent('DeliverToPatientLocation');
    }

    set DeliverToPatientLocation(value) {
        this.setComponentValue('DeliverToPatientLocation', value);
    }

    get DeliverToAddress() {
        return this.getComponent('DeliverToAddress');
    }

    set DeliverToAddress(value) {
        this.setComponentValue('DeliverToAddress', value);
    }

    get GiveTagIdentifier() {
        return this.getComponent('GiveTagIdentifier');
    }

    set GiveTagIdentifier(value) {
        this.setComponentValue('GiveTagIdentifier', value);
    }

    get DispenseAmount() {
        return this.getComponent('DispenseAmount');
    }

    set DispenseAmount(value) {
        this.setComponentValue('DispenseAmount', value);
    }

    get DispenseUnits() {
        return this.getComponent('DispenseUnits');
    }

    set DispenseUnits(value) {
        this.setComponentValue('DispenseUnits', value);
    }
}
