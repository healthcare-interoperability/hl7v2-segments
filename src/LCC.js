import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class LCC extends Segment {
    static components = {
        PrimaryKeyValueLcc: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryKeyValue: { aliasOf: 'PrimaryKeyValueLcc' },
        PrimaryKeyValueLCC: { aliasOf: 'PrimaryKeyValueLcc' },
        LocationDepartment: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccommodationType: {
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
        ChargeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'PrimaryKeyValueLcc', 'LocationDepartment', 'AccommodationType', 'ChargeCode'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('LCC');
        this.setValues(values);
    }

    get PrimaryKeyValueLcc() {
        return this.getComponent('PrimaryKeyValueLcc');
    }

    set PrimaryKeyValueLcc(value) {
        this.setComponentValue('PrimaryKeyValueLcc', value);
    }

    get PrimaryKeyValue() {
        return this.getComponent('PrimaryKeyValueLcc');
    }

    set PrimaryKeyValue(value) {
        this.setComponentValue('PrimaryKeyValueLcc', value);
    }

    get PrimaryKeyValueLCC() {
        return this.getComponent('PrimaryKeyValueLcc');
    }

    set PrimaryKeyValueLCC(value) {
        this.setComponentValue('PrimaryKeyValueLcc', value);
    }

    get LocationDepartment() {
        return this.getComponent('LocationDepartment');
    }

    set LocationDepartment(value) {
        this.setComponentValue('LocationDepartment', value);
    }

    get AccommodationType() {
        return this.getComponent('AccommodationType');
    }

    set AccommodationType(value) {
        this.setComponentValue('AccommodationType', value);
    }

    get ChargeCode() {
        return this.getComponent('ChargeCode');
    }

    set ChargeCode(value) {
        this.setComponentValue('ChargeCode', value);
    }
}
