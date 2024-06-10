import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { TQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { EIP } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_EIP } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';

export class ORC extends Segment {
    static components = {
        OrderControl: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlacerOrderNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillerOrderNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlacerGroupNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrderStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResponseFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QuantityTiming: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: TQ, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        Parent: {
            defaultDataType: EIP,
            dataTypes: [
                { dataType: EIP, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_EIP, versions: ['2.3'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentOrder: { aliasOf: 'Parent' },
        DateTimeOfTransaction: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EnteredBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        VerifiedBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        OrderingProvider: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        EnterersLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EntererSLocation: { aliasOf: 'EnterersLocation' },
        CallBackPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 2,
            minOccurence: 1,
        },
        OrderEffectiveDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrderControlCodeReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EnteringOrganization: {
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
        EnteringDevice: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        AdvancedBeneficiaryNoticeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrderingFacilityName: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 21,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OrderingFacilityAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 22,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OrderingFacilityPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 23,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OrderingProviderAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 24,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OrderStatusModifier: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdvancedBeneficiaryNoticeOverrideReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillersExpectedAvailabilityDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConfidentialityCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrderType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EntererAuthorizationMode: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentUniversalServiceIdentifier: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdvancedBeneficiaryNoticeDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AlternatePlacerOrderNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 33,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OrderWorkflowProfile: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8'] }],
            position: 34,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'OrderControl',
        'PlacerOrderNumber',
        'FillerOrderNumber',
        'PlacerGroupNumber',
        'OrderStatus',
        'ResponseFlag',
        'QuantityTiming',
        'Parent',
        'DateTimeOfTransaction',
        'EnteredBy',
        'VerifiedBy',
        'OrderingProvider',
        'EnterersLocation',
        'CallBackPhoneNumber',
        'OrderEffectiveDateTime',
        'OrderControlCodeReason',
        'EnteringOrganization',
        'EnteringDevice',
        'ActionBy',
        'AdvancedBeneficiaryNoticeCode',
        'OrderingFacilityName',
        'OrderingFacilityAddress',
        'OrderingFacilityPhoneNumber',
        'OrderingProviderAddress',
        'OrderStatusModifier',
        'AdvancedBeneficiaryNoticeOverrideReason',
        'FillersExpectedAvailabilityDateTime',
        'ConfidentialityCode',
        'OrderType',
        'EntererAuthorizationMode',
        'ParentUniversalServiceIdentifier',
        'AdvancedBeneficiaryNoticeDate',
        'AlternatePlacerOrderNumber',
        'OrderWorkflowProfile',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ORC');
        this.setValues(values);
    }

    get OrderControl() {
        return this.getComponent('OrderControl');
    }

    set OrderControl(value) {
        this.setComponentValue('OrderControl', value);
    }

    get PlacerOrderNumber() {
        return this.getComponent('PlacerOrderNumber');
    }

    set PlacerOrderNumber(value) {
        this.setComponentValue('PlacerOrderNumber', value);
    }

    get FillerOrderNumber() {
        return this.getComponent('FillerOrderNumber');
    }

    set FillerOrderNumber(value) {
        this.setComponentValue('FillerOrderNumber', value);
    }

    get PlacerGroupNumber() {
        return this.getComponent('PlacerGroupNumber');
    }

    set PlacerGroupNumber(value) {
        this.setComponentValue('PlacerGroupNumber', value);
    }

    get OrderStatus() {
        return this.getComponent('OrderStatus');
    }

    set OrderStatus(value) {
        this.setComponentValue('OrderStatus', value);
    }

    get ResponseFlag() {
        return this.getComponent('ResponseFlag');
    }

    set ResponseFlag(value) {
        this.setComponentValue('ResponseFlag', value);
    }

    get QuantityTiming() {
        return this.getComponent('QuantityTiming');
    }

    set QuantityTiming(value) {
        this.setComponentValue('QuantityTiming', value);
    }

    get Parent() {
        return this.getComponent('Parent');
    }

    set Parent(value) {
        this.setComponentValue('Parent', value);
    }

    get ParentOrder() {
        return this.getComponent('Parent');
    }

    set ParentOrder(value) {
        this.setComponentValue('Parent', value);
    }

    get DateTimeOfTransaction() {
        return this.getComponent('DateTimeOfTransaction');
    }

    set DateTimeOfTransaction(value) {
        this.setComponentValue('DateTimeOfTransaction', value);
    }

    get EnteredBy() {
        return this.getComponent('EnteredBy');
    }

    set EnteredBy(value) {
        this.setComponentValue('EnteredBy', value);
    }

    get VerifiedBy() {
        return this.getComponent('VerifiedBy');
    }

    set VerifiedBy(value) {
        this.setComponentValue('VerifiedBy', value);
    }

    get OrderingProvider() {
        return this.getComponent('OrderingProvider');
    }

    set OrderingProvider(value) {
        this.setComponentValue('OrderingProvider', value);
    }

    get EnterersLocation() {
        return this.getComponent('EnterersLocation');
    }

    set EnterersLocation(value) {
        this.setComponentValue('EnterersLocation', value);
    }

    get EntererSLocation() {
        return this.getComponent('EnterersLocation');
    }

    set EntererSLocation(value) {
        this.setComponentValue('EnterersLocation', value);
    }

    get CallBackPhoneNumber() {
        return this.getComponent('CallBackPhoneNumber');
    }

    set CallBackPhoneNumber(value) {
        this.setComponentValue('CallBackPhoneNumber', value);
    }

    get OrderEffectiveDateTime() {
        return this.getComponent('OrderEffectiveDateTime');
    }

    set OrderEffectiveDateTime(value) {
        this.setComponentValue('OrderEffectiveDateTime', value);
    }

    get OrderControlCodeReason() {
        return this.getComponent('OrderControlCodeReason');
    }

    set OrderControlCodeReason(value) {
        this.setComponentValue('OrderControlCodeReason', value);
    }

    get EnteringOrganization() {
        return this.getComponent('EnteringOrganization');
    }

    set EnteringOrganization(value) {
        this.setComponentValue('EnteringOrganization', value);
    }

    get EnteringDevice() {
        return this.getComponent('EnteringDevice');
    }

    set EnteringDevice(value) {
        this.setComponentValue('EnteringDevice', value);
    }

    get ActionBy() {
        return this.getComponent('ActionBy');
    }

    set ActionBy(value) {
        this.setComponentValue('ActionBy', value);
    }

    get AdvancedBeneficiaryNoticeCode() {
        return this.getComponent('AdvancedBeneficiaryNoticeCode');
    }

    set AdvancedBeneficiaryNoticeCode(value) {
        this.setComponentValue('AdvancedBeneficiaryNoticeCode', value);
    }

    get OrderingFacilityName() {
        return this.getComponent('OrderingFacilityName');
    }

    set OrderingFacilityName(value) {
        this.setComponentValue('OrderingFacilityName', value);
    }

    get OrderingFacilityAddress() {
        return this.getComponent('OrderingFacilityAddress');
    }

    set OrderingFacilityAddress(value) {
        this.setComponentValue('OrderingFacilityAddress', value);
    }

    get OrderingFacilityPhoneNumber() {
        return this.getComponent('OrderingFacilityPhoneNumber');
    }

    set OrderingFacilityPhoneNumber(value) {
        this.setComponentValue('OrderingFacilityPhoneNumber', value);
    }

    get OrderingProviderAddress() {
        return this.getComponent('OrderingProviderAddress');
    }

    set OrderingProviderAddress(value) {
        this.setComponentValue('OrderingProviderAddress', value);
    }

    get OrderStatusModifier() {
        return this.getComponent('OrderStatusModifier');
    }

    set OrderStatusModifier(value) {
        this.setComponentValue('OrderStatusModifier', value);
    }

    get AdvancedBeneficiaryNoticeOverrideReason() {
        return this.getComponent('AdvancedBeneficiaryNoticeOverrideReason');
    }

    set AdvancedBeneficiaryNoticeOverrideReason(value) {
        this.setComponentValue('AdvancedBeneficiaryNoticeOverrideReason', value);
    }

    get FillersExpectedAvailabilityDateTime() {
        return this.getComponent('FillersExpectedAvailabilityDateTime');
    }

    set FillersExpectedAvailabilityDateTime(value) {
        this.setComponentValue('FillersExpectedAvailabilityDateTime', value);
    }

    get ConfidentialityCode() {
        return this.getComponent('ConfidentialityCode');
    }

    set ConfidentialityCode(value) {
        this.setComponentValue('ConfidentialityCode', value);
    }

    get OrderType() {
        return this.getComponent('OrderType');
    }

    set OrderType(value) {
        this.setComponentValue('OrderType', value);
    }

    get EntererAuthorizationMode() {
        return this.getComponent('EntererAuthorizationMode');
    }

    set EntererAuthorizationMode(value) {
        this.setComponentValue('EntererAuthorizationMode', value);
    }

    get ParentUniversalServiceIdentifier() {
        return this.getComponent('ParentUniversalServiceIdentifier');
    }

    set ParentUniversalServiceIdentifier(value) {
        this.setComponentValue('ParentUniversalServiceIdentifier', value);
    }

    get AdvancedBeneficiaryNoticeDate() {
        return this.getComponent('AdvancedBeneficiaryNoticeDate');
    }

    set AdvancedBeneficiaryNoticeDate(value) {
        this.setComponentValue('AdvancedBeneficiaryNoticeDate', value);
    }

    get AlternatePlacerOrderNumber() {
        return this.getComponent('AlternatePlacerOrderNumber');
    }

    set AlternatePlacerOrderNumber(value) {
        this.setComponentValue('AlternatePlacerOrderNumber', value);
    }

    get OrderWorkflowProfile() {
        return this.getComponent('OrderWorkflowProfile');
    }

    set OrderWorkflowProfile(value) {
        this.setComponentValue('OrderWorkflowProfile', value);
    }
}
