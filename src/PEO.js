import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { FT } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';

export class PEO extends Segment {
    static components = {
        EventIdentifiersUsed: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EventSymptomDiagnosisCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EventOnsetDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventExacerbationDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventImprovedDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventEndedDataTime: {
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
        EventLocationOccurredAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        EventQualification: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EventSerious: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventExpected: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventOutcome: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PatientOutcome: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EventDescriptionFromOthers: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EventDescriptionFromOriginalReporter: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EventFromOriginalReporter: { aliasOf: 'EventDescriptionFromOriginalReporter' },
        EventDescriptionFromPatient: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EventDescriptionFromPractitioner: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        EventDescriptionFromAutopsy: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CauseOfDeath: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PrimaryObserverName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PrimaryObserverAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PrimaryObserverTelephone: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PrimaryObserverSQualification: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ConfirmationProvidedBy: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryObserverAwareDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryObserverSIdentityMayBeDivulged: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'EventIdentifiersUsed',
        'EventSymptomDiagnosisCode',
        'EventOnsetDateTime',
        'EventExacerbationDateTime',
        'EventImprovedDateTime',
        'EventEndedDataTime',
        'EventLocationOccurredAddress',
        'EventQualification',
        'EventSerious',
        'EventExpected',
        'EventOutcome',
        'PatientOutcome',
        'EventDescriptionFromOthers',
        'EventDescriptionFromOriginalReporter',
        'EventDescriptionFromPatient',
        'EventDescriptionFromPractitioner',
        'EventDescriptionFromAutopsy',
        'CauseOfDeath',
        'PrimaryObserverName',
        'PrimaryObserverAddress',
        'PrimaryObserverTelephone',
        'PrimaryObserverSQualification',
        'ConfirmationProvidedBy',
        'PrimaryObserverAwareDateTime',
        'PrimaryObserverSIdentityMayBeDivulged',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PEO');
        this.setValues(values);
    }

    get EventIdentifiersUsed() {
        return this.getComponent('EventIdentifiersUsed');
    }

    set EventIdentifiersUsed(value) {
        this.setComponentValue('EventIdentifiersUsed', value);
    }

    get EventSymptomDiagnosisCode() {
        return this.getComponent('EventSymptomDiagnosisCode');
    }

    set EventSymptomDiagnosisCode(value) {
        this.setComponentValue('EventSymptomDiagnosisCode', value);
    }

    get EventOnsetDateTime() {
        return this.getComponent('EventOnsetDateTime');
    }

    set EventOnsetDateTime(value) {
        this.setComponentValue('EventOnsetDateTime', value);
    }

    get EventExacerbationDateTime() {
        return this.getComponent('EventExacerbationDateTime');
    }

    set EventExacerbationDateTime(value) {
        this.setComponentValue('EventExacerbationDateTime', value);
    }

    get EventImprovedDateTime() {
        return this.getComponent('EventImprovedDateTime');
    }

    set EventImprovedDateTime(value) {
        this.setComponentValue('EventImprovedDateTime', value);
    }

    get EventEndedDataTime() {
        return this.getComponent('EventEndedDataTime');
    }

    set EventEndedDataTime(value) {
        this.setComponentValue('EventEndedDataTime', value);
    }

    get EventLocationOccurredAddress() {
        return this.getComponent('EventLocationOccurredAddress');
    }

    set EventLocationOccurredAddress(value) {
        this.setComponentValue('EventLocationOccurredAddress', value);
    }

    get EventQualification() {
        return this.getComponent('EventQualification');
    }

    set EventQualification(value) {
        this.setComponentValue('EventQualification', value);
    }

    get EventSerious() {
        return this.getComponent('EventSerious');
    }

    set EventSerious(value) {
        this.setComponentValue('EventSerious', value);
    }

    get EventExpected() {
        return this.getComponent('EventExpected');
    }

    set EventExpected(value) {
        this.setComponentValue('EventExpected', value);
    }

    get EventOutcome() {
        return this.getComponent('EventOutcome');
    }

    set EventOutcome(value) {
        this.setComponentValue('EventOutcome', value);
    }

    get PatientOutcome() {
        return this.getComponent('PatientOutcome');
    }

    set PatientOutcome(value) {
        this.setComponentValue('PatientOutcome', value);
    }

    get EventDescriptionFromOthers() {
        return this.getComponent('EventDescriptionFromOthers');
    }

    set EventDescriptionFromOthers(value) {
        this.setComponentValue('EventDescriptionFromOthers', value);
    }

    get EventDescriptionFromOriginalReporter() {
        return this.getComponent('EventDescriptionFromOriginalReporter');
    }

    set EventDescriptionFromOriginalReporter(value) {
        this.setComponentValue('EventDescriptionFromOriginalReporter', value);
    }

    get EventFromOriginalReporter() {
        return this.getComponent('EventDescriptionFromOriginalReporter');
    }

    set EventFromOriginalReporter(value) {
        this.setComponentValue('EventDescriptionFromOriginalReporter', value);
    }

    get EventDescriptionFromPatient() {
        return this.getComponent('EventDescriptionFromPatient');
    }

    set EventDescriptionFromPatient(value) {
        this.setComponentValue('EventDescriptionFromPatient', value);
    }

    get EventDescriptionFromPractitioner() {
        return this.getComponent('EventDescriptionFromPractitioner');
    }

    set EventDescriptionFromPractitioner(value) {
        this.setComponentValue('EventDescriptionFromPractitioner', value);
    }

    get EventDescriptionFromAutopsy() {
        return this.getComponent('EventDescriptionFromAutopsy');
    }

    set EventDescriptionFromAutopsy(value) {
        this.setComponentValue('EventDescriptionFromAutopsy', value);
    }

    get CauseOfDeath() {
        return this.getComponent('CauseOfDeath');
    }

    set CauseOfDeath(value) {
        this.setComponentValue('CauseOfDeath', value);
    }

    get PrimaryObserverName() {
        return this.getComponent('PrimaryObserverName');
    }

    set PrimaryObserverName(value) {
        this.setComponentValue('PrimaryObserverName', value);
    }

    get PrimaryObserverAddress() {
        return this.getComponent('PrimaryObserverAddress');
    }

    set PrimaryObserverAddress(value) {
        this.setComponentValue('PrimaryObserverAddress', value);
    }

    get PrimaryObserverTelephone() {
        return this.getComponent('PrimaryObserverTelephone');
    }

    set PrimaryObserverTelephone(value) {
        this.setComponentValue('PrimaryObserverTelephone', value);
    }

    get PrimaryObserverSQualification() {
        return this.getComponent('PrimaryObserverSQualification');
    }

    set PrimaryObserverSQualification(value) {
        this.setComponentValue('PrimaryObserverSQualification', value);
    }

    get ConfirmationProvidedBy() {
        return this.getComponent('ConfirmationProvidedBy');
    }

    set ConfirmationProvidedBy(value) {
        this.setComponentValue('ConfirmationProvidedBy', value);
    }

    get PrimaryObserverAwareDateTime() {
        return this.getComponent('PrimaryObserverAwareDateTime');
    }

    set PrimaryObserverAwareDateTime(value) {
        this.setComponentValue('PrimaryObserverAwareDateTime', value);
    }

    get PrimaryObserverSIdentityMayBeDivulged() {
        return this.getComponent('PrimaryObserverSIdentityMayBeDivulged');
    }

    set PrimaryObserverSIdentityMayBeDivulged(value) {
        this.setComponentValue('PrimaryObserverSIdentityMayBeDivulged', value);
    }
}
