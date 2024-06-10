import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';

export class MSA extends Segment {
    static components = {
        AcknowledgmentCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AcknowledgementCode: { aliasOf: 'AcknowledgmentCode' },
        MessageControlId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MessageControlID: { aliasOf: 'MessageControlId' },
        TextMessage: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedSequenceNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DelayedAcknowledgmentType: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DelayedAcknowledgementType: { aliasOf: 'DelayedAcknowledgmentType' },
        ErrorCondition: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MessageWaitingNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MessageWaitingPriority: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'AcknowledgmentCode',
        'MessageControlId',
        'TextMessage',
        'ExpectedSequenceNumber',
        'DelayedAcknowledgmentType',
        'ErrorCondition',
        'MessageWaitingNumber',
        'MessageWaitingPriority',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('MSA');
        this.setValues(values);
    }

    get AcknowledgmentCode() {
        return this.getComponent('AcknowledgmentCode');
    }

    set AcknowledgmentCode(value) {
        this.setComponentValue('AcknowledgmentCode', value);
    }

    get AcknowledgementCode() {
        return this.getComponent('AcknowledgmentCode');
    }

    set AcknowledgementCode(value) {
        this.setComponentValue('AcknowledgmentCode', value);
    }

    get MessageControlId() {
        return this.getComponent('MessageControlId');
    }

    set MessageControlId(value) {
        this.setComponentValue('MessageControlId', value);
    }

    get MessageControlID() {
        return this.getComponent('MessageControlId');
    }

    set MessageControlID(value) {
        this.setComponentValue('MessageControlId', value);
    }

    get TextMessage() {
        return this.getComponent('TextMessage');
    }

    set TextMessage(value) {
        this.setComponentValue('TextMessage', value);
    }

    get ExpectedSequenceNumber() {
        return this.getComponent('ExpectedSequenceNumber');
    }

    set ExpectedSequenceNumber(value) {
        this.setComponentValue('ExpectedSequenceNumber', value);
    }

    get DelayedAcknowledgmentType() {
        return this.getComponent('DelayedAcknowledgmentType');
    }

    set DelayedAcknowledgmentType(value) {
        this.setComponentValue('DelayedAcknowledgmentType', value);
    }

    get DelayedAcknowledgementType() {
        return this.getComponent('DelayedAcknowledgmentType');
    }

    set DelayedAcknowledgementType(value) {
        this.setComponentValue('DelayedAcknowledgmentType', value);
    }

    get ErrorCondition() {
        return this.getComponent('ErrorCondition');
    }

    set ErrorCondition(value) {
        this.setComponentValue('ErrorCondition', value);
    }

    get MessageWaitingNumber() {
        return this.getComponent('MessageWaitingNumber');
    }

    set MessageWaitingNumber(value) {
        this.setComponentValue('MessageWaitingNumber', value);
    }

    get MessageWaitingPriority() {
        return this.getComponent('MessageWaitingPriority');
    }

    set MessageWaitingPriority(value) {
        this.setComponentValue('MessageWaitingPriority', value);
    }
}
