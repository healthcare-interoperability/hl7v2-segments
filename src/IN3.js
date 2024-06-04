import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { MOP } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_PEN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_DTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ICD } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_PCF } from '@healthcare-interoperability/hl7v2-datatypes';
import { PCF } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';

export class IN3 extends Segment {
    static components = {
        SetIdIn3: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIdInsuranceCertification: { aliasOf: 'SetIdIn3' },
        CertificationNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertifiedBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CertificationRequired: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Penalty: {
            defaultDataType: MOP,
            dataTypes: [
                { dataType: MOP, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_PEN, versions: ['2.3', '2.3.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertificationDateTime: {
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
        CertificationModifyDateTime: {
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
        Operator: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CertificationBeginDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertificationEndDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Days: {
            defaultDataType: DTN,
            dataTypes: [
                { dataType: DTN, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_DTN, versions: ['2.3'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NonConcurCodeDescription: {
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
        NonConcurEffectiveDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PhysicianReviewer: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CertificationContact: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertificationContactPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AppealReason: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertificationAgency: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertificationAgencyPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PreCertificationRequirement: {
            defaultDataType: ICD,
            dataTypes: [
                { dataType: ICD, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_PCF, versions: ['2.3'] },
                { dataType: PCF, versions: ['2.3.1', '2.4'] },
            ],
            position: 20,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PreCertificationRequiredWindow: { aliasOf: 'PreCertificationRequirement' },
        PreCertificationReqWindow: { aliasOf: 'PreCertificationRequirement' },
        CaseManager: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SecondOpinionDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SecondOpinionStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SecondOpinionDocumentationReceived: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 24,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SecondOpinionPhysician: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CertificationType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertificationCategory: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdIn3',
        'CertificationNumber',
        'CertifiedBy',
        'CertificationRequired',
        'Penalty',
        'CertificationDateTime',
        'CertificationModifyDateTime',
        'Operator',
        'CertificationBeginDate',
        'CertificationEndDate',
        'Days',
        'NonConcurCodeDescription',
        'NonConcurEffectiveDateTime',
        'PhysicianReviewer',
        'CertificationContact',
        'CertificationContactPhoneNumber',
        'AppealReason',
        'CertificationAgency',
        'CertificationAgencyPhoneNumber',
        'PreCertificationRequirement',
        'CaseManager',
        'SecondOpinionDate',
        'SecondOpinionStatus',
        'SecondOpinionDocumentationReceived',
        'SecondOpinionPhysician',
        'CertificationType',
        'CertificationCategory',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('IN3');
        this.setValues(values);
    }

    get SetIdIn3() {
        return this.getComponent('SetIdIn3');
    }

    set SetIdIn3(value) {
        this.setComponentValue('SetIdIn3', value);
    }

    get SetIdInsuranceCertification() {
        return this.getComponent('SetIdIn3');
    }

    set SetIdInsuranceCertification(value) {
        this.setComponentValue('SetIdIn3', value);
    }

    get CertificationNumber() {
        return this.getComponent('CertificationNumber');
    }

    set CertificationNumber(value) {
        this.setComponentValue('CertificationNumber', value);
    }

    get CertifiedBy() {
        return this.getComponent('CertifiedBy');
    }

    set CertifiedBy(value) {
        this.setComponentValue('CertifiedBy', value);
    }

    get CertificationRequired() {
        return this.getComponent('CertificationRequired');
    }

    set CertificationRequired(value) {
        this.setComponentValue('CertificationRequired', value);
    }

    get Penalty() {
        return this.getComponent('Penalty');
    }

    set Penalty(value) {
        this.setComponentValue('Penalty', value);
    }

    get CertificationDateTime() {
        return this.getComponent('CertificationDateTime');
    }

    set CertificationDateTime(value) {
        this.setComponentValue('CertificationDateTime', value);
    }

    get CertificationModifyDateTime() {
        return this.getComponent('CertificationModifyDateTime');
    }

    set CertificationModifyDateTime(value) {
        this.setComponentValue('CertificationModifyDateTime', value);
    }

    get Operator() {
        return this.getComponent('Operator');
    }

    set Operator(value) {
        this.setComponentValue('Operator', value);
    }

    get CertificationBeginDate() {
        return this.getComponent('CertificationBeginDate');
    }

    set CertificationBeginDate(value) {
        this.setComponentValue('CertificationBeginDate', value);
    }

    get CertificationEndDate() {
        return this.getComponent('CertificationEndDate');
    }

    set CertificationEndDate(value) {
        this.setComponentValue('CertificationEndDate', value);
    }

    get Days() {
        return this.getComponent('Days');
    }

    set Days(value) {
        this.setComponentValue('Days', value);
    }

    get NonConcurCodeDescription() {
        return this.getComponent('NonConcurCodeDescription');
    }

    set NonConcurCodeDescription(value) {
        this.setComponentValue('NonConcurCodeDescription', value);
    }

    get NonConcurEffectiveDateTime() {
        return this.getComponent('NonConcurEffectiveDateTime');
    }

    set NonConcurEffectiveDateTime(value) {
        this.setComponentValue('NonConcurEffectiveDateTime', value);
    }

    get PhysicianReviewer() {
        return this.getComponent('PhysicianReviewer');
    }

    set PhysicianReviewer(value) {
        this.setComponentValue('PhysicianReviewer', value);
    }

    get CertificationContact() {
        return this.getComponent('CertificationContact');
    }

    set CertificationContact(value) {
        this.setComponentValue('CertificationContact', value);
    }

    get CertificationContactPhoneNumber() {
        return this.getComponent('CertificationContactPhoneNumber');
    }

    set CertificationContactPhoneNumber(value) {
        this.setComponentValue('CertificationContactPhoneNumber', value);
    }

    get AppealReason() {
        return this.getComponent('AppealReason');
    }

    set AppealReason(value) {
        this.setComponentValue('AppealReason', value);
    }

    get CertificationAgency() {
        return this.getComponent('CertificationAgency');
    }

    set CertificationAgency(value) {
        this.setComponentValue('CertificationAgency', value);
    }

    get CertificationAgencyPhoneNumber() {
        return this.getComponent('CertificationAgencyPhoneNumber');
    }

    set CertificationAgencyPhoneNumber(value) {
        this.setComponentValue('CertificationAgencyPhoneNumber', value);
    }

    get PreCertificationRequirement() {
        return this.getComponent('PreCertificationRequirement');
    }

    set PreCertificationRequirement(value) {
        this.setComponentValue('PreCertificationRequirement', value);
    }

    get PreCertificationRequiredWindow() {
        return this.getComponent('PreCertificationRequirement');
    }

    set PreCertificationRequiredWindow(value) {
        this.setComponentValue('PreCertificationRequirement', value);
    }

    get PreCertificationReqWindow() {
        return this.getComponent('PreCertificationRequirement');
    }

    set PreCertificationReqWindow(value) {
        this.setComponentValue('PreCertificationRequirement', value);
    }

    get CaseManager() {
        return this.getComponent('CaseManager');
    }

    set CaseManager(value) {
        this.setComponentValue('CaseManager', value);
    }

    get SecondOpinionDate() {
        return this.getComponent('SecondOpinionDate');
    }

    set SecondOpinionDate(value) {
        this.setComponentValue('SecondOpinionDate', value);
    }

    get SecondOpinionStatus() {
        return this.getComponent('SecondOpinionStatus');
    }

    set SecondOpinionStatus(value) {
        this.setComponentValue('SecondOpinionStatus', value);
    }

    get SecondOpinionDocumentationReceived() {
        return this.getComponent('SecondOpinionDocumentationReceived');
    }

    set SecondOpinionDocumentationReceived(value) {
        this.setComponentValue('SecondOpinionDocumentationReceived', value);
    }

    get SecondOpinionPhysician() {
        return this.getComponent('SecondOpinionPhysician');
    }

    set SecondOpinionPhysician(value) {
        this.setComponentValue('SecondOpinionPhysician', value);
    }

    get CertificationType() {
        return this.getComponent('CertificationType');
    }

    set CertificationType(value) {
        this.setComponentValue('CertificationType', value);
    }

    get CertificationCategory() {
        return this.getComponent('CertificationCategory');
    }

    set CertificationCategory(value) {
        this.setComponentValue('CertificationCategory', value);
    }
}
