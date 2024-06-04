import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';

export class CSR extends Segment {
    static components = {
        SponsorStudyId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AlternateStudyId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InstitutionRegisteringThePatient: {
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
        SponsorPatientId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AlternatePatientIdCsr: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AlternatePatientId: { aliasOf: 'AlternatePatientIdCsr' },
        DateTimeOfPatientStudyRegistration: {
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
        PersonPerformingStudyRegistration: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        StudyAuthorizingProvider: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        DateTimePatientStudyConsentSigned: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientStudyEligibilityStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StudyRandomizationDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: true,
            maxOccurence: 3,
            minOccurence: 1,
        },
        RandomizedStudyArm: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: true,
            maxOccurence: 3,
            minOccurence: 1,
        },
        StudyRandomizedArm: { aliasOf: 'RandomizedStudyArm' },
        StratumForStudyRandomization: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: true,
            maxOccurence: 3,
            minOccurence: 1,
        },
        PatientEvaluabilityStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateTimeEndedStudy: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReasonEndedStudy: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SponsorStudyId',
        'AlternateStudyId',
        'InstitutionRegisteringThePatient',
        'SponsorPatientId',
        'AlternatePatientIdCsr',
        'DateTimeOfPatientStudyRegistration',
        'PersonPerformingStudyRegistration',
        'StudyAuthorizingProvider',
        'DateTimePatientStudyConsentSigned',
        'PatientStudyEligibilityStatus',
        'StudyRandomizationDateTime',
        'RandomizedStudyArm',
        'StratumForStudyRandomization',
        'PatientEvaluabilityStatus',
        'DateTimeEndedStudy',
        'ReasonEndedStudy',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CSR');
        this.setValues(values);
    }

    get SponsorStudyId() {
        return this.getComponent('SponsorStudyId');
    }

    set SponsorStudyId(value) {
        this.setComponentValue('SponsorStudyId', value);
    }

    get AlternateStudyId() {
        return this.getComponent('AlternateStudyId');
    }

    set AlternateStudyId(value) {
        this.setComponentValue('AlternateStudyId', value);
    }

    get InstitutionRegisteringThePatient() {
        return this.getComponent('InstitutionRegisteringThePatient');
    }

    set InstitutionRegisteringThePatient(value) {
        this.setComponentValue('InstitutionRegisteringThePatient', value);
    }

    get SponsorPatientId() {
        return this.getComponent('SponsorPatientId');
    }

    set SponsorPatientId(value) {
        this.setComponentValue('SponsorPatientId', value);
    }

    get AlternatePatientIdCsr() {
        return this.getComponent('AlternatePatientIdCsr');
    }

    set AlternatePatientIdCsr(value) {
        this.setComponentValue('AlternatePatientIdCsr', value);
    }

    get AlternatePatientId() {
        return this.getComponent('AlternatePatientIdCsr');
    }

    set AlternatePatientId(value) {
        this.setComponentValue('AlternatePatientIdCsr', value);
    }

    get DateTimeOfPatientStudyRegistration() {
        return this.getComponent('DateTimeOfPatientStudyRegistration');
    }

    set DateTimeOfPatientStudyRegistration(value) {
        this.setComponentValue('DateTimeOfPatientStudyRegistration', value);
    }

    get PersonPerformingStudyRegistration() {
        return this.getComponent('PersonPerformingStudyRegistration');
    }

    set PersonPerformingStudyRegistration(value) {
        this.setComponentValue('PersonPerformingStudyRegistration', value);
    }

    get StudyAuthorizingProvider() {
        return this.getComponent('StudyAuthorizingProvider');
    }

    set StudyAuthorizingProvider(value) {
        this.setComponentValue('StudyAuthorizingProvider', value);
    }

    get DateTimePatientStudyConsentSigned() {
        return this.getComponent('DateTimePatientStudyConsentSigned');
    }

    set DateTimePatientStudyConsentSigned(value) {
        this.setComponentValue('DateTimePatientStudyConsentSigned', value);
    }

    get PatientStudyEligibilityStatus() {
        return this.getComponent('PatientStudyEligibilityStatus');
    }

    set PatientStudyEligibilityStatus(value) {
        this.setComponentValue('PatientStudyEligibilityStatus', value);
    }

    get StudyRandomizationDateTime() {
        return this.getComponent('StudyRandomizationDateTime');
    }

    set StudyRandomizationDateTime(value) {
        this.setComponentValue('StudyRandomizationDateTime', value);
    }

    get RandomizedStudyArm() {
        return this.getComponent('RandomizedStudyArm');
    }

    set RandomizedStudyArm(value) {
        this.setComponentValue('RandomizedStudyArm', value);
    }

    get StudyRandomizedArm() {
        return this.getComponent('RandomizedStudyArm');
    }

    set StudyRandomizedArm(value) {
        this.setComponentValue('RandomizedStudyArm', value);
    }

    get StratumForStudyRandomization() {
        return this.getComponent('StratumForStudyRandomization');
    }

    set StratumForStudyRandomization(value) {
        this.setComponentValue('StratumForStudyRandomization', value);
    }

    get PatientEvaluabilityStatus() {
        return this.getComponent('PatientEvaluabilityStatus');
    }

    set PatientEvaluabilityStatus(value) {
        this.setComponentValue('PatientEvaluabilityStatus', value);
    }

    get DateTimeEndedStudy() {
        return this.getComponent('DateTimeEndedStudy');
    }

    set DateTimeEndedStudy(value) {
        this.setComponentValue('DateTimeEndedStudy', value);
    }

    get ReasonEndedStudy() {
        return this.getComponent('ReasonEndedStudy');
    }

    set ReasonEndedStudy(value) {
        this.setComponentValue('ReasonEndedStudy', value);
    }
}
