import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { SRT } from '@healthcare-interoperability/hl7v2-datatypes';

export class RCP extends Segment {
    static components = {
        QueryPriority: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QuantityLimitedRequest: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResponseModality: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExecutionAndDeliveryTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ModifyIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SortByField: {
            defaultDataType: SRT,
            dataTypes: [{ dataType: SRT, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SegmentGroupInclusion: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'QueryPriority', 'QuantityLimitedRequest', 'ResponseModality', 'ExecutionAndDeliveryTime', 'ModifyIndicator', 'SortByField', 'SegmentGroupInclusion'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RCP');
        this.setValues(values);
    }

    get QueryPriority() {
        return this.getComponent('QueryPriority');
    }

    set QueryPriority(value) {
        this.setComponentValue('QueryPriority', value);
    }

    get QuantityLimitedRequest() {
        return this.getComponent('QuantityLimitedRequest');
    }

    set QuantityLimitedRequest(value) {
        this.setComponentValue('QuantityLimitedRequest', value);
    }

    get ResponseModality() {
        return this.getComponent('ResponseModality');
    }

    set ResponseModality(value) {
        this.setComponentValue('ResponseModality', value);
    }

    get ExecutionAndDeliveryTime() {
        return this.getComponent('ExecutionAndDeliveryTime');
    }

    set ExecutionAndDeliveryTime(value) {
        this.setComponentValue('ExecutionAndDeliveryTime', value);
    }

    get ModifyIndicator() {
        return this.getComponent('ModifyIndicator');
    }

    set ModifyIndicator(value) {
        this.setComponentValue('ModifyIndicator', value);
    }

    get SortByField() {
        return this.getComponent('SortByField');
    }

    set SortByField(value) {
        this.setComponentValue('SortByField', value);
    }

    get SegmentGroupInclusion() {
        return this.getComponent('SegmentGroupInclusion');
    }

    set SegmentGroupInclusion(value) {
        this.setComponentValue('SegmentGroupInclusion', value);
    }
}
