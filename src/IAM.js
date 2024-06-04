import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';

export class IAM extends Segment {
    static components = {
        SetIdIam: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AllergenTypeCode: {
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
        AllergenCodeMnemonicDescription: {
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
        AllergySeverityCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AllergyReactionCode: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AllergyActionCode: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AllergyUniqueIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionReason: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SensitivityToCausativeAgentCode: {
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
        AllergenGroupCodeMnemonicDescription: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OnsetDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OnsetDateText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReportedDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReportedBy: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RelationshipToPatientCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AlertDeviceCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AllergyClinicalStatusCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusedByPerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusedByOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StatusedAtDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InactivatedByPerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InactivatedDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InitiallyRecordedByPerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InitiallyRecordedDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ModifiedByPerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ModifiedDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ClinicianIdentifiedCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InitiallyRecordedByOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ModifiedByOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InactivatedByOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdIam',
        'AllergenTypeCode',
        'AllergenCodeMnemonicDescription',
        'AllergySeverityCode',
        'AllergyReactionCode',
        'AllergyActionCode',
        'AllergyUniqueIdentifier',
        'ActionReason',
        'SensitivityToCausativeAgentCode',
        'AllergenGroupCodeMnemonicDescription',
        'OnsetDate',
        'OnsetDateText',
        'ReportedDateTime',
        'ReportedBy',
        'RelationshipToPatientCode',
        'AlertDeviceCode',
        'AllergyClinicalStatusCode',
        'StatusedByPerson',
        'StatusedByOrganization',
        'StatusedAtDateTime',
        'InactivatedByPerson',
        'InactivatedDateTime',
        'InitiallyRecordedByPerson',
        'InitiallyRecordedDateTime',
        'ModifiedByPerson',
        'ModifiedDateTime',
        'ClinicianIdentifiedCode',
        'InitiallyRecordedByOrganization',
        'ModifiedByOrganization',
        'InactivatedByOrganization',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('IAM');
        this.setValues(values);
    }

    get SetIdIam() {
        return this.getComponent('SetIdIam');
    }

    set SetIdIam(value) {
        this.setComponentValue('SetIdIam', value);
    }

    get AllergenTypeCode() {
        return this.getComponent('AllergenTypeCode');
    }

    set AllergenTypeCode(value) {
        this.setComponentValue('AllergenTypeCode', value);
    }

    get AllergenCodeMnemonicDescription() {
        return this.getComponent('AllergenCodeMnemonicDescription');
    }

    set AllergenCodeMnemonicDescription(value) {
        this.setComponentValue('AllergenCodeMnemonicDescription', value);
    }

    get AllergySeverityCode() {
        return this.getComponent('AllergySeverityCode');
    }

    set AllergySeverityCode(value) {
        this.setComponentValue('AllergySeverityCode', value);
    }

    get AllergyReactionCode() {
        return this.getComponent('AllergyReactionCode');
    }

    set AllergyReactionCode(value) {
        this.setComponentValue('AllergyReactionCode', value);
    }

    get AllergyActionCode() {
        return this.getComponent('AllergyActionCode');
    }

    set AllergyActionCode(value) {
        this.setComponentValue('AllergyActionCode', value);
    }

    get AllergyUniqueIdentifier() {
        return this.getComponent('AllergyUniqueIdentifier');
    }

    set AllergyUniqueIdentifier(value) {
        this.setComponentValue('AllergyUniqueIdentifier', value);
    }

    get ActionReason() {
        return this.getComponent('ActionReason');
    }

    set ActionReason(value) {
        this.setComponentValue('ActionReason', value);
    }

    get SensitivityToCausativeAgentCode() {
        return this.getComponent('SensitivityToCausativeAgentCode');
    }

    set SensitivityToCausativeAgentCode(value) {
        this.setComponentValue('SensitivityToCausativeAgentCode', value);
    }

    get AllergenGroupCodeMnemonicDescription() {
        return this.getComponent('AllergenGroupCodeMnemonicDescription');
    }

    set AllergenGroupCodeMnemonicDescription(value) {
        this.setComponentValue('AllergenGroupCodeMnemonicDescription', value);
    }

    get OnsetDate() {
        return this.getComponent('OnsetDate');
    }

    set OnsetDate(value) {
        this.setComponentValue('OnsetDate', value);
    }

    get OnsetDateText() {
        return this.getComponent('OnsetDateText');
    }

    set OnsetDateText(value) {
        this.setComponentValue('OnsetDateText', value);
    }

    get ReportedDateTime() {
        return this.getComponent('ReportedDateTime');
    }

    set ReportedDateTime(value) {
        this.setComponentValue('ReportedDateTime', value);
    }

    get ReportedBy() {
        return this.getComponent('ReportedBy');
    }

    set ReportedBy(value) {
        this.setComponentValue('ReportedBy', value);
    }

    get RelationshipToPatientCode() {
        return this.getComponent('RelationshipToPatientCode');
    }

    set RelationshipToPatientCode(value) {
        this.setComponentValue('RelationshipToPatientCode', value);
    }

    get AlertDeviceCode() {
        return this.getComponent('AlertDeviceCode');
    }

    set AlertDeviceCode(value) {
        this.setComponentValue('AlertDeviceCode', value);
    }

    get AllergyClinicalStatusCode() {
        return this.getComponent('AllergyClinicalStatusCode');
    }

    set AllergyClinicalStatusCode(value) {
        this.setComponentValue('AllergyClinicalStatusCode', value);
    }

    get StatusedByPerson() {
        return this.getComponent('StatusedByPerson');
    }

    set StatusedByPerson(value) {
        this.setComponentValue('StatusedByPerson', value);
    }

    get StatusedByOrganization() {
        return this.getComponent('StatusedByOrganization');
    }

    set StatusedByOrganization(value) {
        this.setComponentValue('StatusedByOrganization', value);
    }

    get StatusedAtDateTime() {
        return this.getComponent('StatusedAtDateTime');
    }

    set StatusedAtDateTime(value) {
        this.setComponentValue('StatusedAtDateTime', value);
    }

    get InactivatedByPerson() {
        return this.getComponent('InactivatedByPerson');
    }

    set InactivatedByPerson(value) {
        this.setComponentValue('InactivatedByPerson', value);
    }

    get InactivatedDateTime() {
        return this.getComponent('InactivatedDateTime');
    }

    set InactivatedDateTime(value) {
        this.setComponentValue('InactivatedDateTime', value);
    }

    get InitiallyRecordedByPerson() {
        return this.getComponent('InitiallyRecordedByPerson');
    }

    set InitiallyRecordedByPerson(value) {
        this.setComponentValue('InitiallyRecordedByPerson', value);
    }

    get InitiallyRecordedDateTime() {
        return this.getComponent('InitiallyRecordedDateTime');
    }

    set InitiallyRecordedDateTime(value) {
        this.setComponentValue('InitiallyRecordedDateTime', value);
    }

    get ModifiedByPerson() {
        return this.getComponent('ModifiedByPerson');
    }

    set ModifiedByPerson(value) {
        this.setComponentValue('ModifiedByPerson', value);
    }

    get ModifiedDateTime() {
        return this.getComponent('ModifiedDateTime');
    }

    set ModifiedDateTime(value) {
        this.setComponentValue('ModifiedDateTime', value);
    }

    get ClinicianIdentifiedCode() {
        return this.getComponent('ClinicianIdentifiedCode');
    }

    set ClinicianIdentifiedCode(value) {
        this.setComponentValue('ClinicianIdentifiedCode', value);
    }

    get InitiallyRecordedByOrganization() {
        return this.getComponent('InitiallyRecordedByOrganization');
    }

    set InitiallyRecordedByOrganization(value) {
        this.setComponentValue('InitiallyRecordedByOrganization', value);
    }

    get ModifiedByOrganization() {
        return this.getComponent('ModifiedByOrganization');
    }

    set ModifiedByOrganization(value) {
        this.setComponentValue('ModifiedByOrganization', value);
    }

    get InactivatedByOrganization() {
        return this.getComponent('InactivatedByOrganization');
    }

    set InactivatedByOrganization(value) {
        this.setComponentValue('InactivatedByOrganization', value);
    }
}
