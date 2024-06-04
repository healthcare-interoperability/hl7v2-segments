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
        BcDonationId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BcComponent: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BcBloodGroup: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CpCommercialProduct: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CpManufacturer: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CpLotNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BpQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BpAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
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
        BpTransfusionDispositionStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BpMessageStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
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
        BpTransfusionAdministrator: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BpAdministrator: { aliasOf: 'BpTransfusionAdministrator' },
        BpTransfusionVerifier: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BpVerifier: { aliasOf: 'BpTransfusionVerifier' },
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
        BpAdverseReactionType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        BpTransfusionInterruptedReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BpUniqueId: {
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
        'BpUniqueId',
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

    get BcDonationId() {
        return this.getComponent('BcDonationId');
    }

    set BcDonationId(value) {
        this.setComponentValue('BcDonationId', value);
    }

    get BcComponent() {
        return this.getComponent('BcComponent');
    }

    set BcComponent(value) {
        this.setComponentValue('BcComponent', value);
    }

    get BcBloodGroup() {
        return this.getComponent('BcBloodGroup');
    }

    set BcBloodGroup(value) {
        this.setComponentValue('BcBloodGroup', value);
    }

    get CpCommercialProduct() {
        return this.getComponent('CpCommercialProduct');
    }

    set CpCommercialProduct(value) {
        this.setComponentValue('CpCommercialProduct', value);
    }

    get CpManufacturer() {
        return this.getComponent('CpManufacturer');
    }

    set CpManufacturer(value) {
        this.setComponentValue('CpManufacturer', value);
    }

    get CpLotNumber() {
        return this.getComponent('CpLotNumber');
    }

    set CpLotNumber(value) {
        this.setComponentValue('CpLotNumber', value);
    }

    get BpQuantity() {
        return this.getComponent('BpQuantity');
    }

    set BpQuantity(value) {
        this.setComponentValue('BpQuantity', value);
    }

    get BpAmount() {
        return this.getComponent('BpAmount');
    }

    set BpAmount(value) {
        this.setComponentValue('BpAmount', value);
    }

    get BpUnits() {
        return this.getComponent('BpUnits');
    }

    set BpUnits(value) {
        this.setComponentValue('BpUnits', value);
    }

    get BpTransfusionDispositionStatus() {
        return this.getComponent('BpTransfusionDispositionStatus');
    }

    set BpTransfusionDispositionStatus(value) {
        this.setComponentValue('BpTransfusionDispositionStatus', value);
    }

    get BpMessageStatus() {
        return this.getComponent('BpMessageStatus');
    }

    set BpMessageStatus(value) {
        this.setComponentValue('BpMessageStatus', value);
    }

    get BpDateTimeOfStatus() {
        return this.getComponent('BpDateTimeOfStatus');
    }

    set BpDateTimeOfStatus(value) {
        this.setComponentValue('BpDateTimeOfStatus', value);
    }

    get BpTransfusionAdministrator() {
        return this.getComponent('BpTransfusionAdministrator');
    }

    set BpTransfusionAdministrator(value) {
        this.setComponentValue('BpTransfusionAdministrator', value);
    }

    get BpAdministrator() {
        return this.getComponent('BpTransfusionAdministrator');
    }

    set BpAdministrator(value) {
        this.setComponentValue('BpTransfusionAdministrator', value);
    }

    get BpTransfusionVerifier() {
        return this.getComponent('BpTransfusionVerifier');
    }

    set BpTransfusionVerifier(value) {
        this.setComponentValue('BpTransfusionVerifier', value);
    }

    get BpVerifier() {
        return this.getComponent('BpTransfusionVerifier');
    }

    set BpVerifier(value) {
        this.setComponentValue('BpTransfusionVerifier', value);
    }

    get BpTransfusionStartDateTimeOfStatus() {
        return this.getComponent('BpTransfusionStartDateTimeOfStatus');
    }

    set BpTransfusionStartDateTimeOfStatus(value) {
        this.setComponentValue('BpTransfusionStartDateTimeOfStatus', value);
    }

    get BpTransfusionEndDateTimeOfStatus() {
        return this.getComponent('BpTransfusionEndDateTimeOfStatus');
    }

    set BpTransfusionEndDateTimeOfStatus(value) {
        this.setComponentValue('BpTransfusionEndDateTimeOfStatus', value);
    }

    get BpAdverseReactionType() {
        return this.getComponent('BpAdverseReactionType');
    }

    set BpAdverseReactionType(value) {
        this.setComponentValue('BpAdverseReactionType', value);
    }

    get BpTransfusionInterruptedReason() {
        return this.getComponent('BpTransfusionInterruptedReason');
    }

    set BpTransfusionInterruptedReason(value) {
        this.setComponentValue('BpTransfusionInterruptedReason', value);
    }

    get BpUniqueId() {
        return this.getComponent('BpUniqueId');
    }

    set BpUniqueId(value) {
        this.setComponentValue('BpUniqueId', value);
    }
}
