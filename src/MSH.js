import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { HD } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { MSG } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_MSG } from '@healthcare-interoperability/hl7v2-datatypes';
import { PT } from '@healthcare-interoperability/hl7v2-datatypes';
import { VID } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';

export class MSH extends Segment {
    static components = {
        FieldSeparator: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EncodingCharacters: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SendingApplication: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SendingFacility: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReceivingApplication: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReceivingFacility: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateTimeOfMessage: {
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
        Security: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MessageType: {
            defaultDataType: MSG,
            dataTypes: [
                { dataType: MSG, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_MSG, versions: ['2.3'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MessageControlId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MessageControlID: { aliasOf: 'MessageControlId' },
        ProcessingId: {
            defaultDataType: PT,
            dataTypes: [{ dataType: PT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcessingID: { aliasOf: 'ProcessingId' },
        VersionId: {
            defaultDataType: VID,
            dataTypes: [
                { dataType: VID, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VersionID: { aliasOf: 'VersionId' },
        SequenceNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContinuationPointer: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AcceptAcknowledgmentType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AcceptAcknowledgementType: { aliasOf: 'AcceptAcknowledgmentType' },
        ApplicationAcknowledgmentType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ApplicationAcknowledgementType: { aliasOf: 'ApplicationAcknowledgmentType' },
        CountryCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CharacterSet: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 3,
        },
        PrincipalLanguageOfMessage: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AlternateCharacterSetHandlingScheme: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConformanceStatementID: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.4'] },
                { dataType: EI, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 21,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        MessageProfileIdentifier: { aliasOf: 'ConformanceStatementID' },
        SendingResponsibleOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReceivingResponsibleOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SendingNetworkAddress: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReceivingNetworkAddress: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'FieldSeparator',
        'EncodingCharacters',
        'SendingApplication',
        'SendingFacility',
        'ReceivingApplication',
        'ReceivingFacility',
        'DateTimeOfMessage',
        'Security',
        'MessageType',
        'MessageControlId',
        'ProcessingId',
        'VersionId',
        'SequenceNumber',
        'ContinuationPointer',
        'AcceptAcknowledgmentType',
        'ApplicationAcknowledgmentType',
        'CountryCode',
        'CharacterSet',
        'PrincipalLanguageOfMessage',
        'AlternateCharacterSetHandlingScheme',
        'ConformanceStatementID',
        'SendingResponsibleOrganization',
        'ReceivingResponsibleOrganization',
        'SendingNetworkAddress',
        'ReceivingNetworkAddress',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('MSH');
        this.setValues(values);
    }

    get FieldSeparator() {
        return this.getComponent('FieldSeparator');
    }

    set FieldSeparator(value) {
        this.setComponentValue('FieldSeparator', value);
    }

    get EncodingCharacters() {
        return this.getComponent('EncodingCharacters');
    }

    set EncodingCharacters(value) {
        this.setComponentValue('EncodingCharacters', value);
    }

    get SendingApplication() {
        return this.getComponent('SendingApplication');
    }

    set SendingApplication(value) {
        this.setComponentValue('SendingApplication', value);
    }

    get SendingFacility() {
        return this.getComponent('SendingFacility');
    }

    set SendingFacility(value) {
        this.setComponentValue('SendingFacility', value);
    }

    get ReceivingApplication() {
        return this.getComponent('ReceivingApplication');
    }

    set ReceivingApplication(value) {
        this.setComponentValue('ReceivingApplication', value);
    }

    get ReceivingFacility() {
        return this.getComponent('ReceivingFacility');
    }

    set ReceivingFacility(value) {
        this.setComponentValue('ReceivingFacility', value);
    }

    get DateTimeOfMessage() {
        return this.getComponent('DateTimeOfMessage');
    }

    set DateTimeOfMessage(value) {
        this.setComponentValue('DateTimeOfMessage', value);
    }

    get Security() {
        return this.getComponent('Security');
    }

    set Security(value) {
        this.setComponentValue('Security', value);
    }

    get MessageType() {
        return this.getComponent('MessageType');
    }

    set MessageType(value) {
        this.setComponentValue('MessageType', value);
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

    get ProcessingId() {
        return this.getComponent('ProcessingId');
    }

    set ProcessingId(value) {
        this.setComponentValue('ProcessingId', value);
    }

    get ProcessingID() {
        return this.getComponent('ProcessingId');
    }

    set ProcessingID(value) {
        this.setComponentValue('ProcessingId', value);
    }

    get VersionId() {
        return this.getComponent('VersionId');
    }

    set VersionId(value) {
        this.setComponentValue('VersionId', value);
    }

    get VersionID() {
        return this.getComponent('VersionId');
    }

    set VersionID(value) {
        this.setComponentValue('VersionId', value);
    }

    get SequenceNumber() {
        return this.getComponent('SequenceNumber');
    }

    set SequenceNumber(value) {
        this.setComponentValue('SequenceNumber', value);
    }

    get ContinuationPointer() {
        return this.getComponent('ContinuationPointer');
    }

    set ContinuationPointer(value) {
        this.setComponentValue('ContinuationPointer', value);
    }

    get AcceptAcknowledgmentType() {
        return this.getComponent('AcceptAcknowledgmentType');
    }

    set AcceptAcknowledgmentType(value) {
        this.setComponentValue('AcceptAcknowledgmentType', value);
    }

    get AcceptAcknowledgementType() {
        return this.getComponent('AcceptAcknowledgmentType');
    }

    set AcceptAcknowledgementType(value) {
        this.setComponentValue('AcceptAcknowledgmentType', value);
    }

    get ApplicationAcknowledgmentType() {
        return this.getComponent('ApplicationAcknowledgmentType');
    }

    set ApplicationAcknowledgmentType(value) {
        this.setComponentValue('ApplicationAcknowledgmentType', value);
    }

    get ApplicationAcknowledgementType() {
        return this.getComponent('ApplicationAcknowledgmentType');
    }

    set ApplicationAcknowledgementType(value) {
        this.setComponentValue('ApplicationAcknowledgmentType', value);
    }

    get CountryCode() {
        return this.getComponent('CountryCode');
    }

    set CountryCode(value) {
        this.setComponentValue('CountryCode', value);
    }

    get CharacterSet() {
        return this.getComponent('CharacterSet');
    }

    set CharacterSet(value) {
        this.setComponentValue('CharacterSet', value);
    }

    get PrincipalLanguageOfMessage() {
        return this.getComponent('PrincipalLanguageOfMessage');
    }

    set PrincipalLanguageOfMessage(value) {
        this.setComponentValue('PrincipalLanguageOfMessage', value);
    }

    get AlternateCharacterSetHandlingScheme() {
        return this.getComponent('AlternateCharacterSetHandlingScheme');
    }

    set AlternateCharacterSetHandlingScheme(value) {
        this.setComponentValue('AlternateCharacterSetHandlingScheme', value);
    }

    get ConformanceStatementID() {
        return this.getComponent('ConformanceStatementID');
    }

    set ConformanceStatementID(value) {
        this.setComponentValue('ConformanceStatementID', value);
    }

    get MessageProfileIdentifier() {
        return this.getComponent('ConformanceStatementID');
    }

    set MessageProfileIdentifier(value) {
        this.setComponentValue('ConformanceStatementID', value);
    }

    get SendingResponsibleOrganization() {
        return this.getComponent('SendingResponsibleOrganization');
    }

    set SendingResponsibleOrganization(value) {
        this.setComponentValue('SendingResponsibleOrganization', value);
    }

    get ReceivingResponsibleOrganization() {
        return this.getComponent('ReceivingResponsibleOrganization');
    }

    set ReceivingResponsibleOrganization(value) {
        this.setComponentValue('ReceivingResponsibleOrganization', value);
    }

    get SendingNetworkAddress() {
        return this.getComponent('SendingNetworkAddress');
    }

    set SendingNetworkAddress(value) {
        this.setComponentValue('SendingNetworkAddress', value);
    }

    get ReceivingNetworkAddress() {
        return this.getComponent('ReceivingNetworkAddress');
    }

    set ReceivingNetworkAddress(value) {
        this.setComponentValue('ReceivingNetworkAddress', value);
    }
}
