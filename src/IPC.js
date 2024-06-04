import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class IPC extends Segment {
    static components = {
        AccessionIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedProcedureId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedProcedureID: { aliasOf: 'RequestedProcedureId' },
        StudyInstanceUid: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StudyInstanceUID: { aliasOf: 'StudyInstanceUid' },
        ScheduledProcedureStepId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ScheduledProcedureStepID: { aliasOf: 'ScheduledProcedureStepId' },
        Modality: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProtocolCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ScheduledStationName: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ScheduledProcedureStepLocation: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ScheduledStationAeTitle: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ScheduledAETitle: { aliasOf: 'ScheduledStationAeTitle' },
        ScheduledStationAETitle: { aliasOf: 'ScheduledStationAeTitle' },
    };

    static componentsByIndex = [
        '',
        'AccessionIdentifier',
        'RequestedProcedureId',
        'StudyInstanceUid',
        'ScheduledProcedureStepId',
        'Modality',
        'ProtocolCode',
        'ScheduledStationName',
        'ScheduledProcedureStepLocation',
        'ScheduledStationAeTitle',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('IPC');
        this.setValues(values);
    }

    get AccessionIdentifier() {
        return this.getComponent('AccessionIdentifier');
    }

    set AccessionIdentifier(value) {
        this.setComponentValue('AccessionIdentifier', value);
    }

    get RequestedProcedureId() {
        return this.getComponent('RequestedProcedureId');
    }

    set RequestedProcedureId(value) {
        this.setComponentValue('RequestedProcedureId', value);
    }

    get RequestedProcedureID() {
        return this.getComponent('RequestedProcedureId');
    }

    set RequestedProcedureID(value) {
        this.setComponentValue('RequestedProcedureId', value);
    }

    get StudyInstanceUid() {
        return this.getComponent('StudyInstanceUid');
    }

    set StudyInstanceUid(value) {
        this.setComponentValue('StudyInstanceUid', value);
    }

    get StudyInstanceUID() {
        return this.getComponent('StudyInstanceUid');
    }

    set StudyInstanceUID(value) {
        this.setComponentValue('StudyInstanceUid', value);
    }

    get ScheduledProcedureStepId() {
        return this.getComponent('ScheduledProcedureStepId');
    }

    set ScheduledProcedureStepId(value) {
        this.setComponentValue('ScheduledProcedureStepId', value);
    }

    get ScheduledProcedureStepID() {
        return this.getComponent('ScheduledProcedureStepId');
    }

    set ScheduledProcedureStepID(value) {
        this.setComponentValue('ScheduledProcedureStepId', value);
    }

    get Modality() {
        return this.getComponent('Modality');
    }

    set Modality(value) {
        this.setComponentValue('Modality', value);
    }

    get ProtocolCode() {
        return this.getComponent('ProtocolCode');
    }

    set ProtocolCode(value) {
        this.setComponentValue('ProtocolCode', value);
    }

    get ScheduledStationName() {
        return this.getComponent('ScheduledStationName');
    }

    set ScheduledStationName(value) {
        this.setComponentValue('ScheduledStationName', value);
    }

    get ScheduledProcedureStepLocation() {
        return this.getComponent('ScheduledProcedureStepLocation');
    }

    set ScheduledProcedureStepLocation(value) {
        this.setComponentValue('ScheduledProcedureStepLocation', value);
    }

    get ScheduledStationAeTitle() {
        return this.getComponent('ScheduledStationAeTitle');
    }

    set ScheduledStationAeTitle(value) {
        this.setComponentValue('ScheduledStationAeTitle', value);
    }

    get ScheduledAETitle() {
        return this.getComponent('ScheduledStationAeTitle');
    }

    set ScheduledAETitle(value) {
        this.setComponentValue('ScheduledStationAeTitle', value);
    }

    get ScheduledStationAETitle() {
        return this.getComponent('ScheduledStationAeTitle');
    }

    set ScheduledStationAETitle(value) {
        this.setComponentValue('ScheduledStationAeTitle', value);
    }
}
