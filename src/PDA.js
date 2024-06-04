import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DR } from '@healthcare-interoperability/hl7v2-datatypes';

export class PDA extends Segment {
    static components = {
        DeathCauseCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DeathLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeathCertifiedIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeathCertificateSignedDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeathCertifiedBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AutopsyIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AutopsyStartAndEndDateTime: {
            defaultDataType: DR,
            dataTypes: [{ dataType: DR, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AutopsyPerformedBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CoronerIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'DeathCauseCode',
        'DeathLocation',
        'DeathCertifiedIndicator',
        'DeathCertificateSignedDateTime',
        'DeathCertifiedBy',
        'AutopsyIndicator',
        'AutopsyStartAndEndDateTime',
        'AutopsyPerformedBy',
        'CoronerIndicator',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PDA');
        this.setValues(values);
    }

    get DeathCauseCode() {
        return this.getComponent('DeathCauseCode');
    }

    set DeathCauseCode(value) {
        this.setComponentValue('DeathCauseCode', value);
    }

    get DeathLocation() {
        return this.getComponent('DeathLocation');
    }

    set DeathLocation(value) {
        this.setComponentValue('DeathLocation', value);
    }

    get DeathCertifiedIndicator() {
        return this.getComponent('DeathCertifiedIndicator');
    }

    set DeathCertifiedIndicator(value) {
        this.setComponentValue('DeathCertifiedIndicator', value);
    }

    get DeathCertificateSignedDateTime() {
        return this.getComponent('DeathCertificateSignedDateTime');
    }

    set DeathCertificateSignedDateTime(value) {
        this.setComponentValue('DeathCertificateSignedDateTime', value);
    }

    get DeathCertifiedBy() {
        return this.getComponent('DeathCertifiedBy');
    }

    set DeathCertifiedBy(value) {
        this.setComponentValue('DeathCertifiedBy', value);
    }

    get AutopsyIndicator() {
        return this.getComponent('AutopsyIndicator');
    }

    set AutopsyIndicator(value) {
        this.setComponentValue('AutopsyIndicator', value);
    }

    get AutopsyStartAndEndDateTime() {
        return this.getComponent('AutopsyStartAndEndDateTime');
    }

    set AutopsyStartAndEndDateTime(value) {
        this.setComponentValue('AutopsyStartAndEndDateTime', value);
    }

    get AutopsyPerformedBy() {
        return this.getComponent('AutopsyPerformedBy');
    }

    set AutopsyPerformedBy(value) {
        this.setComponentValue('AutopsyPerformedBy', value);
    }

    get CoronerIndicator() {
        return this.getComponent('CoronerIndicator');
    }

    set CoronerIndicator(value) {
        this.setComponentValue('CoronerIndicator', value);
    }
}
