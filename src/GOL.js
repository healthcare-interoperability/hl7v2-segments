import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { TQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';

export class GOL extends Segment {
    static components = {
        ActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GoalId: {
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
        GoalInstanceId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EpisodeOfCareId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GoalListPriority: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GoalEstablishedDateTime: {
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
        ExpectedGoalAchieveDateTime: {
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
        ExpectedGoalAchievementDateTime: { aliasOf: 'ExpectedGoalAchieveDateTime' },
        GoalClassification: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GoalManagementDiscipline: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CurrentGoalReviewStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CurrentGoalReviewDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NextGoalReviewDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PreviousGoalReviewDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GoalReviewInterval: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: TQ, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GoalEvaluation: {
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
        GoalEvaluationComment: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GoalLifeCycleStatus: {
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
        GoalLifeCycleStatusDateTime: {
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
        GoalTargetType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 20,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GoalTargetName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        MoodCode: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ActionCode',
        'ActionDateTime',
        'GoalId',
        'GoalInstanceId',
        'EpisodeOfCareId',
        'GoalListPriority',
        'GoalEstablishedDateTime',
        'ExpectedGoalAchieveDateTime',
        'GoalClassification',
        'GoalManagementDiscipline',
        'CurrentGoalReviewStatus',
        'CurrentGoalReviewDateTime',
        'NextGoalReviewDateTime',
        'PreviousGoalReviewDateTime',
        'GoalReviewInterval',
        'GoalEvaluation',
        'GoalEvaluationComment',
        'GoalLifeCycleStatus',
        'GoalLifeCycleStatusDateTime',
        'GoalTargetType',
        'GoalTargetName',
        'MoodCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('GOL');
        this.setValues(values);
    }

    get ActionCode() {
        return this.getComponent('ActionCode');
    }

    set ActionCode(value) {
        this.setComponentValue('ActionCode', value);
    }

    get ActionDateTime() {
        return this.getComponent('ActionDateTime');
    }

    set ActionDateTime(value) {
        this.setComponentValue('ActionDateTime', value);
    }

    get GoalId() {
        return this.getComponent('GoalId');
    }

    set GoalId(value) {
        this.setComponentValue('GoalId', value);
    }

    get GoalInstanceId() {
        return this.getComponent('GoalInstanceId');
    }

    set GoalInstanceId(value) {
        this.setComponentValue('GoalInstanceId', value);
    }

    get EpisodeOfCareId() {
        return this.getComponent('EpisodeOfCareId');
    }

    set EpisodeOfCareId(value) {
        this.setComponentValue('EpisodeOfCareId', value);
    }

    get GoalListPriority() {
        return this.getComponent('GoalListPriority');
    }

    set GoalListPriority(value) {
        this.setComponentValue('GoalListPriority', value);
    }

    get GoalEstablishedDateTime() {
        return this.getComponent('GoalEstablishedDateTime');
    }

    set GoalEstablishedDateTime(value) {
        this.setComponentValue('GoalEstablishedDateTime', value);
    }

    get ExpectedGoalAchieveDateTime() {
        return this.getComponent('ExpectedGoalAchieveDateTime');
    }

    set ExpectedGoalAchieveDateTime(value) {
        this.setComponentValue('ExpectedGoalAchieveDateTime', value);
    }

    get ExpectedGoalAchievementDateTime() {
        return this.getComponent('ExpectedGoalAchieveDateTime');
    }

    set ExpectedGoalAchievementDateTime(value) {
        this.setComponentValue('ExpectedGoalAchieveDateTime', value);
    }

    get GoalClassification() {
        return this.getComponent('GoalClassification');
    }

    set GoalClassification(value) {
        this.setComponentValue('GoalClassification', value);
    }

    get GoalManagementDiscipline() {
        return this.getComponent('GoalManagementDiscipline');
    }

    set GoalManagementDiscipline(value) {
        this.setComponentValue('GoalManagementDiscipline', value);
    }

    get CurrentGoalReviewStatus() {
        return this.getComponent('CurrentGoalReviewStatus');
    }

    set CurrentGoalReviewStatus(value) {
        this.setComponentValue('CurrentGoalReviewStatus', value);
    }

    get CurrentGoalReviewDateTime() {
        return this.getComponent('CurrentGoalReviewDateTime');
    }

    set CurrentGoalReviewDateTime(value) {
        this.setComponentValue('CurrentGoalReviewDateTime', value);
    }

    get NextGoalReviewDateTime() {
        return this.getComponent('NextGoalReviewDateTime');
    }

    set NextGoalReviewDateTime(value) {
        this.setComponentValue('NextGoalReviewDateTime', value);
    }

    get PreviousGoalReviewDateTime() {
        return this.getComponent('PreviousGoalReviewDateTime');
    }

    set PreviousGoalReviewDateTime(value) {
        this.setComponentValue('PreviousGoalReviewDateTime', value);
    }

    get GoalReviewInterval() {
        return this.getComponent('GoalReviewInterval');
    }

    set GoalReviewInterval(value) {
        this.setComponentValue('GoalReviewInterval', value);
    }

    get GoalEvaluation() {
        return this.getComponent('GoalEvaluation');
    }

    set GoalEvaluation(value) {
        this.setComponentValue('GoalEvaluation', value);
    }

    get GoalEvaluationComment() {
        return this.getComponent('GoalEvaluationComment');
    }

    set GoalEvaluationComment(value) {
        this.setComponentValue('GoalEvaluationComment', value);
    }

    get GoalLifeCycleStatus() {
        return this.getComponent('GoalLifeCycleStatus');
    }

    set GoalLifeCycleStatus(value) {
        this.setComponentValue('GoalLifeCycleStatus', value);
    }

    get GoalLifeCycleStatusDateTime() {
        return this.getComponent('GoalLifeCycleStatusDateTime');
    }

    set GoalLifeCycleStatusDateTime(value) {
        this.setComponentValue('GoalLifeCycleStatusDateTime', value);
    }

    get GoalTargetType() {
        return this.getComponent('GoalTargetType');
    }

    set GoalTargetType(value) {
        this.setComponentValue('GoalTargetType', value);
    }

    get GoalTargetName() {
        return this.getComponent('GoalTargetName');
    }

    set GoalTargetName(value) {
        this.setComponentValue('GoalTargetName', value);
    }

    get MoodCode() {
        return this.getComponent('MoodCode');
    }

    set MoodCode(value) {
        this.setComponentValue('MoodCode', value);
    }
}
