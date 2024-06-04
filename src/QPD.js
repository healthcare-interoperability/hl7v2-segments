import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { varies } from '@healthcare-interoperability/hl7v2-datatypes';
import { VARIES } from '@healthcare-interoperability/hl7v2-datatypes';

export class QPD extends Segment {
    static components = {
        MessageQueryName: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QueryTag: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        UserParametersInSuccessiveFields: {
            defaultDataType: varies,
            dataTypes: [
                { dataType: varies, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: VARIES, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        UserParameters: { aliasOf: 'UserParametersInSuccessiveFields' },
    };

    static componentsByIndex = ['', 'MessageQueryName', 'QueryTag', 'UserParametersInSuccessiveFields'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('QPD');
        this.setValues(values);
    }

    get MessageQueryName() {
        return this.getComponent('MessageQueryName');
    }

    set MessageQueryName(value) {
        this.setComponentValue('MessageQueryName', value);
    }

    get QueryTag() {
        return this.getComponent('QueryTag');
    }

    set QueryTag(value) {
        this.setComponentValue('QueryTag', value);
    }

    get UserParametersInSuccessiveFields() {
        return this.getComponent('UserParametersInSuccessiveFields');
    }

    set UserParametersInSuccessiveFields(value) {
        this.setComponentValue('UserParametersInSuccessiveFields', value);
    }

    get UserParameters() {
        return this.getComponent('UserParametersInSuccessiveFields');
    }

    set UserParameters(value) {
        this.setComponentValue('UserParametersInSuccessiveFields', value);
    }
}
