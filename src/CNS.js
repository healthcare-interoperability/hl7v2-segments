import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class CNS extends Segment {
    static components = {
        StartingNotificationReferenceNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EndingNotificationReferenceNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StartingNotificationDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EndingNotificationDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        StartingNotificationCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EndingNotificationCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'StartingNotificationReferenceNumber',
        'EndingNotificationReferenceNumber',
        'StartingNotificationDateTime',
        'EndingNotificationDateTime',
        'StartingNotificationCode',
        'EndingNotificationCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CNS');
        this.setValues(values);
    }

    get StartingNotificationReferenceNumber() {
        return this.getComponent('StartingNotificationReferenceNumber');
    }

    set StartingNotificationReferenceNumber(value) {
        this.setComponentValue('StartingNotificationReferenceNumber', value);
    }

    get EndingNotificationReferenceNumber() {
        return this.getComponent('EndingNotificationReferenceNumber');
    }

    set EndingNotificationReferenceNumber(value) {
        this.setComponentValue('EndingNotificationReferenceNumber', value);
    }

    get StartingNotificationDateTime() {
        return this.getComponent('StartingNotificationDateTime');
    }

    set StartingNotificationDateTime(value) {
        this.setComponentValue('StartingNotificationDateTime', value);
    }

    get EndingNotificationDateTime() {
        return this.getComponent('EndingNotificationDateTime');
    }

    set EndingNotificationDateTime(value) {
        this.setComponentValue('EndingNotificationDateTime', value);
    }

    get StartingNotificationCode() {
        return this.getComponent('StartingNotificationCode');
    }

    set StartingNotificationCode(value) {
        this.setComponentValue('StartingNotificationCode', value);
    }

    get EndingNotificationCode() {
        return this.getComponent('EndingNotificationCode');
    }

    set EndingNotificationCode(value) {
        this.setComponentValue('EndingNotificationCode', value);
    }
}
