import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { QIP } from '@healthcare-interoperability/hl7v2-datatypes';

export class ERQ extends Segment {
    static components = {
        QueryTag: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventIdentifier: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InputParameterList: {
            defaultDataType: QIP,
            dataTypes: [{ dataType: QIP, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'QueryTag', 'EventIdentifier', 'InputParameterList'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ERQ');
        this.setValues(values);
    }

    get QueryTag() {
        return this.getComponent('QueryTag');
    }

    set QueryTag(value) {
        this.setComponentValue('QueryTag', value);
    }

    get EventIdentifier() {
        return this.getComponent('EventIdentifier');
    }

    set EventIdentifier(value) {
        this.setComponentValue('EventIdentifier', value);
    }

    get InputParameterList() {
        return this.getComponent('InputParameterList');
    }

    set InputParameterList(value) {
        this.setComponentValue('InputParameterList', value);
    }
}
