import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';

export class CM0 extends Segment {
    static components = {
        SetIdCm0: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Cm0SetID: { aliasOf: 'SetIdCm0' },
        SetIDCm0: { aliasOf: 'SetIdCm0' },
        SponsorStudyId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SponsorStudyID: { aliasOf: 'SponsorStudyId' },
        AlternateStudyId: {
            defaultDataType: EI,
            dataTypes: [
                { dataType: EI, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3'] },
            ],
            position: 3,
            isArray: true,
            maxOccurence: 3,
            minOccurence: 1,
        },
        AlternateStudyID: { aliasOf: 'AlternateStudyId' },
        TitleOfStudy: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChairmanOfStudy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        LastIrbApprovalDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LastIRBApprovalDate: { aliasOf: 'LastIrbApprovalDate' },
        TotalAccrualToDate: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LastAccrualDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContactForStudy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ContactsTelephoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContactsTelNumber: { aliasOf: 'ContactsTelephoneNumber' },
        ContactsAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdCm0',
        'SponsorStudyId',
        'AlternateStudyId',
        'TitleOfStudy',
        'ChairmanOfStudy',
        'LastIrbApprovalDate',
        'TotalAccrualToDate',
        'LastAccrualDate',
        'ContactForStudy',
        'ContactsTelephoneNumber',
        'ContactsAddress',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CM0');
        this.setValues(values);
    }

    get SetIdCm0() {
        return this.getComponent('SetIdCm0');
    }

    set SetIdCm0(value) {
        this.setComponentValue('SetIdCm0', value);
    }

    get Cm0SetID() {
        return this.getComponent('SetIdCm0');
    }

    set Cm0SetID(value) {
        this.setComponentValue('SetIdCm0', value);
    }

    get SetIDCm0() {
        return this.getComponent('SetIdCm0');
    }

    set SetIDCm0(value) {
        this.setComponentValue('SetIdCm0', value);
    }

    get SponsorStudyId() {
        return this.getComponent('SponsorStudyId');
    }

    set SponsorStudyId(value) {
        this.setComponentValue('SponsorStudyId', value);
    }

    get SponsorStudyID() {
        return this.getComponent('SponsorStudyId');
    }

    set SponsorStudyID(value) {
        this.setComponentValue('SponsorStudyId', value);
    }

    get AlternateStudyId() {
        return this.getComponent('AlternateStudyId');
    }

    set AlternateStudyId(value) {
        this.setComponentValue('AlternateStudyId', value);
    }

    get AlternateStudyID() {
        return this.getComponent('AlternateStudyId');
    }

    set AlternateStudyID(value) {
        this.setComponentValue('AlternateStudyId', value);
    }

    get TitleOfStudy() {
        return this.getComponent('TitleOfStudy');
    }

    set TitleOfStudy(value) {
        this.setComponentValue('TitleOfStudy', value);
    }

    get ChairmanOfStudy() {
        return this.getComponent('ChairmanOfStudy');
    }

    set ChairmanOfStudy(value) {
        this.setComponentValue('ChairmanOfStudy', value);
    }

    get LastIrbApprovalDate() {
        return this.getComponent('LastIrbApprovalDate');
    }

    set LastIrbApprovalDate(value) {
        this.setComponentValue('LastIrbApprovalDate', value);
    }

    get LastIRBApprovalDate() {
        return this.getComponent('LastIrbApprovalDate');
    }

    set LastIRBApprovalDate(value) {
        this.setComponentValue('LastIrbApprovalDate', value);
    }

    get TotalAccrualToDate() {
        return this.getComponent('TotalAccrualToDate');
    }

    set TotalAccrualToDate(value) {
        this.setComponentValue('TotalAccrualToDate', value);
    }

    get LastAccrualDate() {
        return this.getComponent('LastAccrualDate');
    }

    set LastAccrualDate(value) {
        this.setComponentValue('LastAccrualDate', value);
    }

    get ContactForStudy() {
        return this.getComponent('ContactForStudy');
    }

    set ContactForStudy(value) {
        this.setComponentValue('ContactForStudy', value);
    }

    get ContactsTelephoneNumber() {
        return this.getComponent('ContactsTelephoneNumber');
    }

    set ContactsTelephoneNumber(value) {
        this.setComponentValue('ContactsTelephoneNumber', value);
    }

    get ContactsTelNumber() {
        return this.getComponent('ContactsTelephoneNumber');
    }

    set ContactsTelNumber(value) {
        this.setComponentValue('ContactsTelephoneNumber', value);
    }

    get ContactsAddress() {
        return this.getComponent('ContactsAddress');
    }

    set ContactsAddress(value) {
        this.setComponentValue('ContactsAddress', value);
    }
}
