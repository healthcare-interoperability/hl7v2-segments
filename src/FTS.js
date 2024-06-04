import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class FTS extends Segment {
    static components = {
        FileBatchCount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FileTrailerComment: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'FileBatchCount', 'FileTrailerComment'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('FTS');
        this.setValues(values);
    }

    get FileBatchCount() {
        return this.getComponent('FileBatchCount');
    }

    set FileBatchCount(value) {
        this.setComponentValue('FileBatchCount', value);
    }

    get FileTrailerComment() {
        return this.getComponent('FileTrailerComment');
    }

    set FileTrailerComment(value) {
        this.setComponentValue('FileTrailerComment', value);
    }
}
