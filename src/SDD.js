import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class SDD extends Segment {
    static components = {
        LotNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeviceNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeviceName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeviceDataState: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LoadStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ControlCode: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OperatorName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'LotNumber', 'DeviceNumber', 'DeviceName', 'DeviceDataState', 'LoadStatus', 'ControlCode', 'OperatorName'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('SDD');
        this.setValues(values);
    }

    get LotNumber() {
        return this.getComponent('LotNumber');
    }

    set LotNumber(value) {
        this.setComponentValue('LotNumber', value);
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

    get DeviceDataState() {
        return this.getComponent('DeviceDataState');
    }

    set DeviceDataState(value) {
        this.setComponentValue('DeviceDataState', value);
    }

    get LoadStatus() {
        return this.getComponent('LoadStatus');
    }

    set LoadStatus(value) {
        this.setComponentValue('LoadStatus', value);
    }

    get ControlCode() {
        return this.getComponent('ControlCode');
    }

    set ControlCode(value) {
        this.setComponentValue('ControlCode', value);
    }

    get OperatorName() {
        return this.getComponent('OperatorName');
    }

    set OperatorName(value) {
        this.setComponentValue('OperatorName', value);
    }
}
