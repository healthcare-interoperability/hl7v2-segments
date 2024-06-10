import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';

export class BPX extends Segment {
    static components = {
        SetIdBpx: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDBPX: { aliasOf: 'SetIdBpx' },
        BpDispenseStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPDispenseStatus: { aliasOf: 'BpDispenseStatus' },
        BpStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPStatus: { aliasOf: 'BpStatus' },
        BpDateTimeOfStatus: {
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
        BPDateTimeOfStatus: { aliasOf: 'BpDateTimeOfStatus' },
        BcDonationId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BCDonationID: { aliasOf: 'BcDonationId' },
        BcComponent: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BCComponent: { aliasOf: 'BcComponent' },
        BcDonationTypeIntendedUse: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BCDonationTypeIntendedUse: { aliasOf: 'BcDonationTypeIntendedUse' },
        CpCommercialProduct: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CPCommercialProduct: { aliasOf: 'CpCommercialProduct' },
        CpManufacturer: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CPManufacturer: { aliasOf: 'CpManufacturer' },
        CpLotNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CPLotNumber: { aliasOf: 'CpLotNumber' },
        BpBloodGroup: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPBloodGroup: { aliasOf: 'BpBloodGroup' },
        BcSpecialTesting: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        BCSpecialTesting: { aliasOf: 'BcSpecialTesting' },
        BpExpirationDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPExpirationDateTime: { aliasOf: 'BpExpirationDateTime' },
        BpQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPQuantity: { aliasOf: 'BpQuantity' },
        BpAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPAmount: { aliasOf: 'BpAmount' },
        BpUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.5', '2.5.1'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPUnits: { aliasOf: 'BpUnits' },
        BpUniqueId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPUniqueID: { aliasOf: 'BpUniqueId' },
        BpActualDispensedToLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPActualDispensedToLocation: { aliasOf: 'BpActualDispensedToLocation' },
        BpActualDispensedToAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPActualDispensedToAddress: { aliasOf: 'BpActualDispensedToAddress' },
        BpDispensedToReceiver: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPDispensedToReceiver: { aliasOf: 'BpDispensedToReceiver' },
        BpDispensingIndividual: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPDispensingIndividual: { aliasOf: 'BpDispensingIndividual' },
    };

    static componentsByIndex = [
        '',
        'SetIdBpx',
        'BpDispenseStatus',
        'BpStatus',
        'BpDateTimeOfStatus',
        'BcDonationId',
        'BcComponent',
        'BcDonationTypeIntendedUse',
        'CpCommercialProduct',
        'CpManufacturer',
        'CpLotNumber',
        'BpBloodGroup',
        'BcSpecialTesting',
        'BpExpirationDateTime',
        'BpQuantity',
        'BpAmount',
        'BpUnits',
        'BpUniqueId',
        'BpActualDispensedToLocation',
        'BpActualDispensedToAddress',
        'BpDispensedToReceiver',
        'BpDispensingIndividual',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('BPX');
        this.setValues(values);
    }

    get SetIdBpx() {
        return this.getComponent('SetIdBpx');
    }

    set SetIdBpx(value) {
        this.setComponentValue('SetIdBpx', value);
    }

    get SetIDBPX() {
        return this.getComponent('SetIdBpx');
    }

    set SetIDBPX(value) {
        this.setComponentValue('SetIdBpx', value);
    }

    get BpDispenseStatus() {
        return this.getComponent('BpDispenseStatus');
    }

    set BpDispenseStatus(value) {
        this.setComponentValue('BpDispenseStatus', value);
    }

    get BPDispenseStatus() {
        return this.getComponent('BpDispenseStatus');
    }

    set BPDispenseStatus(value) {
        this.setComponentValue('BpDispenseStatus', value);
    }

    get BpStatus() {
        return this.getComponent('BpStatus');
    }

    set BpStatus(value) {
        this.setComponentValue('BpStatus', value);
    }

    get BPStatus() {
        return this.getComponent('BpStatus');
    }

    set BPStatus(value) {
        this.setComponentValue('BpStatus', value);
    }

    get BpDateTimeOfStatus() {
        return this.getComponent('BpDateTimeOfStatus');
    }

    set BpDateTimeOfStatus(value) {
        this.setComponentValue('BpDateTimeOfStatus', value);
    }

    get BPDateTimeOfStatus() {
        return this.getComponent('BpDateTimeOfStatus');
    }

    set BPDateTimeOfStatus(value) {
        this.setComponentValue('BpDateTimeOfStatus', value);
    }

    get BcDonationId() {
        return this.getComponent('BcDonationId');
    }

    set BcDonationId(value) {
        this.setComponentValue('BcDonationId', value);
    }

    get BCDonationID() {
        return this.getComponent('BcDonationId');
    }

    set BCDonationID(value) {
        this.setComponentValue('BcDonationId', value);
    }

    get BcComponent() {
        return this.getComponent('BcComponent');
    }

    set BcComponent(value) {
        this.setComponentValue('BcComponent', value);
    }

    get BCComponent() {
        return this.getComponent('BcComponent');
    }

    set BCComponent(value) {
        this.setComponentValue('BcComponent', value);
    }

    get BcDonationTypeIntendedUse() {
        return this.getComponent('BcDonationTypeIntendedUse');
    }

    set BcDonationTypeIntendedUse(value) {
        this.setComponentValue('BcDonationTypeIntendedUse', value);
    }

    get BCDonationTypeIntendedUse() {
        return this.getComponent('BcDonationTypeIntendedUse');
    }

    set BCDonationTypeIntendedUse(value) {
        this.setComponentValue('BcDonationTypeIntendedUse', value);
    }

    get CpCommercialProduct() {
        return this.getComponent('CpCommercialProduct');
    }

    set CpCommercialProduct(value) {
        this.setComponentValue('CpCommercialProduct', value);
    }

    get CPCommercialProduct() {
        return this.getComponent('CpCommercialProduct');
    }

    set CPCommercialProduct(value) {
        this.setComponentValue('CpCommercialProduct', value);
    }

    get CpManufacturer() {
        return this.getComponent('CpManufacturer');
    }

    set CpManufacturer(value) {
        this.setComponentValue('CpManufacturer', value);
    }

    get CPManufacturer() {
        return this.getComponent('CpManufacturer');
    }

    set CPManufacturer(value) {
        this.setComponentValue('CpManufacturer', value);
    }

    get CpLotNumber() {
        return this.getComponent('CpLotNumber');
    }

    set CpLotNumber(value) {
        this.setComponentValue('CpLotNumber', value);
    }

    get CPLotNumber() {
        return this.getComponent('CpLotNumber');
    }

    set CPLotNumber(value) {
        this.setComponentValue('CpLotNumber', value);
    }

    get BpBloodGroup() {
        return this.getComponent('BpBloodGroup');
    }

    set BpBloodGroup(value) {
        this.setComponentValue('BpBloodGroup', value);
    }

    get BPBloodGroup() {
        return this.getComponent('BpBloodGroup');
    }

    set BPBloodGroup(value) {
        this.setComponentValue('BpBloodGroup', value);
    }

    get BcSpecialTesting() {
        return this.getComponent('BcSpecialTesting');
    }

    set BcSpecialTesting(value) {
        this.setComponentValue('BcSpecialTesting', value);
    }

    get BCSpecialTesting() {
        return this.getComponent('BcSpecialTesting');
    }

    set BCSpecialTesting(value) {
        this.setComponentValue('BcSpecialTesting', value);
    }

    get BpExpirationDateTime() {
        return this.getComponent('BpExpirationDateTime');
    }

    set BpExpirationDateTime(value) {
        this.setComponentValue('BpExpirationDateTime', value);
    }

    get BPExpirationDateTime() {
        return this.getComponent('BpExpirationDateTime');
    }

    set BPExpirationDateTime(value) {
        this.setComponentValue('BpExpirationDateTime', value);
    }

    get BpQuantity() {
        return this.getComponent('BpQuantity');
    }

    set BpQuantity(value) {
        this.setComponentValue('BpQuantity', value);
    }

    get BPQuantity() {
        return this.getComponent('BpQuantity');
    }

    set BPQuantity(value) {
        this.setComponentValue('BpQuantity', value);
    }

    get BpAmount() {
        return this.getComponent('BpAmount');
    }

    set BpAmount(value) {
        this.setComponentValue('BpAmount', value);
    }

    get BPAmount() {
        return this.getComponent('BpAmount');
    }

    set BPAmount(value) {
        this.setComponentValue('BpAmount', value);
    }

    get BpUnits() {
        return this.getComponent('BpUnits');
    }

    set BpUnits(value) {
        this.setComponentValue('BpUnits', value);
    }

    get BPUnits() {
        return this.getComponent('BpUnits');
    }

    set BPUnits(value) {
        this.setComponentValue('BpUnits', value);
    }

    get BpUniqueId() {
        return this.getComponent('BpUniqueId');
    }

    set BpUniqueId(value) {
        this.setComponentValue('BpUniqueId', value);
    }

    get BPUniqueID() {
        return this.getComponent('BpUniqueId');
    }

    set BPUniqueID(value) {
        this.setComponentValue('BpUniqueId', value);
    }

    get BpActualDispensedToLocation() {
        return this.getComponent('BpActualDispensedToLocation');
    }

    set BpActualDispensedToLocation(value) {
        this.setComponentValue('BpActualDispensedToLocation', value);
    }

    get BPActualDispensedToLocation() {
        return this.getComponent('BpActualDispensedToLocation');
    }

    set BPActualDispensedToLocation(value) {
        this.setComponentValue('BpActualDispensedToLocation', value);
    }

    get BpActualDispensedToAddress() {
        return this.getComponent('BpActualDispensedToAddress');
    }

    set BpActualDispensedToAddress(value) {
        this.setComponentValue('BpActualDispensedToAddress', value);
    }

    get BPActualDispensedToAddress() {
        return this.getComponent('BpActualDispensedToAddress');
    }

    set BPActualDispensedToAddress(value) {
        this.setComponentValue('BpActualDispensedToAddress', value);
    }

    get BpDispensedToReceiver() {
        return this.getComponent('BpDispensedToReceiver');
    }

    set BpDispensedToReceiver(value) {
        this.setComponentValue('BpDispensedToReceiver', value);
    }

    get BPDispensedToReceiver() {
        return this.getComponent('BpDispensedToReceiver');
    }

    set BPDispensedToReceiver(value) {
        this.setComponentValue('BpDispensedToReceiver', value);
    }

    get BpDispensingIndividual() {
        return this.getComponent('BpDispensingIndividual');
    }

    set BpDispensingIndividual(value) {
        this.setComponentValue('BpDispensingIndividual', value);
    }

    get BPDispensingIndividual() {
        return this.getComponent('BpDispensingIndividual');
    }

    set BPDispensingIndividual(value) {
        this.setComponentValue('BpDispensingIndividual', value);
    }
}
