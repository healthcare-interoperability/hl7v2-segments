import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { EIP } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DR } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';

export class SPM extends Segment {
    static components = {
        SetIdSpm: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenId: {
            defaultDataType: EIP,
            dataTypes: [{ dataType: EIP, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenParentIds: {
            defaultDataType: EIP,
            dataTypes: [{ dataType: EIP, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenTypeModifier: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenAdditives: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenCollectionMethod: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenSourceSite: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenSourceSiteModifier: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenCollectionSite: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenRole: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenCollectionAmount: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GroupedSpecimenCount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenHandlingCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenRiskCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenCollectionDateTime: {
            defaultDataType: DR,
            dataTypes: [{ dataType: DR, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenReceivedDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenExpirationDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenAvailability: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenRejectReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenQuality: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenAppropriateness: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenCondition: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenCurrentQuantity: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfSpecimenContainers: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerCondition: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenChildRole: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccessionId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 30,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OtherSpecimenId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 31,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ShipmentId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdSpm',
        'SpecimenId',
        'SpecimenParentIds',
        'SpecimenType',
        'SpecimenTypeModifier',
        'SpecimenAdditives',
        'SpecimenCollectionMethod',
        'SpecimenSourceSite',
        'SpecimenSourceSiteModifier',
        'SpecimenCollectionSite',
        'SpecimenRole',
        'SpecimenCollectionAmount',
        'GroupedSpecimenCount',
        'SpecimenDescription',
        'SpecimenHandlingCode',
        'SpecimenRiskCode',
        'SpecimenCollectionDateTime',
        'SpecimenReceivedDateTime',
        'SpecimenExpirationDateTime',
        'SpecimenAvailability',
        'SpecimenRejectReason',
        'SpecimenQuality',
        'SpecimenAppropriateness',
        'SpecimenCondition',
        'SpecimenCurrentQuantity',
        'NumberOfSpecimenContainers',
        'ContainerType',
        'ContainerCondition',
        'SpecimenChildRole',
        'AccessionId',
        'OtherSpecimenId',
        'ShipmentId',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('SPM');
        this.setValues(values);
    }

    get SetIdSpm() {
        return this.getComponent('SetIdSpm');
    }

    set SetIdSpm(value) {
        this.setComponentValue('SetIdSpm', value);
    }

    get SpecimenId() {
        return this.getComponent('SpecimenId');
    }

    set SpecimenId(value) {
        this.setComponentValue('SpecimenId', value);
    }

    get SpecimenParentIds() {
        return this.getComponent('SpecimenParentIds');
    }

    set SpecimenParentIds(value) {
        this.setComponentValue('SpecimenParentIds', value);
    }

    get SpecimenType() {
        return this.getComponent('SpecimenType');
    }

    set SpecimenType(value) {
        this.setComponentValue('SpecimenType', value);
    }

    get SpecimenTypeModifier() {
        return this.getComponent('SpecimenTypeModifier');
    }

    set SpecimenTypeModifier(value) {
        this.setComponentValue('SpecimenTypeModifier', value);
    }

    get SpecimenAdditives() {
        return this.getComponent('SpecimenAdditives');
    }

    set SpecimenAdditives(value) {
        this.setComponentValue('SpecimenAdditives', value);
    }

    get SpecimenCollectionMethod() {
        return this.getComponent('SpecimenCollectionMethod');
    }

    set SpecimenCollectionMethod(value) {
        this.setComponentValue('SpecimenCollectionMethod', value);
    }

    get SpecimenSourceSite() {
        return this.getComponent('SpecimenSourceSite');
    }

    set SpecimenSourceSite(value) {
        this.setComponentValue('SpecimenSourceSite', value);
    }

    get SpecimenSourceSiteModifier() {
        return this.getComponent('SpecimenSourceSiteModifier');
    }

    set SpecimenSourceSiteModifier(value) {
        this.setComponentValue('SpecimenSourceSiteModifier', value);
    }

    get SpecimenCollectionSite() {
        return this.getComponent('SpecimenCollectionSite');
    }

    set SpecimenCollectionSite(value) {
        this.setComponentValue('SpecimenCollectionSite', value);
    }

    get SpecimenRole() {
        return this.getComponent('SpecimenRole');
    }

    set SpecimenRole(value) {
        this.setComponentValue('SpecimenRole', value);
    }

    get SpecimenCollectionAmount() {
        return this.getComponent('SpecimenCollectionAmount');
    }

    set SpecimenCollectionAmount(value) {
        this.setComponentValue('SpecimenCollectionAmount', value);
    }

    get GroupedSpecimenCount() {
        return this.getComponent('GroupedSpecimenCount');
    }

    set GroupedSpecimenCount(value) {
        this.setComponentValue('GroupedSpecimenCount', value);
    }

    get SpecimenDescription() {
        return this.getComponent('SpecimenDescription');
    }

    set SpecimenDescription(value) {
        this.setComponentValue('SpecimenDescription', value);
    }

    get SpecimenHandlingCode() {
        return this.getComponent('SpecimenHandlingCode');
    }

    set SpecimenHandlingCode(value) {
        this.setComponentValue('SpecimenHandlingCode', value);
    }

    get SpecimenRiskCode() {
        return this.getComponent('SpecimenRiskCode');
    }

    set SpecimenRiskCode(value) {
        this.setComponentValue('SpecimenRiskCode', value);
    }

    get SpecimenCollectionDateTime() {
        return this.getComponent('SpecimenCollectionDateTime');
    }

    set SpecimenCollectionDateTime(value) {
        this.setComponentValue('SpecimenCollectionDateTime', value);
    }

    get SpecimenReceivedDateTime() {
        return this.getComponent('SpecimenReceivedDateTime');
    }

    set SpecimenReceivedDateTime(value) {
        this.setComponentValue('SpecimenReceivedDateTime', value);
    }

    get SpecimenExpirationDateTime() {
        return this.getComponent('SpecimenExpirationDateTime');
    }

    set SpecimenExpirationDateTime(value) {
        this.setComponentValue('SpecimenExpirationDateTime', value);
    }

    get SpecimenAvailability() {
        return this.getComponent('SpecimenAvailability');
    }

    set SpecimenAvailability(value) {
        this.setComponentValue('SpecimenAvailability', value);
    }

    get SpecimenRejectReason() {
        return this.getComponent('SpecimenRejectReason');
    }

    set SpecimenRejectReason(value) {
        this.setComponentValue('SpecimenRejectReason', value);
    }

    get SpecimenQuality() {
        return this.getComponent('SpecimenQuality');
    }

    set SpecimenQuality(value) {
        this.setComponentValue('SpecimenQuality', value);
    }

    get SpecimenAppropriateness() {
        return this.getComponent('SpecimenAppropriateness');
    }

    set SpecimenAppropriateness(value) {
        this.setComponentValue('SpecimenAppropriateness', value);
    }

    get SpecimenCondition() {
        return this.getComponent('SpecimenCondition');
    }

    set SpecimenCondition(value) {
        this.setComponentValue('SpecimenCondition', value);
    }

    get SpecimenCurrentQuantity() {
        return this.getComponent('SpecimenCurrentQuantity');
    }

    set SpecimenCurrentQuantity(value) {
        this.setComponentValue('SpecimenCurrentQuantity', value);
    }

    get NumberOfSpecimenContainers() {
        return this.getComponent('NumberOfSpecimenContainers');
    }

    set NumberOfSpecimenContainers(value) {
        this.setComponentValue('NumberOfSpecimenContainers', value);
    }

    get ContainerType() {
        return this.getComponent('ContainerType');
    }

    set ContainerType(value) {
        this.setComponentValue('ContainerType', value);
    }

    get ContainerCondition() {
        return this.getComponent('ContainerCondition');
    }

    set ContainerCondition(value) {
        this.setComponentValue('ContainerCondition', value);
    }

    get SpecimenChildRole() {
        return this.getComponent('SpecimenChildRole');
    }

    set SpecimenChildRole(value) {
        this.setComponentValue('SpecimenChildRole', value);
    }

    get AccessionId() {
        return this.getComponent('AccessionId');
    }

    set AccessionId(value) {
        this.setComponentValue('AccessionId', value);
    }

    get OtherSpecimenId() {
        return this.getComponent('OtherSpecimenId');
    }

    set OtherSpecimenId(value) {
        this.setComponentValue('OtherSpecimenId', value);
    }

    get ShipmentId() {
        return this.getComponent('ShipmentId');
    }

    set ShipmentId(value) {
        this.setComponentValue('ShipmentId', value);
    }
}
