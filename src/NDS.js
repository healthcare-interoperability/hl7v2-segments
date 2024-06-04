import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class NDS extends Segment {
    static components = {
        NotificationReferenceNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NotificationDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NotificationAlertSeverity: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NotificationCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'NotificationReferenceNumber', 'NotificationDateTime', 'NotificationAlertSeverity', 'NotificationCode'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('NDS');
        this.setValues(values);
    }

    get NotificationReferenceNumber() {
        return this.getComponent('NotificationReferenceNumber');
    }

    set NotificationReferenceNumber(value) {
        this.setComponentValue('NotificationReferenceNumber', value);
    }

    get NotificationDateTime() {
        return this.getComponent('NotificationDateTime');
    }

    set NotificationDateTime(value) {
        this.setComponentValue('NotificationDateTime', value);
    }

    get NotificationAlertSeverity() {
        return this.getComponent('NotificationAlertSeverity');
    }

    set NotificationAlertSeverity(value) {
        this.setComponentValue('NotificationAlertSeverity', value);
    }

    get NotificationCode() {
        return this.getComponent('NotificationCode');
    }

    set NotificationCode(value) {
        this.setComponentValue('NotificationCode', value);
    }
}
