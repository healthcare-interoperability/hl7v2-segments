import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class CTI extends Segment {
    static components = {
        SponsorStudyId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StudyPhaseIdentifier: {
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
        StudyScheduledTimePoint: {
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
    };

    static componentsByIndex = ['', 'SponsorStudyId', 'StudyPhaseIdentifier', 'StudyScheduledTimePoint'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CTI');
        this.setValues(values);
    }

    get SponsorStudyId() {
        return this.getComponent('SponsorStudyId');
    }

    set SponsorStudyId(value) {
        this.setComponentValue('SponsorStudyId', value);
    }

    get StudyPhaseIdentifier() {
        return this.getComponent('StudyPhaseIdentifier');
    }

    set StudyPhaseIdentifier(value) {
        this.setComponentValue('StudyPhaseIdentifier', value);
    }

    get StudyScheduledTimePoint() {
        return this.getComponent('StudyScheduledTimePoint');
    }

    set StudyScheduledTimePoint(value) {
        this.setComponentValue('StudyScheduledTimePoint', value);
    }
}
