import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { NA } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';

export class PAC extends Segment {
    static components = {
        SetIdPac: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PackageId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentPackageId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PositionInParentPackage: {
            defaultDataType: NA,
            dataTypes: [{ dataType: NA, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PackageType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PackageCondition: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 6,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PackageHandlingCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PackageRiskCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] }],
            position: 8,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdPac', 'PackageId', 'ParentPackageId', 'PositionInParentPackage', 'PackageType', 'PackageCondition', 'PackageHandlingCode', 'PackageRiskCode'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PAC');
        this.setValues(values);
    }

    get SetIdPac() {
        return this.getComponent('SetIdPac');
    }

    set SetIdPac(value) {
        this.setComponentValue('SetIdPac', value);
    }

    get PackageId() {
        return this.getComponent('PackageId');
    }

    set PackageId(value) {
        this.setComponentValue('PackageId', value);
    }

    get ParentPackageId() {
        return this.getComponent('ParentPackageId');
    }

    set ParentPackageId(value) {
        this.setComponentValue('ParentPackageId', value);
    }

    get PositionInParentPackage() {
        return this.getComponent('PositionInParentPackage');
    }

    set PositionInParentPackage(value) {
        this.setComponentValue('PositionInParentPackage', value);
    }

    get PackageType() {
        return this.getComponent('PackageType');
    }

    set PackageType(value) {
        this.setComponentValue('PackageType', value);
    }

    get PackageCondition() {
        return this.getComponent('PackageCondition');
    }

    set PackageCondition(value) {
        this.setComponentValue('PackageCondition', value);
    }

    get PackageHandlingCode() {
        return this.getComponent('PackageHandlingCode');
    }

    set PackageHandlingCode(value) {
        this.setComponentValue('PackageHandlingCode', value);
    }

    get PackageRiskCode() {
        return this.getComponent('PackageRiskCode');
    }

    set PackageRiskCode(value) {
        this.setComponentValue('PackageRiskCode', value);
    }
}
