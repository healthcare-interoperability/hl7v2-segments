import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';

export class RQD extends Segment {
    static components = {
        RequisitionLineNumber: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ItemCodeInternal: {
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
        ItemCodeExternal: {
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
        HospitalItemCode: {
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
        RequisitionQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequisitionUnitOfMeasure: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CostCenterAccountNumber: {
            defaultDataType: CX,
            dataTypes: [
                { dataType: CX, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DepartmentCostCenter: { aliasOf: 'CostCenterAccountNumber' },
        DeptCostCenter: { aliasOf: 'CostCenterAccountNumber' },
        ItemNaturalAccountCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeliverToId: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeliverToID: { aliasOf: 'DeliverToId' },
        DateNeeded: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'RequisitionLineNumber',
        'ItemCodeInternal',
        'ItemCodeExternal',
        'HospitalItemCode',
        'RequisitionQuantity',
        'RequisitionUnitOfMeasure',
        'CostCenterAccountNumber',
        'ItemNaturalAccountCode',
        'DeliverToId',
        'DateNeeded',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RQD');
        this.setValues(values);
    }

    get RequisitionLineNumber() {
        return this.getComponent('RequisitionLineNumber');
    }

    set RequisitionLineNumber(value) {
        this.setComponentValue('RequisitionLineNumber', value);
    }

    get ItemCodeInternal() {
        return this.getComponent('ItemCodeInternal');
    }

    set ItemCodeInternal(value) {
        this.setComponentValue('ItemCodeInternal', value);
    }

    get ItemCodeExternal() {
        return this.getComponent('ItemCodeExternal');
    }

    set ItemCodeExternal(value) {
        this.setComponentValue('ItemCodeExternal', value);
    }

    get HospitalItemCode() {
        return this.getComponent('HospitalItemCode');
    }

    set HospitalItemCode(value) {
        this.setComponentValue('HospitalItemCode', value);
    }

    get RequisitionQuantity() {
        return this.getComponent('RequisitionQuantity');
    }

    set RequisitionQuantity(value) {
        this.setComponentValue('RequisitionQuantity', value);
    }

    get RequisitionUnitOfMeasure() {
        return this.getComponent('RequisitionUnitOfMeasure');
    }

    set RequisitionUnitOfMeasure(value) {
        this.setComponentValue('RequisitionUnitOfMeasure', value);
    }

    get CostCenterAccountNumber() {
        return this.getComponent('CostCenterAccountNumber');
    }

    set CostCenterAccountNumber(value) {
        this.setComponentValue('CostCenterAccountNumber', value);
    }

    get DepartmentCostCenter() {
        return this.getComponent('CostCenterAccountNumber');
    }

    set DepartmentCostCenter(value) {
        this.setComponentValue('CostCenterAccountNumber', value);
    }

    get DeptCostCenter() {
        return this.getComponent('CostCenterAccountNumber');
    }

    set DeptCostCenter(value) {
        this.setComponentValue('CostCenterAccountNumber', value);
    }

    get ItemNaturalAccountCode() {
        return this.getComponent('ItemNaturalAccountCode');
    }

    set ItemNaturalAccountCode(value) {
        this.setComponentValue('ItemNaturalAccountCode', value);
    }

    get DeliverToId() {
        return this.getComponent('DeliverToId');
    }

    set DeliverToId(value) {
        this.setComponentValue('DeliverToId', value);
    }

    get DeliverToID() {
        return this.getComponent('DeliverToId');
    }

    set DeliverToID(value) {
        this.setComponentValue('DeliverToId', value);
    }

    get DateNeeded() {
        return this.getComponent('DateNeeded');
    }

    set DateNeeded(value) {
        this.setComponentValue('DateNeeded', value);
    }
}
