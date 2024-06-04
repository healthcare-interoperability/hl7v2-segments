import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { MO } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class AUT extends Segment {
    static components = {
        AuthorizingPayorPlanId: {
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
        AuthorizingPayorPlanCode: { aliasOf: 'AuthorizingPayorPlanId' },
        AuthorizingPayorCompanyId: {
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
        AuthorizingPayorCompanyName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AuthorizationEffectiveDate: {
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
        AuthorizationExpirationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AuthorizationIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReimbursementLimit: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedNumberOfTreatments: {
            defaultDataType: CQ,
            dataTypes: [
                { dataType: CQ, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AuthorizedNumberOfTreatments: {
            defaultDataType: CQ,
            dataTypes: [
                { dataType: CQ, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 9,
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
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedDisciplineS: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AuthorizedDisciplineS: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 12,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AuthorizationReferralType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ApprovalStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlannedTreatmentStopDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ClinicalService: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReasonText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfAuthorizedTreatmentsUnits: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfUsedTreatmentsUnits: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfScheduleTreatmentsUnits: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EncounterType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RemainingBenefitAmount: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.8'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AuthorizedProvider: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AuthorizedHealthProfessional: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SourceText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SourceDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SourcePhone: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Comment: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'AuthorizingPayorPlanId',
        'AuthorizingPayorCompanyId',
        'AuthorizingPayorCompanyName',
        'AuthorizationEffectiveDate',
        'AuthorizationExpirationDate',
        'AuthorizationIdentifier',
        'ReimbursementLimit',
        'RequestedNumberOfTreatments',
        'AuthorizedNumberOfTreatments',
        'ProcessDate',
        'RequestedDisciplineS',
        'AuthorizedDisciplineS',
        'AuthorizationReferralType',
        'ApprovalStatus',
        'PlannedTreatmentStopDate',
        'ClinicalService',
        'ReasonText',
        'NumberOfAuthorizedTreatmentsUnits',
        'NumberOfUsedTreatmentsUnits',
        'NumberOfScheduleTreatmentsUnits',
        'EncounterType',
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
        this.setSegmentType('AUT');
        this.setValues(values);
    }

    get AuthorizingPayorPlanId() {
        return this.getComponent('AuthorizingPayorPlanId');
    }

    set AuthorizingPayorPlanId(value) {
        this.setComponentValue('AuthorizingPayorPlanId', value);
    }

    get AuthorizingPayorPlanCode() {
        return this.getComponent('AuthorizingPayorPlanId');
    }

    set AuthorizingPayorPlanCode(value) {
        this.setComponentValue('AuthorizingPayorPlanId', value);
    }

    get AuthorizingPayorCompanyId() {
        return this.getComponent('AuthorizingPayorCompanyId');
    }

    set AuthorizingPayorCompanyId(value) {
        this.setComponentValue('AuthorizingPayorCompanyId', value);
    }

    get AuthorizingPayorCompanyName() {
        return this.getComponent('AuthorizingPayorCompanyName');
    }

    set AuthorizingPayorCompanyName(value) {
        this.setComponentValue('AuthorizingPayorCompanyName', value);
    }

    get AuthorizationEffectiveDate() {
        return this.getComponent('AuthorizationEffectiveDate');
    }

    set AuthorizationEffectiveDate(value) {
        this.setComponentValue('AuthorizationEffectiveDate', value);
    }

    get AuthorizationExpirationDate() {
        return this.getComponent('AuthorizationExpirationDate');
    }

    set AuthorizationExpirationDate(value) {
        this.setComponentValue('AuthorizationExpirationDate', value);
    }

    get AuthorizationIdentifier() {
        return this.getComponent('AuthorizationIdentifier');
    }

    set AuthorizationIdentifier(value) {
        this.setComponentValue('AuthorizationIdentifier', value);
    }

    get ReimbursementLimit() {
        return this.getComponent('ReimbursementLimit');
    }

    set ReimbursementLimit(value) {
        this.setComponentValue('ReimbursementLimit', value);
    }

    get RequestedNumberOfTreatments() {
        return this.getComponent('RequestedNumberOfTreatments');
    }

    set RequestedNumberOfTreatments(value) {
        this.setComponentValue('RequestedNumberOfTreatments', value);
    }

    get AuthorizedNumberOfTreatments() {
        return this.getComponent('AuthorizedNumberOfTreatments');
    }

    set AuthorizedNumberOfTreatments(value) {
        this.setComponentValue('AuthorizedNumberOfTreatments', value);
    }

    get ProcessDate() {
        return this.getComponent('ProcessDate');
    }

    set ProcessDate(value) {
        this.setComponentValue('ProcessDate', value);
    }

    get RequestedDisciplineS() {
        return this.getComponent('RequestedDisciplineS');
    }

    set RequestedDisciplineS(value) {
        this.setComponentValue('RequestedDisciplineS', value);
    }

    get AuthorizedDisciplineS() {
        return this.getComponent('AuthorizedDisciplineS');
    }

    set AuthorizedDisciplineS(value) {
        this.setComponentValue('AuthorizedDisciplineS', value);
    }

    get AuthorizationReferralType() {
        return this.getComponent('AuthorizationReferralType');
    }

    set AuthorizationReferralType(value) {
        this.setComponentValue('AuthorizationReferralType', value);
    }

    get ApprovalStatus() {
        return this.getComponent('ApprovalStatus');
    }

    set ApprovalStatus(value) {
        this.setComponentValue('ApprovalStatus', value);
    }

    get PlannedTreatmentStopDate() {
        return this.getComponent('PlannedTreatmentStopDate');
    }

    set PlannedTreatmentStopDate(value) {
        this.setComponentValue('PlannedTreatmentStopDate', value);
    }

    get ClinicalService() {
        return this.getComponent('ClinicalService');
    }

    set ClinicalService(value) {
        this.setComponentValue('ClinicalService', value);
    }

    get ReasonText() {
        return this.getComponent('ReasonText');
    }

    set ReasonText(value) {
        this.setComponentValue('ReasonText', value);
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

    get EncounterType() {
        return this.getComponent('EncounterType');
    }

    set EncounterType(value) {
        this.setComponentValue('EncounterType', value);
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
