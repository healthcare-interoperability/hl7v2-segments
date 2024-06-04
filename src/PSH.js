import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { FT } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class PSH extends Segment {
    static components = {
        ReportType: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReportFormIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReportDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReportIntervalStartDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ReportIntervalEndDate: {
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
        QuantityManufactured: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QuantityDistributed: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QuantityDistributedMethod: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QuantityDistributedComment: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QuantityInUse: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QuantityInUseMethod: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QuantityInUseComment: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfProductExperienceReportsFiledByFacility: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: true,
            maxOccurence: 8,
            minOccurence: 1,
        },
        NumberOfProductExperienceReportsFiledByDistributor: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 8,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ReportType',
        'ReportFormIdentifier',
        'ReportDate',
        'ReportIntervalStartDate',
        'ReportIntervalEndDate',
        'QuantityManufactured',
        'QuantityDistributed',
        'QuantityDistributedMethod',
        'QuantityDistributedComment',
        'QuantityInUse',
        'QuantityInUseMethod',
        'QuantityInUseComment',
        'NumberOfProductExperienceReportsFiledByFacility',
        'NumberOfProductExperienceReportsFiledByDistributor',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PSH');
        this.setValues(values);
    }

    get ReportType() {
        return this.getComponent('ReportType');
    }

    set ReportType(value) {
        this.setComponentValue('ReportType', value);
    }

    get ReportFormIdentifier() {
        return this.getComponent('ReportFormIdentifier');
    }

    set ReportFormIdentifier(value) {
        this.setComponentValue('ReportFormIdentifier', value);
    }

    get ReportDate() {
        return this.getComponent('ReportDate');
    }

    set ReportDate(value) {
        this.setComponentValue('ReportDate', value);
    }

    get ReportIntervalStartDate() {
        return this.getComponent('ReportIntervalStartDate');
    }

    set ReportIntervalStartDate(value) {
        this.setComponentValue('ReportIntervalStartDate', value);
    }

    get ReportIntervalEndDate() {
        return this.getComponent('ReportIntervalEndDate');
    }

    set ReportIntervalEndDate(value) {
        this.setComponentValue('ReportIntervalEndDate', value);
    }

    get QuantityManufactured() {
        return this.getComponent('QuantityManufactured');
    }

    set QuantityManufactured(value) {
        this.setComponentValue('QuantityManufactured', value);
    }

    get QuantityDistributed() {
        return this.getComponent('QuantityDistributed');
    }

    set QuantityDistributed(value) {
        this.setComponentValue('QuantityDistributed', value);
    }

    get QuantityDistributedMethod() {
        return this.getComponent('QuantityDistributedMethod');
    }

    set QuantityDistributedMethod(value) {
        this.setComponentValue('QuantityDistributedMethod', value);
    }

    get QuantityDistributedComment() {
        return this.getComponent('QuantityDistributedComment');
    }

    set QuantityDistributedComment(value) {
        this.setComponentValue('QuantityDistributedComment', value);
    }

    get QuantityInUse() {
        return this.getComponent('QuantityInUse');
    }

    set QuantityInUse(value) {
        this.setComponentValue('QuantityInUse', value);
    }

    get QuantityInUseMethod() {
        return this.getComponent('QuantityInUseMethod');
    }

    set QuantityInUseMethod(value) {
        this.setComponentValue('QuantityInUseMethod', value);
    }

    get QuantityInUseComment() {
        return this.getComponent('QuantityInUseComment');
    }

    set QuantityInUseComment(value) {
        this.setComponentValue('QuantityInUseComment', value);
    }

    get NumberOfProductExperienceReportsFiledByFacility() {
        return this.getComponent('NumberOfProductExperienceReportsFiledByFacility');
    }

    set NumberOfProductExperienceReportsFiledByFacility(value) {
        this.setComponentValue('NumberOfProductExperienceReportsFiledByFacility', value);
    }

    get NumberOfProductExperienceReportsFiledByDistributor() {
        return this.getComponent('NumberOfProductExperienceReportsFiledByDistributor');
    }

    set NumberOfProductExperienceReportsFiledByDistributor(value) {
        this.setComponentValue('NumberOfProductExperienceReportsFiledByDistributor', value);
    }
}
