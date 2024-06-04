import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_ELD } from '@healthcare-interoperability/hl7v2-datatypes';
import { ELD } from '@healthcare-interoperability/hl7v2-datatypes';
import { ERL } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';

export class ERR extends Segment {
    static components = {
        ErrorCodeAndLocation: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CM_ELD, versions: ['2.3'] },
                { dataType: ELD, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ErrorLocation: {
            defaultDataType: ERL,
            dataTypes: [{ dataType: ERL, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        Hl7ErrorCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Severity: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ApplicationErrorCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ApplicationErrorParameter: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 6,
            isArray: true,
            maxOccurence: 10,
            minOccurence: 1,
        },
        DiagnosticInformation: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        UserMessage: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InformPersonIndicator: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        OverrideType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OverrideReasonCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 11,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        HelpDeskContactPoint: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 12,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ErrorCodeAndLocation',
        'ErrorLocation',
        'Hl7ErrorCode',
        'Severity',
        'ApplicationErrorCode',
        'ApplicationErrorParameter',
        'DiagnosticInformation',
        'UserMessage',
        'InformPersonIndicator',
        'OverrideType',
        'OverrideReasonCode',
        'HelpDeskContactPoint',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ERR');
        this.setValues(values);
    }

    get ErrorCodeAndLocation() {
        return this.getComponent('ErrorCodeAndLocation');
    }

    set ErrorCodeAndLocation(value) {
        this.setComponentValue('ErrorCodeAndLocation', value);
    }

    get ErrorLocation() {
        return this.getComponent('ErrorLocation');
    }

    set ErrorLocation(value) {
        this.setComponentValue('ErrorLocation', value);
    }

    get Hl7ErrorCode() {
        return this.getComponent('Hl7ErrorCode');
    }

    set Hl7ErrorCode(value) {
        this.setComponentValue('Hl7ErrorCode', value);
    }

    get Severity() {
        return this.getComponent('Severity');
    }

    set Severity(value) {
        this.setComponentValue('Severity', value);
    }

    get ApplicationErrorCode() {
        return this.getComponent('ApplicationErrorCode');
    }

    set ApplicationErrorCode(value) {
        this.setComponentValue('ApplicationErrorCode', value);
    }

    get ApplicationErrorParameter() {
        return this.getComponent('ApplicationErrorParameter');
    }

    set ApplicationErrorParameter(value) {
        this.setComponentValue('ApplicationErrorParameter', value);
    }

    get DiagnosticInformation() {
        return this.getComponent('DiagnosticInformation');
    }

    set DiagnosticInformation(value) {
        this.setComponentValue('DiagnosticInformation', value);
    }

    get UserMessage() {
        return this.getComponent('UserMessage');
    }

    set UserMessage(value) {
        this.setComponentValue('UserMessage', value);
    }

    get InformPersonIndicator() {
        return this.getComponent('InformPersonIndicator');
    }

    set InformPersonIndicator(value) {
        this.setComponentValue('InformPersonIndicator', value);
    }

    get OverrideType() {
        return this.getComponent('OverrideType');
    }

    set OverrideType(value) {
        this.setComponentValue('OverrideType', value);
    }

    get OverrideReasonCode() {
        return this.getComponent('OverrideReasonCode');
    }

    set OverrideReasonCode(value) {
        this.setComponentValue('OverrideReasonCode', value);
    }

    get HelpDeskContactPoint() {
        return this.getComponent('HelpDeskContactPoint');
    }

    set HelpDeskContactPoint(value) {
        this.setComponentValue('HelpDeskContactPoint', value);
    }
}
