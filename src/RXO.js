import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { LA1 } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';

export class RXO extends Segment {
    static components = {
        RequestedGiveCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedGiveAmountMinimum: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedGiveAmountMaximum: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedGiveUnits: {
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
        RequestedDosageForm: {
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
        ProvidersPharmacyTreatmentInstructions: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProvidersPharmacyInstructions: { aliasOf: 'ProvidersPharmacyTreatmentInstructions' },
        ProviderSPharmacyTreatmentInstructions: { aliasOf: 'ProvidersPharmacyTreatmentInstructions' },
        ProvidersAdministrationInstructions: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProviderSAdministrationInstructions: { aliasOf: 'ProvidersAdministrationInstructions' },
        DeliverToLocation: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8'] },
                { dataType: LA1, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AllowSubstitutions: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedDispenseCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedDispenseAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedDispenseUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfRefills: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrderingProvidersDeaNumber: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        OrderingProvidersDEANumber: { aliasOf: 'OrderingProvidersDeaNumber' },
        OrderingProviderSDEANumber: { aliasOf: 'OrderingProvidersDeaNumber' },
        PharmacistTreatmentSuppliersVerifierId: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PharmacistTreatmentSuppliersVerifierID: { aliasOf: 'PharmacistTreatmentSuppliersVerifierId' },
        PharmacistTreatmentSupplierSVerifierID: { aliasOf: 'PharmacistTreatmentSuppliersVerifierId' },
        NeedsHumanReview: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedGivePerTimeUnit: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedGivePer: { aliasOf: 'RequestedGivePerTimeUnit' },
        RequestedGiveStrength: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedGiveStrengthUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Indication: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 20,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        RequestedGiveRateAmount: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedGiveRateUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalDailyDose: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 23,
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
            position: 24,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        RequestedDrugStrengthVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedDrugStrengthVolumeUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PharmacyOrderType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispensingInterval: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MedicationInstanceIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SegmentInstanceIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MoodCode: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispensingPharmacy: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispensingPharmacyAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeliverToPatientLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 34,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeliverToAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PharmacyPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 36,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'RequestedGiveCode',
        'RequestedGiveAmountMinimum',
        'RequestedGiveAmountMaximum',
        'RequestedGiveUnits',
        'RequestedDosageForm',
        'ProvidersPharmacyTreatmentInstructions',
        'ProvidersAdministrationInstructions',
        'DeliverToLocation',
        'AllowSubstitutions',
        'RequestedDispenseCode',
        'RequestedDispenseAmount',
        'RequestedDispenseUnits',
        'NumberOfRefills',
        'OrderingProvidersDeaNumber',
        'PharmacistTreatmentSuppliersVerifierId',
        'NeedsHumanReview',
        'RequestedGivePerTimeUnit',
        'RequestedGiveStrength',
        'RequestedGiveStrengthUnits',
        'Indication',
        'RequestedGiveRateAmount',
        'RequestedGiveRateUnits',
        'TotalDailyDose',
        'SupplementaryCode',
        'RequestedDrugStrengthVolume',
        'RequestedDrugStrengthVolumeUnits',
        'PharmacyOrderType',
        'DispensingInterval',
        'MedicationInstanceIdentifier',
        'SegmentInstanceIdentifier',
        'MoodCode',
        'DispensingPharmacy',
        'DispensingPharmacyAddress',
        'DeliverToPatientLocation',
        'DeliverToAddress',
        'PharmacyPhoneNumber',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RXO');
        this.setValues(values);
    }

    get RequestedGiveCode() {
        return this.getComponent('RequestedGiveCode');
    }

    set RequestedGiveCode(value) {
        this.setComponentValue('RequestedGiveCode', value);
    }

    get RequestedGiveAmountMinimum() {
        return this.getComponent('RequestedGiveAmountMinimum');
    }

    set RequestedGiveAmountMinimum(value) {
        this.setComponentValue('RequestedGiveAmountMinimum', value);
    }

    get RequestedGiveAmountMaximum() {
        return this.getComponent('RequestedGiveAmountMaximum');
    }

    set RequestedGiveAmountMaximum(value) {
        this.setComponentValue('RequestedGiveAmountMaximum', value);
    }

    get RequestedGiveUnits() {
        return this.getComponent('RequestedGiveUnits');
    }

    set RequestedGiveUnits(value) {
        this.setComponentValue('RequestedGiveUnits', value);
    }

    get RequestedDosageForm() {
        return this.getComponent('RequestedDosageForm');
    }

    set RequestedDosageForm(value) {
        this.setComponentValue('RequestedDosageForm', value);
    }

    get ProvidersPharmacyTreatmentInstructions() {
        return this.getComponent('ProvidersPharmacyTreatmentInstructions');
    }

    set ProvidersPharmacyTreatmentInstructions(value) {
        this.setComponentValue('ProvidersPharmacyTreatmentInstructions', value);
    }

    get ProvidersPharmacyInstructions() {
        return this.getComponent('ProvidersPharmacyTreatmentInstructions');
    }

    set ProvidersPharmacyInstructions(value) {
        this.setComponentValue('ProvidersPharmacyTreatmentInstructions', value);
    }

    get ProviderSPharmacyTreatmentInstructions() {
        return this.getComponent('ProvidersPharmacyTreatmentInstructions');
    }

    set ProviderSPharmacyTreatmentInstructions(value) {
        this.setComponentValue('ProvidersPharmacyTreatmentInstructions', value);
    }

    get ProvidersAdministrationInstructions() {
        return this.getComponent('ProvidersAdministrationInstructions');
    }

    set ProvidersAdministrationInstructions(value) {
        this.setComponentValue('ProvidersAdministrationInstructions', value);
    }

    get ProviderSAdministrationInstructions() {
        return this.getComponent('ProvidersAdministrationInstructions');
    }

    set ProviderSAdministrationInstructions(value) {
        this.setComponentValue('ProvidersAdministrationInstructions', value);
    }

    get DeliverToLocation() {
        return this.getComponent('DeliverToLocation');
    }

    set DeliverToLocation(value) {
        this.setComponentValue('DeliverToLocation', value);
    }

    get AllowSubstitutions() {
        return this.getComponent('AllowSubstitutions');
    }

    set AllowSubstitutions(value) {
        this.setComponentValue('AllowSubstitutions', value);
    }

    get RequestedDispenseCode() {
        return this.getComponent('RequestedDispenseCode');
    }

    set RequestedDispenseCode(value) {
        this.setComponentValue('RequestedDispenseCode', value);
    }

    get RequestedDispenseAmount() {
        return this.getComponent('RequestedDispenseAmount');
    }

    set RequestedDispenseAmount(value) {
        this.setComponentValue('RequestedDispenseAmount', value);
    }

    get RequestedDispenseUnits() {
        return this.getComponent('RequestedDispenseUnits');
    }

    set RequestedDispenseUnits(value) {
        this.setComponentValue('RequestedDispenseUnits', value);
    }

    get NumberOfRefills() {
        return this.getComponent('NumberOfRefills');
    }

    set NumberOfRefills(value) {
        this.setComponentValue('NumberOfRefills', value);
    }

    get OrderingProvidersDeaNumber() {
        return this.getComponent('OrderingProvidersDeaNumber');
    }

    set OrderingProvidersDeaNumber(value) {
        this.setComponentValue('OrderingProvidersDeaNumber', value);
    }

    get OrderingProvidersDEANumber() {
        return this.getComponent('OrderingProvidersDeaNumber');
    }

    set OrderingProvidersDEANumber(value) {
        this.setComponentValue('OrderingProvidersDeaNumber', value);
    }

    get OrderingProviderSDEANumber() {
        return this.getComponent('OrderingProvidersDeaNumber');
    }

    set OrderingProviderSDEANumber(value) {
        this.setComponentValue('OrderingProvidersDeaNumber', value);
    }

    get PharmacistTreatmentSuppliersVerifierId() {
        return this.getComponent('PharmacistTreatmentSuppliersVerifierId');
    }

    set PharmacistTreatmentSuppliersVerifierId(value) {
        this.setComponentValue('PharmacistTreatmentSuppliersVerifierId', value);
    }

    get PharmacistTreatmentSuppliersVerifierID() {
        return this.getComponent('PharmacistTreatmentSuppliersVerifierId');
    }

    set PharmacistTreatmentSuppliersVerifierID(value) {
        this.setComponentValue('PharmacistTreatmentSuppliersVerifierId', value);
    }

    get PharmacistTreatmentSupplierSVerifierID() {
        return this.getComponent('PharmacistTreatmentSuppliersVerifierId');
    }

    set PharmacistTreatmentSupplierSVerifierID(value) {
        this.setComponentValue('PharmacistTreatmentSuppliersVerifierId', value);
    }

    get NeedsHumanReview() {
        return this.getComponent('NeedsHumanReview');
    }

    set NeedsHumanReview(value) {
        this.setComponentValue('NeedsHumanReview', value);
    }

    get RequestedGivePerTimeUnit() {
        return this.getComponent('RequestedGivePerTimeUnit');
    }

    set RequestedGivePerTimeUnit(value) {
        this.setComponentValue('RequestedGivePerTimeUnit', value);
    }

    get RequestedGivePer() {
        return this.getComponent('RequestedGivePerTimeUnit');
    }

    set RequestedGivePer(value) {
        this.setComponentValue('RequestedGivePerTimeUnit', value);
    }

    get RequestedGiveStrength() {
        return this.getComponent('RequestedGiveStrength');
    }

    set RequestedGiveStrength(value) {
        this.setComponentValue('RequestedGiveStrength', value);
    }

    get RequestedGiveStrengthUnits() {
        return this.getComponent('RequestedGiveStrengthUnits');
    }

    set RequestedGiveStrengthUnits(value) {
        this.setComponentValue('RequestedGiveStrengthUnits', value);
    }

    get Indication() {
        return this.getComponent('Indication');
    }

    set Indication(value) {
        this.setComponentValue('Indication', value);
    }

    get RequestedGiveRateAmount() {
        return this.getComponent('RequestedGiveRateAmount');
    }

    set RequestedGiveRateAmount(value) {
        this.setComponentValue('RequestedGiveRateAmount', value);
    }

    get RequestedGiveRateUnits() {
        return this.getComponent('RequestedGiveRateUnits');
    }

    set RequestedGiveRateUnits(value) {
        this.setComponentValue('RequestedGiveRateUnits', value);
    }

    get TotalDailyDose() {
        return this.getComponent('TotalDailyDose');
    }

    set TotalDailyDose(value) {
        this.setComponentValue('TotalDailyDose', value);
    }

    get SupplementaryCode() {
        return this.getComponent('SupplementaryCode');
    }

    set SupplementaryCode(value) {
        this.setComponentValue('SupplementaryCode', value);
    }

    get RequestedDrugStrengthVolume() {
        return this.getComponent('RequestedDrugStrengthVolume');
    }

    set RequestedDrugStrengthVolume(value) {
        this.setComponentValue('RequestedDrugStrengthVolume', value);
    }

    get RequestedDrugStrengthVolumeUnits() {
        return this.getComponent('RequestedDrugStrengthVolumeUnits');
    }

    set RequestedDrugStrengthVolumeUnits(value) {
        this.setComponentValue('RequestedDrugStrengthVolumeUnits', value);
    }

    get PharmacyOrderType() {
        return this.getComponent('PharmacyOrderType');
    }

    set PharmacyOrderType(value) {
        this.setComponentValue('PharmacyOrderType', value);
    }

    get DispensingInterval() {
        return this.getComponent('DispensingInterval');
    }

    set DispensingInterval(value) {
        this.setComponentValue('DispensingInterval', value);
    }

    get MedicationInstanceIdentifier() {
        return this.getComponent('MedicationInstanceIdentifier');
    }

    set MedicationInstanceIdentifier(value) {
        this.setComponentValue('MedicationInstanceIdentifier', value);
    }

    get SegmentInstanceIdentifier() {
        return this.getComponent('SegmentInstanceIdentifier');
    }

    set SegmentInstanceIdentifier(value) {
        this.setComponentValue('SegmentInstanceIdentifier', value);
    }

    get MoodCode() {
        return this.getComponent('MoodCode');
    }

    set MoodCode(value) {
        this.setComponentValue('MoodCode', value);
    }

    get DispensingPharmacy() {
        return this.getComponent('DispensingPharmacy');
    }

    set DispensingPharmacy(value) {
        this.setComponentValue('DispensingPharmacy', value);
    }

    get DispensingPharmacyAddress() {
        return this.getComponent('DispensingPharmacyAddress');
    }

    set DispensingPharmacyAddress(value) {
        this.setComponentValue('DispensingPharmacyAddress', value);
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

    get PharmacyPhoneNumber() {
        return this.getComponent('PharmacyPhoneNumber');
    }

    set PharmacyPhoneNumber(value) {
        this.setComponentValue('PharmacyPhoneNumber', value);
    }
}
