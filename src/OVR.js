import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';

export class OVR extends Segment {
    static components = {
        BusinessRuleOverrideType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BusinessRuleOverrideCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OverrideComments: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OverrideEnteredBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OverrideAuthorizedBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'BusinessRuleOverrideType', 'BusinessRuleOverrideCode', 'OverrideComments', 'OverrideEnteredBy', 'OverrideAuthorizedBy'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('OVR');
        this.setValues(values);
    }

    get BusinessRuleOverrideType() {
        return this.getComponent('BusinessRuleOverrideType');
    }

    set BusinessRuleOverrideType(value) {
        this.setComponentValue('BusinessRuleOverrideType', value);
    }

    get BusinessRuleOverrideCode() {
        return this.getComponent('BusinessRuleOverrideCode');
    }

    set BusinessRuleOverrideCode(value) {
        this.setComponentValue('BusinessRuleOverrideCode', value);
    }

    get OverrideComments() {
        return this.getComponent('OverrideComments');
    }

    set OverrideComments(value) {
        this.setComponentValue('OverrideComments', value);
    }

    get OverrideEnteredBy() {
        return this.getComponent('OverrideEnteredBy');
    }

    set OverrideEnteredBy(value) {
        this.setComponentValue('OverrideEnteredBy', value);
    }

    get OverrideAuthorizedBy() {
        return this.getComponent('OverrideAuthorizedBy');
    }

    set OverrideAuthorizedBy(value) {
        this.setComponentValue('OverrideAuthorizedBy', value);
    }
}
