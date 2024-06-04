import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class QAK extends Segment {
    static components = {
        QueryTag: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QueryResponseStatus: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MessageQueryName: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        HitCountTotal: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        HitCount: { aliasOf: 'HitCountTotal' },
        ThisPayload: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        HitsRemaining: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'QueryTag', 'QueryResponseStatus', 'MessageQueryName', 'HitCountTotal', 'ThisPayload', 'HitsRemaining'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('QAK');
        this.setValues(values);
    }

    get QueryTag() {
        return this.getComponent('QueryTag');
    }

    set QueryTag(value) {
        this.setComponentValue('QueryTag', value);
    }

    get QueryResponseStatus() {
        return this.getComponent('QueryResponseStatus');
    }

    set QueryResponseStatus(value) {
        this.setComponentValue('QueryResponseStatus', value);
    }

    get MessageQueryName() {
        return this.getComponent('MessageQueryName');
    }

    set MessageQueryName(value) {
        this.setComponentValue('MessageQueryName', value);
    }

    get HitCountTotal() {
        return this.getComponent('HitCountTotal');
    }

    set HitCountTotal(value) {
        this.setComponentValue('HitCountTotal', value);
    }

    get HitCount() {
        return this.getComponent('HitCountTotal');
    }

    set HitCount(value) {
        this.setComponentValue('HitCountTotal', value);
    }

    get ThisPayload() {
        return this.getComponent('ThisPayload');
    }

    set ThisPayload(value) {
        this.setComponentValue('ThisPayload', value);
    }

    get HitsRemaining() {
        return this.getComponent('HitsRemaining');
    }

    set HitsRemaining(value) {
        this.setComponentValue('HitsRemaining', value);
    }
}
