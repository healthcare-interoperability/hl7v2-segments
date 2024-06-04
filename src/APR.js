import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SCV } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class APR extends Segment {
    static components = {
        TimeSelectionCriteria: {
            defaultDataType: SCV,
            dataTypes: [{ dataType: SCV, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ResourceSelectionCriteria: {
            defaultDataType: SCV,
            dataTypes: [{ dataType: SCV, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        LocationSelectionCriteria: {
            defaultDataType: SCV,
            dataTypes: [{ dataType: SCV, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SlotSpacingCriteria: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillerOverrideCriteria: {
            defaultDataType: SCV,
            dataTypes: [{ dataType: SCV, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'TimeSelectionCriteria', 'ResourceSelectionCriteria', 'LocationSelectionCriteria', 'SlotSpacingCriteria', 'FillerOverrideCriteria'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('APR');
        this.setValues(values);
    }

    get TimeSelectionCriteria() {
        return this.getComponent('TimeSelectionCriteria');
    }

    set TimeSelectionCriteria(value) {
        this.setComponentValue('TimeSelectionCriteria', value);
    }

    get ResourceSelectionCriteria() {
        return this.getComponent('ResourceSelectionCriteria');
    }

    set ResourceSelectionCriteria(value) {
        this.setComponentValue('ResourceSelectionCriteria', value);
    }

    get LocationSelectionCriteria() {
        return this.getComponent('LocationSelectionCriteria');
    }

    set LocationSelectionCriteria(value) {
        this.setComponentValue('LocationSelectionCriteria', value);
    }

    get SlotSpacingCriteria() {
        return this.getComponent('SlotSpacingCriteria');
    }

    set SlotSpacingCriteria(value) {
        this.setComponentValue('SlotSpacingCriteria', value);
    }

    get FillerOverrideCriteria() {
        return this.getComponent('FillerOverrideCriteria');
    }

    set FillerOverrideCriteria(value) {
        this.setComponentValue('FillerOverrideCriteria', value);
    }
}
