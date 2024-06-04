import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_UVC } from '@healthcare-interoperability/hl7v2-datatypes';
import { UVC } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_OCD } from '@healthcare-interoperability/hl7v2-datatypes';
import { OCD } from '@healthcare-interoperability/hl7v2-datatypes';

export class UB1 extends Segment {
    static components = {
        SetIdUb1: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8'] },
                { dataType: SI, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BloodDeductible: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BloodDeductible43: { aliasOf: 'BloodDeductible' },
        BloodFurnishedPints: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BloodFurnishedPintsOf: { aliasOf: 'BloodFurnishedPints' },
        BloodFurnishedPintsOf40: { aliasOf: 'BloodFurnishedPints' },
        BloodReplacedPints: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BloodReplacedPints41: { aliasOf: 'BloodReplacedPints' },
        BloodNotReplacedPints: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BloodNotReplacedPints42: { aliasOf: 'BloodNotReplacedPints' },
        CoInsuranceDays: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CoInsuranceDays25: { aliasOf: 'CoInsuranceDays' },
        ConditionCode: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 5,
            minOccurence: 1,
        },
        ConditionCode3539: { aliasOf: 'ConditionCode' },
        CoveredDays: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CoveredDays23: { aliasOf: 'CoveredDays' },
        NonCoveredDays: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NonCoveredDays24: { aliasOf: 'NonCoveredDays' },
        ValueAmountCode: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CM_UVC, versions: ['2.3'] },
                { dataType: UVC, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 10,
            isArray: true,
            maxOccurence: 8,
            minOccurence: 1,
        },
        ValueAmountCode4649: { aliasOf: 'ValueAmountCode' },
        ValueAmountAndCode4649: { aliasOf: 'ValueAmountCode' },
        NumberOfGraceDays: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NumberOfGraceDays90: { aliasOf: 'NumberOfGraceDays' },
        SpecialProgramIndicator: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecProgramIndicator: { aliasOf: 'SpecialProgramIndicator' },
        SpecialProgramIndicator44: { aliasOf: 'SpecialProgramIndicator' },
        PsroUrApprovalIndicator: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PsroUrApprovalIndicator87: { aliasOf: 'PsroUrApprovalIndicator' },
        PsroUrApprovedStayFm: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: DT, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PsroUrApprovedStayFm88: { aliasOf: 'PsroUrApprovedStayFm' },
        PsroUrApprovedStayTo: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: DT, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PsroUrApprovedStayTo89: { aliasOf: 'PsroUrApprovedStayTo' },
        Occurrence: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CM_OCD, versions: ['2.3'] },
                { dataType: OCD, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 16,
            isArray: true,
            maxOccurence: 5,
            minOccurence: 1,
        },
        Occurrence2832: { aliasOf: 'Occurrence' },
        OccurrenceSpan: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6'] },
            ],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OccurrenceSpan33: { aliasOf: 'OccurrenceSpan' },
        OccurSpanStartDate: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: DT, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OccurSpanStartDate33: { aliasOf: 'OccurSpanStartDate' },
        OccurSpanEndDate: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: DT, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OccurSpanEndDate33: { aliasOf: 'OccurSpanEndDate' },
        Ub82Locator2: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Ub82Locator9: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Ub82Locator27: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Ub82Locator45: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdUb1',
        'BloodDeductible',
        'BloodFurnishedPints',
        'BloodReplacedPints',
        'BloodNotReplacedPints',
        'CoInsuranceDays',
        'ConditionCode',
        'CoveredDays',
        'NonCoveredDays',
        'ValueAmountCode',
        'NumberOfGraceDays',
        'SpecialProgramIndicator',
        'PsroUrApprovalIndicator',
        'PsroUrApprovedStayFm',
        'PsroUrApprovedStayTo',
        'Occurrence',
        'OccurrenceSpan',
        'OccurSpanStartDate',
        'OccurSpanEndDate',
        'Ub82Locator2',
        'Ub82Locator9',
        'Ub82Locator27',
        'Ub82Locator45',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('UB1');
        this.setValues(values);
    }

    get SetIdUb1() {
        return this.getComponent('SetIdUb1');
    }

    set SetIdUb1(value) {
        this.setComponentValue('SetIdUb1', value);
    }

    get BloodDeductible() {
        return this.getComponent('BloodDeductible');
    }

    set BloodDeductible(value) {
        this.setComponentValue('BloodDeductible', value);
    }

    get BloodDeductible43() {
        return this.getComponent('BloodDeductible');
    }

    set BloodDeductible43(value) {
        this.setComponentValue('BloodDeductible', value);
    }

    get BloodFurnishedPints() {
        return this.getComponent('BloodFurnishedPints');
    }

    set BloodFurnishedPints(value) {
        this.setComponentValue('BloodFurnishedPints', value);
    }

    get BloodFurnishedPintsOf() {
        return this.getComponent('BloodFurnishedPints');
    }

    set BloodFurnishedPintsOf(value) {
        this.setComponentValue('BloodFurnishedPints', value);
    }

    get BloodFurnishedPintsOf40() {
        return this.getComponent('BloodFurnishedPints');
    }

    set BloodFurnishedPintsOf40(value) {
        this.setComponentValue('BloodFurnishedPints', value);
    }

    get BloodReplacedPints() {
        return this.getComponent('BloodReplacedPints');
    }

    set BloodReplacedPints(value) {
        this.setComponentValue('BloodReplacedPints', value);
    }

    get BloodReplacedPints41() {
        return this.getComponent('BloodReplacedPints');
    }

    set BloodReplacedPints41(value) {
        this.setComponentValue('BloodReplacedPints', value);
    }

    get BloodNotReplacedPints() {
        return this.getComponent('BloodNotReplacedPints');
    }

    set BloodNotReplacedPints(value) {
        this.setComponentValue('BloodNotReplacedPints', value);
    }

    get BloodNotReplacedPints42() {
        return this.getComponent('BloodNotReplacedPints');
    }

    set BloodNotReplacedPints42(value) {
        this.setComponentValue('BloodNotReplacedPints', value);
    }

    get CoInsuranceDays() {
        return this.getComponent('CoInsuranceDays');
    }

    set CoInsuranceDays(value) {
        this.setComponentValue('CoInsuranceDays', value);
    }

    get CoInsuranceDays25() {
        return this.getComponent('CoInsuranceDays');
    }

    set CoInsuranceDays25(value) {
        this.setComponentValue('CoInsuranceDays', value);
    }

    get ConditionCode() {
        return this.getComponent('ConditionCode');
    }

    set ConditionCode(value) {
        this.setComponentValue('ConditionCode', value);
    }

    get ConditionCode3539() {
        return this.getComponent('ConditionCode');
    }

    set ConditionCode3539(value) {
        this.setComponentValue('ConditionCode', value);
    }

    get CoveredDays() {
        return this.getComponent('CoveredDays');
    }

    set CoveredDays(value) {
        this.setComponentValue('CoveredDays', value);
    }

    get CoveredDays23() {
        return this.getComponent('CoveredDays');
    }

    set CoveredDays23(value) {
        this.setComponentValue('CoveredDays', value);
    }

    get NonCoveredDays() {
        return this.getComponent('NonCoveredDays');
    }

    set NonCoveredDays(value) {
        this.setComponentValue('NonCoveredDays', value);
    }

    get NonCoveredDays24() {
        return this.getComponent('NonCoveredDays');
    }

    set NonCoveredDays24(value) {
        this.setComponentValue('NonCoveredDays', value);
    }

    get ValueAmountCode() {
        return this.getComponent('ValueAmountCode');
    }

    set ValueAmountCode(value) {
        this.setComponentValue('ValueAmountCode', value);
    }

    get ValueAmountCode4649() {
        return this.getComponent('ValueAmountCode');
    }

    set ValueAmountCode4649(value) {
        this.setComponentValue('ValueAmountCode', value);
    }

    get ValueAmountAndCode4649() {
        return this.getComponent('ValueAmountCode');
    }

    set ValueAmountAndCode4649(value) {
        this.setComponentValue('ValueAmountCode', value);
    }

    get NumberOfGraceDays() {
        return this.getComponent('NumberOfGraceDays');
    }

    set NumberOfGraceDays(value) {
        this.setComponentValue('NumberOfGraceDays', value);
    }

    get NumberOfGraceDays90() {
        return this.getComponent('NumberOfGraceDays');
    }

    set NumberOfGraceDays90(value) {
        this.setComponentValue('NumberOfGraceDays', value);
    }

    get SpecialProgramIndicator() {
        return this.getComponent('SpecialProgramIndicator');
    }

    set SpecialProgramIndicator(value) {
        this.setComponentValue('SpecialProgramIndicator', value);
    }

    get SpecProgramIndicator() {
        return this.getComponent('SpecialProgramIndicator');
    }

    set SpecProgramIndicator(value) {
        this.setComponentValue('SpecialProgramIndicator', value);
    }

    get SpecialProgramIndicator44() {
        return this.getComponent('SpecialProgramIndicator');
    }

    set SpecialProgramIndicator44(value) {
        this.setComponentValue('SpecialProgramIndicator', value);
    }

    get PsroUrApprovalIndicator() {
        return this.getComponent('PsroUrApprovalIndicator');
    }

    set PsroUrApprovalIndicator(value) {
        this.setComponentValue('PsroUrApprovalIndicator', value);
    }

    get PsroUrApprovalIndicator87() {
        return this.getComponent('PsroUrApprovalIndicator');
    }

    set PsroUrApprovalIndicator87(value) {
        this.setComponentValue('PsroUrApprovalIndicator', value);
    }

    get PsroUrApprovedStayFm() {
        return this.getComponent('PsroUrApprovedStayFm');
    }

    set PsroUrApprovedStayFm(value) {
        this.setComponentValue('PsroUrApprovedStayFm', value);
    }

    get PsroUrApprovedStayFm88() {
        return this.getComponent('PsroUrApprovedStayFm');
    }

    set PsroUrApprovedStayFm88(value) {
        this.setComponentValue('PsroUrApprovedStayFm', value);
    }

    get PsroUrApprovedStayTo() {
        return this.getComponent('PsroUrApprovedStayTo');
    }

    set PsroUrApprovedStayTo(value) {
        this.setComponentValue('PsroUrApprovedStayTo', value);
    }

    get PsroUrApprovedStayTo89() {
        return this.getComponent('PsroUrApprovedStayTo');
    }

    set PsroUrApprovedStayTo89(value) {
        this.setComponentValue('PsroUrApprovedStayTo', value);
    }

    get Occurrence() {
        return this.getComponent('Occurrence');
    }

    set Occurrence(value) {
        this.setComponentValue('Occurrence', value);
    }

    get Occurrence2832() {
        return this.getComponent('Occurrence');
    }

    set Occurrence2832(value) {
        this.setComponentValue('Occurrence', value);
    }

    get OccurrenceSpan() {
        return this.getComponent('OccurrenceSpan');
    }

    set OccurrenceSpan(value) {
        this.setComponentValue('OccurrenceSpan', value);
    }

    get OccurrenceSpan33() {
        return this.getComponent('OccurrenceSpan');
    }

    set OccurrenceSpan33(value) {
        this.setComponentValue('OccurrenceSpan', value);
    }

    get OccurSpanStartDate() {
        return this.getComponent('OccurSpanStartDate');
    }

    set OccurSpanStartDate(value) {
        this.setComponentValue('OccurSpanStartDate', value);
    }

    get OccurSpanStartDate33() {
        return this.getComponent('OccurSpanStartDate');
    }

    set OccurSpanStartDate33(value) {
        this.setComponentValue('OccurSpanStartDate', value);
    }

    get OccurSpanEndDate() {
        return this.getComponent('OccurSpanEndDate');
    }

    set OccurSpanEndDate(value) {
        this.setComponentValue('OccurSpanEndDate', value);
    }

    get OccurSpanEndDate33() {
        return this.getComponent('OccurSpanEndDate');
    }

    set OccurSpanEndDate33(value) {
        this.setComponentValue('OccurSpanEndDate', value);
    }

    get Ub82Locator2() {
        return this.getComponent('Ub82Locator2');
    }

    set Ub82Locator2(value) {
        this.setComponentValue('Ub82Locator2', value);
    }

    get Ub82Locator9() {
        return this.getComponent('Ub82Locator9');
    }

    set Ub82Locator9(value) {
        this.setComponentValue('Ub82Locator9', value);
    }

    get Ub82Locator27() {
        return this.getComponent('Ub82Locator27');
    }

    set Ub82Locator27(value) {
        this.setComponentValue('Ub82Locator27', value);
    }

    get Ub82Locator45() {
        return this.getComponent('Ub82Locator45');
    }

    set Ub82Locator45(value) {
        this.setComponentValue('Ub82Locator45', value);
    }
}
