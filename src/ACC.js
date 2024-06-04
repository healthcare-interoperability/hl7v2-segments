import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';

export class ACC extends Segment {
    static components = {
        AccidentDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccidentCode: {
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
        AccidentLocation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AutoAccidentState: {
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
        AccidentJobRelatedIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccidentDeathIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EnteredBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccidentDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BroughtInBy: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PoliceNotifiedIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccidentAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DegreeOfPatientLiability: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccidentIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8'] }],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'AccidentDateTime',
        'AccidentCode',
        'AccidentLocation',
        'AutoAccidentState',
        'AccidentJobRelatedIndicator',
        'AccidentDeathIndicator',
        'EnteredBy',
        'AccidentDescription',
        'BroughtInBy',
        'PoliceNotifiedIndicator',
        'AccidentAddress',
        'DegreeOfPatientLiability',
        'AccidentIdentifier',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ACC');
        this.setValues(values);
    }

    get AccidentDateTime() {
        return this.getComponent('AccidentDateTime');
    }

    set AccidentDateTime(value) {
        this.setComponentValue('AccidentDateTime', value);
    }

    get AccidentCode() {
        return this.getComponent('AccidentCode');
    }

    set AccidentCode(value) {
        this.setComponentValue('AccidentCode', value);
    }

    get AccidentLocation() {
        return this.getComponent('AccidentLocation');
    }

    set AccidentLocation(value) {
        this.setComponentValue('AccidentLocation', value);
    }

    get AutoAccidentState() {
        return this.getComponent('AutoAccidentState');
    }

    set AutoAccidentState(value) {
        this.setComponentValue('AutoAccidentState', value);
    }

    get AccidentJobRelatedIndicator() {
        return this.getComponent('AccidentJobRelatedIndicator');
    }

    set AccidentJobRelatedIndicator(value) {
        this.setComponentValue('AccidentJobRelatedIndicator', value);
    }

    get AccidentDeathIndicator() {
        return this.getComponent('AccidentDeathIndicator');
    }

    set AccidentDeathIndicator(value) {
        this.setComponentValue('AccidentDeathIndicator', value);
    }

    get EnteredBy() {
        return this.getComponent('EnteredBy');
    }

    set EnteredBy(value) {
        this.setComponentValue('EnteredBy', value);
    }

    get AccidentDescription() {
        return this.getComponent('AccidentDescription');
    }

    set AccidentDescription(value) {
        this.setComponentValue('AccidentDescription', value);
    }

    get BroughtInBy() {
        return this.getComponent('BroughtInBy');
    }

    set BroughtInBy(value) {
        this.setComponentValue('BroughtInBy', value);
    }

    get PoliceNotifiedIndicator() {
        return this.getComponent('PoliceNotifiedIndicator');
    }

    set PoliceNotifiedIndicator(value) {
        this.setComponentValue('PoliceNotifiedIndicator', value);
    }

    get AccidentAddress() {
        return this.getComponent('AccidentAddress');
    }

    set AccidentAddress(value) {
        this.setComponentValue('AccidentAddress', value);
    }

    get DegreeOfPatientLiability() {
        return this.getComponent('DegreeOfPatientLiability');
    }

    set DegreeOfPatientLiability(value) {
        this.setComponentValue('DegreeOfPatientLiability', value);
    }

    get AccidentIdentifier() {
        return this.getComponent('AccidentIdentifier');
    }

    set AccidentIdentifier(value) {
        this.setComponentValue('AccidentIdentifier', value);
    }
}
