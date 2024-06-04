import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';

export class DB1 extends Segment {
    static components = {
        SetIdDb1: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DisabledPersonCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DisabledPersonIdentifier: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DisabilityIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DisabledIndicator: { aliasOf: 'DisabilityIndicator' },
        DisabilityStartDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DisabilityEndDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DisabilityReturnToWorkDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DisabilityUnableToWorkDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdDb1',
        'DisabledPersonCode',
        'DisabledPersonIdentifier',
        'DisabilityIndicator',
        'DisabilityStartDate',
        'DisabilityEndDate',
        'DisabilityReturnToWorkDate',
        'DisabilityUnableToWorkDate',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('DB1');
        this.setValues(values);
    }

    get SetIdDb1() {
        return this.getComponent('SetIdDb1');
    }

    set SetIdDb1(value) {
        this.setComponentValue('SetIdDb1', value);
    }

    get DisabledPersonCode() {
        return this.getComponent('DisabledPersonCode');
    }

    set DisabledPersonCode(value) {
        this.setComponentValue('DisabledPersonCode', value);
    }

    get DisabledPersonIdentifier() {
        return this.getComponent('DisabledPersonIdentifier');
    }

    set DisabledPersonIdentifier(value) {
        this.setComponentValue('DisabledPersonIdentifier', value);
    }

    get DisabilityIndicator() {
        return this.getComponent('DisabilityIndicator');
    }

    set DisabilityIndicator(value) {
        this.setComponentValue('DisabilityIndicator', value);
    }

    get DisabledIndicator() {
        return this.getComponent('DisabilityIndicator');
    }

    set DisabledIndicator(value) {
        this.setComponentValue('DisabilityIndicator', value);
    }

    get DisabilityStartDate() {
        return this.getComponent('DisabilityStartDate');
    }

    set DisabilityStartDate(value) {
        this.setComponentValue('DisabilityStartDate', value);
    }

    get DisabilityEndDate() {
        return this.getComponent('DisabilityEndDate');
    }

    set DisabilityEndDate(value) {
        this.setComponentValue('DisabilityEndDate', value);
    }

    get DisabilityReturnToWorkDate() {
        return this.getComponent('DisabilityReturnToWorkDate');
    }

    set DisabilityReturnToWorkDate(value) {
        this.setComponentValue('DisabilityReturnToWorkDate', value);
    }

    get DisabilityUnableToWorkDate() {
        return this.getComponent('DisabilityUnableToWorkDate');
    }

    set DisabilityUnableToWorkDate(value) {
        this.setComponentValue('DisabilityUnableToWorkDate', value);
    }
}
