import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class RXR extends Segment {
    static components = {
        Route: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministrationSite: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Site: { aliasOf: 'AdministrationSite' },
        AdministrationDevice: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministrationMethod: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RoutingInstruction: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdministrationSiteModifier: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'Route', 'AdministrationSite', 'AdministrationDevice', 'AdministrationMethod', 'RoutingInstruction', 'AdministrationSiteModifier'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RXR');
        this.setValues(values);
    }

    get Route() {
        return this.getComponent('Route');
    }

    set Route(value) {
        this.setComponentValue('Route', value);
    }

    get AdministrationSite() {
        return this.getComponent('AdministrationSite');
    }

    set AdministrationSite(value) {
        this.setComponentValue('AdministrationSite', value);
    }

    get Site() {
        return this.getComponent('AdministrationSite');
    }

    set Site(value) {
        this.setComponentValue('AdministrationSite', value);
    }

    get AdministrationDevice() {
        return this.getComponent('AdministrationDevice');
    }

    set AdministrationDevice(value) {
        this.setComponentValue('AdministrationDevice', value);
    }

    get AdministrationMethod() {
        return this.getComponent('AdministrationMethod');
    }

    set AdministrationMethod(value) {
        this.setComponentValue('AdministrationMethod', value);
    }

    get RoutingInstruction() {
        return this.getComponent('RoutingInstruction');
    }

    set RoutingInstruction(value) {
        this.setComponentValue('RoutingInstruction', value);
    }

    get AdministrationSiteModifier() {
        return this.getComponent('AdministrationSiteModifier');
    }

    set AdministrationSiteModifier(value) {
        this.setComponentValue('AdministrationSiteModifier', value);
    }
}
