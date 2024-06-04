import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { TQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { LA2 } from '@healthcare-interoperability/hl7v2-datatypes';
import { LA1 } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';

export class RXE extends Segment {
    static components = {
        QuantityTiming: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: TQ, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
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
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveAmountMinimum: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveAmountMaximum: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
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
            position: 5,
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
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProviderSAdministrationInstructions: {
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
        ProviderAdministrationInstructions: { aliasOf: 'ProviderSAdministrationInstructions' },
        DeliverToLocation: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8'] },
                { dataType: LA2, versions: ['2.3'] },
                { dataType: LA1, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubstitutionStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispenseUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfRefills: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrderingProviderSDeaNumber: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        OrderingProviderSDEANumber: { aliasOf: 'OrderingProviderSDeaNumber' },
        PharmacistTreatmentSupplierSVerifierId: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PharmacistTreatmentSupplierSVerifierID: { aliasOf: 'PharmacistTreatmentSupplierSVerifierId' },
        PrescriptionNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfRefillsRemaining: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfRefillsDosesDispensed: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DTOfMostRecentRefillOrDoseDispensed: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateTimeOfMostRecentRefillOrDoseDispensed: { aliasOf: 'DTOfMostRecentRefillOrDoseDispensed' },
        TotalDailyDose: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NeedsHumanReview: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PharmacyTreatmentSupplierSSpecialDispensingInstructions: {
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
        GivePerTimeUnit: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GivePer: { aliasOf: 'GivePerTimeUnit' },
        GivePerTimeUnits: { aliasOf: 'GivePerTimeUnit' },
        GiveRateAmount: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
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
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveStrength: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
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
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveIndication: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 27,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DispensePackageSize: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 28,
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
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispensePackageMethod: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 30,
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
            position: 31,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OriginalOrderDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveDrugStrengthVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GiveDrugStrengthVolumeUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 34,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ControlledSubstanceSchedule: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FormularyStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 36,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PharmaceuticalSubstanceAlternative: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 37,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PharmacyOfMostRecentFill: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 38,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InitialDispenseAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 39,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispensingPharmacy: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 40,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DispensingPharmacyAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 41,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeliverToPatientLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 42,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeliverToAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 43,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PharmacyOrderType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 44,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PharmacyPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 45,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'QuantityTiming',
        'GiveCode',
        'GiveAmountMinimum',
        'GiveAmountMaximum',
        'GiveUnits',
        'GiveDosageForm',
        'ProviderSAdministrationInstructions',
        'DeliverToLocation',
        'SubstitutionStatus',
        'DispenseAmount',
        'DispenseUnits',
        'NumberOfRefills',
        'OrderingProviderSDeaNumber',
        'PharmacistTreatmentSupplierSVerifierId',
        'PrescriptionNumber',
        'NumberOfRefillsRemaining',
        'NumberOfRefillsDosesDispensed',
        'DTOfMostRecentRefillOrDoseDispensed',
        'TotalDailyDose',
        'NeedsHumanReview',
        'PharmacyTreatmentSupplierSSpecialDispensingInstructions',
        'GivePerTimeUnit',
        'GiveRateAmount',
        'GiveRateUnits',
        'GiveStrength',
        'GiveStrengthUnits',
        'GiveIndication',
        'DispensePackageSize',
        'DispensePackageSizeUnit',
        'DispensePackageMethod',
        'SupplementaryCode',
        'OriginalOrderDateTime',
        'GiveDrugStrengthVolume',
        'GiveDrugStrengthVolumeUnits',
        'ControlledSubstanceSchedule',
        'FormularyStatus',
        'PharmaceuticalSubstanceAlternative',
        'PharmacyOfMostRecentFill',
        'InitialDispenseAmount',
        'DispensingPharmacy',
        'DispensingPharmacyAddress',
        'DeliverToPatientLocation',
        'DeliverToAddress',
        'PharmacyOrderType',
        'PharmacyPhoneNumber',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RXE');
        this.setValues(values);
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

    get ProviderSAdministrationInstructions() {
        return this.getComponent('ProviderSAdministrationInstructions');
    }

    set ProviderSAdministrationInstructions(value) {
        this.setComponentValue('ProviderSAdministrationInstructions', value);
    }

    get ProviderAdministrationInstructions() {
        return this.getComponent('ProviderSAdministrationInstructions');
    }

    set ProviderAdministrationInstructions(value) {
        this.setComponentValue('ProviderSAdministrationInstructions', value);
    }

    get DeliverToLocation() {
        return this.getComponent('DeliverToLocation');
    }

    set DeliverToLocation(value) {
        this.setComponentValue('DeliverToLocation', value);
    }

    get SubstitutionStatus() {
        return this.getComponent('SubstitutionStatus');
    }

    set SubstitutionStatus(value) {
        this.setComponentValue('SubstitutionStatus', value);
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

    get NumberOfRefills() {
        return this.getComponent('NumberOfRefills');
    }

    set NumberOfRefills(value) {
        this.setComponentValue('NumberOfRefills', value);
    }

    get OrderingProviderSDeaNumber() {
        return this.getComponent('OrderingProviderSDeaNumber');
    }

    set OrderingProviderSDeaNumber(value) {
        this.setComponentValue('OrderingProviderSDeaNumber', value);
    }

    get OrderingProviderSDEANumber() {
        return this.getComponent('OrderingProviderSDeaNumber');
    }

    set OrderingProviderSDEANumber(value) {
        this.setComponentValue('OrderingProviderSDeaNumber', value);
    }

    get PharmacistTreatmentSupplierSVerifierId() {
        return this.getComponent('PharmacistTreatmentSupplierSVerifierId');
    }

    set PharmacistTreatmentSupplierSVerifierId(value) {
        this.setComponentValue('PharmacistTreatmentSupplierSVerifierId', value);
    }

    get PharmacistTreatmentSupplierSVerifierID() {
        return this.getComponent('PharmacistTreatmentSupplierSVerifierId');
    }

    set PharmacistTreatmentSupplierSVerifierID(value) {
        this.setComponentValue('PharmacistTreatmentSupplierSVerifierId', value);
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

    get NumberOfRefillsDosesDispensed() {
        return this.getComponent('NumberOfRefillsDosesDispensed');
    }

    set NumberOfRefillsDosesDispensed(value) {
        this.setComponentValue('NumberOfRefillsDosesDispensed', value);
    }

    get DTOfMostRecentRefillOrDoseDispensed() {
        return this.getComponent('DTOfMostRecentRefillOrDoseDispensed');
    }

    set DTOfMostRecentRefillOrDoseDispensed(value) {
        this.setComponentValue('DTOfMostRecentRefillOrDoseDispensed', value);
    }

    get DateTimeOfMostRecentRefillOrDoseDispensed() {
        return this.getComponent('DTOfMostRecentRefillOrDoseDispensed');
    }

    set DateTimeOfMostRecentRefillOrDoseDispensed(value) {
        this.setComponentValue('DTOfMostRecentRefillOrDoseDispensed', value);
    }

    get TotalDailyDose() {
        return this.getComponent('TotalDailyDose');
    }

    set TotalDailyDose(value) {
        this.setComponentValue('TotalDailyDose', value);
    }

    get NeedsHumanReview() {
        return this.getComponent('NeedsHumanReview');
    }

    set NeedsHumanReview(value) {
        this.setComponentValue('NeedsHumanReview', value);
    }

    get PharmacyTreatmentSupplierSSpecialDispensingInstructions() {
        return this.getComponent('PharmacyTreatmentSupplierSSpecialDispensingInstructions');
    }

    set PharmacyTreatmentSupplierSSpecialDispensingInstructions(value) {
        this.setComponentValue('PharmacyTreatmentSupplierSSpecialDispensingInstructions', value);
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

    get GivePerTimeUnits() {
        return this.getComponent('GivePerTimeUnit');
    }

    set GivePerTimeUnits(value) {
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

    get GiveIndication() {
        return this.getComponent('GiveIndication');
    }

    set GiveIndication(value) {
        this.setComponentValue('GiveIndication', value);
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

    get OriginalOrderDateTime() {
        return this.getComponent('OriginalOrderDateTime');
    }

    set OriginalOrderDateTime(value) {
        this.setComponentValue('OriginalOrderDateTime', value);
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

    get ControlledSubstanceSchedule() {
        return this.getComponent('ControlledSubstanceSchedule');
    }

    set ControlledSubstanceSchedule(value) {
        this.setComponentValue('ControlledSubstanceSchedule', value);
    }

    get FormularyStatus() {
        return this.getComponent('FormularyStatus');
    }

    set FormularyStatus(value) {
        this.setComponentValue('FormularyStatus', value);
    }

    get PharmaceuticalSubstanceAlternative() {
        return this.getComponent('PharmaceuticalSubstanceAlternative');
    }

    set PharmaceuticalSubstanceAlternative(value) {
        this.setComponentValue('PharmaceuticalSubstanceAlternative', value);
    }

    get PharmacyOfMostRecentFill() {
        return this.getComponent('PharmacyOfMostRecentFill');
    }

    set PharmacyOfMostRecentFill(value) {
        this.setComponentValue('PharmacyOfMostRecentFill', value);
    }

    get InitialDispenseAmount() {
        return this.getComponent('InitialDispenseAmount');
    }

    set InitialDispenseAmount(value) {
        this.setComponentValue('InitialDispenseAmount', value);
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

    get PharmacyOrderType() {
        return this.getComponent('PharmacyOrderType');
    }

    set PharmacyOrderType(value) {
        this.setComponentValue('PharmacyOrderType', value);
    }

    get PharmacyPhoneNumber() {
        return this.getComponent('PharmacyPhoneNumber');
    }

    set PharmacyPhoneNumber(value) {
        this.setComponentValue('PharmacyPhoneNumber', value);
    }
}
