import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class RGS extends Segment {
    static components = {
        SetIdRgs: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SegmentActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResourceGroupId: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdRgs', 'SegmentActionCode', 'ResourceGroupId'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RGS');
        this.setValues(values);
    }

    get SetIdRgs() {
        return this.getComponent('SetIdRgs');
    }

    set SetIdRgs(value) {
        this.setComponentValue('SetIdRgs', value);
    }

    get SegmentActionCode() {
        return this.getComponent('SegmentActionCode');
    }

    set SegmentActionCode(value) {
        this.setComponentValue('SegmentActionCode', value);
    }

    get ResourceGroupId() {
        return this.getComponent('ResourceGroupId');
    }

    set ResourceGroupId(value) {
        this.setComponentValue('ResourceGroupId', value);
    }
}
