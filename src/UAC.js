import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ED } from '@healthcare-interoperability/hl7v2-datatypes';

export class UAC extends Segment {
    static components = {
        UserAuthenticationCredentialTypeCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        UserAuthenticationCredential: {
            defaultDataType: ED,
            dataTypes: [{ dataType: ED, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'UserAuthenticationCredentialTypeCode', 'UserAuthenticationCredential'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('UAC');
        this.setValues(values);
    }

    get UserAuthenticationCredentialTypeCode() {
        return this.getComponent('UserAuthenticationCredentialTypeCode');
    }

    set UserAuthenticationCredentialTypeCode(value) {
        this.setComponentValue('UserAuthenticationCredentialTypeCode', value);
    }

    get UserAuthenticationCredential() {
        return this.getComponent('UserAuthenticationCredential');
    }

    set UserAuthenticationCredential(value) {
        this.setComponentValue('UserAuthenticationCredential', value);
    }
}
