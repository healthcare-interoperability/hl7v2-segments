import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class LOC extends Segment {
    static components = {
        PrimaryKeyValueLoc: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryKeyValue: { aliasOf: 'PrimaryKeyValueLoc' },
        PrimaryKeyValueLOC: { aliasOf: 'PrimaryKeyValueLoc' },
        LocationDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LocationTypeLoc: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        LocationType: { aliasOf: 'LocationTypeLoc' },
        LocationTypeLOC: { aliasOf: 'LocationTypeLoc' },
        OrganizationNameLoc: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        OrganizationName: { aliasOf: 'OrganizationNameLoc' },
        OrganizationNameLOC: { aliasOf: 'OrganizationNameLoc' },
        LocationAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        LocationPhone: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        LicenseNumber: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        LocationEquipment: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        LocationServiceCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'PrimaryKeyValueLoc',
        'LocationDescription',
        'LocationTypeLoc',
        'OrganizationNameLoc',
        'LocationAddress',
        'LocationPhone',
        'LicenseNumber',
        'LocationEquipment',
        'LocationServiceCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('LOC');
        this.setValues(values);
    }

    get PrimaryKeyValueLoc() {
        return this.getComponent('PrimaryKeyValueLoc');
    }

    set PrimaryKeyValueLoc(value) {
        this.setComponentValue('PrimaryKeyValueLoc', value);
    }

    get PrimaryKeyValue() {
        return this.getComponent('PrimaryKeyValueLoc');
    }

    set PrimaryKeyValue(value) {
        this.setComponentValue('PrimaryKeyValueLoc', value);
    }

    get PrimaryKeyValueLOC() {
        return this.getComponent('PrimaryKeyValueLoc');
    }

    set PrimaryKeyValueLOC(value) {
        this.setComponentValue('PrimaryKeyValueLoc', value);
    }

    get LocationDescription() {
        return this.getComponent('LocationDescription');
    }

    set LocationDescription(value) {
        this.setComponentValue('LocationDescription', value);
    }

    get LocationTypeLoc() {
        return this.getComponent('LocationTypeLoc');
    }

    set LocationTypeLoc(value) {
        this.setComponentValue('LocationTypeLoc', value);
    }

    get LocationType() {
        return this.getComponent('LocationTypeLoc');
    }

    set LocationType(value) {
        this.setComponentValue('LocationTypeLoc', value);
    }

    get LocationTypeLOC() {
        return this.getComponent('LocationTypeLoc');
    }

    set LocationTypeLOC(value) {
        this.setComponentValue('LocationTypeLoc', value);
    }

    get OrganizationNameLoc() {
        return this.getComponent('OrganizationNameLoc');
    }

    set OrganizationNameLoc(value) {
        this.setComponentValue('OrganizationNameLoc', value);
    }

    get OrganizationName() {
        return this.getComponent('OrganizationNameLoc');
    }

    set OrganizationName(value) {
        this.setComponentValue('OrganizationNameLoc', value);
    }

    get OrganizationNameLOC() {
        return this.getComponent('OrganizationNameLoc');
    }

    set OrganizationNameLOC(value) {
        this.setComponentValue('OrganizationNameLoc', value);
    }

    get LocationAddress() {
        return this.getComponent('LocationAddress');
    }

    set LocationAddress(value) {
        this.setComponentValue('LocationAddress', value);
    }

    get LocationPhone() {
        return this.getComponent('LocationPhone');
    }

    set LocationPhone(value) {
        this.setComponentValue('LocationPhone', value);
    }

    get LicenseNumber() {
        return this.getComponent('LicenseNumber');
    }

    set LicenseNumber(value) {
        this.setComponentValue('LicenseNumber', value);
    }

    get LocationEquipment() {
        return this.getComponent('LocationEquipment');
    }

    set LocationEquipment(value) {
        this.setComponentValue('LocationEquipment', value);
    }

    get LocationServiceCode() {
        return this.getComponent('LocationServiceCode');
    }

    set LocationServiceCode(value) {
        this.setComponentValue('LocationServiceCode', value);
    }
}
