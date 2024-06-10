import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { LA2 } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';

export class RXD extends Segment {
    static components = {
        DispenseSubIdCounter: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseSubIDCounter: { aliasOf: 'DispenseSubIdCounter' },
        DispenseGiveCode: {
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
        DateTimeDispensed: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActualDispenseAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActualDispenseUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActualDosageForm: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrescriptionNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfRefillsRemaining: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseNotes: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DispensingProvider: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        SubstitutionStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalDailyDose: {
            defaultDataType: CQ,
            dataTypes: [
                { dataType: CQ, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3'] },
            ],
            position: 12,
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
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NeedsHumanReview: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PharmacyTreatmentSuppliersSpecialDispensingInstructions: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PharmacyTreatmentSupplierSSpecialDispensingInstructions: { aliasOf: 'PharmacyTreatmentSuppliersSpecialDispensingInstructions' },
        ActualStrength: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActualStrengthUnit: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubstanceLotNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
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
            position: 19,
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
            position: 20,
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
            position: 21,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DispensePackageSize: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispensePackageSizeUnit: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispensePackageMethod: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SupplementaryCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 25,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        InitiatingLocation: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PackagingAssemblyLocation: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActualDrugStrengthVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActualDrugStrengthVolumeUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseToPharmacy: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseToPharmacyAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PharmacyOrderType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PharmacyPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 34,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DispenseTagIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8'] }],
            position: 35,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'DispenseSubIdCounter',
        'DispenseGiveCode',
        'DateTimeDispensed',
        'ActualDispenseAmount',
        'ActualDispenseUnits',
        'ActualDosageForm',
        'PrescriptionNumber',
        'NumberOfRefillsRemaining',
        'DispenseNotes',
        'DispensingProvider',
        'SubstitutionStatus',
        'TotalDailyDose',
        'DispenseToLocation',
        'NeedsHumanReview',
        'PharmacyTreatmentSuppliersSpecialDispensingInstructions',
        'ActualStrength',
        'ActualStrengthUnit',
        'SubstanceLotNumber',
        'SubstanceExpirationDate',
        'SubstanceManufacturerName',
        'Indication',
        'DispensePackageSize',
        'DispensePackageSizeUnit',
        'DispensePackageMethod',
        'SupplementaryCode',
        'InitiatingLocation',
        'PackagingAssemblyLocation',
        'ActualDrugStrengthVolume',
        'ActualDrugStrengthVolumeUnits',
        'DispenseToPharmacy',
        'DispenseToPharmacyAddress',
        'PharmacyOrderType',
        'DispenseType',
        'PharmacyPhoneNumber',
        'DispenseTagIdentifier',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RXD');
        this.setValues(values);
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

    get DispenseGiveCode() {
        return this.getComponent('DispenseGiveCode');
    }

    set DispenseGiveCode(value) {
        this.setComponentValue('DispenseGiveCode', value);
    }

    get DateTimeDispensed() {
        return this.getComponent('DateTimeDispensed');
    }

    set DateTimeDispensed(value) {
        this.setComponentValue('DateTimeDispensed', value);
    }

    get ActualDispenseAmount() {
        return this.getComponent('ActualDispenseAmount');
    }

    set ActualDispenseAmount(value) {
        this.setComponentValue('ActualDispenseAmount', value);
    }

    get ActualDispenseUnits() {
        return this.getComponent('ActualDispenseUnits');
    }

    set ActualDispenseUnits(value) {
        this.setComponentValue('ActualDispenseUnits', value);
    }

    get ActualDosageForm() {
        return this.getComponent('ActualDosageForm');
    }

    set ActualDosageForm(value) {
        this.setComponentValue('ActualDosageForm', value);
    }

    get PrescriptionNumber() {
        return this.getComponent('PrescriptionNumber');
    }

    set PrescriptionNumber(value) {
        this.setComponentValue('PrescriptionNumber', value);
    }

    get NumberOfRefillsRemaining() {
        return this.getComponent('NumberOfRefillsRemaining');
    }

    set NumberOfRefillsRemaining(value) {
        this.setComponentValue('NumberOfRefillsRemaining', value);
    }

    get DispenseNotes() {
        return this.getComponent('DispenseNotes');
    }

    set DispenseNotes(value) {
        this.setComponentValue('DispenseNotes', value);
    }

    get DispensingProvider() {
        return this.getComponent('DispensingProvider');
    }

    set DispensingProvider(value) {
        this.setComponentValue('DispensingProvider', value);
    }

    get SubstitutionStatus() {
        return this.getComponent('SubstitutionStatus');
    }

    set SubstitutionStatus(value) {
        this.setComponentValue('SubstitutionStatus', value);
    }

    get TotalDailyDose() {
        return this.getComponent('TotalDailyDose');
    }

    set TotalDailyDose(value) {
        this.setComponentValue('TotalDailyDose', value);
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

    get PharmacyTreatmentSuppliersSpecialDispensingInstructions() {
        return this.getComponent('PharmacyTreatmentSuppliersSpecialDispensingInstructions');
    }

    set PharmacyTreatmentSuppliersSpecialDispensingInstructions(value) {
        this.setComponentValue('PharmacyTreatmentSuppliersSpecialDispensingInstructions', value);
    }

    get PharmacyTreatmentSupplierSSpecialDispensingInstructions() {
        return this.getComponent('PharmacyTreatmentSuppliersSpecialDispensingInstructions');
    }

    set PharmacyTreatmentSupplierSSpecialDispensingInstructions(value) {
        this.setComponentValue('PharmacyTreatmentSuppliersSpecialDispensingInstructions', value);
    }

    get ActualStrength() {
        return this.getComponent('ActualStrength');
    }

    set ActualStrength(value) {
        this.setComponentValue('ActualStrength', value);
    }

    get ActualStrengthUnit() {
        return this.getComponent('ActualStrengthUnit');
    }

    set ActualStrengthUnit(value) {
        this.setComponentValue('ActualStrengthUnit', value);
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

    get DispensePackageSize() {
        return this.getComponent('DispensePackageSize');
    }

    set DispensePackageSize(value) {
        this.setComponentValue('DispensePackageSize', value);
    }

    get DispensePackageSizeUnit() {
        return this.getComponent('DispensePackageSizeUnit');
    }

    set DispensePackageSizeUnit(value) {
        this.setComponentValue('DispensePackageSizeUnit', value);
    }

    get DispensePackageMethod() {
        return this.getComponent('DispensePackageMethod');
    }

    set DispensePackageMethod(value) {
        this.setComponentValue('DispensePackageMethod', value);
    }

    get SupplementaryCode() {
        return this.getComponent('SupplementaryCode');
    }

    set SupplementaryCode(value) {
        this.setComponentValue('SupplementaryCode', value);
    }

    get InitiatingLocation() {
        return this.getComponent('InitiatingLocation');
    }

    set InitiatingLocation(value) {
        this.setComponentValue('InitiatingLocation', value);
    }

    get PackagingAssemblyLocation() {
        return this.getComponent('PackagingAssemblyLocation');
    }

    set PackagingAssemblyLocation(value) {
        this.setComponentValue('PackagingAssemblyLocation', value);
    }

    get ActualDrugStrengthVolume() {
        return this.getComponent('ActualDrugStrengthVolume');
    }

    set ActualDrugStrengthVolume(value) {
        this.setComponentValue('ActualDrugStrengthVolume', value);
    }

    get ActualDrugStrengthVolumeUnits() {
        return this.getComponent('ActualDrugStrengthVolumeUnits');
    }

    set ActualDrugStrengthVolumeUnits(value) {
        this.setComponentValue('ActualDrugStrengthVolumeUnits', value);
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

    get PharmacyOrderType() {
        return this.getComponent('PharmacyOrderType');
    }

    set PharmacyOrderType(value) {
        this.setComponentValue('PharmacyOrderType', value);
    }

    get DispenseType() {
        return this.getComponent('DispenseType');
    }

    set DispenseType(value) {
        this.setComponentValue('DispenseType', value);
    }

    get PharmacyPhoneNumber() {
        return this.getComponent('PharmacyPhoneNumber');
    }

    set PharmacyPhoneNumber(value) {
        this.setComponentValue('PharmacyPhoneNumber', value);
    }

    get DispenseTagIdentifier() {
        return this.getComponent('DispenseTagIdentifier');
    }

    set DispenseTagIdentifier(value) {
        this.setComponentValue('DispenseTagIdentifier', value);
    }
}
