import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';

export class STZ extends Segment {
    static components = {
        SterilizationType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SterilizationCycle: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MaintenanceCycle: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MaintenanceType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SterilizationType', 'SterilizationCycle', 'MaintenanceCycle', 'MaintenanceType'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('STZ');
        this.setValues(values);
    }

    get SterilizationType() {
        return this.getComponent('SterilizationType');
    }

    set SterilizationType(value) {
        this.setComponentValue('SterilizationType', value);
    }

    get SterilizationCycle() {
        return this.getComponent('SterilizationCycle');
    }

    set SterilizationCycle(value) {
        this.setComponentValue('SterilizationCycle', value);
    }

    get MaintenanceCycle() {
        return this.getComponent('MaintenanceCycle');
    }

    set MaintenanceCycle(value) {
        this.setComponentValue('MaintenanceCycle', value);
    }

    get MaintenanceType() {
        return this.getComponent('MaintenanceType');
    }

    set MaintenanceType(value) {
        this.setComponentValue('MaintenanceType', value);
    }
}
