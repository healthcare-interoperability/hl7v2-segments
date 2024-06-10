import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';

export class PRB extends Segment {
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
        ProblemId: {
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
        ProblemID: { aliasOf: 'ProblemId' },
        ProblemInstanceId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProblemInstanceID: { aliasOf: 'ProblemInstanceId' },
        EpisodeOfCareId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EpisodeOfCareID: { aliasOf: 'EpisodeOfCareId' },
        ProblemListPriority: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProblemEstablishedDateTime: {
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
        AnticipatedProblemResolutionDateTime: {
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
        ActualProblemResolutionDateTime: {
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
        ProblemClassification: {
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
        ProblemManagementDiscipline: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProblemPersistence: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProblemConfirmationStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProblemLifeCycleStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProblemLifeCycleStatusDateTime: {
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
        ProblemDateOfOnset: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProblemOnsetText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProblemRanking: {
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
        CertaintyOfProblem: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertaintyOfProblem01: { aliasOf: 'CertaintyOfProblem' },
        ProbabilityOfProblem01: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProbabilityOfProblem: { aliasOf: 'ProbabilityOfProblem01' },
        IndividualAwarenessOfProblem: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProblemPrognosis: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IndividualAwarenessOfPrognosis: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FamilySignificantOtherAwarenessOfProblemPrognosis: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SecuritySensitivity: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProblemSeverity: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProblemPerspective: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MoodCode: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ActionCode',
        'ActionDateTime',
        'ProblemId',
        'ProblemInstanceId',
        'EpisodeOfCareId',
        'ProblemListPriority',
        'ProblemEstablishedDateTime',
        'AnticipatedProblemResolutionDateTime',
        'ActualProblemResolutionDateTime',
        'ProblemClassification',
        'ProblemManagementDiscipline',
        'ProblemPersistence',
        'ProblemConfirmationStatus',
        'ProblemLifeCycleStatus',
        'ProblemLifeCycleStatusDateTime',
        'ProblemDateOfOnset',
        'ProblemOnsetText',
        'ProblemRanking',
        'CertaintyOfProblem',
        'ProbabilityOfProblem01',
        'IndividualAwarenessOfProblem',
        'ProblemPrognosis',
        'IndividualAwarenessOfPrognosis',
        'FamilySignificantOtherAwarenessOfProblemPrognosis',
        'SecuritySensitivity',
        'ProblemSeverity',
        'ProblemPerspective',
        'MoodCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PRB');
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

    get ProblemId() {
        return this.getComponent('ProblemId');
    }

    set ProblemId(value) {
        this.setComponentValue('ProblemId', value);
    }

    get ProblemID() {
        return this.getComponent('ProblemId');
    }

    set ProblemID(value) {
        this.setComponentValue('ProblemId', value);
    }

    get ProblemInstanceId() {
        return this.getComponent('ProblemInstanceId');
    }

    set ProblemInstanceId(value) {
        this.setComponentValue('ProblemInstanceId', value);
    }

    get ProblemInstanceID() {
        return this.getComponent('ProblemInstanceId');
    }

    set ProblemInstanceID(value) {
        this.setComponentValue('ProblemInstanceId', value);
    }

    get EpisodeOfCareId() {
        return this.getComponent('EpisodeOfCareId');
    }

    set EpisodeOfCareId(value) {
        this.setComponentValue('EpisodeOfCareId', value);
    }

    get EpisodeOfCareID() {
        return this.getComponent('EpisodeOfCareId');
    }

    set EpisodeOfCareID(value) {
        this.setComponentValue('EpisodeOfCareId', value);
    }

    get ProblemListPriority() {
        return this.getComponent('ProblemListPriority');
    }

    set ProblemListPriority(value) {
        this.setComponentValue('ProblemListPriority', value);
    }

    get ProblemEstablishedDateTime() {
        return this.getComponent('ProblemEstablishedDateTime');
    }

    set ProblemEstablishedDateTime(value) {
        this.setComponentValue('ProblemEstablishedDateTime', value);
    }

    get AnticipatedProblemResolutionDateTime() {
        return this.getComponent('AnticipatedProblemResolutionDateTime');
    }

    set AnticipatedProblemResolutionDateTime(value) {
        this.setComponentValue('AnticipatedProblemResolutionDateTime', value);
    }

    get ActualProblemResolutionDateTime() {
        return this.getComponent('ActualProblemResolutionDateTime');
    }

    set ActualProblemResolutionDateTime(value) {
        this.setComponentValue('ActualProblemResolutionDateTime', value);
    }

    get ProblemClassification() {
        return this.getComponent('ProblemClassification');
    }

    set ProblemClassification(value) {
        this.setComponentValue('ProblemClassification', value);
    }

    get ProblemManagementDiscipline() {
        return this.getComponent('ProblemManagementDiscipline');
    }

    set ProblemManagementDiscipline(value) {
        this.setComponentValue('ProblemManagementDiscipline', value);
    }

    get ProblemPersistence() {
        return this.getComponent('ProblemPersistence');
    }

    set ProblemPersistence(value) {
        this.setComponentValue('ProblemPersistence', value);
    }

    get ProblemConfirmationStatus() {
        return this.getComponent('ProblemConfirmationStatus');
    }

    set ProblemConfirmationStatus(value) {
        this.setComponentValue('ProblemConfirmationStatus', value);
    }

    get ProblemLifeCycleStatus() {
        return this.getComponent('ProblemLifeCycleStatus');
    }

    set ProblemLifeCycleStatus(value) {
        this.setComponentValue('ProblemLifeCycleStatus', value);
    }

    get ProblemLifeCycleStatusDateTime() {
        return this.getComponent('ProblemLifeCycleStatusDateTime');
    }

    set ProblemLifeCycleStatusDateTime(value) {
        this.setComponentValue('ProblemLifeCycleStatusDateTime', value);
    }

    get ProblemDateOfOnset() {
        return this.getComponent('ProblemDateOfOnset');
    }

    set ProblemDateOfOnset(value) {
        this.setComponentValue('ProblemDateOfOnset', value);
    }

    get ProblemOnsetText() {
        return this.getComponent('ProblemOnsetText');
    }

    set ProblemOnsetText(value) {
        this.setComponentValue('ProblemOnsetText', value);
    }

    get ProblemRanking() {
        return this.getComponent('ProblemRanking');
    }

    set ProblemRanking(value) {
        this.setComponentValue('ProblemRanking', value);
    }

    get CertaintyOfProblem() {
        return this.getComponent('CertaintyOfProblem');
    }

    set CertaintyOfProblem(value) {
        this.setComponentValue('CertaintyOfProblem', value);
    }

    get CertaintyOfProblem01() {
        return this.getComponent('CertaintyOfProblem');
    }

    set CertaintyOfProblem01(value) {
        this.setComponentValue('CertaintyOfProblem', value);
    }

    get ProbabilityOfProblem01() {
        return this.getComponent('ProbabilityOfProblem01');
    }

    set ProbabilityOfProblem01(value) {
        this.setComponentValue('ProbabilityOfProblem01', value);
    }

    get ProbabilityOfProblem() {
        return this.getComponent('ProbabilityOfProblem01');
    }

    set ProbabilityOfProblem(value) {
        this.setComponentValue('ProbabilityOfProblem01', value);
    }

    get IndividualAwarenessOfProblem() {
        return this.getComponent('IndividualAwarenessOfProblem');
    }

    set IndividualAwarenessOfProblem(value) {
        this.setComponentValue('IndividualAwarenessOfProblem', value);
    }

    get ProblemPrognosis() {
        return this.getComponent('ProblemPrognosis');
    }

    set ProblemPrognosis(value) {
        this.setComponentValue('ProblemPrognosis', value);
    }

    get IndividualAwarenessOfPrognosis() {
        return this.getComponent('IndividualAwarenessOfPrognosis');
    }

    set IndividualAwarenessOfPrognosis(value) {
        this.setComponentValue('IndividualAwarenessOfPrognosis', value);
    }

    get FamilySignificantOtherAwarenessOfProblemPrognosis() {
        return this.getComponent('FamilySignificantOtherAwarenessOfProblemPrognosis');
    }

    set FamilySignificantOtherAwarenessOfProblemPrognosis(value) {
        this.setComponentValue('FamilySignificantOtherAwarenessOfProblemPrognosis', value);
    }

    get SecuritySensitivity() {
        return this.getComponent('SecuritySensitivity');
    }

    set SecuritySensitivity(value) {
        this.setComponentValue('SecuritySensitivity', value);
    }

    get ProblemSeverity() {
        return this.getComponent('ProblemSeverity');
    }

    set ProblemSeverity(value) {
        this.setComponentValue('ProblemSeverity', value);
    }

    get ProblemPerspective() {
        return this.getComponent('ProblemPerspective');
    }

    set ProblemPerspective(value) {
        this.setComponentValue('ProblemPerspective', value);
    }

    get MoodCode() {
        return this.getComponent('MoodCode');
    }

    set MoodCode(value) {
        this.setComponentValue('MoodCode', value);
    }
}
