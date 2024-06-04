import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';

export class DON extends Segment {
    static components = {
        DonationIdentificationNumberDin: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DonationType: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PhlebotomyStartDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PhlebotomyEndDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DonationDuration: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DonationDurationUnits: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IntendedProcedureType: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ActualProcedureType: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DonorEligibilityFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DonorEligibilityProcedureType: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 10,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DonorEligibilityDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcessInterruption: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcessInterruptionReason: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PhlebotomyIssue: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 14,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        IntendedRecipientBloodRelative: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IntendedRecipientName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IntendedRecipientDob: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IntendedRecipientFacility: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IntendedRecipientProcedureDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IntendedRecipientOrderingProvider: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PhlebotomyStatus: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ArmStick: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BleedStartPhlebotomist: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BleedEndPhlebotomist: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AphaeresisTypeMachine: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AphaeresisMachineSerialNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DonorReaction: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FinalReviewStaffId: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FinalReviewDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfTubesCollected: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DonationSampleIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8'] }],
            position: 31,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DonationAcceptStaff: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DonationMaterialReviewStaff: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8'] }],
            position: 33,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'DonationIdentificationNumberDin',
        'DonationType',
        'PhlebotomyStartDateTime',
        'PhlebotomyEndDateTime',
        'DonationDuration',
        'DonationDurationUnits',
        'IntendedProcedureType',
        'ActualProcedureType',
        'DonorEligibilityFlag',
        'DonorEligibilityProcedureType',
        'DonorEligibilityDate',
        'ProcessInterruption',
        'ProcessInterruptionReason',
        'PhlebotomyIssue',
        'IntendedRecipientBloodRelative',
        'IntendedRecipientName',
        'IntendedRecipientDob',
        'IntendedRecipientFacility',
        'IntendedRecipientProcedureDate',
        'IntendedRecipientOrderingProvider',
        'PhlebotomyStatus',
        'ArmStick',
        'BleedStartPhlebotomist',
        'BleedEndPhlebotomist',
        'AphaeresisTypeMachine',
        'AphaeresisMachineSerialNumber',
        'DonorReaction',
        'FinalReviewStaffId',
        'FinalReviewDateTime',
        'NumberOfTubesCollected',
        'DonationSampleIdentifier',
        'DonationAcceptStaff',
        'DonationMaterialReviewStaff',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('DON');
        this.setValues(values);
    }

    get DonationIdentificationNumberDin() {
        return this.getComponent('DonationIdentificationNumberDin');
    }

    set DonationIdentificationNumberDin(value) {
        this.setComponentValue('DonationIdentificationNumberDin', value);
    }

    get DonationType() {
        return this.getComponent('DonationType');
    }

    set DonationType(value) {
        this.setComponentValue('DonationType', value);
    }

    get PhlebotomyStartDateTime() {
        return this.getComponent('PhlebotomyStartDateTime');
    }

    set PhlebotomyStartDateTime(value) {
        this.setComponentValue('PhlebotomyStartDateTime', value);
    }

    get PhlebotomyEndDateTime() {
        return this.getComponent('PhlebotomyEndDateTime');
    }

    set PhlebotomyEndDateTime(value) {
        this.setComponentValue('PhlebotomyEndDateTime', value);
    }

    get DonationDuration() {
        return this.getComponent('DonationDuration');
    }

    set DonationDuration(value) {
        this.setComponentValue('DonationDuration', value);
    }

    get DonationDurationUnits() {
        return this.getComponent('DonationDurationUnits');
    }

    set DonationDurationUnits(value) {
        this.setComponentValue('DonationDurationUnits', value);
    }

    get IntendedProcedureType() {
        return this.getComponent('IntendedProcedureType');
    }

    set IntendedProcedureType(value) {
        this.setComponentValue('IntendedProcedureType', value);
    }

    get ActualProcedureType() {
        return this.getComponent('ActualProcedureType');
    }

    set ActualProcedureType(value) {
        this.setComponentValue('ActualProcedureType', value);
    }

    get DonorEligibilityFlag() {
        return this.getComponent('DonorEligibilityFlag');
    }

    set DonorEligibilityFlag(value) {
        this.setComponentValue('DonorEligibilityFlag', value);
    }

    get DonorEligibilityProcedureType() {
        return this.getComponent('DonorEligibilityProcedureType');
    }

    set DonorEligibilityProcedureType(value) {
        this.setComponentValue('DonorEligibilityProcedureType', value);
    }

    get DonorEligibilityDate() {
        return this.getComponent('DonorEligibilityDate');
    }

    set DonorEligibilityDate(value) {
        this.setComponentValue('DonorEligibilityDate', value);
    }

    get ProcessInterruption() {
        return this.getComponent('ProcessInterruption');
    }

    set ProcessInterruption(value) {
        this.setComponentValue('ProcessInterruption', value);
    }

    get ProcessInterruptionReason() {
        return this.getComponent('ProcessInterruptionReason');
    }

    set ProcessInterruptionReason(value) {
        this.setComponentValue('ProcessInterruptionReason', value);
    }

    get PhlebotomyIssue() {
        return this.getComponent('PhlebotomyIssue');
    }

    set PhlebotomyIssue(value) {
        this.setComponentValue('PhlebotomyIssue', value);
    }

    get IntendedRecipientBloodRelative() {
        return this.getComponent('IntendedRecipientBloodRelative');
    }

    set IntendedRecipientBloodRelative(value) {
        this.setComponentValue('IntendedRecipientBloodRelative', value);
    }

    get IntendedRecipientName() {
        return this.getComponent('IntendedRecipientName');
    }

    set IntendedRecipientName(value) {
        this.setComponentValue('IntendedRecipientName', value);
    }

    get IntendedRecipientDob() {
        return this.getComponent('IntendedRecipientDob');
    }

    set IntendedRecipientDob(value) {
        this.setComponentValue('IntendedRecipientDob', value);
    }

    get IntendedRecipientFacility() {
        return this.getComponent('IntendedRecipientFacility');
    }

    set IntendedRecipientFacility(value) {
        this.setComponentValue('IntendedRecipientFacility', value);
    }

    get IntendedRecipientProcedureDate() {
        return this.getComponent('IntendedRecipientProcedureDate');
    }

    set IntendedRecipientProcedureDate(value) {
        this.setComponentValue('IntendedRecipientProcedureDate', value);
    }

    get IntendedRecipientOrderingProvider() {
        return this.getComponent('IntendedRecipientOrderingProvider');
    }

    set IntendedRecipientOrderingProvider(value) {
        this.setComponentValue('IntendedRecipientOrderingProvider', value);
    }

    get PhlebotomyStatus() {
        return this.getComponent('PhlebotomyStatus');
    }

    set PhlebotomyStatus(value) {
        this.setComponentValue('PhlebotomyStatus', value);
    }

    get ArmStick() {
        return this.getComponent('ArmStick');
    }

    set ArmStick(value) {
        this.setComponentValue('ArmStick', value);
    }

    get BleedStartPhlebotomist() {
        return this.getComponent('BleedStartPhlebotomist');
    }

    set BleedStartPhlebotomist(value) {
        this.setComponentValue('BleedStartPhlebotomist', value);
    }

    get BleedEndPhlebotomist() {
        return this.getComponent('BleedEndPhlebotomist');
    }

    set BleedEndPhlebotomist(value) {
        this.setComponentValue('BleedEndPhlebotomist', value);
    }

    get AphaeresisTypeMachine() {
        return this.getComponent('AphaeresisTypeMachine');
    }

    set AphaeresisTypeMachine(value) {
        this.setComponentValue('AphaeresisTypeMachine', value);
    }

    get AphaeresisMachineSerialNumber() {
        return this.getComponent('AphaeresisMachineSerialNumber');
    }

    set AphaeresisMachineSerialNumber(value) {
        this.setComponentValue('AphaeresisMachineSerialNumber', value);
    }

    get DonorReaction() {
        return this.getComponent('DonorReaction');
    }

    set DonorReaction(value) {
        this.setComponentValue('DonorReaction', value);
    }

    get FinalReviewStaffId() {
        return this.getComponent('FinalReviewStaffId');
    }

    set FinalReviewStaffId(value) {
        this.setComponentValue('FinalReviewStaffId', value);
    }

    get FinalReviewDateTime() {
        return this.getComponent('FinalReviewDateTime');
    }

    set FinalReviewDateTime(value) {
        this.setComponentValue('FinalReviewDateTime', value);
    }

    get NumberOfTubesCollected() {
        return this.getComponent('NumberOfTubesCollected');
    }

    set NumberOfTubesCollected(value) {
        this.setComponentValue('NumberOfTubesCollected', value);
    }

    get DonationSampleIdentifier() {
        return this.getComponent('DonationSampleIdentifier');
    }

    set DonationSampleIdentifier(value) {
        this.setComponentValue('DonationSampleIdentifier', value);
    }

    get DonationAcceptStaff() {
        return this.getComponent('DonationAcceptStaff');
    }

    set DonationAcceptStaff(value) {
        this.setComponentValue('DonationAcceptStaff', value);
    }

    get DonationMaterialReviewStaff() {
        return this.getComponent('DonationMaterialReviewStaff');
    }

    set DonationMaterialReviewStaff(value) {
        this.setComponentValue('DonationMaterialReviewStaff', value);
    }
}
