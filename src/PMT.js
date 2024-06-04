import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';

export class PMT extends Segment {
    static components = {
        PaymentRemittanceAdviceNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PaymentRemittanceEffectiveDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PaymentRemittanceExpirationDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PaymentMethod: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PaymentRemittanceDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PaymentRemittanceAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CheckNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayeeBankIdentification: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayeeTransitNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayeeBankAccountId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PaymentOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EsrCodeLine: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'PaymentRemittanceAdviceNumber',
        'PaymentRemittanceEffectiveDateTime',
        'PaymentRemittanceExpirationDateTime',
        'PaymentMethod',
        'PaymentRemittanceDateTime',
        'PaymentRemittanceAmount',
        'CheckNumber',
        'PayeeBankIdentification',
        'PayeeTransitNumber',
        'PayeeBankAccountId',
        'PaymentOrganization',
        'EsrCodeLine',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PMT');
        this.setValues(values);
    }

    get PaymentRemittanceAdviceNumber() {
        return this.getComponent('PaymentRemittanceAdviceNumber');
    }

    set PaymentRemittanceAdviceNumber(value) {
        this.setComponentValue('PaymentRemittanceAdviceNumber', value);
    }

    get PaymentRemittanceEffectiveDateTime() {
        return this.getComponent('PaymentRemittanceEffectiveDateTime');
    }

    set PaymentRemittanceEffectiveDateTime(value) {
        this.setComponentValue('PaymentRemittanceEffectiveDateTime', value);
    }

    get PaymentRemittanceExpirationDateTime() {
        return this.getComponent('PaymentRemittanceExpirationDateTime');
    }

    set PaymentRemittanceExpirationDateTime(value) {
        this.setComponentValue('PaymentRemittanceExpirationDateTime', value);
    }

    get PaymentMethod() {
        return this.getComponent('PaymentMethod');
    }

    set PaymentMethod(value) {
        this.setComponentValue('PaymentMethod', value);
    }

    get PaymentRemittanceDateTime() {
        return this.getComponent('PaymentRemittanceDateTime');
    }

    set PaymentRemittanceDateTime(value) {
        this.setComponentValue('PaymentRemittanceDateTime', value);
    }

    get PaymentRemittanceAmount() {
        return this.getComponent('PaymentRemittanceAmount');
    }

    set PaymentRemittanceAmount(value) {
        this.setComponentValue('PaymentRemittanceAmount', value);
    }

    get CheckNumber() {
        return this.getComponent('CheckNumber');
    }

    set CheckNumber(value) {
        this.setComponentValue('CheckNumber', value);
    }

    get PayeeBankIdentification() {
        return this.getComponent('PayeeBankIdentification');
    }

    set PayeeBankIdentification(value) {
        this.setComponentValue('PayeeBankIdentification', value);
    }

    get PayeeTransitNumber() {
        return this.getComponent('PayeeTransitNumber');
    }

    set PayeeTransitNumber(value) {
        this.setComponentValue('PayeeTransitNumber', value);
    }

    get PayeeBankAccountId() {
        return this.getComponent('PayeeBankAccountId');
    }

    set PayeeBankAccountId(value) {
        this.setComponentValue('PayeeBankAccountId', value);
    }

    get PaymentOrganization() {
        return this.getComponent('PaymentOrganization');
    }

    set PaymentOrganization(value) {
        this.setComponentValue('PaymentOrganization', value);
    }

    get EsrCodeLine() {
        return this.getComponent('EsrCodeLine');
    }

    set EsrCodeLine(value) {
        this.setComponentValue('EsrCodeLine', value);
    }
}
