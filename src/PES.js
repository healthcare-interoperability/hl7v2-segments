import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { FT } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class PES extends Segment {
    static components = {
        SenderOrganizationName: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        SenderIndividualName: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SenderAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SenderTelephone: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SenderEventIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SenderSequenceNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SenderEventDescription: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SenderComment: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SenderAwareDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventReportDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventReportTimingType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 2,
            minOccurence: 1,
        },
        EventReportSource: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventReportedTo: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SenderOrganizationName',
        'SenderIndividualName',
        'SenderAddress',
        'SenderTelephone',
        'SenderEventIdentifier',
        'SenderSequenceNumber',
        'SenderEventDescription',
        'SenderComment',
        'SenderAwareDateTime',
        'EventReportDate',
        'EventReportTimingType',
        'EventReportSource',
        'EventReportedTo',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PES');
        this.setValues(values);
    }

    get SenderOrganizationName() {
        return this.getComponent('SenderOrganizationName');
    }

    set SenderOrganizationName(value) {
        this.setComponentValue('SenderOrganizationName', value);
    }

    get SenderIndividualName() {
        return this.getComponent('SenderIndividualName');
    }

    set SenderIndividualName(value) {
        this.setComponentValue('SenderIndividualName', value);
    }

    get SenderAddress() {
        return this.getComponent('SenderAddress');
    }

    set SenderAddress(value) {
        this.setComponentValue('SenderAddress', value);
    }

    get SenderTelephone() {
        return this.getComponent('SenderTelephone');
    }

    set SenderTelephone(value) {
        this.setComponentValue('SenderTelephone', value);
    }

    get SenderEventIdentifier() {
        return this.getComponent('SenderEventIdentifier');
    }

    set SenderEventIdentifier(value) {
        this.setComponentValue('SenderEventIdentifier', value);
    }

    get SenderSequenceNumber() {
        return this.getComponent('SenderSequenceNumber');
    }

    set SenderSequenceNumber(value) {
        this.setComponentValue('SenderSequenceNumber', value);
    }

    get SenderEventDescription() {
        return this.getComponent('SenderEventDescription');
    }

    set SenderEventDescription(value) {
        this.setComponentValue('SenderEventDescription', value);
    }

    get SenderComment() {
        return this.getComponent('SenderComment');
    }

    set SenderComment(value) {
        this.setComponentValue('SenderComment', value);
    }

    get SenderAwareDateTime() {
        return this.getComponent('SenderAwareDateTime');
    }

    set SenderAwareDateTime(value) {
        this.setComponentValue('SenderAwareDateTime', value);
    }

    get EventReportDate() {
        return this.getComponent('EventReportDate');
    }

    set EventReportDate(value) {
        this.setComponentValue('EventReportDate', value);
    }

    get EventReportTimingType() {
        return this.getComponent('EventReportTimingType');
    }

    set EventReportTimingType(value) {
        this.setComponentValue('EventReportTimingType', value);
    }

    get EventReportSource() {
        return this.getComponent('EventReportSource');
    }

    set EventReportSource(value) {
        this.setComponentValue('EventReportSource', value);
    }

    get EventReportedTo() {
        return this.getComponent('EventReportedTo');
    }

    set EventReportedTo(value) {
        this.setComponentValue('EventReportedTo', value);
    }
}
