import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';

export class PCE extends Segment {
    static components = {
        SetIdPce: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDPCE: { aliasOf: 'SetIdPce' },
        CostCenterAccountNumber: {
            defaultDataType: CX,
            dataTypes: [
                { dataType: CX, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TransactionAmountUnit: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdPce', 'CostCenterAccountNumber', 'TransactionCode', 'TransactionAmountUnit'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PCE');
        this.setValues(values);
    }

    get SetIdPce() {
        return this.getComponent('SetIdPce');
    }

    set SetIdPce(value) {
        this.setComponentValue('SetIdPce', value);
    }

    get SetIDPCE() {
        return this.getComponent('SetIdPce');
    }

    set SetIDPCE(value) {
        this.setComponentValue('SetIdPce', value);
    }

    get CostCenterAccountNumber() {
        return this.getComponent('CostCenterAccountNumber');
    }

    set CostCenterAccountNumber(value) {
        this.setComponentValue('CostCenterAccountNumber', value);
    }

    get TransactionCode() {
        return this.getComponent('TransactionCode');
    }

    set TransactionCode(value) {
        this.setComponentValue('TransactionCode', value);
    }

    get TransactionAmountUnit() {
        return this.getComponent('TransactionAmountUnit');
    }

    set TransactionAmountUnit(value) {
        this.setComponentValue('TransactionAmountUnit', value);
    }
}
