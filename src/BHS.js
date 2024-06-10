import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { HD } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';

export class BHS extends Segment {
    static components = {
        BatchFieldSeparator: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchEncodingCharacters: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchSendingApplication: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchSendingFacility: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchReceivingApplication: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchReceivingFacility: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchCreationDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchSecurity: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchNameIdType: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchNameIDType: { aliasOf: 'BatchNameIdType' },
        BatchComment: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchControlId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchControlID: { aliasOf: 'BatchControlId' },
        ReferenceBatchControlId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReferenceBatchControlID: { aliasOf: 'ReferenceBatchControlId' },
        BatchSendingNetworkAddress: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BatchReceivingNetworkAddress: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'BatchFieldSeparator',
        'BatchEncodingCharacters',
        'BatchSendingApplication',
        'BatchSendingFacility',
        'BatchReceivingApplication',
        'BatchReceivingFacility',
        'BatchCreationDateTime',
        'BatchSecurity',
        'BatchNameIdType',
        'BatchComment',
        'BatchControlId',
        'ReferenceBatchControlId',
        'BatchSendingNetworkAddress',
        'BatchReceivingNetworkAddress',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('BHS');
        this.setValues(values);
    }

    get BatchFieldSeparator() {
        return this.getComponent('BatchFieldSeparator');
    }

    set BatchFieldSeparator(value) {
        this.setComponentValue('BatchFieldSeparator', value);
    }

    get BatchEncodingCharacters() {
        return this.getComponent('BatchEncodingCharacters');
    }

    set BatchEncodingCharacters(value) {
        this.setComponentValue('BatchEncodingCharacters', value);
    }

    get BatchSendingApplication() {
        return this.getComponent('BatchSendingApplication');
    }

    set BatchSendingApplication(value) {
        this.setComponentValue('BatchSendingApplication', value);
    }

    get BatchSendingFacility() {
        return this.getComponent('BatchSendingFacility');
    }

    set BatchSendingFacility(value) {
        this.setComponentValue('BatchSendingFacility', value);
    }

    get BatchReceivingApplication() {
        return this.getComponent('BatchReceivingApplication');
    }

    set BatchReceivingApplication(value) {
        this.setComponentValue('BatchReceivingApplication', value);
    }

    get BatchReceivingFacility() {
        return this.getComponent('BatchReceivingFacility');
    }

    set BatchReceivingFacility(value) {
        this.setComponentValue('BatchReceivingFacility', value);
    }

    get BatchCreationDateTime() {
        return this.getComponent('BatchCreationDateTime');
    }

    set BatchCreationDateTime(value) {
        this.setComponentValue('BatchCreationDateTime', value);
    }

    get BatchSecurity() {
        return this.getComponent('BatchSecurity');
    }

    set BatchSecurity(value) {
        this.setComponentValue('BatchSecurity', value);
    }

    get BatchNameIdType() {
        return this.getComponent('BatchNameIdType');
    }

    set BatchNameIdType(value) {
        this.setComponentValue('BatchNameIdType', value);
    }

    get BatchNameIDType() {
        return this.getComponent('BatchNameIdType');
    }

    set BatchNameIDType(value) {
        this.setComponentValue('BatchNameIdType', value);
    }

    get BatchComment() {
        return this.getComponent('BatchComment');
    }

    set BatchComment(value) {
        this.setComponentValue('BatchComment', value);
    }

    get BatchControlId() {
        return this.getComponent('BatchControlId');
    }

    set BatchControlId(value) {
        this.setComponentValue('BatchControlId', value);
    }

    get BatchControlID() {
        return this.getComponent('BatchControlId');
    }

    set BatchControlID(value) {
        this.setComponentValue('BatchControlId', value);
    }

    get ReferenceBatchControlId() {
        return this.getComponent('ReferenceBatchControlId');
    }

    set ReferenceBatchControlId(value) {
        this.setComponentValue('ReferenceBatchControlId', value);
    }

    get ReferenceBatchControlID() {
        return this.getComponent('ReferenceBatchControlId');
    }

    set ReferenceBatchControlID(value) {
        this.setComponentValue('ReferenceBatchControlId', value);
    }

    get BatchSendingNetworkAddress() {
        return this.getComponent('BatchSendingNetworkAddress');
    }

    set BatchSendingNetworkAddress(value) {
        this.setComponentValue('BatchSendingNetworkAddress', value);
    }

    get BatchReceivingNetworkAddress() {
        return this.getComponent('BatchReceivingNetworkAddress');
    }

    set BatchReceivingNetworkAddress(value) {
        this.setComponentValue('BatchReceivingNetworkAddress', value);
    }
}
