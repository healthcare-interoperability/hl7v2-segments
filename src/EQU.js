import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class EQU extends Segment {
    static components = {
        EquipmentInstanceIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EquipmentState: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LocalRemoteControlState: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AlertLevel: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'EquipmentInstanceIdentifier', 'EventDateTime', 'EquipmentState', 'LocalRemoteControlState', 'AlertLevel'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('EQU');
        this.setValues(values);
    }

    get EquipmentInstanceIdentifier() {
        return this.getComponent('EquipmentInstanceIdentifier');
    }

    set EquipmentInstanceIdentifier(value) {
        this.setComponentValue('EquipmentInstanceIdentifier', value);
    }

    get EventDateTime() {
        return this.getComponent('EventDateTime');
    }

    set EventDateTime(value) {
        this.setComponentValue('EventDateTime', value);
    }

    get EquipmentState() {
        return this.getComponent('EquipmentState');
    }

    set EquipmentState(value) {
        this.setComponentValue('EquipmentState', value);
    }

    get LocalRemoteControlState() {
        return this.getComponent('LocalRemoteControlState');
    }

    set LocalRemoteControlState(value) {
        this.setComponentValue('LocalRemoteControlState', value);
    }

    get AlertLevel() {
        return this.getComponent('AlertLevel');
    }

    set AlertLevel(value) {
        this.setComponentValue('AlertLevel', value);
    }
}
