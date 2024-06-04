import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';

export class CSP extends Segment {
    static components = {
        StudyPhaseIdentifier: {
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
        DateTimeStudyPhaseBegan: {
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
        DateTimeStudyPhaseEnded: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StudyPhaseEvaluability: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'StudyPhaseIdentifier', 'DateTimeStudyPhaseBegan', 'DateTimeStudyPhaseEnded', 'StudyPhaseEvaluability'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CSP');
        this.setValues(values);
    }

    get StudyPhaseIdentifier() {
        return this.getComponent('StudyPhaseIdentifier');
    }

    set StudyPhaseIdentifier(value) {
        this.setComponentValue('StudyPhaseIdentifier', value);
    }

    get DateTimeStudyPhaseBegan() {
        return this.getComponent('DateTimeStudyPhaseBegan');
    }

    set DateTimeStudyPhaseBegan(value) {
        this.setComponentValue('DateTimeStudyPhaseBegan', value);
    }

    get DateTimeStudyPhaseEnded() {
        return this.getComponent('DateTimeStudyPhaseEnded');
    }

    set DateTimeStudyPhaseEnded(value) {
        this.setComponentValue('DateTimeStudyPhaseEnded', value);
    }

    get StudyPhaseEvaluability() {
        return this.getComponent('StudyPhaseEvaluability');
    }

    set StudyPhaseEvaluability(value) {
        this.setComponentValue('StudyPhaseEvaluability', value);
    }
}
