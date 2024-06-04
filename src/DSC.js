import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class DSC extends Segment {
    static components = {
        ContinuationPointer: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContinuationStyle: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'ContinuationPointer', 'ContinuationStyle'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('DSC');
        this.setValues(values);
    }

    get ContinuationPointer() {
        return this.getComponent('ContinuationPointer');
    }

    set ContinuationPointer(value) {
        this.setComponentValue('ContinuationPointer', value);
    }

    get ContinuationStyle() {
        return this.getComponent('ContinuationStyle');
    }

    set ContinuationStyle(value) {
        this.setComponentValue('ContinuationStyle', value);
    }
}
