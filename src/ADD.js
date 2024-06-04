import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class ADD extends Segment {
    static components = {
        AddendumContinuationPointer: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'AddendumContinuationPointer'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ADD');
        this.setValues(values);
    }

    get AddendumContinuationPointer() {
        return this.getComponent('AddendumContinuationPointer');
    }

    set AddendumContinuationPointer(value) {
        this.setComponentValue('AddendumContinuationPointer', value);
    }
}
