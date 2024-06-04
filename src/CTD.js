import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { PLN } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_PI } from '@healthcare-interoperability/hl7v2-datatypes';
import { PI } from '@healthcare-interoperability/hl7v2-datatypes';

export class CTD extends Segment {
    static components = {
        ContactRole: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContactAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ContactLocation: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContactCommunicationInformation: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PreferredMethodOfContact: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContactIdentifiers: {
            defaultDataType: PLN,
            dataTypes: [
                { dataType: PLN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_PI, versions: ['2.3'] },
                { dataType: PI, versions: ['2.3.1', '2.4'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'ContactRole', 'ContactName', 'ContactAddress', 'ContactLocation', 'ContactCommunicationInformation', 'PreferredMethodOfContact', 'ContactIdentifiers'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CTD');
        this.setValues(values);
    }

    get ContactRole() {
        return this.getComponent('ContactRole');
    }

    set ContactRole(value) {
        this.setComponentValue('ContactRole', value);
    }

    get ContactName() {
        return this.getComponent('ContactName');
    }

    set ContactName(value) {
        this.setComponentValue('ContactName', value);
    }

    get ContactAddress() {
        return this.getComponent('ContactAddress');
    }

    set ContactAddress(value) {
        this.setComponentValue('ContactAddress', value);
    }

    get ContactLocation() {
        return this.getComponent('ContactLocation');
    }

    set ContactLocation(value) {
        this.setComponentValue('ContactLocation', value);
    }

    get ContactCommunicationInformation() {
        return this.getComponent('ContactCommunicationInformation');
    }

    set ContactCommunicationInformation(value) {
        this.setComponentValue('ContactCommunicationInformation', value);
    }

    get PreferredMethodOfContact() {
        return this.getComponent('PreferredMethodOfContact');
    }

    set PreferredMethodOfContact(value) {
        this.setComponentValue('PreferredMethodOfContact', value);
    }

    get ContactIdentifiers() {
        return this.getComponent('ContactIdentifiers');
    }

    set ContactIdentifiers(value) {
        this.setComponentValue('ContactIdentifiers', value);
    }
}
