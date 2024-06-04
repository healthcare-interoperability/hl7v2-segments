import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DR } from '@healthcare-interoperability/hl7v2-datatypes';

export class ARV extends Segment {
    static components = {
        SetId: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetID: { aliasOf: 'SetId' },
        AccessRestrictionActionCode: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccessRestrictionValue: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccessRestrictionReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecialAccessRestrictionInstructions: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AccessRestrictionDateRange: {
            defaultDataType: DR,
            dataTypes: [{ dataType: DR, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetId', 'AccessRestrictionActionCode', 'AccessRestrictionValue', 'AccessRestrictionReason', 'SpecialAccessRestrictionInstructions', 'AccessRestrictionDateRange'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ARV');
        this.setValues(values);
    }

    get SetId() {
        return this.getComponent('SetId');
    }

    set SetId(value) {
        this.setComponentValue('SetId', value);
    }

    get SetID() {
        return this.getComponent('SetId');
    }

    set SetID(value) {
        this.setComponentValue('SetId', value);
    }

    get AccessRestrictionActionCode() {
        return this.getComponent('AccessRestrictionActionCode');
    }

    set AccessRestrictionActionCode(value) {
        this.setComponentValue('AccessRestrictionActionCode', value);
    }

    get AccessRestrictionValue() {
        return this.getComponent('AccessRestrictionValue');
    }

    set AccessRestrictionValue(value) {
        this.setComponentValue('AccessRestrictionValue', value);
    }

    get AccessRestrictionReason() {
        return this.getComponent('AccessRestrictionReason');
    }

    set AccessRestrictionReason(value) {
        this.setComponentValue('AccessRestrictionReason', value);
    }

    get SpecialAccessRestrictionInstructions() {
        return this.getComponent('SpecialAccessRestrictionInstructions');
    }

    set SpecialAccessRestrictionInstructions(value) {
        this.setComponentValue('SpecialAccessRestrictionInstructions', value);
    }

    get AccessRestrictionDateRange() {
        return this.getComponent('AccessRestrictionDateRange');
    }

    set AccessRestrictionDateRange(value) {
        this.setComponentValue('AccessRestrictionDateRange', value);
    }
}
