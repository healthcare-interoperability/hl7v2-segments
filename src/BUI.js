import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { NR } from '@healthcare-interoperability/hl7v2-datatypes';

export class BUI extends Segment {
    static components = {
        SetIdBui: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BloodUnitIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BloodUnitType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BloodUnitWeight: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        WeightUnits: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BloodUnitVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VolumeUnits: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerCatalogNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerLotNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerManufacturer: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransportTemperature: {
            defaultDataType: NR,
            dataTypes: [{ dataType: NR, versions: ['2.8'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransportTemperatureUnits: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8'] }],
            position: 12,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdBui',
        'BloodUnitIdentifier',
        'BloodUnitType',
        'BloodUnitWeight',
        'WeightUnits',
        'BloodUnitVolume',
        'VolumeUnits',
        'ContainerCatalogNumber',
        'ContainerLotNumber',
        'ContainerManufacturer',
        'TransportTemperature',
        'TransportTemperatureUnits',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('BUI');
        this.setValues(values);
    }

    get SetIdBui() {
        return this.getComponent('SetIdBui');
    }

    set SetIdBui(value) {
        this.setComponentValue('SetIdBui', value);
    }

    get BloodUnitIdentifier() {
        return this.getComponent('BloodUnitIdentifier');
    }

    set BloodUnitIdentifier(value) {
        this.setComponentValue('BloodUnitIdentifier', value);
    }

    get BloodUnitType() {
        return this.getComponent('BloodUnitType');
    }

    set BloodUnitType(value) {
        this.setComponentValue('BloodUnitType', value);
    }

    get BloodUnitWeight() {
        return this.getComponent('BloodUnitWeight');
    }

    set BloodUnitWeight(value) {
        this.setComponentValue('BloodUnitWeight', value);
    }

    get WeightUnits() {
        return this.getComponent('WeightUnits');
    }

    set WeightUnits(value) {
        this.setComponentValue('WeightUnits', value);
    }

    get BloodUnitVolume() {
        return this.getComponent('BloodUnitVolume');
    }

    set BloodUnitVolume(value) {
        this.setComponentValue('BloodUnitVolume', value);
    }

    get VolumeUnits() {
        return this.getComponent('VolumeUnits');
    }

    set VolumeUnits(value) {
        this.setComponentValue('VolumeUnits', value);
    }

    get ContainerCatalogNumber() {
        return this.getComponent('ContainerCatalogNumber');
    }

    set ContainerCatalogNumber(value) {
        this.setComponentValue('ContainerCatalogNumber', value);
    }

    get ContainerLotNumber() {
        return this.getComponent('ContainerLotNumber');
    }

    set ContainerLotNumber(value) {
        this.setComponentValue('ContainerLotNumber', value);
    }

    get ContainerManufacturer() {
        return this.getComponent('ContainerManufacturer');
    }

    set ContainerManufacturer(value) {
        this.setComponentValue('ContainerManufacturer', value);
    }

    get TransportTemperature() {
        return this.getComponent('TransportTemperature');
    }

    set TransportTemperature(value) {
        this.setComponentValue('TransportTemperature', value);
    }

    get TransportTemperatureUnits() {
        return this.getComponent('TransportTemperatureUnits');
    }

    set TransportTemperatureUnits(value) {
        this.setComponentValue('TransportTemperatureUnits', value);
    }
}
