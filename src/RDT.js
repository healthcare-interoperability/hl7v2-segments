import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { varies } from '@healthcare-interoperability/hl7v2-datatypes';
import { VARIES } from '@healthcare-interoperability/hl7v2-datatypes';

export class RDT extends Segment {
    static components = {
        ColumnValue: {
            defaultDataType: varies,
            dataTypes: [
                { dataType: varies, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: VARIES, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'ColumnValue'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RDT');
        this.setValues(values);
    }

    get ColumnValue() {
        return this.getComponent('ColumnValue');
    }

    set ColumnValue(value) {
        this.setComponentValue('ColumnValue', value);
    }
}
