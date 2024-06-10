import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';

export class ROL extends Segment {
    static components = {
        RoleInstanceId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RoleInstanceID: { aliasOf: 'RoleInstanceId' },
        ActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RoleRol: {
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
        Role: { aliasOf: 'RoleRol' },
        RoleROL: { aliasOf: 'RoleRol' },
        RolePerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        RoleBeginDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RoleEndDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RoleDuration: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RoleActionReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RoleAction: { aliasOf: 'RoleActionReason' },
        ProviderType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OrganizationUnitTypeROL: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrganizationUnitType: { aliasOf: 'OrganizationUnitTypeROL' },
        OfficeHomeAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OfficeHomeAddressBirthplace: { aliasOf: 'OfficeHomeAddress' },
        Phone: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 12,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PersonsLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Organization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'RoleInstanceId',
        'ActionCode',
        'RoleRol',
        'RolePerson',
        'RoleBeginDateTime',
        'RoleEndDateTime',
        'RoleDuration',
        'RoleActionReason',
        'ProviderType',
        'OrganizationUnitTypeROL',
        'OfficeHomeAddress',
        'Phone',
        'PersonsLocation',
        'Organization',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ROL');
        this.setValues(values);
    }

    get RoleInstanceId() {
        return this.getComponent('RoleInstanceId');
    }

    set RoleInstanceId(value) {
        this.setComponentValue('RoleInstanceId', value);
    }

    get RoleInstanceID() {
        return this.getComponent('RoleInstanceId');
    }

    set RoleInstanceID(value) {
        this.setComponentValue('RoleInstanceId', value);
    }

    get ActionCode() {
        return this.getComponent('ActionCode');
    }

    set ActionCode(value) {
        this.setComponentValue('ActionCode', value);
    }

    get RoleRol() {
        return this.getComponent('RoleRol');
    }

    set RoleRol(value) {
        this.setComponentValue('RoleRol', value);
    }

    get Role() {
        return this.getComponent('RoleRol');
    }

    set Role(value) {
        this.setComponentValue('RoleRol', value);
    }

    get RoleROL() {
        return this.getComponent('RoleRol');
    }

    set RoleROL(value) {
        this.setComponentValue('RoleRol', value);
    }

    get RolePerson() {
        return this.getComponent('RolePerson');
    }

    set RolePerson(value) {
        this.setComponentValue('RolePerson', value);
    }

    get RoleBeginDateTime() {
        return this.getComponent('RoleBeginDateTime');
    }

    set RoleBeginDateTime(value) {
        this.setComponentValue('RoleBeginDateTime', value);
    }

    get RoleEndDateTime() {
        return this.getComponent('RoleEndDateTime');
    }

    set RoleEndDateTime(value) {
        this.setComponentValue('RoleEndDateTime', value);
    }

    get RoleDuration() {
        return this.getComponent('RoleDuration');
    }

    set RoleDuration(value) {
        this.setComponentValue('RoleDuration', value);
    }

    get RoleActionReason() {
        return this.getComponent('RoleActionReason');
    }

    set RoleActionReason(value) {
        this.setComponentValue('RoleActionReason', value);
    }

    get RoleAction() {
        return this.getComponent('RoleActionReason');
    }

    set RoleAction(value) {
        this.setComponentValue('RoleActionReason', value);
    }

    get ProviderType() {
        return this.getComponent('ProviderType');
    }

    set ProviderType(value) {
        this.setComponentValue('ProviderType', value);
    }

    get OrganizationUnitTypeROL() {
        return this.getComponent('OrganizationUnitTypeROL');
    }

    set OrganizationUnitTypeROL(value) {
        this.setComponentValue('OrganizationUnitTypeROL', value);
    }

    get OrganizationUnitType() {
        return this.getComponent('OrganizationUnitTypeROL');
    }

    set OrganizationUnitType(value) {
        this.setComponentValue('OrganizationUnitTypeROL', value);
    }

    get OfficeHomeAddress() {
        return this.getComponent('OfficeHomeAddress');
    }

    set OfficeHomeAddress(value) {
        this.setComponentValue('OfficeHomeAddress', value);
    }

    get OfficeHomeAddressBirthplace() {
        return this.getComponent('OfficeHomeAddress');
    }

    set OfficeHomeAddressBirthplace(value) {
        this.setComponentValue('OfficeHomeAddress', value);
    }

    get Phone() {
        return this.getComponent('Phone');
    }

    set Phone(value) {
        this.setComponentValue('Phone', value);
    }

    get PersonsLocation() {
        return this.getComponent('PersonsLocation');
    }

    set PersonsLocation(value) {
        this.setComponentValue('PersonsLocation', value);
    }

    get Organization() {
        return this.getComponent('Organization');
    }

    set Organization(value) {
        this.setComponentValue('Organization', value);
    }
}
