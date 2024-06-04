import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class ABS extends Segment {
    static components = {
        DischargeCareProvider: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransferMedicalServiceCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SeverityOfIllnessCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateTimeOfAttestation: {
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
        AttestedBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TriageCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AbstractCompletionDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AbstractedBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CaseCategoryCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CaesarianSectionIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GestationCategoryCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GestationPeriodWeeks: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NewbornCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StillbornIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'DischargeCareProvider',
        'TransferMedicalServiceCode',
        'SeverityOfIllnessCode',
        'DateTimeOfAttestation',
        'AttestedBy',
        'TriageCode',
        'AbstractCompletionDateTime',
        'AbstractedBy',
        'CaseCategoryCode',
        'CaesarianSectionIndicator',
        'GestationCategoryCode',
        'GestationPeriodWeeks',
        'NewbornCode',
        'StillbornIndicator',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ABS');
        this.setValues(values);
    }

    get DischargeCareProvider() {
        return this.getComponent('DischargeCareProvider');
    }

    set DischargeCareProvider(value) {
        this.setComponentValue('DischargeCareProvider', value);
    }

    get TransferMedicalServiceCode() {
        return this.getComponent('TransferMedicalServiceCode');
    }

    set TransferMedicalServiceCode(value) {
        this.setComponentValue('TransferMedicalServiceCode', value);
    }

    get SeverityOfIllnessCode() {
        return this.getComponent('SeverityOfIllnessCode');
    }

    set SeverityOfIllnessCode(value) {
        this.setComponentValue('SeverityOfIllnessCode', value);
    }

    get DateTimeOfAttestation() {
        return this.getComponent('DateTimeOfAttestation');
    }

    set DateTimeOfAttestation(value) {
        this.setComponentValue('DateTimeOfAttestation', value);
    }

    get AttestedBy() {
        return this.getComponent('AttestedBy');
    }

    set AttestedBy(value) {
        this.setComponentValue('AttestedBy', value);
    }

    get TriageCode() {
        return this.getComponent('TriageCode');
    }

    set TriageCode(value) {
        this.setComponentValue('TriageCode', value);
    }

    get AbstractCompletionDateTime() {
        return this.getComponent('AbstractCompletionDateTime');
    }

    set AbstractCompletionDateTime(value) {
        this.setComponentValue('AbstractCompletionDateTime', value);
    }

    get AbstractedBy() {
        return this.getComponent('AbstractedBy');
    }

    set AbstractedBy(value) {
        this.setComponentValue('AbstractedBy', value);
    }

    get CaseCategoryCode() {
        return this.getComponent('CaseCategoryCode');
    }

    set CaseCategoryCode(value) {
        this.setComponentValue('CaseCategoryCode', value);
    }

    get CaesarianSectionIndicator() {
        return this.getComponent('CaesarianSectionIndicator');
    }

    set CaesarianSectionIndicator(value) {
        this.setComponentValue('CaesarianSectionIndicator', value);
    }

    get GestationCategoryCode() {
        return this.getComponent('GestationCategoryCode');
    }

    set GestationCategoryCode(value) {
        this.setComponentValue('GestationCategoryCode', value);
    }

    get GestationPeriodWeeks() {
        return this.getComponent('GestationPeriodWeeks');
    }

    set GestationPeriodWeeks(value) {
        this.setComponentValue('GestationPeriodWeeks', value);
    }

    get NewbornCode() {
        return this.getComponent('NewbornCode');
    }

    set NewbornCode(value) {
        this.setComponentValue('NewbornCode', value);
    }

    get StillbornIndicator() {
        return this.getComponent('StillbornIndicator');
    }

    set StillbornIndicator(value) {
        this.setComponentValue('StillbornIndicator', value);
    }
}
