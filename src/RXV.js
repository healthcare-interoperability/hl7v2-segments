import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';

export class RXV extends Segment {
    static components = {
        SetIDRXV: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BolusType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BolusDoseAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BolusDoseAmountUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BolusDoseVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BolusDoseVolumeUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PCAType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PCADoseAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PCADoseAmountUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PCADoseAmountVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PCADoseAmountVolumeUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MaxDoseAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MaxDoseAmountUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MaxDoseAmountVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MaxDoseAmountVolumeUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MaxDosePerTime: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LockoutInterval: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SyringeManufacturer: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SyringeModelNumber: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SyringeSize: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SyringeSizeUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIDRXV',
        'BolusType',
        'BolusDoseAmount',
        'BolusDoseAmountUnits',
        'BolusDoseVolume',
        'BolusDoseVolumeUnits',
        'PCAType',
        'PCADoseAmount',
        'PCADoseAmountUnits',
        'PCADoseAmountVolume',
        'PCADoseAmountVolumeUnits',
        'MaxDoseAmount',
        'MaxDoseAmountUnits',
        'MaxDoseAmountVolume',
        'MaxDoseAmountVolumeUnits',
        'MaxDosePerTime',
        'LockoutInterval',
        'SyringeManufacturer',
        'SyringeModelNumber',
        'SyringeSize',
        'SyringeSizeUnits',
        'ActionCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RXV');
        this.setValues(values);
    }

    get SetIDRXV() {
        return this.getComponent('SetIDRXV');
    }

    set SetIDRXV(value) {
        this.setComponentValue('SetIDRXV', value);
    }

    get BolusType() {
        return this.getComponent('BolusType');
    }

    set BolusType(value) {
        this.setComponentValue('BolusType', value);
    }

    get BolusDoseAmount() {
        return this.getComponent('BolusDoseAmount');
    }

    set BolusDoseAmount(value) {
        this.setComponentValue('BolusDoseAmount', value);
    }

    get BolusDoseAmountUnits() {
        return this.getComponent('BolusDoseAmountUnits');
    }

    set BolusDoseAmountUnits(value) {
        this.setComponentValue('BolusDoseAmountUnits', value);
    }

    get BolusDoseVolume() {
        return this.getComponent('BolusDoseVolume');
    }

    set BolusDoseVolume(value) {
        this.setComponentValue('BolusDoseVolume', value);
    }

    get BolusDoseVolumeUnits() {
        return this.getComponent('BolusDoseVolumeUnits');
    }

    set BolusDoseVolumeUnits(value) {
        this.setComponentValue('BolusDoseVolumeUnits', value);
    }

    get PCAType() {
        return this.getComponent('PCAType');
    }

    set PCAType(value) {
        this.setComponentValue('PCAType', value);
    }

    get PCADoseAmount() {
        return this.getComponent('PCADoseAmount');
    }

    set PCADoseAmount(value) {
        this.setComponentValue('PCADoseAmount', value);
    }

    get PCADoseAmountUnits() {
        return this.getComponent('PCADoseAmountUnits');
    }

    set PCADoseAmountUnits(value) {
        this.setComponentValue('PCADoseAmountUnits', value);
    }

    get PCADoseAmountVolume() {
        return this.getComponent('PCADoseAmountVolume');
    }

    set PCADoseAmountVolume(value) {
        this.setComponentValue('PCADoseAmountVolume', value);
    }

    get PCADoseAmountVolumeUnits() {
        return this.getComponent('PCADoseAmountVolumeUnits');
    }

    set PCADoseAmountVolumeUnits(value) {
        this.setComponentValue('PCADoseAmountVolumeUnits', value);
    }

    get MaxDoseAmount() {
        return this.getComponent('MaxDoseAmount');
    }

    set MaxDoseAmount(value) {
        this.setComponentValue('MaxDoseAmount', value);
    }

    get MaxDoseAmountUnits() {
        return this.getComponent('MaxDoseAmountUnits');
    }

    set MaxDoseAmountUnits(value) {
        this.setComponentValue('MaxDoseAmountUnits', value);
    }

    get MaxDoseAmountVolume() {
        return this.getComponent('MaxDoseAmountVolume');
    }

    set MaxDoseAmountVolume(value) {
        this.setComponentValue('MaxDoseAmountVolume', value);
    }

    get MaxDoseAmountVolumeUnits() {
        return this.getComponent('MaxDoseAmountVolumeUnits');
    }

    set MaxDoseAmountVolumeUnits(value) {
        this.setComponentValue('MaxDoseAmountVolumeUnits', value);
    }

    get MaxDosePerTime() {
        return this.getComponent('MaxDosePerTime');
    }

    set MaxDosePerTime(value) {
        this.setComponentValue('MaxDosePerTime', value);
    }

    get LockoutInterval() {
        return this.getComponent('LockoutInterval');
    }

    set LockoutInterval(value) {
        this.setComponentValue('LockoutInterval', value);
    }

    get SyringeManufacturer() {
        return this.getComponent('SyringeManufacturer');
    }

    set SyringeManufacturer(value) {
        this.setComponentValue('SyringeManufacturer', value);
    }

    get SyringeModelNumber() {
        return this.getComponent('SyringeModelNumber');
    }

    set SyringeModelNumber(value) {
        this.setComponentValue('SyringeModelNumber', value);
    }

    get SyringeSize() {
        return this.getComponent('SyringeSize');
    }

    set SyringeSize(value) {
        this.setComponentValue('SyringeSize', value);
    }

    get SyringeSizeUnits() {
        return this.getComponent('SyringeSizeUnits');
    }

    set SyringeSizeUnits(value) {
        this.setComponentValue('SyringeSizeUnits', value);
    }

    get ActionCode() {
        return this.getComponent('ActionCode');
    }

    set ActionCode(value) {
        this.setComponentValue('ActionCode', value);
    }
}
