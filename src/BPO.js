import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class BPO extends Segment {
    static components = {
        SetIdBpo: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDBPO: { aliasOf: 'SetIdBpo' },
        BpUniversalServiceIdentifier: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPUniversalServiceID: { aliasOf: 'BpUniversalServiceIdentifier' },
        BPUniversalServiceIdentifier: { aliasOf: 'BpUniversalServiceIdentifier' },
        BpProcessingRequirements: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        BPProcessingRequirements: { aliasOf: 'BpProcessingRequirements' },
        BpQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPQuantity: { aliasOf: 'BpQuantity' },
        BpAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
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
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPUnits: { aliasOf: 'BpUnits' },
        BpIntendedUseDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPIntendedUseDateTime: { aliasOf: 'BpIntendedUseDateTime' },
        BpIntendedDispenseFromLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPIntendedDispenseFromLocation: { aliasOf: 'BpIntendedDispenseFromLocation' },
        BpIntendedDispenseFromAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPIntendedDispenseFromAddress: { aliasOf: 'BpIntendedDispenseFromAddress' },
        BpRequestedDispenseDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPRequestedDispenseDateTime: { aliasOf: 'BpRequestedDispenseDateTime' },
        BpRequestedDispenseToLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPRequestedDispenseToLocation: { aliasOf: 'BpRequestedDispenseToLocation' },
        BpRequestedDispenseToAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPRequestedDispenseToAddress: { aliasOf: 'BpRequestedDispenseToAddress' },
        BpIndicationForUse: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        BPIndicationForUse: { aliasOf: 'BpIndicationForUse' },
        BpInformedConsentIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BPInformedConsentIndicator: { aliasOf: 'BpInformedConsentIndicator' },
    };

    static componentsByIndex = [
        '',
        'SetIdBpo',
        'BpUniversalServiceIdentifier',
        'BpProcessingRequirements',
        'BpQuantity',
        'BpAmount',
        'BpUnits',
        'BpIntendedUseDateTime',
        'BpIntendedDispenseFromLocation',
        'BpIntendedDispenseFromAddress',
        'BpRequestedDispenseDateTime',
        'BpRequestedDispenseToLocation',
        'BpRequestedDispenseToAddress',
        'BpIndicationForUse',
        'BpInformedConsentIndicator',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('BPO');
        this.setValues(values);
    }

    get SetIdBpo() {
        return this.getComponent('SetIdBpo');
    }

    set SetIdBpo(value) {
        this.setComponentValue('SetIdBpo', value);
    }

    get SetIDBPO() {
        return this.getComponent('SetIdBpo');
    }

    set SetIDBPO(value) {
        this.setComponentValue('SetIdBpo', value);
    }

    get BpUniversalServiceIdentifier() {
        return this.getComponent('BpUniversalServiceIdentifier');
    }

    set BpUniversalServiceIdentifier(value) {
        this.setComponentValue('BpUniversalServiceIdentifier', value);
    }

    get BPUniversalServiceID() {
        return this.getComponent('BpUniversalServiceIdentifier');
    }

    set BPUniversalServiceID(value) {
        this.setComponentValue('BpUniversalServiceIdentifier', value);
    }

    get BPUniversalServiceIdentifier() {
        return this.getComponent('BpUniversalServiceIdentifier');
    }

    set BPUniversalServiceIdentifier(value) {
        this.setComponentValue('BpUniversalServiceIdentifier', value);
    }

    get BpProcessingRequirements() {
        return this.getComponent('BpProcessingRequirements');
    }

    set BpProcessingRequirements(value) {
        this.setComponentValue('BpProcessingRequirements', value);
    }

    get BPProcessingRequirements() {
        return this.getComponent('BpProcessingRequirements');
    }

    set BPProcessingRequirements(value) {
        this.setComponentValue('BpProcessingRequirements', value);
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

    get BpIntendedUseDateTime() {
        return this.getComponent('BpIntendedUseDateTime');
    }

    set BpIntendedUseDateTime(value) {
        this.setComponentValue('BpIntendedUseDateTime', value);
    }

    get BPIntendedUseDateTime() {
        return this.getComponent('BpIntendedUseDateTime');
    }

    set BPIntendedUseDateTime(value) {
        this.setComponentValue('BpIntendedUseDateTime', value);
    }

    get BpIntendedDispenseFromLocation() {
        return this.getComponent('BpIntendedDispenseFromLocation');
    }

    set BpIntendedDispenseFromLocation(value) {
        this.setComponentValue('BpIntendedDispenseFromLocation', value);
    }

    get BPIntendedDispenseFromLocation() {
        return this.getComponent('BpIntendedDispenseFromLocation');
    }

    set BPIntendedDispenseFromLocation(value) {
        this.setComponentValue('BpIntendedDispenseFromLocation', value);
    }

    get BpIntendedDispenseFromAddress() {
        return this.getComponent('BpIntendedDispenseFromAddress');
    }

    set BpIntendedDispenseFromAddress(value) {
        this.setComponentValue('BpIntendedDispenseFromAddress', value);
    }

    get BPIntendedDispenseFromAddress() {
        return this.getComponent('BpIntendedDispenseFromAddress');
    }

    set BPIntendedDispenseFromAddress(value) {
        this.setComponentValue('BpIntendedDispenseFromAddress', value);
    }

    get BpRequestedDispenseDateTime() {
        return this.getComponent('BpRequestedDispenseDateTime');
    }

    set BpRequestedDispenseDateTime(value) {
        this.setComponentValue('BpRequestedDispenseDateTime', value);
    }

    get BPRequestedDispenseDateTime() {
        return this.getComponent('BpRequestedDispenseDateTime');
    }

    set BPRequestedDispenseDateTime(value) {
        this.setComponentValue('BpRequestedDispenseDateTime', value);
    }

    get BpRequestedDispenseToLocation() {
        return this.getComponent('BpRequestedDispenseToLocation');
    }

    set BpRequestedDispenseToLocation(value) {
        this.setComponentValue('BpRequestedDispenseToLocation', value);
    }

    get BPRequestedDispenseToLocation() {
        return this.getComponent('BpRequestedDispenseToLocation');
    }

    set BPRequestedDispenseToLocation(value) {
        this.setComponentValue('BpRequestedDispenseToLocation', value);
    }

    get BpRequestedDispenseToAddress() {
        return this.getComponent('BpRequestedDispenseToAddress');
    }

    set BpRequestedDispenseToAddress(value) {
        this.setComponentValue('BpRequestedDispenseToAddress', value);
    }

    get BPRequestedDispenseToAddress() {
        return this.getComponent('BpRequestedDispenseToAddress');
    }

    set BPRequestedDispenseToAddress(value) {
        this.setComponentValue('BpRequestedDispenseToAddress', value);
    }

    get BpIndicationForUse() {
        return this.getComponent('BpIndicationForUse');
    }

    set BpIndicationForUse(value) {
        this.setComponentValue('BpIndicationForUse', value);
    }

    get BPIndicationForUse() {
        return this.getComponent('BpIndicationForUse');
    }

    set BPIndicationForUse(value) {
        this.setComponentValue('BpIndicationForUse', value);
    }

    get BpInformedConsentIndicator() {
        return this.getComponent('BpInformedConsentIndicator');
    }

    set BpInformedConsentIndicator(value) {
        this.setComponentValue('BpInformedConsentIndicator', value);
    }

    get BPInformedConsentIndicator() {
        return this.getComponent('BpInformedConsentIndicator');
    }

    set BPInformedConsentIndicator(value) {
        this.setComponentValue('BpInformedConsentIndicator', value);
    }
}
