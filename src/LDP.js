import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { VH } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';

export class LDP extends Segment {
    static components = {
        PrimaryKeyValueLdp: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LdpPrimaryKeyValue: { aliasOf: 'PrimaryKeyValueLdp' },
        LocationDepartment: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LocationService: {
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
        SpecialtyType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecialityType: { aliasOf: 'SpecialtyType' },
        ValidPatientClasses: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ActiveInactiveFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActivationDateLdp: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActivationDate: { aliasOf: 'ActivationDateLdp' },
        InactivationDateLdp: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InactivatedReason: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VisitingHours: {
            defaultDataType: VH,
            dataTypes: [{ dataType: VH, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactPhone: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LocationCostCenter: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'PrimaryKeyValueLdp',
        'LocationDepartment',
        'LocationService',
        'SpecialtyType',
        'ValidPatientClasses',
        'ActiveInactiveFlag',
        'ActivationDateLdp',
        'InactivationDateLdp',
        'InactivatedReason',
        'VisitingHours',
        'ContactPhone',
        'LocationCostCenter',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('LDP');
        this.setValues(values);
    }

    get PrimaryKeyValueLdp() {
        return this.getComponent('PrimaryKeyValueLdp');
    }

    set PrimaryKeyValueLdp(value) {
        this.setComponentValue('PrimaryKeyValueLdp', value);
    }

    get LdpPrimaryKeyValue() {
        return this.getComponent('PrimaryKeyValueLdp');
    }

    set LdpPrimaryKeyValue(value) {
        this.setComponentValue('PrimaryKeyValueLdp', value);
    }

    get LocationDepartment() {
        return this.getComponent('LocationDepartment');
    }

    set LocationDepartment(value) {
        this.setComponentValue('LocationDepartment', value);
    }

    get LocationService() {
        return this.getComponent('LocationService');
    }

    set LocationService(value) {
        this.setComponentValue('LocationService', value);
    }

    get SpecialtyType() {
        return this.getComponent('SpecialtyType');
    }

    set SpecialtyType(value) {
        this.setComponentValue('SpecialtyType', value);
    }

    get SpecialityType() {
        return this.getComponent('SpecialtyType');
    }

    set SpecialityType(value) {
        this.setComponentValue('SpecialtyType', value);
    }

    get ValidPatientClasses() {
        return this.getComponent('ValidPatientClasses');
    }

    set ValidPatientClasses(value) {
        this.setComponentValue('ValidPatientClasses', value);
    }

    get ActiveInactiveFlag() {
        return this.getComponent('ActiveInactiveFlag');
    }

    set ActiveInactiveFlag(value) {
        this.setComponentValue('ActiveInactiveFlag', value);
    }

    get ActivationDateLdp() {
        return this.getComponent('ActivationDateLdp');
    }

    set ActivationDateLdp(value) {
        this.setComponentValue('ActivationDateLdp', value);
    }

    get ActivationDate() {
        return this.getComponent('ActivationDateLdp');
    }

    set ActivationDate(value) {
        this.setComponentValue('ActivationDateLdp', value);
    }

    get InactivationDateLdp() {
        return this.getComponent('InactivationDateLdp');
    }

    set InactivationDateLdp(value) {
        this.setComponentValue('InactivationDateLdp', value);
    }

    get InactivatedReason() {
        return this.getComponent('InactivatedReason');
    }

    set InactivatedReason(value) {
        this.setComponentValue('InactivatedReason', value);
    }

    get VisitingHours() {
        return this.getComponent('VisitingHours');
    }

    set VisitingHours(value) {
        this.setComponentValue('VisitingHours', value);
    }

    get ContactPhone() {
        return this.getComponent('ContactPhone');
    }

    set ContactPhone(value) {
        this.setComponentValue('ContactPhone', value);
    }

    get LocationCostCenter() {
        return this.getComponent('LocationCostCenter');
    }

    set LocationCostCenter(value) {
        this.setComponentValue('LocationCostCenter', value);
    }
}
