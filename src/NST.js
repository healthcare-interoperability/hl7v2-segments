import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class NST extends Segment {
    static components = {
        StatisticsAvailable: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SourceIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SourceType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatisticsStart: {
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
        StatisticsEnd: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReceiveCharacterCount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SendCharacterCount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MessagesReceived: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MessagesSent: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChecksumErrorsReceived: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LengthErrorsReceived: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OtherErrorsReceived: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConnectTimeouts: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReceiveTimeouts: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ApplicationControlLevelErrors: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NetworkErrors: { aliasOf: 'ApplicationControlLevelErrors' },
    };

    static componentsByIndex = [
        '',
        'StatisticsAvailable',
        'SourceIdentifier',
        'SourceType',
        'StatisticsStart',
        'StatisticsEnd',
        'ReceiveCharacterCount',
        'SendCharacterCount',
        'MessagesReceived',
        'MessagesSent',
        'ChecksumErrorsReceived',
        'LengthErrorsReceived',
        'OtherErrorsReceived',
        'ConnectTimeouts',
        'ReceiveTimeouts',
        'ApplicationControlLevelErrors',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('NST');
        this.setValues(values);
    }

    get StatisticsAvailable() {
        return this.getComponent('StatisticsAvailable');
    }

    set StatisticsAvailable(value) {
        this.setComponentValue('StatisticsAvailable', value);
    }

    get SourceIdentifier() {
        return this.getComponent('SourceIdentifier');
    }

    set SourceIdentifier(value) {
        this.setComponentValue('SourceIdentifier', value);
    }

    get SourceType() {
        return this.getComponent('SourceType');
    }

    set SourceType(value) {
        this.setComponentValue('SourceType', value);
    }

    get StatisticsStart() {
        return this.getComponent('StatisticsStart');
    }

    set StatisticsStart(value) {
        this.setComponentValue('StatisticsStart', value);
    }

    get StatisticsEnd() {
        return this.getComponent('StatisticsEnd');
    }

    set StatisticsEnd(value) {
        this.setComponentValue('StatisticsEnd', value);
    }

    get ReceiveCharacterCount() {
        return this.getComponent('ReceiveCharacterCount');
    }

    set ReceiveCharacterCount(value) {
        this.setComponentValue('ReceiveCharacterCount', value);
    }

    get SendCharacterCount() {
        return this.getComponent('SendCharacterCount');
    }

    set SendCharacterCount(value) {
        this.setComponentValue('SendCharacterCount', value);
    }

    get MessagesReceived() {
        return this.getComponent('MessagesReceived');
    }

    set MessagesReceived(value) {
        this.setComponentValue('MessagesReceived', value);
    }

    get MessagesSent() {
        return this.getComponent('MessagesSent');
    }

    set MessagesSent(value) {
        this.setComponentValue('MessagesSent', value);
    }

    get ChecksumErrorsReceived() {
        return this.getComponent('ChecksumErrorsReceived');
    }

    set ChecksumErrorsReceived(value) {
        this.setComponentValue('ChecksumErrorsReceived', value);
    }

    get LengthErrorsReceived() {
        return this.getComponent('LengthErrorsReceived');
    }

    set LengthErrorsReceived(value) {
        this.setComponentValue('LengthErrorsReceived', value);
    }

    get OtherErrorsReceived() {
        return this.getComponent('OtherErrorsReceived');
    }

    set OtherErrorsReceived(value) {
        this.setComponentValue('OtherErrorsReceived', value);
    }

    get ConnectTimeouts() {
        return this.getComponent('ConnectTimeouts');
    }

    set ConnectTimeouts(value) {
        this.setComponentValue('ConnectTimeouts', value);
    }

    get ReceiveTimeouts() {
        return this.getComponent('ReceiveTimeouts');
    }

    set ReceiveTimeouts(value) {
        this.setComponentValue('ReceiveTimeouts', value);
    }

    get ApplicationControlLevelErrors() {
        return this.getComponent('ApplicationControlLevelErrors');
    }

    set ApplicationControlLevelErrors(value) {
        this.setComponentValue('ApplicationControlLevelErrors', value);
    }

    get NetworkErrors() {
        return this.getComponent('ApplicationControlLevelErrors');
    }

    set NetworkErrors(value) {
        this.setComponentValue('ApplicationControlLevelErrors', value);
    }
}
