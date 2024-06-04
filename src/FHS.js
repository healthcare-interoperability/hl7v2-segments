import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { HD } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';

export class FHS extends Segment {
    static components = {
        FileFieldSeparator: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FileEncodingCharacters: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FileSendingApplication: {
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
        FileSendingFacility: {
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
        FileReceivingApplication: {
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
        FileReceivingFacility: {
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
        FileCreationDateTime: {
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
        FileSecurity: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FileNameId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FileNameID: { aliasOf: 'FileNameId' },
        FileHeaderComment: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FileControlId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FileControlID: { aliasOf: 'FileControlId' },
        ReferenceFileControlId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReferenceFileControlID: { aliasOf: 'ReferenceFileControlId' },
        FileSendingNetworkAddress: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FileReceivingNetworkAddress: {
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
        'FileFieldSeparator',
        'FileEncodingCharacters',
        'FileSendingApplication',
        'FileSendingFacility',
        'FileReceivingApplication',
        'FileReceivingFacility',
        'FileCreationDateTime',
        'FileSecurity',
        'FileNameId',
        'FileHeaderComment',
        'FileControlId',
        'ReferenceFileControlId',
        'FileSendingNetworkAddress',
        'FileReceivingNetworkAddress',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('FHS');
        this.setValues(values);
    }

    get FileFieldSeparator() {
        return this.getComponent('FileFieldSeparator');
    }

    set FileFieldSeparator(value) {
        this.setComponentValue('FileFieldSeparator', value);
    }

    get FileEncodingCharacters() {
        return this.getComponent('FileEncodingCharacters');
    }

    set FileEncodingCharacters(value) {
        this.setComponentValue('FileEncodingCharacters', value);
    }

    get FileSendingApplication() {
        return this.getComponent('FileSendingApplication');
    }

    set FileSendingApplication(value) {
        this.setComponentValue('FileSendingApplication', value);
    }

    get FileSendingFacility() {
        return this.getComponent('FileSendingFacility');
    }

    set FileSendingFacility(value) {
        this.setComponentValue('FileSendingFacility', value);
    }

    get FileReceivingApplication() {
        return this.getComponent('FileReceivingApplication');
    }

    set FileReceivingApplication(value) {
        this.setComponentValue('FileReceivingApplication', value);
    }

    get FileReceivingFacility() {
        return this.getComponent('FileReceivingFacility');
    }

    set FileReceivingFacility(value) {
        this.setComponentValue('FileReceivingFacility', value);
    }

    get FileCreationDateTime() {
        return this.getComponent('FileCreationDateTime');
    }

    set FileCreationDateTime(value) {
        this.setComponentValue('FileCreationDateTime', value);
    }

    get FileSecurity() {
        return this.getComponent('FileSecurity');
    }

    set FileSecurity(value) {
        this.setComponentValue('FileSecurity', value);
    }

    get FileNameId() {
        return this.getComponent('FileNameId');
    }

    set FileNameId(value) {
        this.setComponentValue('FileNameId', value);
    }

    get FileNameID() {
        return this.getComponent('FileNameId');
    }

    set FileNameID(value) {
        this.setComponentValue('FileNameId', value);
    }

    get FileHeaderComment() {
        return this.getComponent('FileHeaderComment');
    }

    set FileHeaderComment(value) {
        this.setComponentValue('FileHeaderComment', value);
    }

    get FileControlId() {
        return this.getComponent('FileControlId');
    }

    set FileControlId(value) {
        this.setComponentValue('FileControlId', value);
    }

    get FileControlID() {
        return this.getComponent('FileControlId');
    }

    set FileControlID(value) {
        this.setComponentValue('FileControlId', value);
    }

    get ReferenceFileControlId() {
        return this.getComponent('ReferenceFileControlId');
    }

    set ReferenceFileControlId(value) {
        this.setComponentValue('ReferenceFileControlId', value);
    }

    get ReferenceFileControlID() {
        return this.getComponent('ReferenceFileControlId');
    }

    set ReferenceFileControlID(value) {
        this.setComponentValue('ReferenceFileControlId', value);
    }

    get FileSendingNetworkAddress() {
        return this.getComponent('FileSendingNetworkAddress');
    }

    set FileSendingNetworkAddress(value) {
        this.setComponentValue('FileSendingNetworkAddress', value);
    }

    get FileReceivingNetworkAddress() {
        return this.getComponent('FileReceivingNetworkAddress');
    }

    set FileReceivingNetworkAddress(value) {
        this.setComponentValue('FileReceivingNetworkAddress', value);
    }
}
