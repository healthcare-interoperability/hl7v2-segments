import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';

export class ADJ extends Segment {
    static components = {
        ProviderAdjustmentNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PayerAdjustmentNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdjustmentSequenceNumber: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdjustmentCategory: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdjustmentAmount: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 5,
            minOccurence: 1,
        },
        AdjustmentQuantity: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdjustmentReasonPa: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdjustmentReasonPA: { aliasOf: 'AdjustmentReasonPa' },
        AdjustmentDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OriginalValue: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubstituteValue: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdjustmentAction: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.6'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProviderAdjustmentNumberCrossReference: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProviderProductServiceLineItemNumberCrossReference: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdjustmentDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResponsibleOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ProviderAdjustmentNumber',
        'PayerAdjustmentNumber',
        'AdjustmentSequenceNumber',
        'AdjustmentCategory',
        'AdjustmentAmount',
        'AdjustmentQuantity',
        'AdjustmentReasonPa',
        'AdjustmentDescription',
        'OriginalValue',
        'SubstituteValue',
        'AdjustmentAction',
        'ProviderAdjustmentNumberCrossReference',
        'ProviderProductServiceLineItemNumberCrossReference',
        'AdjustmentDate',
        'ResponsibleOrganization',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ADJ');
        this.setValues(values);
    }

    get ProviderAdjustmentNumber() {
        return this.getComponent('ProviderAdjustmentNumber');
    }

    set ProviderAdjustmentNumber(value) {
        this.setComponentValue('ProviderAdjustmentNumber', value);
    }

    get PayerAdjustmentNumber() {
        return this.getComponent('PayerAdjustmentNumber');
    }

    set PayerAdjustmentNumber(value) {
        this.setComponentValue('PayerAdjustmentNumber', value);
    }

    get AdjustmentSequenceNumber() {
        return this.getComponent('AdjustmentSequenceNumber');
    }

    set AdjustmentSequenceNumber(value) {
        this.setComponentValue('AdjustmentSequenceNumber', value);
    }

    get AdjustmentCategory() {
        return this.getComponent('AdjustmentCategory');
    }

    set AdjustmentCategory(value) {
        this.setComponentValue('AdjustmentCategory', value);
    }

    get AdjustmentAmount() {
        return this.getComponent('AdjustmentAmount');
    }

    set AdjustmentAmount(value) {
        this.setComponentValue('AdjustmentAmount', value);
    }

    get AdjustmentQuantity() {
        return this.getComponent('AdjustmentQuantity');
    }

    set AdjustmentQuantity(value) {
        this.setComponentValue('AdjustmentQuantity', value);
    }

    get AdjustmentReasonPa() {
        return this.getComponent('AdjustmentReasonPa');
    }

    set AdjustmentReasonPa(value) {
        this.setComponentValue('AdjustmentReasonPa', value);
    }

    get AdjustmentReasonPA() {
        return this.getComponent('AdjustmentReasonPa');
    }

    set AdjustmentReasonPA(value) {
        this.setComponentValue('AdjustmentReasonPa', value);
    }

    get AdjustmentDescription() {
        return this.getComponent('AdjustmentDescription');
    }

    set AdjustmentDescription(value) {
        this.setComponentValue('AdjustmentDescription', value);
    }

    get OriginalValue() {
        return this.getComponent('OriginalValue');
    }

    set OriginalValue(value) {
        this.setComponentValue('OriginalValue', value);
    }

    get SubstituteValue() {
        return this.getComponent('SubstituteValue');
    }

    set SubstituteValue(value) {
        this.setComponentValue('SubstituteValue', value);
    }

    get AdjustmentAction() {
        return this.getComponent('AdjustmentAction');
    }

    set AdjustmentAction(value) {
        this.setComponentValue('AdjustmentAction', value);
    }

    get ProviderAdjustmentNumberCrossReference() {
        return this.getComponent('ProviderAdjustmentNumberCrossReference');
    }

    set ProviderAdjustmentNumberCrossReference(value) {
        this.setComponentValue('ProviderAdjustmentNumberCrossReference', value);
    }

    get ProviderProductServiceLineItemNumberCrossReference() {
        return this.getComponent('ProviderProductServiceLineItemNumberCrossReference');
    }

    set ProviderProductServiceLineItemNumberCrossReference(value) {
        this.setComponentValue('ProviderProductServiceLineItemNumberCrossReference', value);
    }

    get AdjustmentDate() {
        return this.getComponent('AdjustmentDate');
    }

    set AdjustmentDate(value) {
        this.setComponentValue('AdjustmentDate', value);
    }

    get ResponsibleOrganization() {
        return this.getComponent('ResponsibleOrganization');
    }

    set ResponsibleOrganization(value) {
        this.setComponentValue('ResponsibleOrganization', value);
    }
}
