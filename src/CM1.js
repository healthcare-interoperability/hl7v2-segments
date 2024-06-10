import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class CM1 extends Segment {
    static components = {
        SetIdCm1: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Cm1SetID: { aliasOf: 'SetIdCm1' },
        SetIDCm1: { aliasOf: 'SetIdCm1' },
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
        DescriptionOfStudyPhase: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdCm1', 'StudyPhaseIdentifier', 'DescriptionOfStudyPhase'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CM1');
        this.setValues(values);
    }

    get SetIdCm1() {
        return this.getComponent('SetIdCm1');
    }

    set SetIdCm1(value) {
        this.setComponentValue('SetIdCm1', value);
    }

    get Cm1SetID() {
        return this.getComponent('SetIdCm1');
    }

    set Cm1SetID(value) {
        this.setComponentValue('SetIdCm1', value);
    }

    get SetIDCm1() {
        return this.getComponent('SetIdCm1');
    }

    set SetIDCm1(value) {
        this.setComponentValue('SetIdCm1', value);
    }

    get StudyPhaseIdentifier() {
        return this.getComponent('StudyPhaseIdentifier');
    }

    set StudyPhaseIdentifier(value) {
        this.setComponentValue('StudyPhaseIdentifier', value);
    }

    get DescriptionOfStudyPhase() {
        return this.getComponent('DescriptionOfStudyPhase');
    }

    set DescriptionOfStudyPhase(value) {
        this.setComponentValue('DescriptionOfStudyPhase', value);
    }
}
