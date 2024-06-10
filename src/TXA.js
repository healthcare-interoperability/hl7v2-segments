import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { PPN } from '@healthcare-interoperability/hl7v2-datatypes';

export class TXA extends Segment {
    static components = {
        SetIdTxa: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDTXA: { aliasOf: 'SetIdTxa' },
        DocumentType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DocumentContentPresentation: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActivityDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryActivityProviderCodeName: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        OriginationDateTime: {
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
        TranscriptionDateTime: {
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
        EditDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OriginatorCodeName: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        AssignedDocumentAuthenticator: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        TranscriptionistCodeName: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        UniqueDocumentNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentDocumentNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlacerOrderNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        FillerOrderNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        UniqueDocumentFileName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DocumentCompletionStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DocumentConfidentialityStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DocumentAvailabilityStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DocumentStorageStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DocumentChangeReason: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AuthenticationPersonTimeStampSet: {
            defaultDataType: PPN,
            dataTypes: [{ dataType: PPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AuthenticationPersonTimeStamp: { aliasOf: 'AuthenticationPersonTimeStampSet' },
        DistributedCopiesCodeAndNameOfRecipientS: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DistributedCopies: { aliasOf: 'DistributedCopiesCodeAndNameOfRecipientS' },
        DistributedCopiesCodeAndNameOfRecipients: { aliasOf: 'DistributedCopiesCodeAndNameOfRecipientS' },
        DistributedCopiesCodeAndNameOfRecipientsS: { aliasOf: 'DistributedCopiesCodeAndNameOfRecipientS' },
        FolderAssignment: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 24,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DocumentTitle: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 25,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AgreedDueDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdTxa',
        'DocumentType',
        'DocumentContentPresentation',
        'ActivityDateTime',
        'PrimaryActivityProviderCodeName',
        'OriginationDateTime',
        'TranscriptionDateTime',
        'EditDateTime',
        'OriginatorCodeName',
        'AssignedDocumentAuthenticator',
        'TranscriptionistCodeName',
        'UniqueDocumentNumber',
        'ParentDocumentNumber',
        'PlacerOrderNumber',
        'FillerOrderNumber',
        'UniqueDocumentFileName',
        'DocumentCompletionStatus',
        'DocumentConfidentialityStatus',
        'DocumentAvailabilityStatus',
        'DocumentStorageStatus',
        'DocumentChangeReason',
        'AuthenticationPersonTimeStampSet',
        'DistributedCopiesCodeAndNameOfRecipientS',
        'FolderAssignment',
        'DocumentTitle',
        'AgreedDueDateTime',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('TXA');
        this.setValues(values);
    }

    get SetIdTxa() {
        return this.getComponent('SetIdTxa');
    }

    set SetIdTxa(value) {
        this.setComponentValue('SetIdTxa', value);
    }

    get SetIDTXA() {
        return this.getComponent('SetIdTxa');
    }

    set SetIDTXA(value) {
        this.setComponentValue('SetIdTxa', value);
    }

    get DocumentType() {
        return this.getComponent('DocumentType');
    }

    set DocumentType(value) {
        this.setComponentValue('DocumentType', value);
    }

    get DocumentContentPresentation() {
        return this.getComponent('DocumentContentPresentation');
    }

    set DocumentContentPresentation(value) {
        this.setComponentValue('DocumentContentPresentation', value);
    }

    get ActivityDateTime() {
        return this.getComponent('ActivityDateTime');
    }

    set ActivityDateTime(value) {
        this.setComponentValue('ActivityDateTime', value);
    }

    get PrimaryActivityProviderCodeName() {
        return this.getComponent('PrimaryActivityProviderCodeName');
    }

    set PrimaryActivityProviderCodeName(value) {
        this.setComponentValue('PrimaryActivityProviderCodeName', value);
    }

    get OriginationDateTime() {
        return this.getComponent('OriginationDateTime');
    }

    set OriginationDateTime(value) {
        this.setComponentValue('OriginationDateTime', value);
    }

    get TranscriptionDateTime() {
        return this.getComponent('TranscriptionDateTime');
    }

    set TranscriptionDateTime(value) {
        this.setComponentValue('TranscriptionDateTime', value);
    }

    get EditDateTime() {
        return this.getComponent('EditDateTime');
    }

    set EditDateTime(value) {
        this.setComponentValue('EditDateTime', value);
    }

    get OriginatorCodeName() {
        return this.getComponent('OriginatorCodeName');
    }

    set OriginatorCodeName(value) {
        this.setComponentValue('OriginatorCodeName', value);
    }

    get AssignedDocumentAuthenticator() {
        return this.getComponent('AssignedDocumentAuthenticator');
    }

    set AssignedDocumentAuthenticator(value) {
        this.setComponentValue('AssignedDocumentAuthenticator', value);
    }

    get TranscriptionistCodeName() {
        return this.getComponent('TranscriptionistCodeName');
    }

    set TranscriptionistCodeName(value) {
        this.setComponentValue('TranscriptionistCodeName', value);
    }

    get UniqueDocumentNumber() {
        return this.getComponent('UniqueDocumentNumber');
    }

    set UniqueDocumentNumber(value) {
        this.setComponentValue('UniqueDocumentNumber', value);
    }

    get ParentDocumentNumber() {
        return this.getComponent('ParentDocumentNumber');
    }

    set ParentDocumentNumber(value) {
        this.setComponentValue('ParentDocumentNumber', value);
    }

    get PlacerOrderNumber() {
        return this.getComponent('PlacerOrderNumber');
    }

    set PlacerOrderNumber(value) {
        this.setComponentValue('PlacerOrderNumber', value);
    }

    get FillerOrderNumber() {
        return this.getComponent('FillerOrderNumber');
    }

    set FillerOrderNumber(value) {
        this.setComponentValue('FillerOrderNumber', value);
    }

    get UniqueDocumentFileName() {
        return this.getComponent('UniqueDocumentFileName');
    }

    set UniqueDocumentFileName(value) {
        this.setComponentValue('UniqueDocumentFileName', value);
    }

    get DocumentCompletionStatus() {
        return this.getComponent('DocumentCompletionStatus');
    }

    set DocumentCompletionStatus(value) {
        this.setComponentValue('DocumentCompletionStatus', value);
    }

    get DocumentConfidentialityStatus() {
        return this.getComponent('DocumentConfidentialityStatus');
    }

    set DocumentConfidentialityStatus(value) {
        this.setComponentValue('DocumentConfidentialityStatus', value);
    }

    get DocumentAvailabilityStatus() {
        return this.getComponent('DocumentAvailabilityStatus');
    }

    set DocumentAvailabilityStatus(value) {
        this.setComponentValue('DocumentAvailabilityStatus', value);
    }

    get DocumentStorageStatus() {
        return this.getComponent('DocumentStorageStatus');
    }

    set DocumentStorageStatus(value) {
        this.setComponentValue('DocumentStorageStatus', value);
    }

    get DocumentChangeReason() {
        return this.getComponent('DocumentChangeReason');
    }

    set DocumentChangeReason(value) {
        this.setComponentValue('DocumentChangeReason', value);
    }

    get AuthenticationPersonTimeStampSet() {
        return this.getComponent('AuthenticationPersonTimeStampSet');
    }

    set AuthenticationPersonTimeStampSet(value) {
        this.setComponentValue('AuthenticationPersonTimeStampSet', value);
    }

    get AuthenticationPersonTimeStamp() {
        return this.getComponent('AuthenticationPersonTimeStampSet');
    }

    set AuthenticationPersonTimeStamp(value) {
        this.setComponentValue('AuthenticationPersonTimeStampSet', value);
    }

    get DistributedCopiesCodeAndNameOfRecipientS() {
        return this.getComponent('DistributedCopiesCodeAndNameOfRecipientS');
    }

    set DistributedCopiesCodeAndNameOfRecipientS(value) {
        this.setComponentValue('DistributedCopiesCodeAndNameOfRecipientS', value);
    }

    get DistributedCopies() {
        return this.getComponent('DistributedCopiesCodeAndNameOfRecipientS');
    }

    set DistributedCopies(value) {
        this.setComponentValue('DistributedCopiesCodeAndNameOfRecipientS', value);
    }

    get DistributedCopiesCodeAndNameOfRecipients() {
        return this.getComponent('DistributedCopiesCodeAndNameOfRecipientS');
    }

    set DistributedCopiesCodeAndNameOfRecipients(value) {
        this.setComponentValue('DistributedCopiesCodeAndNameOfRecipientS', value);
    }

    get DistributedCopiesCodeAndNameOfRecipientsS() {
        return this.getComponent('DistributedCopiesCodeAndNameOfRecipientS');
    }

    set DistributedCopiesCodeAndNameOfRecipientsS(value) {
        this.setComponentValue('DistributedCopiesCodeAndNameOfRecipientS', value);
    }

    get FolderAssignment() {
        return this.getComponent('FolderAssignment');
    }

    set FolderAssignment(value) {
        this.setComponentValue('FolderAssignment', value);
    }

    get DocumentTitle() {
        return this.getComponent('DocumentTitle');
    }

    set DocumentTitle(value) {
        this.setComponentValue('DocumentTitle', value);
    }

    get AgreedDueDateTime() {
        return this.getComponent('AgreedDueDateTime');
    }

    set AgreedDueDateTime(value) {
        this.setComponentValue('AgreedDueDateTime', value);
    }
}
