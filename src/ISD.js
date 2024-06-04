import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class ISD extends Segment {
    static components = {
        ReferenceInteractionNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReferenceInteractionNumberUniqueIdentifier: { aliasOf: 'ReferenceInteractionNumber' },
        InteractionTypeIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InteractionActiveState: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'ReferenceInteractionNumber', 'InteractionTypeIdentifier', 'InteractionActiveState'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ISD');
        this.setValues(values);
    }

    get ReferenceInteractionNumber() {
        return this.getComponent('ReferenceInteractionNumber');
    }

    set ReferenceInteractionNumber(value) {
        this.setComponentValue('ReferenceInteractionNumber', value);
    }

    get ReferenceInteractionNumberUniqueIdentifier() {
        return this.getComponent('ReferenceInteractionNumber');
    }

    set ReferenceInteractionNumberUniqueIdentifier(value) {
        this.setComponentValue('ReferenceInteractionNumber', value);
    }

    get InteractionTypeIdentifier() {
        return this.getComponent('InteractionTypeIdentifier');
    }

    set InteractionTypeIdentifier(value) {
        this.setComponentValue('InteractionTypeIdentifier', value);
    }

    get InteractionActiveState() {
        return this.getComponent('InteractionActiveState');
    }

    set InteractionActiveState(value) {
        this.setComponentValue('InteractionActiveState', value);
    }
}
