import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class RXC extends Segment {
    static components = {
        RxComponentType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ComponentCode: {
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
        ComponentAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ComponentUnits: {
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
        ComponentStrength: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ComponentStrengthUnits: {
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
        SupplementaryCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ComponentDrugStrengthVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ComponentDrugStrengthVolumeUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'RxComponentType',
        'ComponentCode',
        'ComponentAmount',
        'ComponentUnits',
        'ComponentStrength',
        'ComponentStrengthUnits',
        'SupplementaryCode',
        'ComponentDrugStrengthVolume',
        'ComponentDrugStrengthVolumeUnits',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RXC');
        this.setValues(values);
    }

    get RxComponentType() {
        return this.getComponent('RxComponentType');
    }

    set RxComponentType(value) {
        this.setComponentValue('RxComponentType', value);
    }

    get ComponentCode() {
        return this.getComponent('ComponentCode');
    }

    set ComponentCode(value) {
        this.setComponentValue('ComponentCode', value);
    }

    get ComponentAmount() {
        return this.getComponent('ComponentAmount');
    }

    set ComponentAmount(value) {
        this.setComponentValue('ComponentAmount', value);
    }

    get ComponentUnits() {
        return this.getComponent('ComponentUnits');
    }

    set ComponentUnits(value) {
        this.setComponentValue('ComponentUnits', value);
    }

    get ComponentStrength() {
        return this.getComponent('ComponentStrength');
    }

    set ComponentStrength(value) {
        this.setComponentValue('ComponentStrength', value);
    }

    get ComponentStrengthUnits() {
        return this.getComponent('ComponentStrengthUnits');
    }

    set ComponentStrengthUnits(value) {
        this.setComponentValue('ComponentStrengthUnits', value);
    }

    get SupplementaryCode() {
        return this.getComponent('SupplementaryCode');
    }

    set SupplementaryCode(value) {
        this.setComponentValue('SupplementaryCode', value);
    }

    get ComponentDrugStrengthVolume() {
        return this.getComponent('ComponentDrugStrengthVolume');
    }

    set ComponentDrugStrengthVolume(value) {
        this.setComponentValue('ComponentDrugStrengthVolume', value);
    }

    get ComponentDrugStrengthVolumeUnits() {
        return this.getComponent('ComponentDrugStrengthVolumeUnits');
    }

    set ComponentDrugStrengthVolumeUnits(value) {
        this.setComponentValue('ComponentDrugStrengthVolumeUnits', value);
    }
}
