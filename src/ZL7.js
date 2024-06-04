import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class ZL7 extends Segment {
    static components = {
        Zl71: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'Zl71'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ZL7');
        this.setValues(values);
    }

    get Zl71() {
        return this.getComponent('Zl71');
    }

    set Zl71(value) {
        this.setComponentValue('Zl71', value);
    }
}
