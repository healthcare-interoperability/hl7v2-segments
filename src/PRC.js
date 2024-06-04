import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { MO } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class PRC extends Segment {
    static components = {
        PrimaryKeyValuePrc: {
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
        PrimaryKeyValue: { aliasOf: 'PrimaryKeyValuePrc' },
        PrimaryKeyValuePRC: { aliasOf: 'PrimaryKeyValuePrc' },
        FacilityIdPrc: {
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
        FacilityID: { aliasOf: 'FacilityIdPrc' },
        FacilityIDPRC: { aliasOf: 'FacilityIdPrc' },
        Department: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ValidPatientClasses: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        Price: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        Formula: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        MinimumQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MaximumQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MinimumPrice: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MaximumPrice: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EffectiveStartDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EffectiveEndDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PriceOverrideFlag: {
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
        BillingCategory: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ChargeableFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActiveInactiveFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Cost: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ChargeOnIndicator: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'PrimaryKeyValuePrc',
        'FacilityIdPrc',
        'Department',
        'ValidPatientClasses',
        'Price',
        'Formula',
        'MinimumQuantity',
        'MaximumQuantity',
        'MinimumPrice',
        'MaximumPrice',
        'EffectiveStartDate',
        'EffectiveEndDate',
        'PriceOverrideFlag',
        'BillingCategory',
        'ChargeableFlag',
        'ActiveInactiveFlag',
        'Cost',
        'ChargeOnIndicator',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PRC');
        this.setValues(values);
    }

    get PrimaryKeyValuePrc() {
        return this.getComponent('PrimaryKeyValuePrc');
    }

    set PrimaryKeyValuePrc(value) {
        this.setComponentValue('PrimaryKeyValuePrc', value);
    }

    get PrimaryKeyValue() {
        return this.getComponent('PrimaryKeyValuePrc');
    }

    set PrimaryKeyValue(value) {
        this.setComponentValue('PrimaryKeyValuePrc', value);
    }

    get PrimaryKeyValuePRC() {
        return this.getComponent('PrimaryKeyValuePrc');
    }

    set PrimaryKeyValuePRC(value) {
        this.setComponentValue('PrimaryKeyValuePrc', value);
    }

    get FacilityIdPrc() {
        return this.getComponent('FacilityIdPrc');
    }

    set FacilityIdPrc(value) {
        this.setComponentValue('FacilityIdPrc', value);
    }

    get FacilityID() {
        return this.getComponent('FacilityIdPrc');
    }

    set FacilityID(value) {
        this.setComponentValue('FacilityIdPrc', value);
    }

    get FacilityIDPRC() {
        return this.getComponent('FacilityIdPrc');
    }

    set FacilityIDPRC(value) {
        this.setComponentValue('FacilityIdPrc', value);
    }

    get Department() {
        return this.getComponent('Department');
    }

    set Department(value) {
        this.setComponentValue('Department', value);
    }

    get ValidPatientClasses() {
        return this.getComponent('ValidPatientClasses');
    }

    set ValidPatientClasses(value) {
        this.setComponentValue('ValidPatientClasses', value);
    }

    get Price() {
        return this.getComponent('Price');
    }

    set Price(value) {
        this.setComponentValue('Price', value);
    }

    get Formula() {
        return this.getComponent('Formula');
    }

    set Formula(value) {
        this.setComponentValue('Formula', value);
    }

    get MinimumQuantity() {
        return this.getComponent('MinimumQuantity');
    }

    set MinimumQuantity(value) {
        this.setComponentValue('MinimumQuantity', value);
    }

    get MaximumQuantity() {
        return this.getComponent('MaximumQuantity');
    }

    set MaximumQuantity(value) {
        this.setComponentValue('MaximumQuantity', value);
    }

    get MinimumPrice() {
        return this.getComponent('MinimumPrice');
    }

    set MinimumPrice(value) {
        this.setComponentValue('MinimumPrice', value);
    }

    get MaximumPrice() {
        return this.getComponent('MaximumPrice');
    }

    set MaximumPrice(value) {
        this.setComponentValue('MaximumPrice', value);
    }

    get EffectiveStartDate() {
        return this.getComponent('EffectiveStartDate');
    }

    set EffectiveStartDate(value) {
        this.setComponentValue('EffectiveStartDate', value);
    }

    get EffectiveEndDate() {
        return this.getComponent('EffectiveEndDate');
    }

    set EffectiveEndDate(value) {
        this.setComponentValue('EffectiveEndDate', value);
    }

    get PriceOverrideFlag() {
        return this.getComponent('PriceOverrideFlag');
    }

    set PriceOverrideFlag(value) {
        this.setComponentValue('PriceOverrideFlag', value);
    }

    get BillingCategory() {
        return this.getComponent('BillingCategory');
    }

    set BillingCategory(value) {
        this.setComponentValue('BillingCategory', value);
    }

    get ChargeableFlag() {
        return this.getComponent('ChargeableFlag');
    }

    set ChargeableFlag(value) {
        this.setComponentValue('ChargeableFlag', value);
    }

    get ActiveInactiveFlag() {
        return this.getComponent('ActiveInactiveFlag');
    }

    set ActiveInactiveFlag(value) {
        this.setComponentValue('ActiveInactiveFlag', value);
    }

    get Cost() {
        return this.getComponent('Cost');
    }

    set Cost(value) {
        this.setComponentValue('Cost', value);
    }

    get ChargeOnIndicator() {
        return this.getComponent('ChargeOnIndicator');
    }

    set ChargeOnIndicator(value) {
        this.setComponentValue('ChargeOnIndicator', value);
    }
}
