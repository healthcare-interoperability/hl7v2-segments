import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';

export class QRD extends Segment {
    static components = {
        QRD1: {
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
        QueryDateTime: { aliasOf: 'QRD1' },
    };

    static componentsByIndex = ['', 'QRD1'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('QRD');
        this.setValues(values);
    }

    get QRD1() {
        return this.getComponent('QRD1');
    }

    set QRD1(value) {
        this.setComponentValue('QRD1', value);
    }

    get QueryDateTime() {
        return this.getComponent('QRD1');
    }

    set QueryDateTime(value) {
        this.setComponentValue('QRD1', value);
    }
}
