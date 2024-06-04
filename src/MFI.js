import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { HD } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';

export class MFI extends Segment {
    static components = {
        MasterFileIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MasterFileApplicationIdentifier: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        FileLevelEventCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EnteredDateTime: {
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
        EffectiveDateTime: {
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
        ResponseLevelCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'MasterFileIdentifier', 'MasterFileApplicationIdentifier', 'FileLevelEventCode', 'EnteredDateTime', 'EffectiveDateTime', 'ResponseLevelCode'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('MFI');
        this.setValues(values);
    }

    get MasterFileIdentifier() {
        return this.getComponent('MasterFileIdentifier');
    }

    set MasterFileIdentifier(value) {
        this.setComponentValue('MasterFileIdentifier', value);
    }

    get MasterFileApplicationIdentifier() {
        return this.getComponent('MasterFileApplicationIdentifier');
    }

    set MasterFileApplicationIdentifier(value) {
        this.setComponentValue('MasterFileApplicationIdentifier', value);
    }

    get FileLevelEventCode() {
        return this.getComponent('FileLevelEventCode');
    }

    set FileLevelEventCode(value) {
        this.setComponentValue('FileLevelEventCode', value);
    }

    get EnteredDateTime() {
        return this.getComponent('EnteredDateTime');
    }

    set EnteredDateTime(value) {
        this.setComponentValue('EnteredDateTime', value);
    }

    get EffectiveDateTime() {
        return this.getComponent('EffectiveDateTime');
    }

    set EffectiveDateTime(value) {
        this.setComponentValue('EffectiveDateTime', value);
    }

    get ResponseLevelCode() {
        return this.getComponent('ResponseLevelCode');
    }

    set ResponseLevelCode(value) {
        this.setComponentValue('ResponseLevelCode', value);
    }
}
