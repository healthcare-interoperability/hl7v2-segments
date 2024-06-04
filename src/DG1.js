import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';

export class DG1 extends Segment {
    static components = {
        SetIdDg1: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIdDiagnosis: { aliasOf: 'SetIdDg1' },
        DiagnosisCodingMethod: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6'] },
                { dataType: ID, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.7', '2.7.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DiagnosisCodeDg1: {
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
        DiagnosisCode: { aliasOf: 'DiagnosisCodeDg1' },
        DiagnosisDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DiagnosisDateTime: {
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
        DiagnosisType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MajorDiagnosticCategory: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CNE, versions: ['2.7', '2.7.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DiagnosticRelatedGroup: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CNE, versions: ['2.7', '2.7.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgApprovalIndicator: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6'] },
                { dataType: ID, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.7', '2.7.1'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgGrouperReviewCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.7', '2.7.1'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OutlierType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.7', '2.7.1'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OutlierDays: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.7', '2.7.1'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OutlierCost: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6'] },
                { dataType: CP, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.7', '2.7.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GrouperVersionAndType: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DiagnosisPriority: {
            defaultDataType: NM,
            dataTypes: [
                { dataType: NM, versions: ['2.8', '2.3', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DiagnosingClinician: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DiagnosisClassification: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConfidentialIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AttestationDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DiagnosisIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DiagnosisActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentDiagnosis: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgCclValueCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgGroupingUsage: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgDiagnosisDeterminationStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PresentOnAdmissionPoaIndicator: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdDg1',
        'DiagnosisCodingMethod',
        'DiagnosisCodeDg1',
        'DiagnosisDescription',
        'DiagnosisDateTime',
        'DiagnosisType',
        'MajorDiagnosticCategory',
        'DiagnosticRelatedGroup',
        'DrgApprovalIndicator',
        'DrgGrouperReviewCode',
        'OutlierType',
        'OutlierDays',
        'OutlierCost',
        'GrouperVersionAndType',
        'DiagnosisPriority',
        'DiagnosingClinician',
        'DiagnosisClassification',
        'ConfidentialIndicator',
        'AttestationDateTime',
        'DiagnosisIdentifier',
        'DiagnosisActionCode',
        'ParentDiagnosis',
        'DrgCclValueCode',
        'DrgGroupingUsage',
        'DrgDiagnosisDeterminationStatus',
        'PresentOnAdmissionPoaIndicator',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('DG1');
        this.setValues(values);
    }

    get SetIdDg1() {
        return this.getComponent('SetIdDg1');
    }

    set SetIdDg1(value) {
        this.setComponentValue('SetIdDg1', value);
    }

    get SetIdDiagnosis() {
        return this.getComponent('SetIdDg1');
    }

    set SetIdDiagnosis(value) {
        this.setComponentValue('SetIdDg1', value);
    }

    get DiagnosisCodingMethod() {
        return this.getComponent('DiagnosisCodingMethod');
    }

    set DiagnosisCodingMethod(value) {
        this.setComponentValue('DiagnosisCodingMethod', value);
    }

    get DiagnosisCodeDg1() {
        return this.getComponent('DiagnosisCodeDg1');
    }

    set DiagnosisCodeDg1(value) {
        this.setComponentValue('DiagnosisCodeDg1', value);
    }

    get DiagnosisCode() {
        return this.getComponent('DiagnosisCodeDg1');
    }

    set DiagnosisCode(value) {
        this.setComponentValue('DiagnosisCodeDg1', value);
    }

    get DiagnosisDescription() {
        return this.getComponent('DiagnosisDescription');
    }

    set DiagnosisDescription(value) {
        this.setComponentValue('DiagnosisDescription', value);
    }

    get DiagnosisDateTime() {
        return this.getComponent('DiagnosisDateTime');
    }

    set DiagnosisDateTime(value) {
        this.setComponentValue('DiagnosisDateTime', value);
    }

    get DiagnosisType() {
        return this.getComponent('DiagnosisType');
    }

    set DiagnosisType(value) {
        this.setComponentValue('DiagnosisType', value);
    }

    get MajorDiagnosticCategory() {
        return this.getComponent('MajorDiagnosticCategory');
    }

    set MajorDiagnosticCategory(value) {
        this.setComponentValue('MajorDiagnosticCategory', value);
    }

    get DiagnosticRelatedGroup() {
        return this.getComponent('DiagnosticRelatedGroup');
    }

    set DiagnosticRelatedGroup(value) {
        this.setComponentValue('DiagnosticRelatedGroup', value);
    }

    get DrgApprovalIndicator() {
        return this.getComponent('DrgApprovalIndicator');
    }

    set DrgApprovalIndicator(value) {
        this.setComponentValue('DrgApprovalIndicator', value);
    }

    get DrgGrouperReviewCode() {
        return this.getComponent('DrgGrouperReviewCode');
    }

    set DrgGrouperReviewCode(value) {
        this.setComponentValue('DrgGrouperReviewCode', value);
    }

    get OutlierType() {
        return this.getComponent('OutlierType');
    }

    set OutlierType(value) {
        this.setComponentValue('OutlierType', value);
    }

    get OutlierDays() {
        return this.getComponent('OutlierDays');
    }

    set OutlierDays(value) {
        this.setComponentValue('OutlierDays', value);
    }

    get OutlierCost() {
        return this.getComponent('OutlierCost');
    }

    set OutlierCost(value) {
        this.setComponentValue('OutlierCost', value);
    }

    get GrouperVersionAndType() {
        return this.getComponent('GrouperVersionAndType');
    }

    set GrouperVersionAndType(value) {
        this.setComponentValue('GrouperVersionAndType', value);
    }

    get DiagnosisPriority() {
        return this.getComponent('DiagnosisPriority');
    }

    set DiagnosisPriority(value) {
        this.setComponentValue('DiagnosisPriority', value);
    }

    get DiagnosingClinician() {
        return this.getComponent('DiagnosingClinician');
    }

    set DiagnosingClinician(value) {
        this.setComponentValue('DiagnosingClinician', value);
    }

    get DiagnosisClassification() {
        return this.getComponent('DiagnosisClassification');
    }

    set DiagnosisClassification(value) {
        this.setComponentValue('DiagnosisClassification', value);
    }

    get ConfidentialIndicator() {
        return this.getComponent('ConfidentialIndicator');
    }

    set ConfidentialIndicator(value) {
        this.setComponentValue('ConfidentialIndicator', value);
    }

    get AttestationDateTime() {
        return this.getComponent('AttestationDateTime');
    }

    set AttestationDateTime(value) {
        this.setComponentValue('AttestationDateTime', value);
    }

    get DiagnosisIdentifier() {
        return this.getComponent('DiagnosisIdentifier');
    }

    set DiagnosisIdentifier(value) {
        this.setComponentValue('DiagnosisIdentifier', value);
    }

    get DiagnosisActionCode() {
        return this.getComponent('DiagnosisActionCode');
    }

    set DiagnosisActionCode(value) {
        this.setComponentValue('DiagnosisActionCode', value);
    }

    get ParentDiagnosis() {
        return this.getComponent('ParentDiagnosis');
    }

    set ParentDiagnosis(value) {
        this.setComponentValue('ParentDiagnosis', value);
    }

    get DrgCclValueCode() {
        return this.getComponent('DrgCclValueCode');
    }

    set DrgCclValueCode(value) {
        this.setComponentValue('DrgCclValueCode', value);
    }

    get DrgGroupingUsage() {
        return this.getComponent('DrgGroupingUsage');
    }

    set DrgGroupingUsage(value) {
        this.setComponentValue('DrgGroupingUsage', value);
    }

    get DrgDiagnosisDeterminationStatus() {
        return this.getComponent('DrgDiagnosisDeterminationStatus');
    }

    set DrgDiagnosisDeterminationStatus(value) {
        this.setComponentValue('DrgDiagnosisDeterminationStatus', value);
    }

    get PresentOnAdmissionPoaIndicator() {
        return this.getComponent('PresentOnAdmissionPoaIndicator');
    }

    set PresentOnAdmissionPoaIndicator(value) {
        this.setComponentValue('PresentOnAdmissionPoaIndicator', value);
    }
}
