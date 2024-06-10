import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';

export class URD extends Segment {
    static components = {
        URD1: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RUDateTime: { aliasOf: 'URD1' },
    };

    static componentsByIndex = ['', 'URD1'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('URD');
        this.setValues(values);
    }

    get URD1() {
        return this.getComponent('URD1');
    }

    set URD1(value) {
        this.setComponentValue('URD1', value);
    }

    get RUDateTime() {
        return this.getComponent('URD1');
    }

    set RUDateTime(value) {
        this.setComponentValue('URD1', value);
    }
}
