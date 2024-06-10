import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { FT } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';

export class CON extends Segment {
    static components = {
        SetIdCon: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDCON: { aliasOf: 'SetIdCon' },
        ConsentType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentFormIdAndVersion: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentFormID: { aliasOf: 'ConsentFormIdAndVersion' },
        ConsentFormIDAndVersion: { aliasOf: 'ConsentFormIdAndVersion' },
        ConsentFormNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentText: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SubjectSpecificConsentText: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ConsentBackgroundInformation: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ConsentBackground: { aliasOf: 'ConsentBackgroundInformation' },
        SubjectSpecificConsentBackgroundText: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SubjectSpecificConsentBackground: { aliasOf: 'SubjectSpecificConsentBackgroundText' },
        ConsenterImposedLimitations: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ConsentMode: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentStatus: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentDiscussionDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentDecisionDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentEffectiveDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentEndDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubjectCompetenceIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TranslatorAssistanceIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LanguageTranslatedTo: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InformationalMaterialSuppliedIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentBypassReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentDisclosureLevel: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsentNonDisclosureReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NonSubjectConsenterReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConsenterId: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ConsenterID: { aliasOf: 'ConsenterId' },
        RelationshipToSubject: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.5', '2.5.1', '2.6'] },
            ],
            position: 25,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        RelationshipToSubjectTable: { aliasOf: 'RelationshipToSubject' },
    };

    static componentsByIndex = [
        '',
        'SetIdCon',
        'ConsentType',
        'ConsentFormIdAndVersion',
        'ConsentFormNumber',
        'ConsentText',
        'SubjectSpecificConsentText',
        'ConsentBackgroundInformation',
        'SubjectSpecificConsentBackgroundText',
        'ConsenterImposedLimitations',
        'ConsentMode',
        'ConsentStatus',
        'ConsentDiscussionDateTime',
        'ConsentDecisionDateTime',
        'ConsentEffectiveDateTime',
        'ConsentEndDateTime',
        'SubjectCompetenceIndicator',
        'TranslatorAssistanceIndicator',
        'LanguageTranslatedTo',
        'InformationalMaterialSuppliedIndicator',
        'ConsentBypassReason',
        'ConsentDisclosureLevel',
        'ConsentNonDisclosureReason',
        'NonSubjectConsenterReason',
        'ConsenterId',
        'RelationshipToSubject',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CON');
        this.setValues(values);
    }

    get SetIdCon() {
        return this.getComponent('SetIdCon');
    }

    set SetIdCon(value) {
        this.setComponentValue('SetIdCon', value);
    }

    get SetIDCON() {
        return this.getComponent('SetIdCon');
    }

    set SetIDCON(value) {
        this.setComponentValue('SetIdCon', value);
    }

    get ConsentType() {
        return this.getComponent('ConsentType');
    }

    set ConsentType(value) {
        this.setComponentValue('ConsentType', value);
    }

    get ConsentFormIdAndVersion() {
        return this.getComponent('ConsentFormIdAndVersion');
    }

    set ConsentFormIdAndVersion(value) {
        this.setComponentValue('ConsentFormIdAndVersion', value);
    }

    get ConsentFormID() {
        return this.getComponent('ConsentFormIdAndVersion');
    }

    set ConsentFormID(value) {
        this.setComponentValue('ConsentFormIdAndVersion', value);
    }

    get ConsentFormIDAndVersion() {
        return this.getComponent('ConsentFormIdAndVersion');
    }

    set ConsentFormIDAndVersion(value) {
        this.setComponentValue('ConsentFormIdAndVersion', value);
    }

    get ConsentFormNumber() {
        return this.getComponent('ConsentFormNumber');
    }

    set ConsentFormNumber(value) {
        this.setComponentValue('ConsentFormNumber', value);
    }

    get ConsentText() {
        return this.getComponent('ConsentText');
    }

    set ConsentText(value) {
        this.setComponentValue('ConsentText', value);
    }

    get SubjectSpecificConsentText() {
        return this.getComponent('SubjectSpecificConsentText');
    }

    set SubjectSpecificConsentText(value) {
        this.setComponentValue('SubjectSpecificConsentText', value);
    }

    get ConsentBackgroundInformation() {
        return this.getComponent('ConsentBackgroundInformation');
    }

    set ConsentBackgroundInformation(value) {
        this.setComponentValue('ConsentBackgroundInformation', value);
    }

    get ConsentBackground() {
        return this.getComponent('ConsentBackgroundInformation');
    }

    set ConsentBackground(value) {
        this.setComponentValue('ConsentBackgroundInformation', value);
    }

    get SubjectSpecificConsentBackgroundText() {
        return this.getComponent('SubjectSpecificConsentBackgroundText');
    }

    set SubjectSpecificConsentBackgroundText(value) {
        this.setComponentValue('SubjectSpecificConsentBackgroundText', value);
    }

    get SubjectSpecificConsentBackground() {
        return this.getComponent('SubjectSpecificConsentBackgroundText');
    }

    set SubjectSpecificConsentBackground(value) {
        this.setComponentValue('SubjectSpecificConsentBackgroundText', value);
    }

    get ConsenterImposedLimitations() {
        return this.getComponent('ConsenterImposedLimitations');
    }

    set ConsenterImposedLimitations(value) {
        this.setComponentValue('ConsenterImposedLimitations', value);
    }

    get ConsentMode() {
        return this.getComponent('ConsentMode');
    }

    set ConsentMode(value) {
        this.setComponentValue('ConsentMode', value);
    }

    get ConsentStatus() {
        return this.getComponent('ConsentStatus');
    }

    set ConsentStatus(value) {
        this.setComponentValue('ConsentStatus', value);
    }

    get ConsentDiscussionDateTime() {
        return this.getComponent('ConsentDiscussionDateTime');
    }

    set ConsentDiscussionDateTime(value) {
        this.setComponentValue('ConsentDiscussionDateTime', value);
    }

    get ConsentDecisionDateTime() {
        return this.getComponent('ConsentDecisionDateTime');
    }

    set ConsentDecisionDateTime(value) {
        this.setComponentValue('ConsentDecisionDateTime', value);
    }

    get ConsentEffectiveDateTime() {
        return this.getComponent('ConsentEffectiveDateTime');
    }

    set ConsentEffectiveDateTime(value) {
        this.setComponentValue('ConsentEffectiveDateTime', value);
    }

    get ConsentEndDateTime() {
        return this.getComponent('ConsentEndDateTime');
    }

    set ConsentEndDateTime(value) {
        this.setComponentValue('ConsentEndDateTime', value);
    }

    get SubjectCompetenceIndicator() {
        return this.getComponent('SubjectCompetenceIndicator');
    }

    set SubjectCompetenceIndicator(value) {
        this.setComponentValue('SubjectCompetenceIndicator', value);
    }

    get TranslatorAssistanceIndicator() {
        return this.getComponent('TranslatorAssistanceIndicator');
    }

    set TranslatorAssistanceIndicator(value) {
        this.setComponentValue('TranslatorAssistanceIndicator', value);
    }

    get LanguageTranslatedTo() {
        return this.getComponent('LanguageTranslatedTo');
    }

    set LanguageTranslatedTo(value) {
        this.setComponentValue('LanguageTranslatedTo', value);
    }

    get InformationalMaterialSuppliedIndicator() {
        return this.getComponent('InformationalMaterialSuppliedIndicator');
    }

    set InformationalMaterialSuppliedIndicator(value) {
        this.setComponentValue('InformationalMaterialSuppliedIndicator', value);
    }

    get ConsentBypassReason() {
        return this.getComponent('ConsentBypassReason');
    }

    set ConsentBypassReason(value) {
        this.setComponentValue('ConsentBypassReason', value);
    }

    get ConsentDisclosureLevel() {
        return this.getComponent('ConsentDisclosureLevel');
    }

    set ConsentDisclosureLevel(value) {
        this.setComponentValue('ConsentDisclosureLevel', value);
    }

    get ConsentNonDisclosureReason() {
        return this.getComponent('ConsentNonDisclosureReason');
    }

    set ConsentNonDisclosureReason(value) {
        this.setComponentValue('ConsentNonDisclosureReason', value);
    }

    get NonSubjectConsenterReason() {
        return this.getComponent('NonSubjectConsenterReason');
    }

    set NonSubjectConsenterReason(value) {
        this.setComponentValue('NonSubjectConsenterReason', value);
    }

    get ConsenterId() {
        return this.getComponent('ConsenterId');
    }

    set ConsenterId(value) {
        this.setComponentValue('ConsenterId', value);
    }

    get ConsenterID() {
        return this.getComponent('ConsenterId');
    }

    set ConsenterID(value) {
        this.setComponentValue('ConsenterId', value);
    }

    get RelationshipToSubject() {
        return this.getComponent('RelationshipToSubject');
    }

    set RelationshipToSubject(value) {
        this.setComponentValue('RelationshipToSubject', value);
    }

    get RelationshipToSubjectTable() {
        return this.getComponent('RelationshipToSubject');
    }

    set RelationshipToSubjectTable(value) {
        this.setComponentValue('RelationshipToSubject', value);
    }
}
