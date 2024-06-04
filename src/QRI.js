import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class QRI extends Segment {
    static components = {
        CandidateConfidence: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MatchReasonCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AlgorithmDescriptor: {
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
    };

    static componentsByIndex = ['', 'CandidateConfidence', 'MatchReasonCode', 'AlgorithmDescriptor'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('QRI');
        this.setValues(values);
    }

    get CandidateConfidence() {
        return this.getComponent('CandidateConfidence');
    }

    set CandidateConfidence(value) {
        this.setComponentValue('CandidateConfidence', value);
    }

    get MatchReasonCode() {
        return this.getComponent('MatchReasonCode');
    }

    set MatchReasonCode(value) {
        this.setComponentValue('MatchReasonCode', value);
    }

    get AlgorithmDescriptor() {
        return this.getComponent('AlgorithmDescriptor');
    }

    set AlgorithmDescriptor(value) {
        this.setComponentValue('AlgorithmDescriptor', value);
    }
}
