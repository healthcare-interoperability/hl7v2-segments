import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { RCD } from '@healthcare-interoperability/hl7v2-datatypes';

export class RDF extends Segment {
    static components = {
        NumberOfColumnsPerRow: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ColumnDescription: {
            defaultDataType: RCD,
            dataTypes: [{ dataType: RCD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'NumberOfColumnsPerRow', 'ColumnDescription'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RDF');
        this.setValues(values);
    }

    get NumberOfColumnsPerRow() {
        return this.getComponent('NumberOfColumnsPerRow');
    }

    set NumberOfColumnsPerRow(value) {
        this.setComponentValue('NumberOfColumnsPerRow', value);
    }

    get ColumnDescription() {
        return this.getComponent('ColumnDescription');
    }

    set ColumnDescription(value) {
        this.setComponentValue('ColumnDescription', value);
    }
}
