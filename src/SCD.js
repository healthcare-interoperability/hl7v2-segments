import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { TM } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { SN } from '@healthcare-interoperability/hl7v2-datatypes';

export class SCD extends Segment {
    static components = {
        CycleStartTime: {
            defaultDataType: TM,
            dataTypes: [{ dataType: TM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CycleCount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TempMax: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TempMin: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LoadNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConditionTime: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SterilizeTime: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExhaustTime: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalCycleTime: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeviceStatus: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CycleStartDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DryTime: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LeakRate: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ControlTemperature: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SterilizerTemperature: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CycleCompleteTime: {
            defaultDataType: TM,
            dataTypes: [{ dataType: TM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        UnderTemperature: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OverTemperature: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AbortCycle: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Alarm: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LongInChargePhase: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LongInExhaustPhase: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LongInFastExhaustPhase: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Reset: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OperatorUnload: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DoorOpen: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReadingFailure: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CycleType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ThermalRinseTime: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        WashTime: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InjectionRate: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureCode: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientIdentifierList: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 33,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AttendingDoctor: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 34,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DilutionFactor: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillTime: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 36,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InletTemperature: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'CycleStartTime',
        'CycleCount',
        'TempMax',
        'TempMin',
        'LoadNumber',
        'ConditionTime',
        'SterilizeTime',
        'ExhaustTime',
        'TotalCycleTime',
        'DeviceStatus',
        'CycleStartDateTime',
        'DryTime',
        'LeakRate',
        'ControlTemperature',
        'SterilizerTemperature',
        'CycleCompleteTime',
        'UnderTemperature',
        'OverTemperature',
        'AbortCycle',
        'Alarm',
        'LongInChargePhase',
        'LongInExhaustPhase',
        'LongInFastExhaustPhase',
        'Reset',
        'OperatorUnload',
        'DoorOpen',
        'ReadingFailure',
        'CycleType',
        'ThermalRinseTime',
        'WashTime',
        'InjectionRate',
        'ProcedureCode',
        'PatientIdentifierList',
        'AttendingDoctor',
        'DilutionFactor',
        'FillTime',
        'InletTemperature',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('SCD');
        this.setValues(values);
    }

    get CycleStartTime() {
        return this.getComponent('CycleStartTime');
    }

    set CycleStartTime(value) {
        this.setComponentValue('CycleStartTime', value);
    }

    get CycleCount() {
        return this.getComponent('CycleCount');
    }

    set CycleCount(value) {
        this.setComponentValue('CycleCount', value);
    }

    get TempMax() {
        return this.getComponent('TempMax');
    }

    set TempMax(value) {
        this.setComponentValue('TempMax', value);
    }

    get TempMin() {
        return this.getComponent('TempMin');
    }

    set TempMin(value) {
        this.setComponentValue('TempMin', value);
    }

    get LoadNumber() {
        return this.getComponent('LoadNumber');
    }

    set LoadNumber(value) {
        this.setComponentValue('LoadNumber', value);
    }

    get ConditionTime() {
        return this.getComponent('ConditionTime');
    }

    set ConditionTime(value) {
        this.setComponentValue('ConditionTime', value);
    }

    get SterilizeTime() {
        return this.getComponent('SterilizeTime');
    }

    set SterilizeTime(value) {
        this.setComponentValue('SterilizeTime', value);
    }

    get ExhaustTime() {
        return this.getComponent('ExhaustTime');
    }

    set ExhaustTime(value) {
        this.setComponentValue('ExhaustTime', value);
    }

    get TotalCycleTime() {
        return this.getComponent('TotalCycleTime');
    }

    set TotalCycleTime(value) {
        this.setComponentValue('TotalCycleTime', value);
    }

    get DeviceStatus() {
        return this.getComponent('DeviceStatus');
    }

    set DeviceStatus(value) {
        this.setComponentValue('DeviceStatus', value);
    }

    get CycleStartDateTime() {
        return this.getComponent('CycleStartDateTime');
    }

    set CycleStartDateTime(value) {
        this.setComponentValue('CycleStartDateTime', value);
    }

    get DryTime() {
        return this.getComponent('DryTime');
    }

    set DryTime(value) {
        this.setComponentValue('DryTime', value);
    }

    get LeakRate() {
        return this.getComponent('LeakRate');
    }

    set LeakRate(value) {
        this.setComponentValue('LeakRate', value);
    }

    get ControlTemperature() {
        return this.getComponent('ControlTemperature');
    }

    set ControlTemperature(value) {
        this.setComponentValue('ControlTemperature', value);
    }

    get SterilizerTemperature() {
        return this.getComponent('SterilizerTemperature');
    }

    set SterilizerTemperature(value) {
        this.setComponentValue('SterilizerTemperature', value);
    }

    get CycleCompleteTime() {
        return this.getComponent('CycleCompleteTime');
    }

    set CycleCompleteTime(value) {
        this.setComponentValue('CycleCompleteTime', value);
    }

    get UnderTemperature() {
        return this.getComponent('UnderTemperature');
    }

    set UnderTemperature(value) {
        this.setComponentValue('UnderTemperature', value);
    }

    get OverTemperature() {
        return this.getComponent('OverTemperature');
    }

    set OverTemperature(value) {
        this.setComponentValue('OverTemperature', value);
    }

    get AbortCycle() {
        return this.getComponent('AbortCycle');
    }

    set AbortCycle(value) {
        this.setComponentValue('AbortCycle', value);
    }

    get Alarm() {
        return this.getComponent('Alarm');
    }

    set Alarm(value) {
        this.setComponentValue('Alarm', value);
    }

    get LongInChargePhase() {
        return this.getComponent('LongInChargePhase');
    }

    set LongInChargePhase(value) {
        this.setComponentValue('LongInChargePhase', value);
    }

    get LongInExhaustPhase() {
        return this.getComponent('LongInExhaustPhase');
    }

    set LongInExhaustPhase(value) {
        this.setComponentValue('LongInExhaustPhase', value);
    }

    get LongInFastExhaustPhase() {
        return this.getComponent('LongInFastExhaustPhase');
    }

    set LongInFastExhaustPhase(value) {
        this.setComponentValue('LongInFastExhaustPhase', value);
    }

    get Reset() {
        return this.getComponent('Reset');
    }

    set Reset(value) {
        this.setComponentValue('Reset', value);
    }

    get OperatorUnload() {
        return this.getComponent('OperatorUnload');
    }

    set OperatorUnload(value) {
        this.setComponentValue('OperatorUnload', value);
    }

    get DoorOpen() {
        return this.getComponent('DoorOpen');
    }

    set DoorOpen(value) {
        this.setComponentValue('DoorOpen', value);
    }

    get ReadingFailure() {
        return this.getComponent('ReadingFailure');
    }

    set ReadingFailure(value) {
        this.setComponentValue('ReadingFailure', value);
    }

    get CycleType() {
        return this.getComponent('CycleType');
    }

    set CycleType(value) {
        this.setComponentValue('CycleType', value);
    }

    get ThermalRinseTime() {
        return this.getComponent('ThermalRinseTime');
    }

    set ThermalRinseTime(value) {
        this.setComponentValue('ThermalRinseTime', value);
    }

    get WashTime() {
        return this.getComponent('WashTime');
    }

    set WashTime(value) {
        this.setComponentValue('WashTime', value);
    }

    get InjectionRate() {
        return this.getComponent('InjectionRate');
    }

    set InjectionRate(value) {
        this.setComponentValue('InjectionRate', value);
    }

    get ProcedureCode() {
        return this.getComponent('ProcedureCode');
    }

    set ProcedureCode(value) {
        this.setComponentValue('ProcedureCode', value);
    }

    get PatientIdentifierList() {
        return this.getComponent('PatientIdentifierList');
    }

    set PatientIdentifierList(value) {
        this.setComponentValue('PatientIdentifierList', value);
    }

    get AttendingDoctor() {
        return this.getComponent('AttendingDoctor');
    }

    set AttendingDoctor(value) {
        this.setComponentValue('AttendingDoctor', value);
    }

    get DilutionFactor() {
        return this.getComponent('DilutionFactor');
    }

    set DilutionFactor(value) {
        this.setComponentValue('DilutionFactor', value);
    }

    get FillTime() {
        return this.getComponent('FillTime');
    }

    set FillTime(value) {
        this.setComponentValue('FillTime', value);
    }

    get InletTemperature() {
        return this.getComponent('InletTemperature');
    }

    set InletTemperature(value) {
        this.setComponentValue('InletTemperature', value);
    }
}
