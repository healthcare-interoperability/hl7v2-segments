import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';

export class SCP extends Segment {
    static components = {
        NumberOfDecontaminationSterilizationDevices: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LaborCalculationType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateFormat: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeviceNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeviceName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeviceModelName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeviceType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LotControl: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'NumberOfDecontaminationSterilizationDevices', 'LaborCalculationType', 'DateFormat', 'DeviceNumber', 'DeviceName', 'DeviceModelName', 'DeviceType', 'LotControl'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('SCP');
        this.setValues(values);
    }

    get NumberOfDecontaminationSterilizationDevices() {
        return this.getComponent('NumberOfDecontaminationSterilizationDevices');
    }

    set NumberOfDecontaminationSterilizationDevices(value) {
        this.setComponentValue('NumberOfDecontaminationSterilizationDevices', value);
    }

    get LaborCalculationType() {
        return this.getComponent('LaborCalculationType');
    }

    set LaborCalculationType(value) {
        this.setComponentValue('LaborCalculationType', value);
    }

    get DateFormat() {
        return this.getComponent('DateFormat');
    }

    set DateFormat(value) {
        this.setComponentValue('DateFormat', value);
    }

    get DeviceNumber() {
        return this.getComponent('DeviceNumber');
    }

    set DeviceNumber(value) {
        this.setComponentValue('DeviceNumber', value);
    }

    get DeviceName() {
        return this.getComponent('DeviceName');
    }

    set DeviceName(value) {
        this.setComponentValue('DeviceName', value);
    }

    get DeviceModelName() {
        return this.getComponent('DeviceModelName');
    }

    set DeviceModelName(value) {
        this.setComponentValue('DeviceModelName', value);
    }

    get DeviceType() {
        return this.getComponent('DeviceType');
    }

    set DeviceType(value) {
        this.setComponentValue('DeviceType', value);
    }

    get LotControl() {
        return this.getComponent('LotControl');
    }

    set LotControl(value) {
        this.setComponentValue('LotControl', value);
    }
}
