import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { varies } from '@healthcare-interoperability/hl7v2-datatypes';
import { VARIES } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';

export class OBX extends Segment {
    static components = {
        SetIdObx: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ValueType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ObservationIdentifier: {
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
        ObservationSubId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ObservationValue: {
            defaultDataType: varies,
            dataTypes: [
                { dataType: varies, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: VARIES, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        Units: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReferencesRange: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InterpretationCodes: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3', '2.3.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 8,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 5,
        },
        AbnormalFlags: { aliasOf: 'InterpretationCodes' },
        Probability: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 5,
            minOccurence: 1,
        },
        NatureOfAbnormalTest: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ObservationResultStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ObservResultStatus: { aliasOf: 'ObservationResultStatus' },
        EffectiveDateOfReferenceRange: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateLastObsNormalValues: { aliasOf: 'EffectiveDateOfReferenceRange' },
        DateLastObservationNormalValue: { aliasOf: 'EffectiveDateOfReferenceRange' },
        UserDefinedAccessChecks: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateTimeOfTheObservation: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProducerSId: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResponsibleObserver: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ObservationMethod: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 17,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EquipmentInstanceIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 18,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DateTimeOfTheAnalysis: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReservedForHarmonizationWithV26: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: ST, versions: ['2.5.1'] },
                { dataType: CNE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ObservationSite: { aliasOf: 'ReservedForHarmonizationWithV26' },
        ObservationInstanceIdentifier: { aliasOf: 'ReservedForHarmonizationWithV26' },
        MoodCode: { aliasOf: 'ReservedForHarmonizationWithV26' },
        PerformingOrganizationName: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PerformingOrganizationAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PerformingOrganizationMedicalDirector: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientResultsReleaseCategory: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RootCause: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LocalProcessControl: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 28,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdObx',
        'ValueType',
        'ObservationIdentifier',
        'ObservationSubId',
        'ObservationValue',
        'Units',
        'ReferencesRange',
        'InterpretationCodes',
        'Probability',
        'NatureOfAbnormalTest',
        'ObservationResultStatus',
        'EffectiveDateOfReferenceRange',
        'UserDefinedAccessChecks',
        'DateTimeOfTheObservation',
        'ProducerSId',
        'ResponsibleObserver',
        'ObservationMethod',
        'EquipmentInstanceIdentifier',
        'DateTimeOfTheAnalysis',
        'ReservedForHarmonizationWithV26',
        'ReservedForHarmonizationWithV26',
        'ReservedForHarmonizationWithV26',
        'PerformingOrganizationName',
        'PerformingOrganizationAddress',
        'PerformingOrganizationMedicalDirector',
        'PatientResultsReleaseCategory',
        'RootCause',
        'LocalProcessControl',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('OBX');
        this.setValues(values);
    }

    get SetIdObx() {
        return this.getComponent('SetIdObx');
    }

    set SetIdObx(value) {
        this.setComponentValue('SetIdObx', value);
    }

    get ValueType() {
        return this.getComponent('ValueType');
    }

    set ValueType(value) {
        this.setComponentValue('ValueType', value);
    }

    get ObservationIdentifier() {
        return this.getComponent('ObservationIdentifier');
    }

    set ObservationIdentifier(value) {
        this.setComponentValue('ObservationIdentifier', value);
    }

    get ObservationSubId() {
        return this.getComponent('ObservationSubId');
    }

    set ObservationSubId(value) {
        this.setComponentValue('ObservationSubId', value);
    }

    get ObservationValue() {
        return this.getComponent('ObservationValue');
    }

    set ObservationValue(value) {
        this.setComponentValue('ObservationValue', value);
    }

    get Units() {
        return this.getComponent('Units');
    }

    set Units(value) {
        this.setComponentValue('Units', value);
    }

    get ReferencesRange() {
        return this.getComponent('ReferencesRange');
    }

    set ReferencesRange(value) {
        this.setComponentValue('ReferencesRange', value);
    }

    get InterpretationCodes() {
        return this.getComponent('InterpretationCodes');
    }

    set InterpretationCodes(value) {
        this.setComponentValue('InterpretationCodes', value);
    }

    get AbnormalFlags() {
        return this.getComponent('InterpretationCodes');
    }

    set AbnormalFlags(value) {
        this.setComponentValue('InterpretationCodes', value);
    }

    get Probability() {
        return this.getComponent('Probability');
    }

    set Probability(value) {
        this.setComponentValue('Probability', value);
    }

    get NatureOfAbnormalTest() {
        return this.getComponent('NatureOfAbnormalTest');
    }

    set NatureOfAbnormalTest(value) {
        this.setComponentValue('NatureOfAbnormalTest', value);
    }

    get ObservationResultStatus() {
        return this.getComponent('ObservationResultStatus');
    }

    set ObservationResultStatus(value) {
        this.setComponentValue('ObservationResultStatus', value);
    }

    get ObservResultStatus() {
        return this.getComponent('ObservationResultStatus');
    }

    set ObservResultStatus(value) {
        this.setComponentValue('ObservationResultStatus', value);
    }

    get EffectiveDateOfReferenceRange() {
        return this.getComponent('EffectiveDateOfReferenceRange');
    }

    set EffectiveDateOfReferenceRange(value) {
        this.setComponentValue('EffectiveDateOfReferenceRange', value);
    }

    get DateLastObsNormalValues() {
        return this.getComponent('EffectiveDateOfReferenceRange');
    }

    set DateLastObsNormalValues(value) {
        this.setComponentValue('EffectiveDateOfReferenceRange', value);
    }

    get DateLastObservationNormalValue() {
        return this.getComponent('EffectiveDateOfReferenceRange');
    }

    set DateLastObservationNormalValue(value) {
        this.setComponentValue('EffectiveDateOfReferenceRange', value);
    }

    get UserDefinedAccessChecks() {
        return this.getComponent('UserDefinedAccessChecks');
    }

    set UserDefinedAccessChecks(value) {
        this.setComponentValue('UserDefinedAccessChecks', value);
    }

    get DateTimeOfTheObservation() {
        return this.getComponent('DateTimeOfTheObservation');
    }

    set DateTimeOfTheObservation(value) {
        this.setComponentValue('DateTimeOfTheObservation', value);
    }

    get ProducerSId() {
        return this.getComponent('ProducerSId');
    }

    set ProducerSId(value) {
        this.setComponentValue('ProducerSId', value);
    }

    get ResponsibleObserver() {
        return this.getComponent('ResponsibleObserver');
    }

    set ResponsibleObserver(value) {
        this.setComponentValue('ResponsibleObserver', value);
    }

    get ObservationMethod() {
        return this.getComponent('ObservationMethod');
    }

    set ObservationMethod(value) {
        this.setComponentValue('ObservationMethod', value);
    }

    get EquipmentInstanceIdentifier() {
        return this.getComponent('EquipmentInstanceIdentifier');
    }

    set EquipmentInstanceIdentifier(value) {
        this.setComponentValue('EquipmentInstanceIdentifier', value);
    }

    get DateTimeOfTheAnalysis() {
        return this.getComponent('DateTimeOfTheAnalysis');
    }

    set DateTimeOfTheAnalysis(value) {
        this.setComponentValue('DateTimeOfTheAnalysis', value);
    }

    get ReservedForHarmonizationWithV26() {
        return this.getComponent('ReservedForHarmonizationWithV26');
    }

    set ReservedForHarmonizationWithV26(value) {
        this.setComponentValue('ReservedForHarmonizationWithV26', value);
    }

    get ObservationSite() {
        return this.getComponent('ReservedForHarmonizationWithV26');
    }

    set ObservationSite(value) {
        this.setComponentValue('ReservedForHarmonizationWithV26', value);
    }

    get ReservedForHarmonizationWithV26() {
        return this.getComponent('ReservedForHarmonizationWithV26');
    }

    set ReservedForHarmonizationWithV26(value) {
        this.setComponentValue('ReservedForHarmonizationWithV26', value);
    }

    get ObservationInstanceIdentifier() {
        return this.getComponent('ReservedForHarmonizationWithV26');
    }

    set ObservationInstanceIdentifier(value) {
        this.setComponentValue('ReservedForHarmonizationWithV26', value);
    }

    get ReservedForHarmonizationWithV26() {
        return this.getComponent('ReservedForHarmonizationWithV26');
    }

    set ReservedForHarmonizationWithV26(value) {
        this.setComponentValue('ReservedForHarmonizationWithV26', value);
    }

    get MoodCode() {
        return this.getComponent('ReservedForHarmonizationWithV26');
    }

    set MoodCode(value) {
        this.setComponentValue('ReservedForHarmonizationWithV26', value);
    }

    get PerformingOrganizationName() {
        return this.getComponent('PerformingOrganizationName');
    }

    set PerformingOrganizationName(value) {
        this.setComponentValue('PerformingOrganizationName', value);
    }

    get PerformingOrganizationAddress() {
        return this.getComponent('PerformingOrganizationAddress');
    }

    set PerformingOrganizationAddress(value) {
        this.setComponentValue('PerformingOrganizationAddress', value);
    }

    get PerformingOrganizationMedicalDirector() {
        return this.getComponent('PerformingOrganizationMedicalDirector');
    }

    set PerformingOrganizationMedicalDirector(value) {
        this.setComponentValue('PerformingOrganizationMedicalDirector', value);
    }

    get PatientResultsReleaseCategory() {
        return this.getComponent('PatientResultsReleaseCategory');
    }

    set PatientResultsReleaseCategory(value) {
        this.setComponentValue('PatientResultsReleaseCategory', value);
    }

    get RootCause() {
        return this.getComponent('RootCause');
    }

    set RootCause(value) {
        this.setComponentValue('RootCause', value);
    }

    get LocalProcessControl() {
        return this.getComponent('LocalProcessControl');
    }

    set LocalProcessControl(value) {
        this.setComponentValue('LocalProcessControl', value);
    }
}
