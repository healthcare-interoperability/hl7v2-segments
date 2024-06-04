import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CCD } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_CCD } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { CK } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';

export class BLG extends Segment {
    static components = {
        WhenToCharge: {
            defaultDataType: CCD,
            dataTypes: [
                { dataType: CCD, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_CCD, versions: ['2.3'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChargeType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccountId: {
            defaultDataType: CX,
            dataTypes: [
                { dataType: CX, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CK, versions: ['2.3'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccountID: { aliasOf: 'AccountId' },
        ChargeTypeReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'WhenToCharge', 'ChargeType', 'AccountId', 'ChargeTypeReason'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('BLG');
        this.setValues(values);
    }

    get WhenToCharge() {
        return this.getComponent('WhenToCharge');
    }

    set WhenToCharge(value) {
        this.setComponentValue('WhenToCharge', value);
    }

    get ChargeType() {
        return this.getComponent('ChargeType');
    }

    set ChargeType(value) {
        this.setComponentValue('ChargeType', value);
    }

    get AccountId() {
        return this.getComponent('AccountId');
    }

    set AccountId(value) {
        this.setComponentValue('AccountId', value);
    }

    get AccountID() {
        return this.getComponent('AccountId');
    }

    set AccountID(value) {
        this.setComponentValue('AccountId', value);
    }

    get ChargeTypeReason() {
        return this.getComponent('ChargeTypeReason');
    }

    set ChargeTypeReason(value) {
        this.setComponentValue('ChargeTypeReason', value);
    }
}
