import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_SPS } from '@healthcare-interoperability/hl7v2-datatypes';
import { SPS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { MOC } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_MOC } from '@healthcare-interoperability/hl7v2-datatypes';
import { PRL } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_PRL } from '@healthcare-interoperability/hl7v2-datatypes';
import { TQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { EIP } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_EIP } from '@healthcare-interoperability/hl7v2-datatypes';
import { NDL } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_NDL } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';

export class OBR extends Segment {
    static components = {
        SetIdObr: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIdObservationRequest: { aliasOf: 'SetIdObr' },
        PlacerOrderNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillerOrderNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        UniversalServiceIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        UniversalServiceId: { aliasOf: 'UniversalServiceIdentifier' },
        Priority: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PriorityObr: { aliasOf: 'Priority' },
        RequestedDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ObservationDateTime: {
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
        ObservationEndDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CollectionVolume: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CollectorIdentifier: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DangerCode: {
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
        RelevantClinicalInformation: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] },
            ],
            position: 13,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        RelevantClinicalInfo: { aliasOf: 'RelevantClinicalInformation' },
        SpecimenReceivedDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenSource: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CM_SPS, versions: ['2.3'] },
                { dataType: SPS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrderingProvider: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OrderCallbackPhoneNumber: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: true,
            maxOccurence: 2,
            minOccurence: 1,
        },
        PlacerField1: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlacerField2: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillerField1: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FillerField2: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResultsRptStatusChngDateTime: {
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
        ChargeToPractice: {
            defaultDataType: MOC,
            dataTypes: [
                { dataType: MOC, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_MOC, versions: ['2.3'] },
            ],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DiagnosticServSectId: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DiagnosticServiceSectionId: { aliasOf: 'DiagnosticServSectId' },
        ResultStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentResult: {
            defaultDataType: PRL,
            dataTypes: [
                { dataType: PRL, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_PRL, versions: ['2.3'] },
            ],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QuantityTiming: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: TQ, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 27,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ResultCopiesTo: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 28,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 5,
        },
        Parent: {
            defaultDataType: EIP,
            dataTypes: [
                { dataType: EIP, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_EIP, versions: ['2.3'] },
            ],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentNumber: { aliasOf: 'Parent' },
        TransportationMode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReasonForStudy: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 31,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PrincipalResultInterpreter: {
            defaultDataType: NDL,
            dataTypes: [
                { dataType: NDL, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_NDL, versions: ['2.3'] },
            ],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AssistantResultInterpreter: {
            defaultDataType: NDL,
            dataTypes: [
                { dataType: NDL, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_NDL, versions: ['2.3'] },
            ],
            position: 33,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        Technician: {
            defaultDataType: NDL,
            dataTypes: [
                { dataType: NDL, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_NDL, versions: ['2.3'] },
            ],
            position: 34,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        Transcriptionist: {
            defaultDataType: NDL,
            dataTypes: [
                { dataType: NDL, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_NDL, versions: ['2.3'] },
            ],
            position: 35,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ScheduledDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 36,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfSampleContainers: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransportLogisticsOfCollectedSample: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 38,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CollectorSComment: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 39,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        TransportArrangementResponsibility: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 40,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransportArranged: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 41,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EscortRequired: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 42,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlannedPatientTransportComment: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 43,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProcedureCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CNE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 44,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureCodeModifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CNE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 45,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PlacerSupplementalServiceInformation: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 46,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        FillerSupplementalServiceInformation: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 47,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        MedicallyNecessaryDuplicateProcedureReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 48,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResultHandling: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 49,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentUniversalServiceIdentifier: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 50,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ObservationGroupId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 51,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentObservationGroupId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 52,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AlternatePlacerOrderNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 53,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ParentOrder: {
            defaultDataType: EIP,
            dataTypes: [{ dataType: EIP, versions: ['2.7.1', '2.8'] }],
            position: 54,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdObr',
        'PlacerOrderNumber',
        'FillerOrderNumber',
        'UniversalServiceIdentifier',
        'Priority',
        'RequestedDateTime',
        'ObservationDateTime',
        'ObservationEndDateTime',
        'CollectionVolume',
        'CollectorIdentifier',
        'SpecimenActionCode',
        'DangerCode',
        'RelevantClinicalInformation',
        'SpecimenReceivedDateTime',
        'SpecimenSource',
        'OrderingProvider',
        'OrderCallbackPhoneNumber',
        'PlacerField1',
        'PlacerField2',
        'FillerField1',
        'FillerField2',
        'ResultsRptStatusChngDateTime',
        'ChargeToPractice',
        'DiagnosticServSectId',
        'ResultStatus',
        'ParentResult',
        'QuantityTiming',
        'ResultCopiesTo',
        'Parent',
        'TransportationMode',
        'ReasonForStudy',
        'PrincipalResultInterpreter',
        'AssistantResultInterpreter',
        'Technician',
        'Transcriptionist',
        'ScheduledDateTime',
        'NumberOfSampleContainers',
        'TransportLogisticsOfCollectedSample',
        'CollectorSComment',
        'TransportArrangementResponsibility',
        'TransportArranged',
        'EscortRequired',
        'PlannedPatientTransportComment',
        'ProcedureCode',
        'ProcedureCodeModifier',
        'PlacerSupplementalServiceInformation',
        'FillerSupplementalServiceInformation',
        'MedicallyNecessaryDuplicateProcedureReason',
        'ResultHandling',
        'ParentUniversalServiceIdentifier',
        'ObservationGroupId',
        'ParentObservationGroupId',
        'AlternatePlacerOrderNumber',
        'ParentOrder',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('OBR');
        this.setValues(values);
    }

    get SetIdObr() {
        return this.getComponent('SetIdObr');
    }

    set SetIdObr(value) {
        this.setComponentValue('SetIdObr', value);
    }

    get SetIdObservationRequest() {
        return this.getComponent('SetIdObr');
    }

    set SetIdObservationRequest(value) {
        this.setComponentValue('SetIdObr', value);
    }

    get PlacerOrderNumber() {
        return this.getComponent('PlacerOrderNumber');
    }

    set PlacerOrderNumber(value) {
        this.setComponentValue('PlacerOrderNumber', value);
    }

    get FillerOrderNumber() {
        return this.getComponent('FillerOrderNumber');
    }

    set FillerOrderNumber(value) {
        this.setComponentValue('FillerOrderNumber', value);
    }

    get UniversalServiceIdentifier() {
        return this.getComponent('UniversalServiceIdentifier');
    }

    set UniversalServiceIdentifier(value) {
        this.setComponentValue('UniversalServiceIdentifier', value);
    }

    get UniversalServiceId() {
        return this.getComponent('UniversalServiceIdentifier');
    }

    set UniversalServiceId(value) {
        this.setComponentValue('UniversalServiceIdentifier', value);
    }

    get Priority() {
        return this.getComponent('Priority');
    }

    set Priority(value) {
        this.setComponentValue('Priority', value);
    }

    get PriorityObr() {
        return this.getComponent('Priority');
    }

    set PriorityObr(value) {
        this.setComponentValue('Priority', value);
    }

    get RequestedDateTime() {
        return this.getComponent('RequestedDateTime');
    }

    set RequestedDateTime(value) {
        this.setComponentValue('RequestedDateTime', value);
    }

    get ObservationDateTime() {
        return this.getComponent('ObservationDateTime');
    }

    set ObservationDateTime(value) {
        this.setComponentValue('ObservationDateTime', value);
    }

    get ObservationEndDateTime() {
        return this.getComponent('ObservationEndDateTime');
    }

    set ObservationEndDateTime(value) {
        this.setComponentValue('ObservationEndDateTime', value);
    }

    get CollectionVolume() {
        return this.getComponent('CollectionVolume');
    }

    set CollectionVolume(value) {
        this.setComponentValue('CollectionVolume', value);
    }

    get CollectorIdentifier() {
        return this.getComponent('CollectorIdentifier');
    }

    set CollectorIdentifier(value) {
        this.setComponentValue('CollectorIdentifier', value);
    }

    get SpecimenActionCode() {
        return this.getComponent('SpecimenActionCode');
    }

    set SpecimenActionCode(value) {
        this.setComponentValue('SpecimenActionCode', value);
    }

    get DangerCode() {
        return this.getComponent('DangerCode');
    }

    set DangerCode(value) {
        this.setComponentValue('DangerCode', value);
    }

    get RelevantClinicalInformation() {
        return this.getComponent('RelevantClinicalInformation');
    }

    set RelevantClinicalInformation(value) {
        this.setComponentValue('RelevantClinicalInformation', value);
    }

    get RelevantClinicalInfo() {
        return this.getComponent('RelevantClinicalInformation');
    }

    set RelevantClinicalInfo(value) {
        this.setComponentValue('RelevantClinicalInformation', value);
    }

    get SpecimenReceivedDateTime() {
        return this.getComponent('SpecimenReceivedDateTime');
    }

    set SpecimenReceivedDateTime(value) {
        this.setComponentValue('SpecimenReceivedDateTime', value);
    }

    get SpecimenSource() {
        return this.getComponent('SpecimenSource');
    }

    set SpecimenSource(value) {
        this.setComponentValue('SpecimenSource', value);
    }

    get OrderingProvider() {
        return this.getComponent('OrderingProvider');
    }

    set OrderingProvider(value) {
        this.setComponentValue('OrderingProvider', value);
    }

    get OrderCallbackPhoneNumber() {
        return this.getComponent('OrderCallbackPhoneNumber');
    }

    set OrderCallbackPhoneNumber(value) {
        this.setComponentValue('OrderCallbackPhoneNumber', value);
    }

    get PlacerField1() {
        return this.getComponent('PlacerField1');
    }

    set PlacerField1(value) {
        this.setComponentValue('PlacerField1', value);
    }

    get PlacerField2() {
        return this.getComponent('PlacerField2');
    }

    set PlacerField2(value) {
        this.setComponentValue('PlacerField2', value);
    }

    get FillerField1() {
        return this.getComponent('FillerField1');
    }

    set FillerField1(value) {
        this.setComponentValue('FillerField1', value);
    }

    get FillerField2() {
        return this.getComponent('FillerField2');
    }

    set FillerField2(value) {
        this.setComponentValue('FillerField2', value);
    }

    get ResultsRptStatusChngDateTime() {
        return this.getComponent('ResultsRptStatusChngDateTime');
    }

    set ResultsRptStatusChngDateTime(value) {
        this.setComponentValue('ResultsRptStatusChngDateTime', value);
    }

    get ChargeToPractice() {
        return this.getComponent('ChargeToPractice');
    }

    set ChargeToPractice(value) {
        this.setComponentValue('ChargeToPractice', value);
    }

    get DiagnosticServSectId() {
        return this.getComponent('DiagnosticServSectId');
    }

    set DiagnosticServSectId(value) {
        this.setComponentValue('DiagnosticServSectId', value);
    }

    get DiagnosticServiceSectionId() {
        return this.getComponent('DiagnosticServSectId');
    }

    set DiagnosticServiceSectionId(value) {
        this.setComponentValue('DiagnosticServSectId', value);
    }

    get ResultStatus() {
        return this.getComponent('ResultStatus');
    }

    set ResultStatus(value) {
        this.setComponentValue('ResultStatus', value);
    }

    get ParentResult() {
        return this.getComponent('ParentResult');
    }

    set ParentResult(value) {
        this.setComponentValue('ParentResult', value);
    }

    get QuantityTiming() {
        return this.getComponent('QuantityTiming');
    }

    set QuantityTiming(value) {
        this.setComponentValue('QuantityTiming', value);
    }

    get ResultCopiesTo() {
        return this.getComponent('ResultCopiesTo');
    }

    set ResultCopiesTo(value) {
        this.setComponentValue('ResultCopiesTo', value);
    }

    get Parent() {
        return this.getComponent('Parent');
    }

    set Parent(value) {
        this.setComponentValue('Parent', value);
    }

    get ParentNumber() {
        return this.getComponent('Parent');
    }

    set ParentNumber(value) {
        this.setComponentValue('Parent', value);
    }

    get TransportationMode() {
        return this.getComponent('TransportationMode');
    }

    set TransportationMode(value) {
        this.setComponentValue('TransportationMode', value);
    }

    get ReasonForStudy() {
        return this.getComponent('ReasonForStudy');
    }

    set ReasonForStudy(value) {
        this.setComponentValue('ReasonForStudy', value);
    }

    get PrincipalResultInterpreter() {
        return this.getComponent('PrincipalResultInterpreter');
    }

    set PrincipalResultInterpreter(value) {
        this.setComponentValue('PrincipalResultInterpreter', value);
    }

    get AssistantResultInterpreter() {
        return this.getComponent('AssistantResultInterpreter');
    }

    set AssistantResultInterpreter(value) {
        this.setComponentValue('AssistantResultInterpreter', value);
    }

    get Technician() {
        return this.getComponent('Technician');
    }

    set Technician(value) {
        this.setComponentValue('Technician', value);
    }

    get Transcriptionist() {
        return this.getComponent('Transcriptionist');
    }

    set Transcriptionist(value) {
        this.setComponentValue('Transcriptionist', value);
    }

    get ScheduledDateTime() {
        return this.getComponent('ScheduledDateTime');
    }

    set ScheduledDateTime(value) {
        this.setComponentValue('ScheduledDateTime', value);
    }

    get NumberOfSampleContainers() {
        return this.getComponent('NumberOfSampleContainers');
    }

    set NumberOfSampleContainers(value) {
        this.setComponentValue('NumberOfSampleContainers', value);
    }

    get TransportLogisticsOfCollectedSample() {
        return this.getComponent('TransportLogisticsOfCollectedSample');
    }

    set TransportLogisticsOfCollectedSample(value) {
        this.setComponentValue('TransportLogisticsOfCollectedSample', value);
    }

    get CollectorSComment() {
        return this.getComponent('CollectorSComment');
    }

    set CollectorSComment(value) {
        this.setComponentValue('CollectorSComment', value);
    }

    get TransportArrangementResponsibility() {
        return this.getComponent('TransportArrangementResponsibility');
    }

    set TransportArrangementResponsibility(value) {
        this.setComponentValue('TransportArrangementResponsibility', value);
    }

    get TransportArranged() {
        return this.getComponent('TransportArranged');
    }

    set TransportArranged(value) {
        this.setComponentValue('TransportArranged', value);
    }

    get EscortRequired() {
        return this.getComponent('EscortRequired');
    }

    set EscortRequired(value) {
        this.setComponentValue('EscortRequired', value);
    }

    get PlannedPatientTransportComment() {
        return this.getComponent('PlannedPatientTransportComment');
    }

    set PlannedPatientTransportComment(value) {
        this.setComponentValue('PlannedPatientTransportComment', value);
    }

    get ProcedureCode() {
        return this.getComponent('ProcedureCode');
    }

    set ProcedureCode(value) {
        this.setComponentValue('ProcedureCode', value);
    }

    get ProcedureCodeModifier() {
        return this.getComponent('ProcedureCodeModifier');
    }

    set ProcedureCodeModifier(value) {
        this.setComponentValue('ProcedureCodeModifier', value);
    }

    get PlacerSupplementalServiceInformation() {
        return this.getComponent('PlacerSupplementalServiceInformation');
    }

    set PlacerSupplementalServiceInformation(value) {
        this.setComponentValue('PlacerSupplementalServiceInformation', value);
    }

    get FillerSupplementalServiceInformation() {
        return this.getComponent('FillerSupplementalServiceInformation');
    }

    set FillerSupplementalServiceInformation(value) {
        this.setComponentValue('FillerSupplementalServiceInformation', value);
    }

    get MedicallyNecessaryDuplicateProcedureReason() {
        return this.getComponent('MedicallyNecessaryDuplicateProcedureReason');
    }

    set MedicallyNecessaryDuplicateProcedureReason(value) {
        this.setComponentValue('MedicallyNecessaryDuplicateProcedureReason', value);
    }

    get ResultHandling() {
        return this.getComponent('ResultHandling');
    }

    set ResultHandling(value) {
        this.setComponentValue('ResultHandling', value);
    }

    get ParentUniversalServiceIdentifier() {
        return this.getComponent('ParentUniversalServiceIdentifier');
    }

    set ParentUniversalServiceIdentifier(value) {
        this.setComponentValue('ParentUniversalServiceIdentifier', value);
    }

    get ObservationGroupId() {
        return this.getComponent('ObservationGroupId');
    }

    set ObservationGroupId(value) {
        this.setComponentValue('ObservationGroupId', value);
    }

    get ParentObservationGroupId() {
        return this.getComponent('ParentObservationGroupId');
    }

    set ParentObservationGroupId(value) {
        this.setComponentValue('ParentObservationGroupId', value);
    }

    get AlternatePlacerOrderNumber() {
        return this.getComponent('AlternatePlacerOrderNumber');
    }

    set AlternatePlacerOrderNumber(value) {
        this.setComponentValue('AlternatePlacerOrderNumber', value);
    }

    get ParentOrder() {
        return this.getComponent('ParentOrder');
    }

    set ParentOrder(value) {
        this.setComponentValue('ParentOrder', value);
    }
}
