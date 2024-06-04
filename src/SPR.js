import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { QIP } from '@healthcare-interoperability/hl7v2-datatypes';

export class SPR extends Segment {
    static components = {
        QueryTag: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QueryResponseFormatCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StoredProcedureName: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InputParameterList: {
            defaultDataType: QIP,
            dataTypes: [{ dataType: QIP, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'QueryTag', 'QueryResponseFormatCode', 'StoredProcedureName', 'InputParameterList'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('SPR');
        this.setValues(values);
    }

    get QueryTag() {
        return this.getComponent('QueryTag');
    }

    set QueryTag(value) {
        this.setComponentValue('QueryTag', value);
    }

    get QueryResponseFormatCode() {
        return this.getComponent('QueryResponseFormatCode');
    }

    set QueryResponseFormatCode(value) {
        this.setComponentValue('QueryResponseFormatCode', value);
    }

    get StoredProcedureName() {
        return this.getComponent('StoredProcedureName');
    }

    set StoredProcedureName(value) {
        this.setComponentValue('StoredProcedureName', value);
    }

    get InputParameterList() {
        return this.getComponent('InputParameterList');
    }

    set InputParameterList(value) {
        this.setComponentValue('InputParameterList', value);
    }
}
