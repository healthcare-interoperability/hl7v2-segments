import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';

export class NCK extends Segment {
    static components = {
        SystemDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SystemDateTime'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('NCK');
        this.setValues(values);
    }

    get SystemDateTime() {
        return this.getComponent('SystemDateTime');
    }

    set SystemDateTime(value) {
        this.setComponentValue('SystemDateTime', value);
    }
}
