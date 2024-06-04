import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class QRF extends Segment {
    static components = {
        Qrf1: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        WhereSubjectFilter: { aliasOf: 'Qrf1' },
    };

    static componentsByIndex = ['', 'Qrf1'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('QRF');
        this.setValues(values);
    }

    get Qrf1() {
        return this.getComponent('Qrf1');
    }

    set Qrf1(value) {
        this.setComponentValue('Qrf1', value);
    }

    get WhereSubjectFilter() {
        return this.getComponent('Qrf1');
    }

    set WhereSubjectFilter(value) {
        this.setComponentValue('Qrf1', value);
    }
}
