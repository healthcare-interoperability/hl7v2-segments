import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { LA2 } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';

export class RXA extends Segment {
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
        AdministrationSubIdCounter: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministrationSubIDCounter: { aliasOf: 'AdministrationSubIdCounter' },
        DateTimeStartOfAdministration: {
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
        DateTimeEndOfAdministration: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministeredCode: {
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
        AdministeredAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministeredUnits: {
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
        AdministeredDosageForm: {
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
        AdministeringProvider: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        AdministeredAtLocation: {
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
        AdministeredPerTimeUnit: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministeredPer: { aliasOf: 'AdministeredPerTimeUnit' },
        AdministeredStrength: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministeredStrengthUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubstanceLotNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
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
            position: 16,
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
            position: 17,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SubstanceTreatmentRefusalReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SubstanceRefusalReason: { aliasOf: 'SubstanceTreatmentRefusalReason' },
        Indication: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 19,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CompletionStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionCodeRxa: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionCodeRXA: { aliasOf: 'ActionCodeRxa' },
        SystemEntryDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministeredDrugStrengthVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministeredDrugStrengthVolumeUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministeredBarcodeIdentifier: {
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
        AdministerAt: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministeredAtAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministeredTagIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8'] }],
            position: 29,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'GiveSubIdCounter',
        'AdministrationSubIdCounter',
        'DateTimeStartOfAdministration',
        'DateTimeEndOfAdministration',
        'AdministeredCode',
        'AdministeredAmount',
        'AdministeredUnits',
        'AdministeredDosageForm',
        'AdministrationNotes',
        'AdministeringProvider',
        'AdministeredAtLocation',
        'AdministeredPerTimeUnit',
        'AdministeredStrength',
        'AdministeredStrengthUnits',
        'SubstanceLotNumber',
        'SubstanceExpirationDate',
        'SubstanceManufacturerName',
        'SubstanceTreatmentRefusalReason',
        'Indication',
        'CompletionStatus',
        'ActionCodeRxa',
        'SystemEntryDateTime',
        'AdministeredDrugStrengthVolume',
        'AdministeredDrugStrengthVolumeUnits',
        'AdministeredBarcodeIdentifier',
        'PharmacyOrderType',
        'AdministerAt',
        'AdministeredAtAddress',
        'AdministeredTagIdentifier',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RXA');
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

    get AdministrationSubIdCounter() {
        return this.getComponent('AdministrationSubIdCounter');
    }

    set AdministrationSubIdCounter(value) {
        this.setComponentValue('AdministrationSubIdCounter', value);
    }

    get AdministrationSubIDCounter() {
        return this.getComponent('AdministrationSubIdCounter');
    }

    set AdministrationSubIDCounter(value) {
        this.setComponentValue('AdministrationSubIdCounter', value);
    }

    get DateTimeStartOfAdministration() {
        return this.getComponent('DateTimeStartOfAdministration');
    }

    set DateTimeStartOfAdministration(value) {
        this.setComponentValue('DateTimeStartOfAdministration', value);
    }

    get DateTimeEndOfAdministration() {
        return this.getComponent('DateTimeEndOfAdministration');
    }

    set DateTimeEndOfAdministration(value) {
        this.setComponentValue('DateTimeEndOfAdministration', value);
    }

    get AdministeredCode() {
        return this.getComponent('AdministeredCode');
    }

    set AdministeredCode(value) {
        this.setComponentValue('AdministeredCode', value);
    }

    get AdministeredAmount() {
        return this.getComponent('AdministeredAmount');
    }

    set AdministeredAmount(value) {
        this.setComponentValue('AdministeredAmount', value);
    }

    get AdministeredUnits() {
        return this.getComponent('AdministeredUnits');
    }

    set AdministeredUnits(value) {
        this.setComponentValue('AdministeredUnits', value);
    }

    get AdministeredDosageForm() {
        return this.getComponent('AdministeredDosageForm');
    }

    set AdministeredDosageForm(value) {
        this.setComponentValue('AdministeredDosageForm', value);
    }

    get AdministrationNotes() {
        return this.getComponent('AdministrationNotes');
    }

    set AdministrationNotes(value) {
        this.setComponentValue('AdministrationNotes', value);
    }

    get AdministeringProvider() {
        return this.getComponent('AdministeringProvider');
    }

    set AdministeringProvider(value) {
        this.setComponentValue('AdministeringProvider', value);
    }

    get AdministeredAtLocation() {
        return this.getComponent('AdministeredAtLocation');
    }

    set AdministeredAtLocation(value) {
        this.setComponentValue('AdministeredAtLocation', value);
    }

    get AdministeredPerTimeUnit() {
        return this.getComponent('AdministeredPerTimeUnit');
    }

    set AdministeredPerTimeUnit(value) {
        this.setComponentValue('AdministeredPerTimeUnit', value);
    }

    get AdministeredPer() {
        return this.getComponent('AdministeredPerTimeUnit');
    }

    set AdministeredPer(value) {
        this.setComponentValue('AdministeredPerTimeUnit', value);
    }

    get AdministeredStrength() {
        return this.getComponent('AdministeredStrength');
    }

    set AdministeredStrength(value) {
        this.setComponentValue('AdministeredStrength', value);
    }

    get AdministeredStrengthUnits() {
        return this.getComponent('AdministeredStrengthUnits');
    }

    set AdministeredStrengthUnits(value) {
        this.setComponentValue('AdministeredStrengthUnits', value);
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

    get SubstanceTreatmentRefusalReason() {
        return this.getComponent('SubstanceTreatmentRefusalReason');
    }

    set SubstanceTreatmentRefusalReason(value) {
        this.setComponentValue('SubstanceTreatmentRefusalReason', value);
    }

    get SubstanceRefusalReason() {
        return this.getComponent('SubstanceTreatmentRefusalReason');
    }

    set SubstanceRefusalReason(value) {
        this.setComponentValue('SubstanceTreatmentRefusalReason', value);
    }

    get Indication() {
        return this.getComponent('Indication');
    }

    set Indication(value) {
        this.setComponentValue('Indication', value);
    }

    get CompletionStatus() {
        return this.getComponent('CompletionStatus');
    }

    set CompletionStatus(value) {
        this.setComponentValue('CompletionStatus', value);
    }

    get ActionCodeRxa() {
        return this.getComponent('ActionCodeRxa');
    }

    set ActionCodeRxa(value) {
        this.setComponentValue('ActionCodeRxa', value);
    }

    get ActionCodeRXA() {
        return this.getComponent('ActionCodeRxa');
    }

    set ActionCodeRXA(value) {
        this.setComponentValue('ActionCodeRxa', value);
    }

    get SystemEntryDateTime() {
        return this.getComponent('SystemEntryDateTime');
    }

    set SystemEntryDateTime(value) {
        this.setComponentValue('SystemEntryDateTime', value);
    }

    get AdministeredDrugStrengthVolume() {
        return this.getComponent('AdministeredDrugStrengthVolume');
    }

    set AdministeredDrugStrengthVolume(value) {
        this.setComponentValue('AdministeredDrugStrengthVolume', value);
    }

    get AdministeredDrugStrengthVolumeUnits() {
        return this.getComponent('AdministeredDrugStrengthVolumeUnits');
    }

    set AdministeredDrugStrengthVolumeUnits(value) {
        this.setComponentValue('AdministeredDrugStrengthVolumeUnits', value);
    }

    get AdministeredBarcodeIdentifier() {
        return this.getComponent('AdministeredBarcodeIdentifier');
    }

    set AdministeredBarcodeIdentifier(value) {
        this.setComponentValue('AdministeredBarcodeIdentifier', value);
    }

    get PharmacyOrderType() {
        return this.getComponent('PharmacyOrderType');
    }

    set PharmacyOrderType(value) {
        this.setComponentValue('PharmacyOrderType', value);
    }

    get AdministerAt() {
        return this.getComponent('AdministerAt');
    }

    set AdministerAt(value) {
        this.setComponentValue('AdministerAt', value);
    }

    get AdministeredAtAddress() {
        return this.getComponent('AdministeredAtAddress');
    }

    set AdministeredAtAddress(value) {
        this.setComponentValue('AdministeredAtAddress', value);
    }

    get AdministeredTagIdentifier() {
        return this.getComponent('AdministeredTagIdentifier');
    }

    set AdministeredTagIdentifier(value) {
        this.setComponentValue('AdministeredTagIdentifier', value);
    }
}
