import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';

export class OM1 extends Segment {
    static components = {
        SequenceNumberTestObservationMasterFile: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SequenceNumber: { aliasOf: 'SequenceNumberTestObservationMasterFile' },
        ProducersServiceTestObservationId: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProducersTestObservationID: { aliasOf: 'ProducersServiceTestObservationId' },
        ProducersServiceTestObservationID: { aliasOf: 'ProducersServiceTestObservationId' },
        PermittedDataTypes: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenRequired: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProducerId: {
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
        ProducerID: { aliasOf: 'ProducerId' },
        ObservationDescription: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OtherServiceTestObservationIdsForTheObservation: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OtherTestObservationIdsForTheObservation: { aliasOf: 'OtherServiceTestObservationIdsForTheObservation' },
        OtherNames: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8'] }],
            position: 51,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PreferredReportNameForTheObservation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PreferredShortNameOrMnemonicForTheObservation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PreferredShortNameOrMnemonicForObservation: { aliasOf: 'PreferredShortNameOrMnemonicForTheObservation' },
        PreferredLongNameForTheObservation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Orderability: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IdentityOfInstrumentUsedToPerformThisStudy: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        IdentityOfInstrumentUsedToPerfromThisStudy: { aliasOf: 'IdentityOfInstrumentUsedToPerformThisStudy' },
        CodedRepresentationOfMethod: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PortableDeviceIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Portable: { aliasOf: 'PortableDeviceIndicator' },
        ObservationProducingDepartmentSection: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 16,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        TelephoneNumberOfSection: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NatureOfServiceTestObservation: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NatureOfTestObservation: { aliasOf: 'NatureOfServiceTestObservation' },
        ReportSubheader: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReportDisplayOrder: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateTimeStampForAnyChangeInDefinitionForTheObservation: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateTimeStampForAnyChangeInDefAttriForObs: { aliasOf: 'DateTimeStampForAnyChangeInDefinitionForTheObservation' },
        EffectiveDateTimeOfChange: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EffectiveDateTimeOfChangeInTestProcThatMakeResultsNonComparable: { aliasOf: 'EffectiveDateTimeOfChange' },
        TypicalTurnAroundTime: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcessingTime: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcessingPriority: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ReportingPriority: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OutsideSiteSWhereObservationMayBePerformed: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 27,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OutsideSite: { aliasOf: 'OutsideSiteSWhereObservationMayBePerformed' },
        AddressOfOutsideSiteS: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 28,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        AddressOfOutsideSite: { aliasOf: 'AddressOfOutsideSiteS' },
        PhoneNumberOfOutsideSite: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConfidentialityCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ObservationsRequiredToInterpretThisObservation: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ObservationsRequiredToInterpretTheObservation: { aliasOf: 'ObservationsRequiredToInterpretThisObservation' },
        ObservationsRequiredToInterpretTheObs: { aliasOf: 'ObservationsRequiredToInterpretThisObservation' },
        InterpretationOfObservations: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContraindicationsToObservations: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReflexTestsObservations: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 34,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        RulesThatTriggerReflexTesting: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FixedCannedMessage: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 36,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientPreparation: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureMedication: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 38,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FactorsThatMayAffectTheObservation: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 39,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FactorsThatMayEffectTheObservation: { aliasOf: 'FactorsThatMayAffectTheObservation' },
        FactorsThatMayAffectAffectTheObservation: { aliasOf: 'FactorsThatMayAffectTheObservation' },
        ServiceTestObservationPerformanceSchedule: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 40,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        TestObservationPerformanceSchedule: { aliasOf: 'ServiceTestObservationPerformanceSchedule' },
        DescriptionOfTestMethods: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 41,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        KindOfQuantityObserved: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 42,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PointVersusInterval: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 43,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChallengeInformation: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 44,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RelationshipModifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 45,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TargetAnatomicSiteOfTest: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 46,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ModalityOfImagingMeasurement: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 47,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExclusiveTest: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 48,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DiagnosticServSectID: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 49,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TaxonomicClassificationCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 50,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SequenceNumberTestObservationMasterFile',
        'ProducersServiceTestObservationId',
        'PermittedDataTypes',
        'SpecimenRequired',
        'ProducerId',
        'ObservationDescription',
        'OtherServiceTestObservationIdsForTheObservation',
        'OtherNames',
        'PreferredReportNameForTheObservation',
        'PreferredShortNameOrMnemonicForTheObservation',
        'PreferredLongNameForTheObservation',
        'Orderability',
        'IdentityOfInstrumentUsedToPerformThisStudy',
        'CodedRepresentationOfMethod',
        'PortableDeviceIndicator',
        'ObservationProducingDepartmentSection',
        'TelephoneNumberOfSection',
        'NatureOfServiceTestObservation',
        'ReportSubheader',
        'ReportDisplayOrder',
        'DateTimeStampForAnyChangeInDefinitionForTheObservation',
        'EffectiveDateTimeOfChange',
        'TypicalTurnAroundTime',
        'ProcessingTime',
        'ProcessingPriority',
        'ReportingPriority',
        'OutsideSiteSWhereObservationMayBePerformed',
        'AddressOfOutsideSiteS',
        'PhoneNumberOfOutsideSite',
        'ConfidentialityCode',
        'ObservationsRequiredToInterpretThisObservation',
        'InterpretationOfObservations',
        'ContraindicationsToObservations',
        'ReflexTestsObservations',
        'RulesThatTriggerReflexTesting',
        'FixedCannedMessage',
        'PatientPreparation',
        'ProcedureMedication',
        'FactorsThatMayAffectTheObservation',
        'ServiceTestObservationPerformanceSchedule',
        'DescriptionOfTestMethods',
        'KindOfQuantityObserved',
        'PointVersusInterval',
        'ChallengeInformation',
        'RelationshipModifier',
        'TargetAnatomicSiteOfTest',
        'ModalityOfImagingMeasurement',
        'ExclusiveTest',
        'DiagnosticServSectID',
        'TaxonomicClassificationCode',
        'OtherNames',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('OM1');
        this.setValues(values);
    }

    get SequenceNumberTestObservationMasterFile() {
        return this.getComponent('SequenceNumberTestObservationMasterFile');
    }

    set SequenceNumberTestObservationMasterFile(value) {
        this.setComponentValue('SequenceNumberTestObservationMasterFile', value);
    }

    get SequenceNumber() {
        return this.getComponent('SequenceNumberTestObservationMasterFile');
    }

    set SequenceNumber(value) {
        this.setComponentValue('SequenceNumberTestObservationMasterFile', value);
    }

    get ProducersServiceTestObservationId() {
        return this.getComponent('ProducersServiceTestObservationId');
    }

    set ProducersServiceTestObservationId(value) {
        this.setComponentValue('ProducersServiceTestObservationId', value);
    }

    get ProducersTestObservationID() {
        return this.getComponent('ProducersServiceTestObservationId');
    }

    set ProducersTestObservationID(value) {
        this.setComponentValue('ProducersServiceTestObservationId', value);
    }

    get ProducersServiceTestObservationID() {
        return this.getComponent('ProducersServiceTestObservationId');
    }

    set ProducersServiceTestObservationID(value) {
        this.setComponentValue('ProducersServiceTestObservationId', value);
    }

    get PermittedDataTypes() {
        return this.getComponent('PermittedDataTypes');
    }

    set PermittedDataTypes(value) {
        this.setComponentValue('PermittedDataTypes', value);
    }

    get SpecimenRequired() {
        return this.getComponent('SpecimenRequired');
    }

    set SpecimenRequired(value) {
        this.setComponentValue('SpecimenRequired', value);
    }

    get ProducerId() {
        return this.getComponent('ProducerId');
    }

    set ProducerId(value) {
        this.setComponentValue('ProducerId', value);
    }

    get ProducerID() {
        return this.getComponent('ProducerId');
    }

    set ProducerID(value) {
        this.setComponentValue('ProducerId', value);
    }

    get ObservationDescription() {
        return this.getComponent('ObservationDescription');
    }

    set ObservationDescription(value) {
        this.setComponentValue('ObservationDescription', value);
    }

    get OtherServiceTestObservationIdsForTheObservation() {
        return this.getComponent('OtherServiceTestObservationIdsForTheObservation');
    }

    set OtherServiceTestObservationIdsForTheObservation(value) {
        this.setComponentValue('OtherServiceTestObservationIdsForTheObservation', value);
    }

    get OtherTestObservationIdsForTheObservation() {
        return this.getComponent('OtherServiceTestObservationIdsForTheObservation');
    }

    set OtherTestObservationIdsForTheObservation(value) {
        this.setComponentValue('OtherServiceTestObservationIdsForTheObservation', value);
    }

    get OtherNames() {
        return this.getComponent('OtherNames');
    }

    set OtherNames(value) {
        this.setComponentValue('OtherNames', value);
    }

    get PreferredReportNameForTheObservation() {
        return this.getComponent('PreferredReportNameForTheObservation');
    }

    set PreferredReportNameForTheObservation(value) {
        this.setComponentValue('PreferredReportNameForTheObservation', value);
    }

    get PreferredShortNameOrMnemonicForTheObservation() {
        return this.getComponent('PreferredShortNameOrMnemonicForTheObservation');
    }

    set PreferredShortNameOrMnemonicForTheObservation(value) {
        this.setComponentValue('PreferredShortNameOrMnemonicForTheObservation', value);
    }

    get PreferredShortNameOrMnemonicForObservation() {
        return this.getComponent('PreferredShortNameOrMnemonicForTheObservation');
    }

    set PreferredShortNameOrMnemonicForObservation(value) {
        this.setComponentValue('PreferredShortNameOrMnemonicForTheObservation', value);
    }

    get PreferredLongNameForTheObservation() {
        return this.getComponent('PreferredLongNameForTheObservation');
    }

    set PreferredLongNameForTheObservation(value) {
        this.setComponentValue('PreferredLongNameForTheObservation', value);
    }

    get Orderability() {
        return this.getComponent('Orderability');
    }

    set Orderability(value) {
        this.setComponentValue('Orderability', value);
    }

    get IdentityOfInstrumentUsedToPerformThisStudy() {
        return this.getComponent('IdentityOfInstrumentUsedToPerformThisStudy');
    }

    set IdentityOfInstrumentUsedToPerformThisStudy(value) {
        this.setComponentValue('IdentityOfInstrumentUsedToPerformThisStudy', value);
    }

    get IdentityOfInstrumentUsedToPerfromThisStudy() {
        return this.getComponent('IdentityOfInstrumentUsedToPerformThisStudy');
    }

    set IdentityOfInstrumentUsedToPerfromThisStudy(value) {
        this.setComponentValue('IdentityOfInstrumentUsedToPerformThisStudy', value);
    }

    get CodedRepresentationOfMethod() {
        return this.getComponent('CodedRepresentationOfMethod');
    }

    set CodedRepresentationOfMethod(value) {
        this.setComponentValue('CodedRepresentationOfMethod', value);
    }

    get PortableDeviceIndicator() {
        return this.getComponent('PortableDeviceIndicator');
    }

    set PortableDeviceIndicator(value) {
        this.setComponentValue('PortableDeviceIndicator', value);
    }

    get Portable() {
        return this.getComponent('PortableDeviceIndicator');
    }

    set Portable(value) {
        this.setComponentValue('PortableDeviceIndicator', value);
    }

    get ObservationProducingDepartmentSection() {
        return this.getComponent('ObservationProducingDepartmentSection');
    }

    set ObservationProducingDepartmentSection(value) {
        this.setComponentValue('ObservationProducingDepartmentSection', value);
    }

    get TelephoneNumberOfSection() {
        return this.getComponent('TelephoneNumberOfSection');
    }

    set TelephoneNumberOfSection(value) {
        this.setComponentValue('TelephoneNumberOfSection', value);
    }

    get NatureOfServiceTestObservation() {
        return this.getComponent('NatureOfServiceTestObservation');
    }

    set NatureOfServiceTestObservation(value) {
        this.setComponentValue('NatureOfServiceTestObservation', value);
    }

    get NatureOfTestObservation() {
        return this.getComponent('NatureOfServiceTestObservation');
    }

    set NatureOfTestObservation(value) {
        this.setComponentValue('NatureOfServiceTestObservation', value);
    }

    get ReportSubheader() {
        return this.getComponent('ReportSubheader');
    }

    set ReportSubheader(value) {
        this.setComponentValue('ReportSubheader', value);
    }

    get ReportDisplayOrder() {
        return this.getComponent('ReportDisplayOrder');
    }

    set ReportDisplayOrder(value) {
        this.setComponentValue('ReportDisplayOrder', value);
    }

    get DateTimeStampForAnyChangeInDefinitionForTheObservation() {
        return this.getComponent('DateTimeStampForAnyChangeInDefinitionForTheObservation');
    }

    set DateTimeStampForAnyChangeInDefinitionForTheObservation(value) {
        this.setComponentValue('DateTimeStampForAnyChangeInDefinitionForTheObservation', value);
    }

    get DateTimeStampForAnyChangeInDefAttriForObs() {
        return this.getComponent('DateTimeStampForAnyChangeInDefinitionForTheObservation');
    }

    set DateTimeStampForAnyChangeInDefAttriForObs(value) {
        this.setComponentValue('DateTimeStampForAnyChangeInDefinitionForTheObservation', value);
    }

    get EffectiveDateTimeOfChange() {
        return this.getComponent('EffectiveDateTimeOfChange');
    }

    set EffectiveDateTimeOfChange(value) {
        this.setComponentValue('EffectiveDateTimeOfChange', value);
    }

    get EffectiveDateTimeOfChangeInTestProcThatMakeResultsNonComparable() {
        return this.getComponent('EffectiveDateTimeOfChange');
    }

    set EffectiveDateTimeOfChangeInTestProcThatMakeResultsNonComparable(value) {
        this.setComponentValue('EffectiveDateTimeOfChange', value);
    }

    get TypicalTurnAroundTime() {
        return this.getComponent('TypicalTurnAroundTime');
    }

    set TypicalTurnAroundTime(value) {
        this.setComponentValue('TypicalTurnAroundTime', value);
    }

    get ProcessingTime() {
        return this.getComponent('ProcessingTime');
    }

    set ProcessingTime(value) {
        this.setComponentValue('ProcessingTime', value);
    }

    get ProcessingPriority() {
        return this.getComponent('ProcessingPriority');
    }

    set ProcessingPriority(value) {
        this.setComponentValue('ProcessingPriority', value);
    }

    get ReportingPriority() {
        return this.getComponent('ReportingPriority');
    }

    set ReportingPriority(value) {
        this.setComponentValue('ReportingPriority', value);
    }

    get OutsideSiteSWhereObservationMayBePerformed() {
        return this.getComponent('OutsideSiteSWhereObservationMayBePerformed');
    }

    set OutsideSiteSWhereObservationMayBePerformed(value) {
        this.setComponentValue('OutsideSiteSWhereObservationMayBePerformed', value);
    }

    get OutsideSite() {
        return this.getComponent('OutsideSiteSWhereObservationMayBePerformed');
    }

    set OutsideSite(value) {
        this.setComponentValue('OutsideSiteSWhereObservationMayBePerformed', value);
    }

    get AddressOfOutsideSiteS() {
        return this.getComponent('AddressOfOutsideSiteS');
    }

    set AddressOfOutsideSiteS(value) {
        this.setComponentValue('AddressOfOutsideSiteS', value);
    }

    get AddressOfOutsideSite() {
        return this.getComponent('AddressOfOutsideSiteS');
    }

    set AddressOfOutsideSite(value) {
        this.setComponentValue('AddressOfOutsideSiteS', value);
    }

    get PhoneNumberOfOutsideSite() {
        return this.getComponent('PhoneNumberOfOutsideSite');
    }

    set PhoneNumberOfOutsideSite(value) {
        this.setComponentValue('PhoneNumberOfOutsideSite', value);
    }

    get ConfidentialityCode() {
        return this.getComponent('ConfidentialityCode');
    }

    set ConfidentialityCode(value) {
        this.setComponentValue('ConfidentialityCode', value);
    }

    get ObservationsRequiredToInterpretThisObservation() {
        return this.getComponent('ObservationsRequiredToInterpretThisObservation');
    }

    set ObservationsRequiredToInterpretThisObservation(value) {
        this.setComponentValue('ObservationsRequiredToInterpretThisObservation', value);
    }

    get ObservationsRequiredToInterpretTheObservation() {
        return this.getComponent('ObservationsRequiredToInterpretThisObservation');
    }

    set ObservationsRequiredToInterpretTheObservation(value) {
        this.setComponentValue('ObservationsRequiredToInterpretThisObservation', value);
    }

    get ObservationsRequiredToInterpretTheObs() {
        return this.getComponent('ObservationsRequiredToInterpretThisObservation');
    }

    set ObservationsRequiredToInterpretTheObs(value) {
        this.setComponentValue('ObservationsRequiredToInterpretThisObservation', value);
    }

    get InterpretationOfObservations() {
        return this.getComponent('InterpretationOfObservations');
    }

    set InterpretationOfObservations(value) {
        this.setComponentValue('InterpretationOfObservations', value);
    }

    get ContraindicationsToObservations() {
        return this.getComponent('ContraindicationsToObservations');
    }

    set ContraindicationsToObservations(value) {
        this.setComponentValue('ContraindicationsToObservations', value);
    }

    get ReflexTestsObservations() {
        return this.getComponent('ReflexTestsObservations');
    }

    set ReflexTestsObservations(value) {
        this.setComponentValue('ReflexTestsObservations', value);
    }

    get RulesThatTriggerReflexTesting() {
        return this.getComponent('RulesThatTriggerReflexTesting');
    }

    set RulesThatTriggerReflexTesting(value) {
        this.setComponentValue('RulesThatTriggerReflexTesting', value);
    }

    get FixedCannedMessage() {
        return this.getComponent('FixedCannedMessage');
    }

    set FixedCannedMessage(value) {
        this.setComponentValue('FixedCannedMessage', value);
    }

    get PatientPreparation() {
        return this.getComponent('PatientPreparation');
    }

    set PatientPreparation(value) {
        this.setComponentValue('PatientPreparation', value);
    }

    get ProcedureMedication() {
        return this.getComponent('ProcedureMedication');
    }

    set ProcedureMedication(value) {
        this.setComponentValue('ProcedureMedication', value);
    }

    get FactorsThatMayAffectTheObservation() {
        return this.getComponent('FactorsThatMayAffectTheObservation');
    }

    set FactorsThatMayAffectTheObservation(value) {
        this.setComponentValue('FactorsThatMayAffectTheObservation', value);
    }

    get FactorsThatMayEffectTheObservation() {
        return this.getComponent('FactorsThatMayAffectTheObservation');
    }

    set FactorsThatMayEffectTheObservation(value) {
        this.setComponentValue('FactorsThatMayAffectTheObservation', value);
    }

    get FactorsThatMayAffectAffectTheObservation() {
        return this.getComponent('FactorsThatMayAffectTheObservation');
    }

    set FactorsThatMayAffectAffectTheObservation(value) {
        this.setComponentValue('FactorsThatMayAffectTheObservation', value);
    }

    get ServiceTestObservationPerformanceSchedule() {
        return this.getComponent('ServiceTestObservationPerformanceSchedule');
    }

    set ServiceTestObservationPerformanceSchedule(value) {
        this.setComponentValue('ServiceTestObservationPerformanceSchedule', value);
    }

    get TestObservationPerformanceSchedule() {
        return this.getComponent('ServiceTestObservationPerformanceSchedule');
    }

    set TestObservationPerformanceSchedule(value) {
        this.setComponentValue('ServiceTestObservationPerformanceSchedule', value);
    }

    get DescriptionOfTestMethods() {
        return this.getComponent('DescriptionOfTestMethods');
    }

    set DescriptionOfTestMethods(value) {
        this.setComponentValue('DescriptionOfTestMethods', value);
    }

    get KindOfQuantityObserved() {
        return this.getComponent('KindOfQuantityObserved');
    }

    set KindOfQuantityObserved(value) {
        this.setComponentValue('KindOfQuantityObserved', value);
    }

    get PointVersusInterval() {
        return this.getComponent('PointVersusInterval');
    }

    set PointVersusInterval(value) {
        this.setComponentValue('PointVersusInterval', value);
    }

    get ChallengeInformation() {
        return this.getComponent('ChallengeInformation');
    }

    set ChallengeInformation(value) {
        this.setComponentValue('ChallengeInformation', value);
    }

    get RelationshipModifier() {
        return this.getComponent('RelationshipModifier');
    }

    set RelationshipModifier(value) {
        this.setComponentValue('RelationshipModifier', value);
    }

    get TargetAnatomicSiteOfTest() {
        return this.getComponent('TargetAnatomicSiteOfTest');
    }

    set TargetAnatomicSiteOfTest(value) {
        this.setComponentValue('TargetAnatomicSiteOfTest', value);
    }

    get ModalityOfImagingMeasurement() {
        return this.getComponent('ModalityOfImagingMeasurement');
    }

    set ModalityOfImagingMeasurement(value) {
        this.setComponentValue('ModalityOfImagingMeasurement', value);
    }

    get ExclusiveTest() {
        return this.getComponent('ExclusiveTest');
    }

    set ExclusiveTest(value) {
        this.setComponentValue('ExclusiveTest', value);
    }

    get DiagnosticServSectID() {
        return this.getComponent('DiagnosticServSectID');
    }

    set DiagnosticServSectID(value) {
        this.setComponentValue('DiagnosticServSectID', value);
    }

    get TaxonomicClassificationCode() {
        return this.getComponent('TaxonomicClassificationCode');
    }

    set TaxonomicClassificationCode(value) {
        this.setComponentValue('TaxonomicClassificationCode', value);
    }

    get OtherNames() {
        return this.getComponent('OtherNames');
    }

    set OtherNames(value) {
        this.setComponentValue('OtherNames', value);
    }
}
