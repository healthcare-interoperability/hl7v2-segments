import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';

export class SFT extends Segment {
    static components = {
        SoftwareVendorOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SoftwareCertifiedVersionOrReleaseNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SoftwareProductName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SoftwareBinaryId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SoftwareProductInformation: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SoftwareInstallDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SoftwareVendorOrganization',
        'SoftwareCertifiedVersionOrReleaseNumber',
        'SoftwareProductName',
        'SoftwareBinaryId',
        'SoftwareProductInformation',
        'SoftwareInstallDate',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('SFT');
        this.setValues(values);
    }

    get SoftwareVendorOrganization() {
        return this.getComponent('SoftwareVendorOrganization');
    }

    set SoftwareVendorOrganization(value) {
        this.setComponentValue('SoftwareVendorOrganization', value);
    }

    get SoftwareCertifiedVersionOrReleaseNumber() {
        return this.getComponent('SoftwareCertifiedVersionOrReleaseNumber');
    }

    set SoftwareCertifiedVersionOrReleaseNumber(value) {
        this.setComponentValue('SoftwareCertifiedVersionOrReleaseNumber', value);
    }

    get SoftwareProductName() {
        return this.getComponent('SoftwareProductName');
    }

    set SoftwareProductName(value) {
        this.setComponentValue('SoftwareProductName', value);
    }

    get SoftwareBinaryId() {
        return this.getComponent('SoftwareBinaryId');
    }

    set SoftwareBinaryId(value) {
        this.setComponentValue('SoftwareBinaryId', value);
    }

    get SoftwareProductInformation() {
        return this.getComponent('SoftwareProductInformation');
    }

    set SoftwareProductInformation(value) {
        this.setComponentValue('SoftwareProductInformation', value);
    }

    get SoftwareInstallDate() {
        return this.getComponent('SoftwareInstallDate');
    }

    set SoftwareInstallDate(value) {
        this.setComponentValue('SoftwareInstallDate', value);
    }
}
