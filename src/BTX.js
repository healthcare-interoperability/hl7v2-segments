import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';

export class BTX extends Segment {
    static components = {
        SetIdBtx: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDBTX: { aliasOf: 'SetIdBtx' },
        BcDonationId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BCDonationID: { aliasOf: 'BcDonationId' },
        BcComponent: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BCComponent: { aliasOf: 'BcComponent' },
        BcBloodGroup: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BCBloodGroup: { aliasOf: 'BcBloodGroup' },
        CpCommercialProduct: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CPCommercialProduct: { aliasOf: 'CpCommercialProduct' },
        CpManufacturer: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CPManufacturer: { aliasOf: 'CpManufacturer' },
        CpLotNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CPLotNumber: { aliasOf: 'CpLotNumber' },
        BpQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPQuantity: { aliasOf: 'BpQuantity' },
        BpAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
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
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPUnits: { aliasOf: 'BpUnits' },
        BpTransfusionDispositionStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPTransfusionDispositionStatus: { aliasOf: 'BpTransfusionDispositionStatus' },
        BpMessageStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPMessageStatus: { aliasOf: 'BpMessageStatus' },
        BpDateTimeOfStatus: {
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
        BPDateTimeOfStatus: { aliasOf: 'BpDateTimeOfStatus' },
        BpTransfusionAdministrator: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPAdministrator: { aliasOf: 'BpTransfusionAdministrator' },
        BpTransfusionVerifier: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPVerifier: { aliasOf: 'BpTransfusionVerifier' },
        BpTransfusionStartDateTimeOfStatus: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPTransfusionStartDateTimeOfStatus: { aliasOf: 'BpTransfusionStartDateTimeOfStatus' },
        BpTransfusionEndDateTimeOfStatus: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPTransfusionEndDateTimeOfStatus: { aliasOf: 'BpTransfusionEndDateTimeOfStatus' },
        BpAdverseReactionType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        BPAdverseReactionType: { aliasOf: 'BpAdverseReactionType' },
        BpTransfusionInterruptedReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPTransfusionInterruptedReason: { aliasOf: 'BpTransfusionInterruptedReason' },
        BPUniqueID: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdBtx',
        'BcDonationId',
        'BcComponent',
        'BcBloodGroup',
        'CpCommercialProduct',
        'CpManufacturer',
        'CpLotNumber',
        'BpQuantity',
        'BpAmount',
        'BpUnits',
        'BpTransfusionDispositionStatus',
        'BpMessageStatus',
        'BpDateTimeOfStatus',
        'BpTransfusionAdministrator',
        'BpTransfusionVerifier',
        'BpTransfusionStartDateTimeOfStatus',
        'BpTransfusionEndDateTimeOfStatus',
        'BpAdverseReactionType',
        'BpTransfusionInterruptedReason',
        'BPUniqueID',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('BTX');
        this.setValues(values);
    }

    get SetIdBtx() {
        return this.getComponent('SetIdBtx');
    }

    set SetIdBtx(value) {
        this.setComponentValue('SetIdBtx', value);
    }

    get SetIDBTX() {
        return this.getComponent('SetIdBtx');
    }

    set SetIDBTX(value) {
        this.setComponentValue('SetIdBtx', value);
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

    get BcBloodGroup() {
        return this.getComponent('BcBloodGroup');
    }

    set BcBloodGroup(value) {
        this.setComponentValue('BcBloodGroup', value);
    }

    get BCBloodGroup() {
        return this.getComponent('BcBloodGroup');
    }

    set BCBloodGroup(value) {
        this.setComponentValue('BcBloodGroup', value);
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

    get BpTransfusionDispositionStatus() {
        return this.getComponent('BpTransfusionDispositionStatus');
    }

    set BpTransfusionDispositionStatus(value) {
        this.setComponentValue('BpTransfusionDispositionStatus', value);
    }

    get BPTransfusionDispositionStatus() {
        return this.getComponent('BpTransfusionDispositionStatus');
    }

    set BPTransfusionDispositionStatus(value) {
        this.setComponentValue('BpTransfusionDispositionStatus', value);
    }

    get BpMessageStatus() {
        return this.getComponent('BpMessageStatus');
    }

    set BpMessageStatus(value) {
        this.setComponentValue('BpMessageStatus', value);
    }

    get BPMessageStatus() {
        return this.getComponent('BpMessageStatus');
    }

    set BPMessageStatus(value) {
        this.setComponentValue('BpMessageStatus', value);
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

    get BpTransfusionAdministrator() {
        return this.getComponent('BpTransfusionAdministrator');
    }

    set BpTransfusionAdministrator(value) {
        this.setComponentValue('BpTransfusionAdministrator', value);
    }

    get BPAdministrator() {
        return this.getComponent('BpTransfusionAdministrator');
    }

    set BPAdministrator(value) {
        this.setComponentValue('BpTransfusionAdministrator', value);
    }

    get BpTransfusionVerifier() {
        return this.getComponent('BpTransfusionVerifier');
    }

    set BpTransfusionVerifier(value) {
        this.setComponentValue('BpTransfusionVerifier', value);
    }

    get BPVerifier() {
        return this.getComponent('BpTransfusionVerifier');
    }

    set BPVerifier(value) {
        this.setComponentValue('BpTransfusionVerifier', value);
    }

    get BpTransfusionStartDateTimeOfStatus() {
        return this.getComponent('BpTransfusionStartDateTimeOfStatus');
    }

    set BpTransfusionStartDateTimeOfStatus(value) {
        this.setComponentValue('BpTransfusionStartDateTimeOfStatus', value);
    }

    get BPTransfusionStartDateTimeOfStatus() {
        return this.getComponent('BpTransfusionStartDateTimeOfStatus');
    }

    set BPTransfusionStartDateTimeOfStatus(value) {
        this.setComponentValue('BpTransfusionStartDateTimeOfStatus', value);
    }

    get BpTransfusionEndDateTimeOfStatus() {
        return this.getComponent('BpTransfusionEndDateTimeOfStatus');
    }

    set BpTransfusionEndDateTimeOfStatus(value) {
        this.setComponentValue('BpTransfusionEndDateTimeOfStatus', value);
    }

    get BPTransfusionEndDateTimeOfStatus() {
        return this.getComponent('BpTransfusionEndDateTimeOfStatus');
    }

    set BPTransfusionEndDateTimeOfStatus(value) {
        this.setComponentValue('BpTransfusionEndDateTimeOfStatus', value);
    }

    get BpAdverseReactionType() {
        return this.getComponent('BpAdverseReactionType');
    }

    set BpAdverseReactionType(value) {
        this.setComponentValue('BpAdverseReactionType', value);
    }

    get BPAdverseReactionType() {
        return this.getComponent('BpAdverseReactionType');
    }

    set BPAdverseReactionType(value) {
        this.setComponentValue('BpAdverseReactionType', value);
    }

    get BpTransfusionInterruptedReason() {
        return this.getComponent('BpTransfusionInterruptedReason');
    }

    set BpTransfusionInterruptedReason(value) {
        this.setComponentValue('BpTransfusionInterruptedReason', value);
    }

    get BPTransfusionInterruptedReason() {
        return this.getComponent('BpTransfusionInterruptedReason');
    }

    set BPTransfusionInterruptedReason(value) {
        this.setComponentValue('BpTransfusionInterruptedReason', value);
    }

    get BPUniqueID() {
        return this.getComponent('BPUniqueID');
    }

    set BPUniqueID(value) {
        this.setComponentValue('BPUniqueID', value);
    }
}
