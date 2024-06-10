import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CP } from '@healthcare-interoperability/hl7v2-datatypes';

export class GP1 extends Segment {
    static components = {
        TypeOfBillCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RevenueCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OverallClaimDispositionCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OceEditsPerVisitCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OCEEditsPerVisitCode: { aliasOf: 'OceEditsPerVisitCode' },
        OutlierCost: {
            defaultDataType: CP,
            dataTypes: [{ dataType: CP, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'TypeOfBillCode', 'RevenueCode', 'OverallClaimDispositionCode', 'OceEditsPerVisitCode', 'OutlierCost'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('GP1');
        this.setValues(values);
    }

    get TypeOfBillCode() {
        return this.getComponent('TypeOfBillCode');
    }

    set TypeOfBillCode(value) {
        this.setComponentValue('TypeOfBillCode', value);
    }

    get RevenueCode() {
        return this.getComponent('RevenueCode');
    }

    set RevenueCode(value) {
        this.setComponentValue('RevenueCode', value);
    }

    get OverallClaimDispositionCode() {
        return this.getComponent('OverallClaimDispositionCode');
    }

    set OverallClaimDispositionCode(value) {
        this.setComponentValue('OverallClaimDispositionCode', value);
    }

    get OceEditsPerVisitCode() {
        return this.getComponent('OceEditsPerVisitCode');
    }

    set OceEditsPerVisitCode(value) {
        this.setComponentValue('OceEditsPerVisitCode', value);
    }

    get OCEEditsPerVisitCode() {
        return this.getComponent('OceEditsPerVisitCode');
    }

    set OCEEditsPerVisitCode(value) {
        this.setComponentValue('OceEditsPerVisitCode', value);
    }

    get OutlierCost() {
        return this.getComponent('OutlierCost');
    }

    set OutlierCost(value) {
        this.setComponentValue('OutlierCost', value);
    }
}
