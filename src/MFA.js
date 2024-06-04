import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { varies } from '@healthcare-interoperability/hl7v2-datatypes';
import { VARIES } from '@healthcare-interoperability/hl7v2-datatypes';

export class MFA extends Segment {
    static components = {
        RecordLevelEventCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MfnControlId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventCompletionDateTime: {
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
        MfnRecordLevelErrorReturn: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ErrorReturnCodeAndOrText: { aliasOf: 'MfnRecordLevelErrorReturn' },
        PrimaryKeyValueMfa: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: varies, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4'] },
                { dataType: VARIES, versions: ['2.5', '2.5.1', '2.6'] },
            ],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PrimaryKeyValue: { aliasOf: 'PrimaryKeyValueMfa' },
        PrimaryKeyValueTypeMfa: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'RecordLevelEventCode', 'MfnControlId', 'EventCompletionDateTime', 'MfnRecordLevelErrorReturn', 'PrimaryKeyValueMfa', 'PrimaryKeyValueTypeMfa'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('MFA');
        this.setValues(values);
    }

    get RecordLevelEventCode() {
        return this.getComponent('RecordLevelEventCode');
    }

    set RecordLevelEventCode(value) {
        this.setComponentValue('RecordLevelEventCode', value);
    }

    get MfnControlId() {
        return this.getComponent('MfnControlId');
    }

    set MfnControlId(value) {
        this.setComponentValue('MfnControlId', value);
    }

    get EventCompletionDateTime() {
        return this.getComponent('EventCompletionDateTime');
    }

    set EventCompletionDateTime(value) {
        this.setComponentValue('EventCompletionDateTime', value);
    }

    get MfnRecordLevelErrorReturn() {
        return this.getComponent('MfnRecordLevelErrorReturn');
    }

    set MfnRecordLevelErrorReturn(value) {
        this.setComponentValue('MfnRecordLevelErrorReturn', value);
    }

    get ErrorReturnCodeAndOrText() {
        return this.getComponent('MfnRecordLevelErrorReturn');
    }

    set ErrorReturnCodeAndOrText(value) {
        this.setComponentValue('MfnRecordLevelErrorReturn', value);
    }

    get PrimaryKeyValueMfa() {
        return this.getComponent('PrimaryKeyValueMfa');
    }

    set PrimaryKeyValueMfa(value) {
        this.setComponentValue('PrimaryKeyValueMfa', value);
    }

    get PrimaryKeyValue() {
        return this.getComponent('PrimaryKeyValueMfa');
    }

    set PrimaryKeyValue(value) {
        this.setComponentValue('PrimaryKeyValueMfa', value);
    }

    get PrimaryKeyValueTypeMfa() {
        return this.getComponent('PrimaryKeyValueTypeMfa');
    }

    set PrimaryKeyValueTypeMfa(value) {
        this.setComponentValue('PrimaryKeyValueTypeMfa', value);
    }
}
