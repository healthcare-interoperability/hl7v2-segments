import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class Hxx extends Segment {
    static components = {
        Hxx1: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'Hxx1'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('Hxx');
        this.setValues(values);
    }

    get Hxx1() {
        return this.getComponent('Hxx1');
    }

    set Hxx1(value) {
        this.setComponentValue('Hxx1', value);
    }
}
