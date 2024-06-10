import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { HD } from '@healthcare-interoperability/hl7v2-datatypes';

export class EVN extends Segment {
    static components = {
        EventTypeCode: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RecordedDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateTimePlannedEvent: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventReasonCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OperatorId: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        OperatorID: { aliasOf: 'OperatorId' },
        EventOccurred: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventFacility: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'EventTypeCode', 'RecordedDateTime', 'DateTimePlannedEvent', 'EventReasonCode', 'OperatorId', 'EventOccurred', 'EventFacility'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('EVN');
        this.setValues(values);
    }

    get EventTypeCode() {
        return this.getComponent('EventTypeCode');
    }

    set EventTypeCode(value) {
        this.setComponentValue('EventTypeCode', value);
    }

    get RecordedDateTime() {
        return this.getComponent('RecordedDateTime');
    }

    set RecordedDateTime(value) {
        this.setComponentValue('RecordedDateTime', value);
    }

    get DateTimePlannedEvent() {
        return this.getComponent('DateTimePlannedEvent');
    }

    set DateTimePlannedEvent(value) {
        this.setComponentValue('DateTimePlannedEvent', value);
    }

    get EventReasonCode() {
        return this.getComponent('EventReasonCode');
    }

    set EventReasonCode(value) {
        this.setComponentValue('EventReasonCode', value);
    }

    get OperatorId() {
        return this.getComponent('OperatorId');
    }

    set OperatorId(value) {
        this.setComponentValue('OperatorId', value);
    }

    get OperatorID() {
        return this.getComponent('OperatorId');
    }

    set OperatorID(value) {
        this.setComponentValue('OperatorId', value);
    }

    get EventOccurred() {
        return this.getComponent('EventOccurred');
    }

    set EventOccurred(value) {
        this.setComponentValue('EventOccurred', value);
    }

    get EventFacility() {
        return this.getComponent('EventFacility');
    }

    set EventFacility(value) {
        this.setComponentValue('EventFacility', value);
    }
}
