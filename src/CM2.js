import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class CM2 extends Segment {
    static components = {
        SetIdCm2: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Cm2SetID: { aliasOf: 'SetIdCm2' },
        SetIDCm2: { aliasOf: 'SetIdCm2' },
        ScheduledTimePoint: {
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
        DescriptionOfTimePoint: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventsScheduledThisTimePoint: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: true,
            maxOccurence: 200,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdCm2', 'ScheduledTimePoint', 'DescriptionOfTimePoint', 'EventsScheduledThisTimePoint'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CM2');
        this.setValues(values);
    }

    get SetIdCm2() {
        return this.getComponent('SetIdCm2');
    }

    set SetIdCm2(value) {
        this.setComponentValue('SetIdCm2', value);
    }

    get Cm2SetID() {
        return this.getComponent('SetIdCm2');
    }

    set Cm2SetID(value) {
        this.setComponentValue('SetIdCm2', value);
    }

    get SetIDCm2() {
        return this.getComponent('SetIdCm2');
    }

    set SetIDCm2(value) {
        this.setComponentValue('SetIdCm2', value);
    }

    get ScheduledTimePoint() {
        return this.getComponent('ScheduledTimePoint');
    }

    set ScheduledTimePoint(value) {
        this.setComponentValue('ScheduledTimePoint', value);
    }

    get DescriptionOfTimePoint() {
        return this.getComponent('DescriptionOfTimePoint');
    }

    set DescriptionOfTimePoint(value) {
        this.setComponentValue('DescriptionOfTimePoint', value);
    }

    get EventsScheduledThisTimePoint() {
        return this.getComponent('EventsScheduledThisTimePoint');
    }

    set EventsScheduledThisTimePoint(value) {
        this.setComponentValue('EventsScheduledThisTimePoint', value);
    }
}
