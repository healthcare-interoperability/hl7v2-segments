import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { CK } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';

export class CDM extends Segment {
    static components = {
        PrimaryKeyValueCdm: {
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
        PrimaryKeyValue: { aliasOf: 'PrimaryKeyValueCdm' },
        ChargeCodeAlias: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ChargeDescriptionShort: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChargeDescriptionLong: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DescriptionOverrideIndicator: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExplodingCharges: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProcedureCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ActiveInactiveFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryNumber: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ResourceLoad: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContractNumber: {
            defaultDataType: CX,
            dataTypes: [
                { dataType: CX, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CK, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContractOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        RoomFeeIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'PrimaryKeyValueCdm',
        'ChargeCodeAlias',
        'ChargeDescriptionShort',
        'ChargeDescriptionLong',
        'DescriptionOverrideIndicator',
        'ExplodingCharges',
        'ProcedureCode',
        'ActiveInactiveFlag',
        'InventoryNumber',
        'ResourceLoad',
        'ContractNumber',
        'ContractOrganization',
        'RoomFeeIndicator',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CDM');
        this.setValues(values);
    }

    get PrimaryKeyValueCdm() {
        return this.getComponent('PrimaryKeyValueCdm');
    }

    set PrimaryKeyValueCdm(value) {
        this.setComponentValue('PrimaryKeyValueCdm', value);
    }

    get PrimaryKeyValue() {
        return this.getComponent('PrimaryKeyValueCdm');
    }

    set PrimaryKeyValue(value) {
        this.setComponentValue('PrimaryKeyValueCdm', value);
    }

    get ChargeCodeAlias() {
        return this.getComponent('ChargeCodeAlias');
    }

    set ChargeCodeAlias(value) {
        this.setComponentValue('ChargeCodeAlias', value);
    }

    get ChargeDescriptionShort() {
        return this.getComponent('ChargeDescriptionShort');
    }

    set ChargeDescriptionShort(value) {
        this.setComponentValue('ChargeDescriptionShort', value);
    }

    get ChargeDescriptionLong() {
        return this.getComponent('ChargeDescriptionLong');
    }

    set ChargeDescriptionLong(value) {
        this.setComponentValue('ChargeDescriptionLong', value);
    }

    get DescriptionOverrideIndicator() {
        return this.getComponent('DescriptionOverrideIndicator');
    }

    set DescriptionOverrideIndicator(value) {
        this.setComponentValue('DescriptionOverrideIndicator', value);
    }

    get ExplodingCharges() {
        return this.getComponent('ExplodingCharges');
    }

    set ExplodingCharges(value) {
        this.setComponentValue('ExplodingCharges', value);
    }

    get ProcedureCode() {
        return this.getComponent('ProcedureCode');
    }

    set ProcedureCode(value) {
        this.setComponentValue('ProcedureCode', value);
    }

    get ActiveInactiveFlag() {
        return this.getComponent('ActiveInactiveFlag');
    }

    set ActiveInactiveFlag(value) {
        this.setComponentValue('ActiveInactiveFlag', value);
    }

    get InventoryNumber() {
        return this.getComponent('InventoryNumber');
    }

    set InventoryNumber(value) {
        this.setComponentValue('InventoryNumber', value);
    }

    get ResourceLoad() {
        return this.getComponent('ResourceLoad');
    }

    set ResourceLoad(value) {
        this.setComponentValue('ResourceLoad', value);
    }

    get ContractNumber() {
        return this.getComponent('ContractNumber');
    }

    set ContractNumber(value) {
        this.setComponentValue('ContractNumber', value);
    }

    get ContractOrganization() {
        return this.getComponent('ContractOrganization');
    }

    set ContractOrganization(value) {
        this.setComponentValue('ContractOrganization', value);
    }

    get RoomFeeIndicator() {
        return this.getComponent('RoomFeeIndicator');
    }

    set RoomFeeIndicator(value) {
        this.setComponentValue('RoomFeeIndicator', value);
    }
}
