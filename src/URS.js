import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class URS extends Segment {
    static components = {
        URS1: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        RUWhereSubjectDefinition: { aliasOf: 'URS1' },
    };

    static componentsByIndex = ['', 'URS1'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('URS');
        this.setValues(values);
    }

    get URS1() {
        return this.getComponent('URS1');
    }

    set URS1(value) {
        this.setComponentValue('URS1', value);
    }

    get RUWhereSubjectDefinition() {
        return this.getComponent('URS1');
    }

    set RUWhereSubjectDefinition(value) {
        this.setComponentValue('URS1', value);
    }
}
