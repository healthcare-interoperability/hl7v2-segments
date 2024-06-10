import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';

export class PTH extends Segment {
    static components = {
        ActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PathwayId: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PathwayID: { aliasOf: 'PathwayId' },
        PathwayInstanceId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PathwayInstanceID: { aliasOf: 'PathwayInstanceId' },
        PathwayEstablishedDateTime: {
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
        PathwayLifeCycleStatus: {
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
        PathwayLifecycleStatus: { aliasOf: 'PathwayLifeCycleStatus' },
        ChangePathwayLifeCycleStatusDateTime: {
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
        ChangePathwayLifecycleStatusDateTime: { aliasOf: 'ChangePathwayLifeCycleStatusDateTime' },
        MoodCode: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'ActionCode', 'PathwayId', 'PathwayInstanceId', 'PathwayEstablishedDateTime', 'PathwayLifeCycleStatus', 'ChangePathwayLifeCycleStatusDateTime', 'MoodCode'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PTH');
        this.setValues(values);
    }

    get ActionCode() {
        return this.getComponent('ActionCode');
    }

    set ActionCode(value) {
        this.setComponentValue('ActionCode', value);
    }

    get PathwayId() {
        return this.getComponent('PathwayId');
    }

    set PathwayId(value) {
        this.setComponentValue('PathwayId', value);
    }

    get PathwayID() {
        return this.getComponent('PathwayId');
    }

    set PathwayID(value) {
        this.setComponentValue('PathwayId', value);
    }

    get PathwayInstanceId() {
        return this.getComponent('PathwayInstanceId');
    }

    set PathwayInstanceId(value) {
        this.setComponentValue('PathwayInstanceId', value);
    }

    get PathwayInstanceID() {
        return this.getComponent('PathwayInstanceId');
    }

    set PathwayInstanceID(value) {
        this.setComponentValue('PathwayInstanceId', value);
    }

    get PathwayEstablishedDateTime() {
        return this.getComponent('PathwayEstablishedDateTime');
    }

    set PathwayEstablishedDateTime(value) {
        this.setComponentValue('PathwayEstablishedDateTime', value);
    }

    get PathwayLifeCycleStatus() {
        return this.getComponent('PathwayLifeCycleStatus');
    }

    set PathwayLifeCycleStatus(value) {
        this.setComponentValue('PathwayLifeCycleStatus', value);
    }

    get PathwayLifecycleStatus() {
        return this.getComponent('PathwayLifeCycleStatus');
    }

    set PathwayLifecycleStatus(value) {
        this.setComponentValue('PathwayLifeCycleStatus', value);
    }

    get ChangePathwayLifeCycleStatusDateTime() {
        return this.getComponent('ChangePathwayLifeCycleStatusDateTime');
    }

    set ChangePathwayLifeCycleStatusDateTime(value) {
        this.setComponentValue('ChangePathwayLifeCycleStatusDateTime', value);
    }

    get ChangePathwayLifecycleStatusDateTime() {
        return this.getComponent('ChangePathwayLifeCycleStatusDateTime');
    }

    set ChangePathwayLifecycleStatusDateTime(value) {
        this.setComponentValue('ChangePathwayLifeCycleStatusDateTime', value);
    }

    get MoodCode() {
        return this.getComponent('MoodCode');
    }

    set MoodCode(value) {
        this.setComponentValue('MoodCode', value);
    }
}
