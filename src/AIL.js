import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';

export class AIL extends Segment {
    static components = {
        SetIdAil: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDAIL: { aliasOf: 'SetIdAil' },
        SegmentActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LocationResourceId: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        LocationResourceID: { aliasOf: 'LocationResourceId' },
        LocationTypeAil: {
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
        LocationType: { aliasOf: 'LocationTypeAil' },
        LocationTypeAIL: { aliasOf: 'LocationTypeAil' },
        LocationGroup: {
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
        'SetIdAil',
        'SegmentActionCode',
        'LocationResourceId',
        'LocationTypeAil',
        'LocationGroup',
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
        this.setSegmentType('AIL');
        this.setValues(values);
    }

    get SetIdAil() {
        return this.getComponent('SetIdAil');
    }

    set SetIdAil(value) {
        this.setComponentValue('SetIdAil', value);
    }

    get SetIDAIL() {
        return this.getComponent('SetIdAil');
    }

    set SetIDAIL(value) {
        this.setComponentValue('SetIdAil', value);
    }

    get SegmentActionCode() {
        return this.getComponent('SegmentActionCode');
    }

    set SegmentActionCode(value) {
        this.setComponentValue('SegmentActionCode', value);
    }

    get LocationResourceId() {
        return this.getComponent('LocationResourceId');
    }

    set LocationResourceId(value) {
        this.setComponentValue('LocationResourceId', value);
    }

    get LocationResourceID() {
        return this.getComponent('LocationResourceId');
    }

    set LocationResourceID(value) {
        this.setComponentValue('LocationResourceId', value);
    }

    get LocationTypeAil() {
        return this.getComponent('LocationTypeAil');
    }

    set LocationTypeAil(value) {
        this.setComponentValue('LocationTypeAil', value);
    }

    get LocationType() {
        return this.getComponent('LocationTypeAil');
    }

    set LocationType(value) {
        this.setComponentValue('LocationTypeAil', value);
    }

    get LocationTypeAIL() {
        return this.getComponent('LocationTypeAil');
    }

    set LocationTypeAIL(value) {
        this.setComponentValue('LocationTypeAil', value);
    }

    get LocationGroup() {
        return this.getComponent('LocationGroup');
    }

    set LocationGroup(value) {
        this.setComponentValue('LocationGroup', value);
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
