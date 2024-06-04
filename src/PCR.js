import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class PCR extends Segment {
    static components = {
        ImplicatedProduct: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GenericProduct: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductClass: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TotalDurationOfTherapy: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductManufactureDate: {
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
        ProductExpirationDate: {
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
        ProductImplantationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductExplantationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SingleUseDevice: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IndicationForProductUse: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductProblem: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductSerialLotNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: true,
            maxOccurence: 3,
            minOccurence: 1,
        },
        ProductAvailableForInspection: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductEvaluationPerformed: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductEvaluationStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProductEvaluationResults: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EvaluatedProductSource: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateProductReturnedToManufacturer: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeviceOperatorQualifications: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RelatednessAssessment: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActionTakenInResponseToTheEvent: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: true,
            maxOccurence: 6,
            minOccurence: 1,
        },
        EventCausalityObservations: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: true,
            maxOccurence: 6,
            minOccurence: 1,
        },
        IndirectExposureMechanism: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: true,
            maxOccurence: 3,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ImplicatedProduct',
        'GenericProduct',
        'ProductClass',
        'TotalDurationOfTherapy',
        'ProductManufactureDate',
        'ProductExpirationDate',
        'ProductImplantationDate',
        'ProductExplantationDate',
        'SingleUseDevice',
        'IndicationForProductUse',
        'ProductProblem',
        'ProductSerialLotNumber',
        'ProductAvailableForInspection',
        'ProductEvaluationPerformed',
        'ProductEvaluationStatus',
        'ProductEvaluationResults',
        'EvaluatedProductSource',
        'DateProductReturnedToManufacturer',
        'DeviceOperatorQualifications',
        'RelatednessAssessment',
        'ActionTakenInResponseToTheEvent',
        'EventCausalityObservations',
        'IndirectExposureMechanism',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PCR');
        this.setValues(values);
    }

    get ImplicatedProduct() {
        return this.getComponent('ImplicatedProduct');
    }

    set ImplicatedProduct(value) {
        this.setComponentValue('ImplicatedProduct', value);
    }

    get GenericProduct() {
        return this.getComponent('GenericProduct');
    }

    set GenericProduct(value) {
        this.setComponentValue('GenericProduct', value);
    }

    get ProductClass() {
        return this.getComponent('ProductClass');
    }

    set ProductClass(value) {
        this.setComponentValue('ProductClass', value);
    }

    get TotalDurationOfTherapy() {
        return this.getComponent('TotalDurationOfTherapy');
    }

    set TotalDurationOfTherapy(value) {
        this.setComponentValue('TotalDurationOfTherapy', value);
    }

    get ProductManufactureDate() {
        return this.getComponent('ProductManufactureDate');
    }

    set ProductManufactureDate(value) {
        this.setComponentValue('ProductManufactureDate', value);
    }

    get ProductExpirationDate() {
        return this.getComponent('ProductExpirationDate');
    }

    set ProductExpirationDate(value) {
        this.setComponentValue('ProductExpirationDate', value);
    }

    get ProductImplantationDate() {
        return this.getComponent('ProductImplantationDate');
    }

    set ProductImplantationDate(value) {
        this.setComponentValue('ProductImplantationDate', value);
    }

    get ProductExplantationDate() {
        return this.getComponent('ProductExplantationDate');
    }

    set ProductExplantationDate(value) {
        this.setComponentValue('ProductExplantationDate', value);
    }

    get SingleUseDevice() {
        return this.getComponent('SingleUseDevice');
    }

    set SingleUseDevice(value) {
        this.setComponentValue('SingleUseDevice', value);
    }

    get IndicationForProductUse() {
        return this.getComponent('IndicationForProductUse');
    }

    set IndicationForProductUse(value) {
        this.setComponentValue('IndicationForProductUse', value);
    }

    get ProductProblem() {
        return this.getComponent('ProductProblem');
    }

    set ProductProblem(value) {
        this.setComponentValue('ProductProblem', value);
    }

    get ProductSerialLotNumber() {
        return this.getComponent('ProductSerialLotNumber');
    }

    set ProductSerialLotNumber(value) {
        this.setComponentValue('ProductSerialLotNumber', value);
    }

    get ProductAvailableForInspection() {
        return this.getComponent('ProductAvailableForInspection');
    }

    set ProductAvailableForInspection(value) {
        this.setComponentValue('ProductAvailableForInspection', value);
    }

    get ProductEvaluationPerformed() {
        return this.getComponent('ProductEvaluationPerformed');
    }

    set ProductEvaluationPerformed(value) {
        this.setComponentValue('ProductEvaluationPerformed', value);
    }

    get ProductEvaluationStatus() {
        return this.getComponent('ProductEvaluationStatus');
    }

    set ProductEvaluationStatus(value) {
        this.setComponentValue('ProductEvaluationStatus', value);
    }

    get ProductEvaluationResults() {
        return this.getComponent('ProductEvaluationResults');
    }

    set ProductEvaluationResults(value) {
        this.setComponentValue('ProductEvaluationResults', value);
    }

    get EvaluatedProductSource() {
        return this.getComponent('EvaluatedProductSource');
    }

    set EvaluatedProductSource(value) {
        this.setComponentValue('EvaluatedProductSource', value);
    }

    get DateProductReturnedToManufacturer() {
        return this.getComponent('DateProductReturnedToManufacturer');
    }

    set DateProductReturnedToManufacturer(value) {
        this.setComponentValue('DateProductReturnedToManufacturer', value);
    }

    get DeviceOperatorQualifications() {
        return this.getComponent('DeviceOperatorQualifications');
    }

    set DeviceOperatorQualifications(value) {
        this.setComponentValue('DeviceOperatorQualifications', value);
    }

    get RelatednessAssessment() {
        return this.getComponent('RelatednessAssessment');
    }

    set RelatednessAssessment(value) {
        this.setComponentValue('RelatednessAssessment', value);
    }

    get ActionTakenInResponseToTheEvent() {
        return this.getComponent('ActionTakenInResponseToTheEvent');
    }

    set ActionTakenInResponseToTheEvent(value) {
        this.setComponentValue('ActionTakenInResponseToTheEvent', value);
    }

    get EventCausalityObservations() {
        return this.getComponent('EventCausalityObservations');
    }

    set EventCausalityObservations(value) {
        this.setComponentValue('EventCausalityObservations', value);
    }

    get IndirectExposureMechanism() {
        return this.getComponent('IndirectExposureMechanism');
    }

    set IndirectExposureMechanism(value) {
        this.setComponentValue('IndirectExposureMechanism', value);
    }
}
