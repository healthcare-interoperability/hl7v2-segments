import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { TQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';

export class SCH extends Segment {
    static components = {
        PlacerAppointmentId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlacerAppointmentID: { aliasOf: 'PlacerAppointmentId' },
        FillerAppointmentId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillerAppointmentID: { aliasOf: 'FillerAppointmentId' },
        OccurrenceNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlacerGroupNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ScheduleId: {
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
        ScheduleID: { aliasOf: 'ScheduleId' },
        EventReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AppointmentReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AppointmentType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AppointmentDuration: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AppointmentDurationUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AppointmentTimingQuantity: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: TQ, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 11,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PlacerContactPerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PlacerContactPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlacerContactAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PlacerContactLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillerContactPerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        FillerContactPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillerContactAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        FillerContactLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EnteredByPerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        EnteredByPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EnteredByLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentPlacerAppointmentId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentPlacerAppointmentID: { aliasOf: 'ParentPlacerAppointmentId' },
        ParentFillerAppointmentId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentFillerAppointmentID: { aliasOf: 'ParentFillerAppointmentId' },
        FillerStatusCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlacerOrderNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 26,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        FillerOrderNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 27,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'PlacerAppointmentId',
        'FillerAppointmentId',
        'OccurrenceNumber',
        'PlacerGroupNumber',
        'ScheduleId',
        'EventReason',
        'AppointmentReason',
        'AppointmentType',
        'AppointmentDuration',
        'AppointmentDurationUnits',
        'AppointmentTimingQuantity',
        'PlacerContactPerson',
        'PlacerContactPhoneNumber',
        'PlacerContactAddress',
        'PlacerContactLocation',
        'FillerContactPerson',
        'FillerContactPhoneNumber',
        'FillerContactAddress',
        'FillerContactLocation',
        'EnteredByPerson',
        'EnteredByPhoneNumber',
        'EnteredByLocation',
        'ParentPlacerAppointmentId',
        'ParentFillerAppointmentId',
        'FillerStatusCode',
        'PlacerOrderNumber',
        'FillerOrderNumber',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('SCH');
        this.setValues(values);
    }

    get PlacerAppointmentId() {
        return this.getComponent('PlacerAppointmentId');
    }

    set PlacerAppointmentId(value) {
        this.setComponentValue('PlacerAppointmentId', value);
    }

    get PlacerAppointmentID() {
        return this.getComponent('PlacerAppointmentId');
    }

    set PlacerAppointmentID(value) {
        this.setComponentValue('PlacerAppointmentId', value);
    }

    get FillerAppointmentId() {
        return this.getComponent('FillerAppointmentId');
    }

    set FillerAppointmentId(value) {
        this.setComponentValue('FillerAppointmentId', value);
    }

    get FillerAppointmentID() {
        return this.getComponent('FillerAppointmentId');
    }

    set FillerAppointmentID(value) {
        this.setComponentValue('FillerAppointmentId', value);
    }

    get OccurrenceNumber() {
        return this.getComponent('OccurrenceNumber');
    }

    set OccurrenceNumber(value) {
        this.setComponentValue('OccurrenceNumber', value);
    }

    get PlacerGroupNumber() {
        return this.getComponent('PlacerGroupNumber');
    }

    set PlacerGroupNumber(value) {
        this.setComponentValue('PlacerGroupNumber', value);
    }

    get ScheduleId() {
        return this.getComponent('ScheduleId');
    }

    set ScheduleId(value) {
        this.setComponentValue('ScheduleId', value);
    }

    get ScheduleID() {
        return this.getComponent('ScheduleId');
    }

    set ScheduleID(value) {
        this.setComponentValue('ScheduleId', value);
    }

    get EventReason() {
        return this.getComponent('EventReason');
    }

    set EventReason(value) {
        this.setComponentValue('EventReason', value);
    }

    get AppointmentReason() {
        return this.getComponent('AppointmentReason');
    }

    set AppointmentReason(value) {
        this.setComponentValue('AppointmentReason', value);
    }

    get AppointmentType() {
        return this.getComponent('AppointmentType');
    }

    set AppointmentType(value) {
        this.setComponentValue('AppointmentType', value);
    }

    get AppointmentDuration() {
        return this.getComponent('AppointmentDuration');
    }

    set AppointmentDuration(value) {
        this.setComponentValue('AppointmentDuration', value);
    }

    get AppointmentDurationUnits() {
        return this.getComponent('AppointmentDurationUnits');
    }

    set AppointmentDurationUnits(value) {
        this.setComponentValue('AppointmentDurationUnits', value);
    }

    get AppointmentTimingQuantity() {
        return this.getComponent('AppointmentTimingQuantity');
    }

    set AppointmentTimingQuantity(value) {
        this.setComponentValue('AppointmentTimingQuantity', value);
    }

    get PlacerContactPerson() {
        return this.getComponent('PlacerContactPerson');
    }

    set PlacerContactPerson(value) {
        this.setComponentValue('PlacerContactPerson', value);
    }

    get PlacerContactPhoneNumber() {
        return this.getComponent('PlacerContactPhoneNumber');
    }

    set PlacerContactPhoneNumber(value) {
        this.setComponentValue('PlacerContactPhoneNumber', value);
    }

    get PlacerContactAddress() {
        return this.getComponent('PlacerContactAddress');
    }

    set PlacerContactAddress(value) {
        this.setComponentValue('PlacerContactAddress', value);
    }

    get PlacerContactLocation() {
        return this.getComponent('PlacerContactLocation');
    }

    set PlacerContactLocation(value) {
        this.setComponentValue('PlacerContactLocation', value);
    }

    get FillerContactPerson() {
        return this.getComponent('FillerContactPerson');
    }

    set FillerContactPerson(value) {
        this.setComponentValue('FillerContactPerson', value);
    }

    get FillerContactPhoneNumber() {
        return this.getComponent('FillerContactPhoneNumber');
    }

    set FillerContactPhoneNumber(value) {
        this.setComponentValue('FillerContactPhoneNumber', value);
    }

    get FillerContactAddress() {
        return this.getComponent('FillerContactAddress');
    }

    set FillerContactAddress(value) {
        this.setComponentValue('FillerContactAddress', value);
    }

    get FillerContactLocation() {
        return this.getComponent('FillerContactLocation');
    }

    set FillerContactLocation(value) {
        this.setComponentValue('FillerContactLocation', value);
    }

    get EnteredByPerson() {
        return this.getComponent('EnteredByPerson');
    }

    set EnteredByPerson(value) {
        this.setComponentValue('EnteredByPerson', value);
    }

    get EnteredByPhoneNumber() {
        return this.getComponent('EnteredByPhoneNumber');
    }

    set EnteredByPhoneNumber(value) {
        this.setComponentValue('EnteredByPhoneNumber', value);
    }

    get EnteredByLocation() {
        return this.getComponent('EnteredByLocation');
    }

    set EnteredByLocation(value) {
        this.setComponentValue('EnteredByLocation', value);
    }

    get ParentPlacerAppointmentId() {
        return this.getComponent('ParentPlacerAppointmentId');
    }

    set ParentPlacerAppointmentId(value) {
        this.setComponentValue('ParentPlacerAppointmentId', value);
    }

    get ParentPlacerAppointmentID() {
        return this.getComponent('ParentPlacerAppointmentId');
    }

    set ParentPlacerAppointmentID(value) {
        this.setComponentValue('ParentPlacerAppointmentId', value);
    }

    get ParentFillerAppointmentId() {
        return this.getComponent('ParentFillerAppointmentId');
    }

    set ParentFillerAppointmentId(value) {
        this.setComponentValue('ParentFillerAppointmentId', value);
    }

    get ParentFillerAppointmentID() {
        return this.getComponent('ParentFillerAppointmentId');
    }

    set ParentFillerAppointmentID(value) {
        this.setComponentValue('ParentFillerAppointmentId', value);
    }

    get FillerStatusCode() {
        return this.getComponent('FillerStatusCode');
    }

    set FillerStatusCode(value) {
        this.setComponentValue('FillerStatusCode', value);
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
}
