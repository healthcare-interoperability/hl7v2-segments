import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';

export class BLC extends Segment {
    static components = {
        BloodProductCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BloodAmount: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'BloodProductCode', 'BloodAmount'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('BLC');
        this.setValues(values);
    }

    get BloodProductCode() {
        return this.getComponent('BloodProductCode');
    }

    set BloodProductCode(value) {
        this.setComponentValue('BloodProductCode', value);
    }

    get BloodAmount() {
        return this.getComponent('BloodAmount');
    }

    set BloodAmount(value) {
        this.setComponentValue('BloodAmount', value);
    }
}
