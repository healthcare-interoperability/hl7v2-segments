import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';

export class PKG extends Segment {
    static components = {
        SetIdPkg: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PackagingUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DefaultOrderUnitOfMeasureIndicator: {
            defaultDataType: CNE,
            dataTypes: [{ dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PackageQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Price: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FutureItemPrice: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FutureItemPriceEffectiveDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GlobalTradeItemNumber: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdPkg',
        'PackagingUnits',
        'DefaultOrderUnitOfMeasureIndicator',
        'PackageQuantity',
        'Price',
        'FutureItemPrice',
        'FutureItemPriceEffectiveDate',
        'GlobalTradeItemNumber',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PKG');
        this.setValues(values);
    }

    get SetIdPkg() {
        return this.getComponent('SetIdPkg');
    }

    set SetIdPkg(value) {
        this.setComponentValue('SetIdPkg', value);
    }

    get PackagingUnits() {
        return this.getComponent('PackagingUnits');
    }

    set PackagingUnits(value) {
        this.setComponentValue('PackagingUnits', value);
    }

    get DefaultOrderUnitOfMeasureIndicator() {
        return this.getComponent('DefaultOrderUnitOfMeasureIndicator');
    }

    set DefaultOrderUnitOfMeasureIndicator(value) {
        this.setComponentValue('DefaultOrderUnitOfMeasureIndicator', value);
    }

    get PackageQuantity() {
        return this.getComponent('PackageQuantity');
    }

    set PackageQuantity(value) {
        this.setComponentValue('PackageQuantity', value);
    }

    get Price() {
        return this.getComponent('Price');
    }

    set Price(value) {
        this.setComponentValue('Price', value);
    }

    get FutureItemPrice() {
        return this.getComponent('FutureItemPrice');
    }

    set FutureItemPrice(value) {
        this.setComponentValue('FutureItemPrice', value);
    }

    get FutureItemPriceEffectiveDate() {
        return this.getComponent('FutureItemPriceEffectiveDate');
    }

    set FutureItemPriceEffectiveDate(value) {
        this.setComponentValue('FutureItemPriceEffectiveDate', value);
    }

    get GlobalTradeItemNumber() {
        return this.getComponent('GlobalTradeItemNumber');
    }

    set GlobalTradeItemNumber(value) {
        this.setComponentValue('GlobalTradeItemNumber', value);
    }
}
