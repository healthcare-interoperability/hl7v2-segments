import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { HD } from '@healthcare-interoperability/hl7v2-datatypes';

export class NSC extends Segment {
    static components = {
        ApplicationChangeType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NetworkChangeType: { aliasOf: 'ApplicationChangeType' },
        CurrentCpu: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CurrentCPU: { aliasOf: 'CurrentCpu' },
        CurrentFileserver: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CurrentApplication: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CurrentFacility: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NewCpu: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NewCPU: { aliasOf: 'NewCpu' },
        NewFileserver: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NewApplication: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NewFacility: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'ApplicationChangeType', 'CurrentCpu', 'CurrentFileserver', 'CurrentApplication', 'CurrentFacility', 'NewCpu', 'NewFileserver', 'NewApplication', 'NewFacility'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('NSC');
        this.setValues(values);
    }

    get ApplicationChangeType() {
        return this.getComponent('ApplicationChangeType');
    }

    set ApplicationChangeType(value) {
        this.setComponentValue('ApplicationChangeType', value);
    }

    get NetworkChangeType() {
        return this.getComponent('ApplicationChangeType');
    }

    set NetworkChangeType(value) {
        this.setComponentValue('ApplicationChangeType', value);
    }

    get CurrentCpu() {
        return this.getComponent('CurrentCpu');
    }

    set CurrentCpu(value) {
        this.setComponentValue('CurrentCpu', value);
    }

    get CurrentCPU() {
        return this.getComponent('CurrentCpu');
    }

    set CurrentCPU(value) {
        this.setComponentValue('CurrentCpu', value);
    }

    get CurrentFileserver() {
        return this.getComponent('CurrentFileserver');
    }

    set CurrentFileserver(value) {
        this.setComponentValue('CurrentFileserver', value);
    }

    get CurrentApplication() {
        return this.getComponent('CurrentApplication');
    }

    set CurrentApplication(value) {
        this.setComponentValue('CurrentApplication', value);
    }

    get CurrentFacility() {
        return this.getComponent('CurrentFacility');
    }

    set CurrentFacility(value) {
        this.setComponentValue('CurrentFacility', value);
    }

    get NewCpu() {
        return this.getComponent('NewCpu');
    }

    set NewCpu(value) {
        this.setComponentValue('NewCpu', value);
    }

    get NewCPU() {
        return this.getComponent('NewCpu');
    }

    set NewCPU(value) {
        this.setComponentValue('NewCpu', value);
    }

    get NewFileserver() {
        return this.getComponent('NewFileserver');
    }

    set NewFileserver(value) {
        this.setComponentValue('NewFileserver', value);
    }

    get NewApplication() {
        return this.getComponent('NewApplication');
    }

    set NewApplication(value) {
        this.setComponentValue('NewApplication', value);
    }

    get NewFacility() {
        return this.getComponent('NewFacility');
    }

    set NewFacility(value) {
        this.setComponentValue('NewFacility', value);
    }
}
