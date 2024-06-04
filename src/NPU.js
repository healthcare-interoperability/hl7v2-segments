import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';

export class NPU extends Segment {
    static components = {
        BedLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BedStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'BedLocation', 'BedStatus'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('NPU');
        this.setValues(values);
    }

    get BedLocation() {
        return this.getComponent('BedLocation');
    }

    set BedLocation(value) {
        this.setComponentValue('BedLocation', value);
    }

    get BedStatus() {
        return this.getComponent('BedStatus');
    }

    set BedStatus(value) {
        this.setComponentValue('BedStatus', value);
    }
}
