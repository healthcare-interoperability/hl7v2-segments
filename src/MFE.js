import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { varies } from '@healthcare-interoperability/hl7v2-datatypes';
import { VARIES } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';

export class MFE extends Segment {
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
        EffectiveDateTime: {
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
        PrimaryKeyValueMfe: {
            defaultDataType: varies,
            dataTypes: [
                { dataType: varies, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: VARIES, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PrimaryKeyValue: { aliasOf: 'PrimaryKeyValueMfe' },
        PrimaryKeyValueType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EnteredDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EnteredBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'RecordLevelEventCode', 'MfnControlId', 'EffectiveDateTime', 'PrimaryKeyValueMfe', 'PrimaryKeyValueType', 'EnteredDateTime', 'EnteredBy'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('MFE');
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

    get EffectiveDateTime() {
        return this.getComponent('EffectiveDateTime');
    }

    set EffectiveDateTime(value) {
        this.setComponentValue('EffectiveDateTime', value);
    }

    get PrimaryKeyValueMfe() {
        return this.getComponent('PrimaryKeyValueMfe');
    }

    set PrimaryKeyValueMfe(value) {
        this.setComponentValue('PrimaryKeyValueMfe', value);
    }

    get PrimaryKeyValue() {
        return this.getComponent('PrimaryKeyValueMfe');
    }

    set PrimaryKeyValue(value) {
        this.setComponentValue('PrimaryKeyValueMfe', value);
    }

    get PrimaryKeyValueType() {
        return this.getComponent('PrimaryKeyValueType');
    }

    set PrimaryKeyValueType(value) {
        this.setComponentValue('PrimaryKeyValueType', value);
    }

    get EnteredDateTime() {
        return this.getComponent('EnteredDateTime');
    }

    set EnteredDateTime(value) {
        this.setComponentValue('EnteredDateTime', value);
    }

    get EnteredBy() {
        return this.getComponent('EnteredBy');
    }

    set EnteredBy(value) {
        this.setComponentValue('EnteredBy', value);
    }
}
