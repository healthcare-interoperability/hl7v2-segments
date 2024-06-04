import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class SHP extends Segment {
    static components = {
        ShipmentId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InternalShipmentId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ShipmentStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ShipmentStatusDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ShipmentStatusReason: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ShipmentPriority: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ShipmentConfidentiality: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        NumberOfPackagesInShipment: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ShipmentCondition: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ShipmentHandlingCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ShipmentRiskCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ShipmentId',
        'InternalShipmentId',
        'ShipmentStatus',
        'ShipmentStatusDateTime',
        'ShipmentStatusReason',
        'ShipmentPriority',
        'ShipmentConfidentiality',
        'NumberOfPackagesInShipment',
        'ShipmentCondition',
        'ShipmentHandlingCode',
        'ShipmentRiskCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('SHP');
        this.setValues(values);
    }

    get ShipmentId() {
        return this.getComponent('ShipmentId');
    }

    set ShipmentId(value) {
        this.setComponentValue('ShipmentId', value);
    }

    get InternalShipmentId() {
        return this.getComponent('InternalShipmentId');
    }

    set InternalShipmentId(value) {
        this.setComponentValue('InternalShipmentId', value);
    }

    get ShipmentStatus() {
        return this.getComponent('ShipmentStatus');
    }

    set ShipmentStatus(value) {
        this.setComponentValue('ShipmentStatus', value);
    }

    get ShipmentStatusDateTime() {
        return this.getComponent('ShipmentStatusDateTime');
    }

    set ShipmentStatusDateTime(value) {
        this.setComponentValue('ShipmentStatusDateTime', value);
    }

    get ShipmentStatusReason() {
        return this.getComponent('ShipmentStatusReason');
    }

    set ShipmentStatusReason(value) {
        this.setComponentValue('ShipmentStatusReason', value);
    }

    get ShipmentPriority() {
        return this.getComponent('ShipmentPriority');
    }

    set ShipmentPriority(value) {
        this.setComponentValue('ShipmentPriority', value);
    }

    get ShipmentConfidentiality() {
        return this.getComponent('ShipmentConfidentiality');
    }

    set ShipmentConfidentiality(value) {
        this.setComponentValue('ShipmentConfidentiality', value);
    }

    get NumberOfPackagesInShipment() {
        return this.getComponent('NumberOfPackagesInShipment');
    }

    set NumberOfPackagesInShipment(value) {
        this.setComponentValue('NumberOfPackagesInShipment', value);
    }

    get ShipmentCondition() {
        return this.getComponent('ShipmentCondition');
    }

    set ShipmentCondition(value) {
        this.setComponentValue('ShipmentCondition', value);
    }

    get ShipmentHandlingCode() {
        return this.getComponent('ShipmentHandlingCode');
    }

    set ShipmentHandlingCode(value) {
        this.setComponentValue('ShipmentHandlingCode', value);
    }

    get ShipmentRiskCode() {
        return this.getComponent('ShipmentRiskCode');
    }

    set ShipmentRiskCode(value) {
        this.setComponentValue('ShipmentRiskCode', value);
    }
}
