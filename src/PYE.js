import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';

export class PYE extends Segment {
    static components = {
        SetIdPye: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayeeType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayeeRelationshipToInvoicePatient: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayeeIdentificationList: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: true,
            maxOccurence: 5,
            minOccurence: 1,
        },
        PayeePersonName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 4,
            minOccurence: 1,
        },
        PayeeAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 4,
            minOccurence: 1,
        },
        PaymentMethod: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdPye', 'PayeeType', 'PayeeRelationshipToInvoicePatient', 'PayeeIdentificationList', 'PayeePersonName', 'PayeeAddress', 'PaymentMethod'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PYE');
        this.setValues(values);
    }

    get SetIdPye() {
        return this.getComponent('SetIdPye');
    }

    set SetIdPye(value) {
        this.setComponentValue('SetIdPye', value);
    }

    get PayeeType() {
        return this.getComponent('PayeeType');
    }

    set PayeeType(value) {
        this.setComponentValue('PayeeType', value);
    }

    get PayeeRelationshipToInvoicePatient() {
        return this.getComponent('PayeeRelationshipToInvoicePatient');
    }

    set PayeeRelationshipToInvoicePatient(value) {
        this.setComponentValue('PayeeRelationshipToInvoicePatient', value);
    }

    get PayeeIdentificationList() {
        return this.getComponent('PayeeIdentificationList');
    }

    set PayeeIdentificationList(value) {
        this.setComponentValue('PayeeIdentificationList', value);
    }

    get PayeePersonName() {
        return this.getComponent('PayeePersonName');
    }

    set PayeePersonName(value) {
        this.setComponentValue('PayeePersonName', value);
    }

    get PayeeAddress() {
        return this.getComponent('PayeeAddress');
    }

    set PayeeAddress(value) {
        this.setComponentValue('PayeeAddress', value);
    }

    get PaymentMethod() {
        return this.getComponent('PaymentMethod');
    }

    set PaymentMethod(value) {
        this.setComponentValue('PaymentMethod', value);
    }
}
