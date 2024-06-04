import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';

export class CDO extends Segment {
    static components = {
        SetIdCdo: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CumulativeDosageLimit: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CumulativeDosageLimitTimeInterval: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdCdo', 'ActionCode', 'CumulativeDosageLimit', 'CumulativeDosageLimitTimeInterval'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CDO');
        this.setValues(values);
    }

    get SetIdCdo() {
        return this.getComponent('SetIdCdo');
    }

    set SetIdCdo(value) {
        this.setComponentValue('SetIdCdo', value);
    }

    get ActionCode() {
        return this.getComponent('ActionCode');
    }

    set ActionCode(value) {
        this.setComponentValue('ActionCode', value);
    }

    get CumulativeDosageLimit() {
        return this.getComponent('CumulativeDosageLimit');
    }

    set CumulativeDosageLimit(value) {
        this.setComponentValue('CumulativeDosageLimit', value);
    }

    get CumulativeDosageLimitTimeInterval() {
        return this.getComponent('CumulativeDosageLimitTimeInterval');
    }

    set CumulativeDosageLimitTimeInterval(value) {
        this.setComponentValue('CumulativeDosageLimitTimeInterval', value);
    }
}
