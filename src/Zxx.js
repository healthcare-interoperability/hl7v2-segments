import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class Zxx extends Segment {
    static components = {
        Zxx1: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'Zxx1'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('Zxx');
        this.setValues(values);
    }

    get Zxx1() {
        return this.getComponent('Zxx1');
    }

    set Zxx1(value) {
        this.setComponentValue('Zxx1', value);
    }
}
