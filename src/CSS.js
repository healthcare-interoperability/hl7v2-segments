import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';

export class CSS extends Segment {
    static components = {
        StudyScheduledTimePoint: {
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
        StudyScheduledPatientTimePoint: {
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
        StudyQualityControlCodes: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: true,
            maxOccurence: 3,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'StudyScheduledTimePoint', 'StudyScheduledPatientTimePoint', 'StudyQualityControlCodes'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CSS');
        this.setValues(values);
    }

    get StudyScheduledTimePoint() {
        return this.getComponent('StudyScheduledTimePoint');
    }

    set StudyScheduledTimePoint(value) {
        this.setComponentValue('StudyScheduledTimePoint', value);
    }

    get StudyScheduledPatientTimePoint() {
        return this.getComponent('StudyScheduledPatientTimePoint');
    }

    set StudyScheduledPatientTimePoint(value) {
        this.setComponentValue('StudyScheduledPatientTimePoint', value);
    }

    get StudyQualityControlCodes() {
        return this.getComponent('StudyQualityControlCodes');
    }

    set StudyQualityControlCodes(value) {
        this.setComponentValue('StudyQualityControlCodes', value);
    }
}
