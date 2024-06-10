import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { UVC } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_UVC } from '@healthcare-interoperability/hl7v2-datatypes';
import { OCD } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_OCD } from '@healthcare-interoperability/hl7v2-datatypes';
import { OSP } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_OSP } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class UB2 extends Segment {
    static components = {
        SetIdUb2: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDUb2: { aliasOf: 'SetIdUb2' },
        CoInsuranceDays9: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CoInsuranceDays: { aliasOf: 'CoInsuranceDays9' },
        ConditionCode2430: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
            isArray: true,
            maxOccurence: 7,
            minOccurence: 1,
        },
        ConditionCode: { aliasOf: 'ConditionCode2430' },
        CoveredDays7: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CoveredDays: { aliasOf: 'CoveredDays7' },
        NonCoveredDays8: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NonCoveredDays: { aliasOf: 'NonCoveredDays8' },
        ValueAmountCode: {
            defaultDataType: UVC,
            dataTypes: [
                { dataType: UVC, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_UVC, versions: ['2.3'] },
            ],
            position: 6,
            isArray: true,
            maxOccurence: 12,
            minOccurence: 1,
        },
        ValueAmountCode3941: { aliasOf: 'ValueAmountCode' },
        ValueAmountAndCode: { aliasOf: 'ValueAmountCode' },
        ValueAmountAndCode3941: { aliasOf: 'ValueAmountCode' },
        OccurrenceCodeDate3235: {
            defaultDataType: OCD,
            dataTypes: [
                { dataType: OCD, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_OCD, versions: ['2.3'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 8,
            minOccurence: 1,
        },
        OccurrenceCodeDate: { aliasOf: 'OccurrenceCodeDate3235' },
        OccurrenceCodeAndDate3235: { aliasOf: 'OccurrenceCodeDate3235' },
        OccurrenceCodeAndDate: { aliasOf: 'OccurrenceCodeDate3235' },
        OccurrenceSpanCodeDates36: {
            defaultDataType: OSP,
            dataTypes: [
                { dataType: OSP, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_OSP, versions: ['2.3'] },
            ],
            position: 8,
            isArray: true,
            maxOccurence: 2,
            minOccurence: 1,
        },
        OccurrenceSpanCodeDates: { aliasOf: 'OccurrenceSpanCodeDates36' },
        Ub92Locator2State: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: true,
            maxOccurence: 2,
            minOccurence: 1,
        },
        Ub92Locator2: { aliasOf: 'Ub92Locator2State' },
        Ub92Locator11State: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 2,
            minOccurence: 1,
        },
        Ub92Locator11: { aliasOf: 'Ub92Locator11State' },
        Ub92Locator31National: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Ub92Locator31: { aliasOf: 'Ub92Locator31National' },
        DocumentControlNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: true,
            maxOccurence: 3,
            minOccurence: 2,
        },
        Ub92Locator49National: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: true,
            maxOccurence: 23,
            minOccurence: 1,
        },
        Ub92Locator49: { aliasOf: 'Ub92Locator49National' },
        Ub92Locator56State: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 5,
            minOccurence: 1,
        },
        Ub92Locator56: { aliasOf: 'Ub92Locator56State' },
        Ub92Locator57National: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Ub92Locator57: { aliasOf: 'Ub92Locator57National' },
        Ub92Locator78State: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: true,
            maxOccurence: 2,
            minOccurence: 1,
        },
        Ub92Locator78: { aliasOf: 'Ub92Locator78State' },
        SpecialVisitCount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdUb2',
        'CoInsuranceDays9',
        'ConditionCode2430',
        'CoveredDays7',
        'NonCoveredDays8',
        'ValueAmountCode',
        'OccurrenceCodeDate3235',
        'OccurrenceSpanCodeDates36',
        'Ub92Locator2State',
        'Ub92Locator11State',
        'Ub92Locator31National',
        'DocumentControlNumber',
        'Ub92Locator49National',
        'Ub92Locator56State',
        'Ub92Locator57National',
        'Ub92Locator78State',
        'SpecialVisitCount',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('UB2');
        this.setValues(values);
    }

    get SetIdUb2() {
        return this.getComponent('SetIdUb2');
    }

    set SetIdUb2(value) {
        this.setComponentValue('SetIdUb2', value);
    }

    get SetIDUb2() {
        return this.getComponent('SetIdUb2');
    }

    set SetIDUb2(value) {
        this.setComponentValue('SetIdUb2', value);
    }

    get CoInsuranceDays9() {
        return this.getComponent('CoInsuranceDays9');
    }

    set CoInsuranceDays9(value) {
        this.setComponentValue('CoInsuranceDays9', value);
    }

    get CoInsuranceDays() {
        return this.getComponent('CoInsuranceDays9');
    }

    set CoInsuranceDays(value) {
        this.setComponentValue('CoInsuranceDays9', value);
    }

    get ConditionCode2430() {
        return this.getComponent('ConditionCode2430');
    }

    set ConditionCode2430(value) {
        this.setComponentValue('ConditionCode2430', value);
    }

    get ConditionCode() {
        return this.getComponent('ConditionCode2430');
    }

    set ConditionCode(value) {
        this.setComponentValue('ConditionCode2430', value);
    }

    get CoveredDays7() {
        return this.getComponent('CoveredDays7');
    }

    set CoveredDays7(value) {
        this.setComponentValue('CoveredDays7', value);
    }

    get CoveredDays() {
        return this.getComponent('CoveredDays7');
    }

    set CoveredDays(value) {
        this.setComponentValue('CoveredDays7', value);
    }

    get NonCoveredDays8() {
        return this.getComponent('NonCoveredDays8');
    }

    set NonCoveredDays8(value) {
        this.setComponentValue('NonCoveredDays8', value);
    }

    get NonCoveredDays() {
        return this.getComponent('NonCoveredDays8');
    }

    set NonCoveredDays(value) {
        this.setComponentValue('NonCoveredDays8', value);
    }

    get ValueAmountCode() {
        return this.getComponent('ValueAmountCode');
    }

    set ValueAmountCode(value) {
        this.setComponentValue('ValueAmountCode', value);
    }

    get ValueAmountCode3941() {
        return this.getComponent('ValueAmountCode');
    }

    set ValueAmountCode3941(value) {
        this.setComponentValue('ValueAmountCode', value);
    }

    get ValueAmountAndCode() {
        return this.getComponent('ValueAmountCode');
    }

    set ValueAmountAndCode(value) {
        this.setComponentValue('ValueAmountCode', value);
    }

    get ValueAmountAndCode3941() {
        return this.getComponent('ValueAmountCode');
    }

    set ValueAmountAndCode3941(value) {
        this.setComponentValue('ValueAmountCode', value);
    }

    get OccurrenceCodeDate3235() {
        return this.getComponent('OccurrenceCodeDate3235');
    }

    set OccurrenceCodeDate3235(value) {
        this.setComponentValue('OccurrenceCodeDate3235', value);
    }

    get OccurrenceCodeDate() {
        return this.getComponent('OccurrenceCodeDate3235');
    }

    set OccurrenceCodeDate(value) {
        this.setComponentValue('OccurrenceCodeDate3235', value);
    }

    get OccurrenceCodeAndDate3235() {
        return this.getComponent('OccurrenceCodeDate3235');
    }

    set OccurrenceCodeAndDate3235(value) {
        this.setComponentValue('OccurrenceCodeDate3235', value);
    }

    get OccurrenceCodeAndDate() {
        return this.getComponent('OccurrenceCodeDate3235');
    }

    set OccurrenceCodeAndDate(value) {
        this.setComponentValue('OccurrenceCodeDate3235', value);
    }

    get OccurrenceSpanCodeDates36() {
        return this.getComponent('OccurrenceSpanCodeDates36');
    }

    set OccurrenceSpanCodeDates36(value) {
        this.setComponentValue('OccurrenceSpanCodeDates36', value);
    }

    get OccurrenceSpanCodeDates() {
        return this.getComponent('OccurrenceSpanCodeDates36');
    }

    set OccurrenceSpanCodeDates(value) {
        this.setComponentValue('OccurrenceSpanCodeDates36', value);
    }

    get Ub92Locator2State() {
        return this.getComponent('Ub92Locator2State');
    }

    set Ub92Locator2State(value) {
        this.setComponentValue('Ub92Locator2State', value);
    }

    get Ub92Locator2() {
        return this.getComponent('Ub92Locator2State');
    }

    set Ub92Locator2(value) {
        this.setComponentValue('Ub92Locator2State', value);
    }

    get Ub92Locator11State() {
        return this.getComponent('Ub92Locator11State');
    }

    set Ub92Locator11State(value) {
        this.setComponentValue('Ub92Locator11State', value);
    }

    get Ub92Locator11() {
        return this.getComponent('Ub92Locator11State');
    }

    set Ub92Locator11(value) {
        this.setComponentValue('Ub92Locator11State', value);
    }

    get Ub92Locator31National() {
        return this.getComponent('Ub92Locator31National');
    }

    set Ub92Locator31National(value) {
        this.setComponentValue('Ub92Locator31National', value);
    }

    get Ub92Locator31() {
        return this.getComponent('Ub92Locator31National');
    }

    set Ub92Locator31(value) {
        this.setComponentValue('Ub92Locator31National', value);
    }

    get DocumentControlNumber() {
        return this.getComponent('DocumentControlNumber');
    }

    set DocumentControlNumber(value) {
        this.setComponentValue('DocumentControlNumber', value);
    }

    get Ub92Locator49National() {
        return this.getComponent('Ub92Locator49National');
    }

    set Ub92Locator49National(value) {
        this.setComponentValue('Ub92Locator49National', value);
    }

    get Ub92Locator49() {
        return this.getComponent('Ub92Locator49National');
    }

    set Ub92Locator49(value) {
        this.setComponentValue('Ub92Locator49National', value);
    }

    get Ub92Locator56State() {
        return this.getComponent('Ub92Locator56State');
    }

    set Ub92Locator56State(value) {
        this.setComponentValue('Ub92Locator56State', value);
    }

    get Ub92Locator56() {
        return this.getComponent('Ub92Locator56State');
    }

    set Ub92Locator56(value) {
        this.setComponentValue('Ub92Locator56State', value);
    }

    get Ub92Locator57National() {
        return this.getComponent('Ub92Locator57National');
    }

    set Ub92Locator57National(value) {
        this.setComponentValue('Ub92Locator57National', value);
    }

    get Ub92Locator57() {
        return this.getComponent('Ub92Locator57National');
    }

    set Ub92Locator57(value) {
        this.setComponentValue('Ub92Locator57National', value);
    }

    get Ub92Locator78State() {
        return this.getComponent('Ub92Locator78State');
    }

    set Ub92Locator78State(value) {
        this.setComponentValue('Ub92Locator78State', value);
    }

    get Ub92Locator78() {
        return this.getComponent('Ub92Locator78State');
    }

    set Ub92Locator78(value) {
        this.setComponentValue('Ub92Locator78State', value);
    }

    get SpecialVisitCount() {
        return this.getComponent('SpecialVisitCount');
    }

    set SpecialVisitCount(value) {
        this.setComponentValue('SpecialVisitCount', value);
    }
}
