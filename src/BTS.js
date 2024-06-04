import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class BTS extends Segment {
    static components = {
        BatchMessageCount: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchComment: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchTotals: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'BatchMessageCount', 'BatchComment', 'BatchTotals'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('BTS');
        this.setValues(values);
    }

    get BatchMessageCount() {
        return this.getComponent('BatchMessageCount');
    }

    set BatchMessageCount(value) {
        this.setComponentValue('BatchMessageCount', value);
    }

    get BatchComment() {
        return this.getComponent('BatchComment');
    }

    set BatchComment(value) {
        this.setComponentValue('BatchComment', value);
    }

    get BatchTotals() {
        return this.getComponent('BatchTotals');
    }

    set BatchTotals(value) {
        this.setComponentValue('BatchTotals', value);
    }
}
