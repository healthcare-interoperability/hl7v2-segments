import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class LCH extends Segment {
    static components = {
        PrimaryKeyValueLch: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryKeyValue: { aliasOf: 'PrimaryKeyValueLch' },
        PrimaryKeyValueLCH: { aliasOf: 'PrimaryKeyValueLch' },
        SegmentActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SegmentUniqueKey: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LocationCharacteristicId: {
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
        LocationCharacteristicID: { aliasOf: 'LocationCharacteristicId' },
        LocationCharacteristicValueLch: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LocationCharacteristicValue: { aliasOf: 'LocationCharacteristicValueLch' },
        LocationCharacteristicValueLCH: { aliasOf: 'LocationCharacteristicValueLch' },
    };

    static componentsByIndex = ['', 'PrimaryKeyValueLch', 'SegmentActionCode', 'SegmentUniqueKey', 'LocationCharacteristicId', 'LocationCharacteristicValueLch'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('LCH');
        this.setValues(values);
    }

    get PrimaryKeyValueLch() {
        return this.getComponent('PrimaryKeyValueLch');
    }

    set PrimaryKeyValueLch(value) {
        this.setComponentValue('PrimaryKeyValueLch', value);
    }

    get PrimaryKeyValue() {
        return this.getComponent('PrimaryKeyValueLch');
    }

    set PrimaryKeyValue(value) {
        this.setComponentValue('PrimaryKeyValueLch', value);
    }

    get PrimaryKeyValueLCH() {
        return this.getComponent('PrimaryKeyValueLch');
    }

    set PrimaryKeyValueLCH(value) {
        this.setComponentValue('PrimaryKeyValueLch', value);
    }

    get SegmentActionCode() {
        return this.getComponent('SegmentActionCode');
    }

    set SegmentActionCode(value) {
        this.setComponentValue('SegmentActionCode', value);
    }

    get SegmentUniqueKey() {
        return this.getComponent('SegmentUniqueKey');
    }

    set SegmentUniqueKey(value) {
        this.setComponentValue('SegmentUniqueKey', value);
    }

    get LocationCharacteristicId() {
        return this.getComponent('LocationCharacteristicId');
    }

    set LocationCharacteristicId(value) {
        this.setComponentValue('LocationCharacteristicId', value);
    }

    get LocationCharacteristicID() {
        return this.getComponent('LocationCharacteristicId');
    }

    set LocationCharacteristicID(value) {
        this.setComponentValue('LocationCharacteristicId', value);
    }

    get LocationCharacteristicValueLch() {
        return this.getComponent('LocationCharacteristicValueLch');
    }

    set LocationCharacteristicValueLch(value) {
        this.setComponentValue('LocationCharacteristicValueLch', value);
    }

    get LocationCharacteristicValue() {
        return this.getComponent('LocationCharacteristicValueLch');
    }

    set LocationCharacteristicValue(value) {
        this.setComponentValue('LocationCharacteristicValueLch', value);
    }

    get LocationCharacteristicValueLCH() {
        return this.getComponent('LocationCharacteristicValueLch');
    }

    set LocationCharacteristicValueLCH(value) {
        this.setComponentValue('LocationCharacteristicValueLch', value);
    }
}
