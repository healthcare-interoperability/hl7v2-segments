import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class EQL extends Segment {
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
        EQLQueryName: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EQLQueryStatement: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'QueryTag', 'QueryResponseFormatCode', 'EQLQueryName', 'EQLQueryStatement'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('EQL');
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

    get EQLQueryName() {
        return this.getComponent('EQLQueryName');
    }

    set EQLQueryName(value) {
        this.setComponentValue('EQLQueryName', value);
    }

    get EQLQueryStatement() {
        return this.getComponent('EQLQueryStatement');
    }

    set EQLQueryStatement(value) {
        this.setComponentValue('EQLQueryStatement', value);
    }
}
