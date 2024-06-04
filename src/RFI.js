import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class RFI extends Segment {
    static components = {
        RequestDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResponseDueDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientConsent: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateAdditionalInformationWasSubmitted: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'RequestDate', 'ResponseDueDate', 'PatientConsent', 'DateAdditionalInformationWasSubmitted'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RFI');
        this.setValues(values);
    }

    get RequestDate() {
        return this.getComponent('RequestDate');
    }

    set RequestDate(value) {
        this.setComponentValue('RequestDate', value);
    }

    get ResponseDueDate() {
        return this.getComponent('ResponseDueDate');
    }

    set ResponseDueDate(value) {
        this.setComponentValue('ResponseDueDate', value);
    }

    get PatientConsent() {
        return this.getComponent('PatientConsent');
    }

    set PatientConsent(value) {
        this.setComponentValue('PatientConsent', value);
    }

    get DateAdditionalInformationWasSubmitted() {
        return this.getComponent('DateAdditionalInformationWasSubmitted');
    }

    set DateAdditionalInformationWasSubmitted(value) {
        this.setComponentValue('DateAdditionalInformationWasSubmitted', value);
    }
}
