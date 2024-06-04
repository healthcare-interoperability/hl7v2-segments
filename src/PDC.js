import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';

export class PDC extends Segment {
    static components = {
        ManufacturerDistributor: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        Country: {
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
        BrandName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DeviceFamilyName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GenericName: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ModelIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CatalogueIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OtherIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProductCode: {
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
        MarketingBasis: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MarketingApprovalId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MarketingApprovalIdentifier: { aliasOf: 'MarketingApprovalId' },
        LabeledShelfLife: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpectedShelfLife: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateFirstMarketed: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateFirstMarked: { aliasOf: 'DateFirstMarketed' },
        DateLastMarketed: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DateLastMarked: { aliasOf: 'DateLastMarketed' },
    };

    static componentsByIndex = [
        '',
        'ManufacturerDistributor',
        'Country',
        'BrandName',
        'DeviceFamilyName',
        'GenericName',
        'ModelIdentifier',
        'CatalogueIdentifier',
        'OtherIdentifier',
        'ProductCode',
        'MarketingBasis',
        'MarketingApprovalId',
        'LabeledShelfLife',
        'ExpectedShelfLife',
        'DateFirstMarketed',
        'DateLastMarketed',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PDC');
        this.setValues(values);
    }

    get ManufacturerDistributor() {
        return this.getComponent('ManufacturerDistributor');
    }

    set ManufacturerDistributor(value) {
        this.setComponentValue('ManufacturerDistributor', value);
    }

    get Country() {
        return this.getComponent('Country');
    }

    set Country(value) {
        this.setComponentValue('Country', value);
    }

    get BrandName() {
        return this.getComponent('BrandName');
    }

    set BrandName(value) {
        this.setComponentValue('BrandName', value);
    }

    get DeviceFamilyName() {
        return this.getComponent('DeviceFamilyName');
    }

    set DeviceFamilyName(value) {
        this.setComponentValue('DeviceFamilyName', value);
    }

    get GenericName() {
        return this.getComponent('GenericName');
    }

    set GenericName(value) {
        this.setComponentValue('GenericName', value);
    }

    get ModelIdentifier() {
        return this.getComponent('ModelIdentifier');
    }

    set ModelIdentifier(value) {
        this.setComponentValue('ModelIdentifier', value);
    }

    get CatalogueIdentifier() {
        return this.getComponent('CatalogueIdentifier');
    }

    set CatalogueIdentifier(value) {
        this.setComponentValue('CatalogueIdentifier', value);
    }

    get OtherIdentifier() {
        return this.getComponent('OtherIdentifier');
    }

    set OtherIdentifier(value) {
        this.setComponentValue('OtherIdentifier', value);
    }

    get ProductCode() {
        return this.getComponent('ProductCode');
    }

    set ProductCode(value) {
        this.setComponentValue('ProductCode', value);
    }

    get MarketingBasis() {
        return this.getComponent('MarketingBasis');
    }

    set MarketingBasis(value) {
        this.setComponentValue('MarketingBasis', value);
    }

    get MarketingApprovalId() {
        return this.getComponent('MarketingApprovalId');
    }

    set MarketingApprovalId(value) {
        this.setComponentValue('MarketingApprovalId', value);
    }

    get MarketingApprovalIdentifier() {
        return this.getComponent('MarketingApprovalId');
    }

    set MarketingApprovalIdentifier(value) {
        this.setComponentValue('MarketingApprovalId', value);
    }

    get LabeledShelfLife() {
        return this.getComponent('LabeledShelfLife');
    }

    set LabeledShelfLife(value) {
        this.setComponentValue('LabeledShelfLife', value);
    }

    get ExpectedShelfLife() {
        return this.getComponent('ExpectedShelfLife');
    }

    set ExpectedShelfLife(value) {
        this.setComponentValue('ExpectedShelfLife', value);
    }

    get DateFirstMarketed() {
        return this.getComponent('DateFirstMarketed');
    }

    set DateFirstMarketed(value) {
        this.setComponentValue('DateFirstMarketed', value);
    }

    get DateFirstMarked() {
        return this.getComponent('DateFirstMarketed');
    }

    set DateFirstMarked(value) {
        this.setComponentValue('DateFirstMarketed', value);
    }

    get DateLastMarketed() {
        return this.getComponent('DateLastMarketed');
    }

    set DateLastMarketed(value) {
        this.setComponentValue('DateLastMarketed', value);
    }

    get DateLastMarked() {
        return this.getComponent('DateLastMarketed');
    }

    set DateLastMarked(value) {
        this.setComponentValue('DateLastMarketed', value);
    }
}
