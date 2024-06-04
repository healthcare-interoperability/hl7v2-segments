import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { SN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class TCD extends Segment {
    static components = {
        UniversalServiceIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AutoDilutionFactor: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RerunDilutionFactor: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PreDilutionFactor: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EndogenousContentOfPreDilutionDiluent: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AutomaticRepeatAllowed: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReflexAllowed: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AnalyteRepeatStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'UniversalServiceIdentifier',
        'AutoDilutionFactor',
        'RerunDilutionFactor',
        'PreDilutionFactor',
        'EndogenousContentOfPreDilutionDiluent',
        'AutomaticRepeatAllowed',
        'ReflexAllowed',
        'AnalyteRepeatStatus',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('TCD');
        this.setValues(values);
    }

    get UniversalServiceIdentifier() {
        return this.getComponent('UniversalServiceIdentifier');
    }

    set UniversalServiceIdentifier(value) {
        this.setComponentValue('UniversalServiceIdentifier', value);
    }

    get AutoDilutionFactor() {
        return this.getComponent('AutoDilutionFactor');
    }

    set AutoDilutionFactor(value) {
        this.setComponentValue('AutoDilutionFactor', value);
    }

    get RerunDilutionFactor() {
        return this.getComponent('RerunDilutionFactor');
    }

    set RerunDilutionFactor(value) {
        this.setComponentValue('RerunDilutionFactor', value);
    }

    get PreDilutionFactor() {
        return this.getComponent('PreDilutionFactor');
    }

    set PreDilutionFactor(value) {
        this.setComponentValue('PreDilutionFactor', value);
    }

    get EndogenousContentOfPreDilutionDiluent() {
        return this.getComponent('EndogenousContentOfPreDilutionDiluent');
    }

    set EndogenousContentOfPreDilutionDiluent(value) {
        this.setComponentValue('EndogenousContentOfPreDilutionDiluent', value);
    }

    get AutomaticRepeatAllowed() {
        return this.getComponent('AutomaticRepeatAllowed');
    }

    set AutomaticRepeatAllowed(value) {
        this.setComponentValue('AutomaticRepeatAllowed', value);
    }

    get ReflexAllowed() {
        return this.getComponent('ReflexAllowed');
    }

    set ReflexAllowed(value) {
        this.setComponentValue('ReflexAllowed', value);
    }

    get AnalyteRepeatStatus() {
        return this.getComponent('AnalyteRepeatStatus');
    }

    set AnalyteRepeatStatus(value) {
        this.setComponentValue('AnalyteRepeatStatus', value);
    }
}
