import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';

export class LRL extends Segment {
    static components = {
        PrimaryKeyValueLrl: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryKeyValue: { aliasOf: 'PrimaryKeyValueLrl' },
        SegmentActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SegmentUniqueKey: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LocationRelationshipId: {
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
        OrganizationalLocationRelationshipValue: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PatientLocationRelationshipValue: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'PrimaryKeyValueLrl',
        'SegmentActionCode',
        'SegmentUniqueKey',
        'LocationRelationshipId',
        'OrganizationalLocationRelationshipValue',
        'PatientLocationRelationshipValue',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('LRL');
        this.setValues(values);
    }

    get PrimaryKeyValueLrl() {
        return this.getComponent('PrimaryKeyValueLrl');
    }

    set PrimaryKeyValueLrl(value) {
        this.setComponentValue('PrimaryKeyValueLrl', value);
    }

    get PrimaryKeyValue() {
        return this.getComponent('PrimaryKeyValueLrl');
    }

    set PrimaryKeyValue(value) {
        this.setComponentValue('PrimaryKeyValueLrl', value);
    }

    get SegmentActionCode() {
        return this.getComponent('SegmentActionCode');
    }

    set SegmentActionCode(value) {
        this.setComponentValue('SegmentActionCode', value);
    }

    get SegmentUniqueKey() {
        return this.getComponent('SegmentUniqueKey');
    }

    set SegmentUniqueKey(value) {
        this.setComponentValue('SegmentUniqueKey', value);
    }

    get LocationRelationshipId() {
        return this.getComponent('LocationRelationshipId');
    }

    set LocationRelationshipId(value) {
        this.setComponentValue('LocationRelationshipId', value);
    }

    get OrganizationalLocationRelationshipValue() {
        return this.getComponent('OrganizationalLocationRelationshipValue');
    }

    set OrganizationalLocationRelationshipValue(value) {
        this.setComponentValue('OrganizationalLocationRelationshipValue', value);
    }

    get PatientLocationRelationshipValue() {
        return this.getComponent('PatientLocationRelationshipValue');
    }

    set PatientLocationRelationshipValue(value) {
        this.setComponentValue('PatientLocationRelationshipValue', value);
    }
}
