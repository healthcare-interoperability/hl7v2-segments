import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { MO } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class RF1 extends Segment {
    static components = {
        ReferralStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReferralPriority: {
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
        ReferralType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReferralDisposition: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ReferralCategory: {
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
        OriginatingReferralIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EffectiveDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpirationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcessDate: {
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
        ReferralReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ExternalReferralIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ReferralDocumentationCompletionStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlannedTreatmentStopDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReferralReasonText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfAuthorizedTreatmentsUnits: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfUsedTreatmentsUnits: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfScheduleTreatmentsUnits: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RemainingBenefitAmount: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.8'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AuthorizedProvider: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AuthorizedHealthProfessional: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SourceText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SourceDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SourcePhone: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Comment: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ReferralStatus',
        'ReferralPriority',
        'ReferralType',
        'ReferralDisposition',
        'ReferralCategory',
        'OriginatingReferralIdentifier',
        'EffectiveDate',
        'ExpirationDate',
        'ProcessDate',
        'ReferralReason',
        'ExternalReferralIdentifier',
        'ReferralDocumentationCompletionStatus',
        'PlannedTreatmentStopDate',
        'ReferralReasonText',
        'NumberOfAuthorizedTreatmentsUnits',
        'NumberOfUsedTreatmentsUnits',
        'NumberOfScheduleTreatmentsUnits',
        'RemainingBenefitAmount',
        'AuthorizedProvider',
        'AuthorizedHealthProfessional',
        'SourceText',
        'SourceDate',
        'SourcePhone',
        'Comment',
        'ActionCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RF1');
        this.setValues(values);
    }

    get ReferralStatus() {
        return this.getComponent('ReferralStatus');
    }

    set ReferralStatus(value) {
        this.setComponentValue('ReferralStatus', value);
    }

    get ReferralPriority() {
        return this.getComponent('ReferralPriority');
    }

    set ReferralPriority(value) {
        this.setComponentValue('ReferralPriority', value);
    }

    get ReferralType() {
        return this.getComponent('ReferralType');
    }

    set ReferralType(value) {
        this.setComponentValue('ReferralType', value);
    }

    get ReferralDisposition() {
        return this.getComponent('ReferralDisposition');
    }

    set ReferralDisposition(value) {
        this.setComponentValue('ReferralDisposition', value);
    }

    get ReferralCategory() {
        return this.getComponent('ReferralCategory');
    }

    set ReferralCategory(value) {
        this.setComponentValue('ReferralCategory', value);
    }

    get OriginatingReferralIdentifier() {
        return this.getComponent('OriginatingReferralIdentifier');
    }

    set OriginatingReferralIdentifier(value) {
        this.setComponentValue('OriginatingReferralIdentifier', value);
    }

    get EffectiveDate() {
        return this.getComponent('EffectiveDate');
    }

    set EffectiveDate(value) {
        this.setComponentValue('EffectiveDate', value);
    }

    get ExpirationDate() {
        return this.getComponent('ExpirationDate');
    }

    set ExpirationDate(value) {
        this.setComponentValue('ExpirationDate', value);
    }

    get ProcessDate() {
        return this.getComponent('ProcessDate');
    }

    set ProcessDate(value) {
        this.setComponentValue('ProcessDate', value);
    }

    get ReferralReason() {
        return this.getComponent('ReferralReason');
    }

    set ReferralReason(value) {
        this.setComponentValue('ReferralReason', value);
    }

    get ExternalReferralIdentifier() {
        return this.getComponent('ExternalReferralIdentifier');
    }

    set ExternalReferralIdentifier(value) {
        this.setComponentValue('ExternalReferralIdentifier', value);
    }

    get ReferralDocumentationCompletionStatus() {
        return this.getComponent('ReferralDocumentationCompletionStatus');
    }

    set ReferralDocumentationCompletionStatus(value) {
        this.setComponentValue('ReferralDocumentationCompletionStatus', value);
    }

    get PlannedTreatmentStopDate() {
        return this.getComponent('PlannedTreatmentStopDate');
    }

    set PlannedTreatmentStopDate(value) {
        this.setComponentValue('PlannedTreatmentStopDate', value);
    }

    get ReferralReasonText() {
        return this.getComponent('ReferralReasonText');
    }

    set ReferralReasonText(value) {
        this.setComponentValue('ReferralReasonText', value);
    }

    get NumberOfAuthorizedTreatmentsUnits() {
        return this.getComponent('NumberOfAuthorizedTreatmentsUnits');
    }

    set NumberOfAuthorizedTreatmentsUnits(value) {
        this.setComponentValue('NumberOfAuthorizedTreatmentsUnits', value);
    }

    get NumberOfUsedTreatmentsUnits() {
        return this.getComponent('NumberOfUsedTreatmentsUnits');
    }

    set NumberOfUsedTreatmentsUnits(value) {
        this.setComponentValue('NumberOfUsedTreatmentsUnits', value);
    }

    get NumberOfScheduleTreatmentsUnits() {
        return this.getComponent('NumberOfScheduleTreatmentsUnits');
    }

    set NumberOfScheduleTreatmentsUnits(value) {
        this.setComponentValue('NumberOfScheduleTreatmentsUnits', value);
    }

    get RemainingBenefitAmount() {
        return this.getComponent('RemainingBenefitAmount');
    }

    set RemainingBenefitAmount(value) {
        this.setComponentValue('RemainingBenefitAmount', value);
    }

    get AuthorizedProvider() {
        return this.getComponent('AuthorizedProvider');
    }

    set AuthorizedProvider(value) {
        this.setComponentValue('AuthorizedProvider', value);
    }

    get AuthorizedHealthProfessional() {
        return this.getComponent('AuthorizedHealthProfessional');
    }

    set AuthorizedHealthProfessional(value) {
        this.setComponentValue('AuthorizedHealthProfessional', value);
    }

    get SourceText() {
        return this.getComponent('SourceText');
    }

    set SourceText(value) {
        this.setComponentValue('SourceText', value);
    }

    get SourceDate() {
        return this.getComponent('SourceDate');
    }

    set SourceDate(value) {
        this.setComponentValue('SourceDate', value);
    }

    get SourcePhone() {
        return this.getComponent('SourcePhone');
    }

    set SourcePhone(value) {
        this.setComponentValue('SourcePhone', value);
    }

    get Comment() {
        return this.getComponent('Comment');
    }

    set Comment(value) {
        this.setComponentValue('Comment', value);
    }

    get ActionCode() {
        return this.getComponent('ActionCode');
    }

    set ActionCode(value) {
        this.setComponentValue('ActionCode', value);
    }
}
