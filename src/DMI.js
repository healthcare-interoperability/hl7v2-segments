import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NR } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class DMI extends Segment {
    static components = {
        DiagnosticRelatedGroup: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MajorDiagnosticCategory: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LowerAndUpperTrimPoints: {
            defaultDataType: NR,
            dataTypes: [{ dataType: NR, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AverageLengthOfStay: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RelativeWeight: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'DiagnosticRelatedGroup', 'MajorDiagnosticCategory', 'LowerAndUpperTrimPoints', 'AverageLengthOfStay', 'RelativeWeight'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('DMI');
        this.setValues(values);
    }

    get DiagnosticRelatedGroup() {
        return this.getComponent('DiagnosticRelatedGroup');
    }

    set DiagnosticRelatedGroup(value) {
        this.setComponentValue('DiagnosticRelatedGroup', value);
    }

    get MajorDiagnosticCategory() {
        return this.getComponent('MajorDiagnosticCategory');
    }

    set MajorDiagnosticCategory(value) {
        this.setComponentValue('MajorDiagnosticCategory', value);
    }

    get LowerAndUpperTrimPoints() {
        return this.getComponent('LowerAndUpperTrimPoints');
    }

    set LowerAndUpperTrimPoints(value) {
        this.setComponentValue('LowerAndUpperTrimPoints', value);
    }

    get AverageLengthOfStay() {
        return this.getComponent('AverageLengthOfStay');
    }

    set AverageLengthOfStay(value) {
        this.setComponentValue('AverageLengthOfStay', value);
    }

    get RelativeWeight() {
        return this.getComponent('RelativeWeight');
    }

    set RelativeWeight(value) {
        this.setComponentValue('RelativeWeight', value);
    }
}
