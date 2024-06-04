import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class DSP extends Segment {
    static components = {
        SetIdDsp: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIdDisplayData: { aliasOf: 'SetIdDsp' },
        DisplayLevel: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DataLine: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LogicalBreakPoint: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResultId: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdDsp', 'DisplayLevel', 'DataLine', 'LogicalBreakPoint', 'ResultId'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('DSP');
        this.setValues(values);
    }

    get SetIdDsp() {
        return this.getComponent('SetIdDsp');
    }

    set SetIdDsp(value) {
        this.setComponentValue('SetIdDsp', value);
    }

    get SetIdDisplayData() {
        return this.getComponent('SetIdDsp');
    }

    set SetIdDisplayData(value) {
        this.setComponentValue('SetIdDsp', value);
    }

    get DisplayLevel() {
        return this.getComponent('DisplayLevel');
    }

    set DisplayLevel(value) {
        this.setComponentValue('DisplayLevel', value);
    }

    get DataLine() {
        return this.getComponent('DataLine');
    }

    set DataLine(value) {
        this.setComponentValue('DataLine', value);
    }

    get LogicalBreakPoint() {
        return this.getComponent('LogicalBreakPoint');
    }

    set LogicalBreakPoint(value) {
        this.setComponentValue('LogicalBreakPoint', value);
    }

    get ResultId() {
        return this.getComponent('ResultId');
    }

    set ResultId(value) {
        this.setComponentValue('ResultId', value);
    }
}
