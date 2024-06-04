import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';

export class PRT extends Segment {
    static components = {
        ParticipationInstanceId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Participation: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParticipationPerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ParticipationPersonProviderType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParticipantOrganizationUnitType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParticipationOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ParticipantLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ParticipationDevice: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ParticipationBeginDateTimeArrivalTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParticipationEndDateTimeDepartureTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParticipationQualitativeDuration: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParticipationAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ParticipantTelecommunicationAddress: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 15,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ParticipationInstanceId',
        'ActionCode',
        'ActionReason',
        'Participation',
        'ParticipationPerson',
        'ParticipationPersonProviderType',
        'ParticipantOrganizationUnitType',
        'ParticipationOrganization',
        'ParticipantLocation',
        'ParticipationDevice',
        'ParticipationBeginDateTimeArrivalTime',
        'ParticipationEndDateTimeDepartureTime',
        'ParticipationQualitativeDuration',
        'ParticipationAddress',
        'ParticipantTelecommunicationAddress',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PRT');
        this.setValues(values);
    }

    get ParticipationInstanceId() {
        return this.getComponent('ParticipationInstanceId');
    }

    set ParticipationInstanceId(value) {
        this.setComponentValue('ParticipationInstanceId', value);
    }

    get ActionCode() {
        return this.getComponent('ActionCode');
    }

    set ActionCode(value) {
        this.setComponentValue('ActionCode', value);
    }

    get ActionReason() {
        return this.getComponent('ActionReason');
    }

    set ActionReason(value) {
        this.setComponentValue('ActionReason', value);
    }

    get Participation() {
        return this.getComponent('Participation');
    }

    set Participation(value) {
        this.setComponentValue('Participation', value);
    }

    get ParticipationPerson() {
        return this.getComponent('ParticipationPerson');
    }

    set ParticipationPerson(value) {
        this.setComponentValue('ParticipationPerson', value);
    }

    get ParticipationPersonProviderType() {
        return this.getComponent('ParticipationPersonProviderType');
    }

    set ParticipationPersonProviderType(value) {
        this.setComponentValue('ParticipationPersonProviderType', value);
    }

    get ParticipantOrganizationUnitType() {
        return this.getComponent('ParticipantOrganizationUnitType');
    }

    set ParticipantOrganizationUnitType(value) {
        this.setComponentValue('ParticipantOrganizationUnitType', value);
    }

    get ParticipationOrganization() {
        return this.getComponent('ParticipationOrganization');
    }

    set ParticipationOrganization(value) {
        this.setComponentValue('ParticipationOrganization', value);
    }

    get ParticipantLocation() {
        return this.getComponent('ParticipantLocation');
    }

    set ParticipantLocation(value) {
        this.setComponentValue('ParticipantLocation', value);
    }

    get ParticipationDevice() {
        return this.getComponent('ParticipationDevice');
    }

    set ParticipationDevice(value) {
        this.setComponentValue('ParticipationDevice', value);
    }

    get ParticipationBeginDateTimeArrivalTime() {
        return this.getComponent('ParticipationBeginDateTimeArrivalTime');
    }

    set ParticipationBeginDateTimeArrivalTime(value) {
        this.setComponentValue('ParticipationBeginDateTimeArrivalTime', value);
    }

    get ParticipationEndDateTimeDepartureTime() {
        return this.getComponent('ParticipationEndDateTimeDepartureTime');
    }

    set ParticipationEndDateTimeDepartureTime(value) {
        this.setComponentValue('ParticipationEndDateTimeDepartureTime', value);
    }

    get ParticipationQualitativeDuration() {
        return this.getComponent('ParticipationQualitativeDuration');
    }

    set ParticipationQualitativeDuration(value) {
        this.setComponentValue('ParticipationQualitativeDuration', value);
    }

    get ParticipationAddress() {
        return this.getComponent('ParticipationAddress');
    }

    set ParticipationAddress(value) {
        this.setComponentValue('ParticipationAddress', value);
    }

    get ParticipantTelecommunicationAddress() {
        return this.getComponent('ParticipantTelecommunicationAddress');
    }

    set ParticipantTelecommunicationAddress(value) {
        this.setComponentValue('ParticipantTelecommunicationAddress', value);
    }
}
