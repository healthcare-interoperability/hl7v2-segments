import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';

export class AIP extends Segment {
    static components = {
        SetIdAip: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SegmentActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PersonnelResourceId: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ResourceType: {
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
        ResourceRole: { aliasOf: 'ResourceType' },
        ResourceGroup: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StartDateTime: {
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
        StartDateTimeOffset: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StartDateTimeOffsetUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Duration: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DurationUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AllowSubstitutionCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillerStatusCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdAip',
        'SegmentActionCode',
        'PersonnelResourceId',
        'ResourceType',
        'ResourceGroup',
        'StartDateTime',
        'StartDateTimeOffset',
        'StartDateTimeOffsetUnits',
        'Duration',
        'DurationUnits',
        'AllowSubstitutionCode',
        'FillerStatusCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('AIP');
        this.setValues(values);
    }

    get SetIdAip() {
        return this.getComponent('SetIdAip');
    }

    set SetIdAip(value) {
        this.setComponentValue('SetIdAip', value);
    }

    get SegmentActionCode() {
        return this.getComponent('SegmentActionCode');
    }

    set SegmentActionCode(value) {
        this.setComponentValue('SegmentActionCode', value);
    }

    get PersonnelResourceId() {
        return this.getComponent('PersonnelResourceId');
    }

    set PersonnelResourceId(value) {
        this.setComponentValue('PersonnelResourceId', value);
    }

    get ResourceType() {
        return this.getComponent('ResourceType');
    }

    set ResourceType(value) {
        this.setComponentValue('ResourceType', value);
    }

    get ResourceRole() {
        return this.getComponent('ResourceType');
    }

    set ResourceRole(value) {
        this.setComponentValue('ResourceType', value);
    }

    get ResourceGroup() {
        return this.getComponent('ResourceGroup');
    }

    set ResourceGroup(value) {
        this.setComponentValue('ResourceGroup', value);
    }

    get StartDateTime() {
        return this.getComponent('StartDateTime');
    }

    set StartDateTime(value) {
        this.setComponentValue('StartDateTime', value);
    }

    get StartDateTimeOffset() {
        return this.getComponent('StartDateTimeOffset');
    }

    set StartDateTimeOffset(value) {
        this.setComponentValue('StartDateTimeOffset', value);
    }

    get StartDateTimeOffsetUnits() {
        return this.getComponent('StartDateTimeOffsetUnits');
    }

    set StartDateTimeOffsetUnits(value) {
        this.setComponentValue('StartDateTimeOffsetUnits', value);
    }

    get Duration() {
        return this.getComponent('Duration');
    }

    set Duration(value) {
        this.setComponentValue('Duration', value);
    }

    get DurationUnits() {
        return this.getComponent('DurationUnits');
    }

    set DurationUnits(value) {
        this.setComponentValue('DurationUnits', value);
    }

    get AllowSubstitutionCode() {
        return this.getComponent('AllowSubstitutionCode');
    }

    set AllowSubstitutionCode(value) {
        this.setComponentValue('AllowSubstitutionCode', value);
    }

    get FillerStatusCode() {
        return this.getComponent('FillerStatusCode');
    }

    set FillerStatusCode(value) {
        this.setComponentValue('FillerStatusCode', value);
    }
}
