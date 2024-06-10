import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';

export class PD1 extends Segment {
    static components = {
        LivingDependency: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        LivingArrangement: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PatientPrimaryFacility: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PatientPrimaryCareProviderNameIdNo: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: XCN, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PatientPrimaryCareProviderNameIDNo: { aliasOf: 'PatientPrimaryCareProviderNameIdNo' },
        PatientPrimaryCareProviderNameAndIDNo: { aliasOf: 'PatientPrimaryCareProviderNameIdNo' },
        StudentIndicator: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Handicap: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LivingWillCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LivingWill: { aliasOf: 'LivingWillCode' },
        OrganDonorCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        OrganDonor: { aliasOf: 'OrganDonorCode' },
        SeparateBill: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DuplicatePatient: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PublicityCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PublicityIndicator: { aliasOf: 'PublicityCode' },
        ProtectionIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProtectionIndicatorEffectiveDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PlaceOfWorship: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 14,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        AdvanceDirectiveCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 15,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ImmunizationRegistryStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ImmunizationRegistryStatusEffectiveDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PublicityCodeEffectiveDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MilitaryBranch: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MilitaryRankGrade: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MilitaryStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AdvanceDirectiveLastVerifiedDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'LivingDependency',
        'LivingArrangement',
        'PatientPrimaryFacility',
        'PatientPrimaryCareProviderNameIdNo',
        'StudentIndicator',
        'Handicap',
        'LivingWillCode',
        'OrganDonorCode',
        'SeparateBill',
        'DuplicatePatient',
        'PublicityCode',
        'ProtectionIndicator',
        'ProtectionIndicatorEffectiveDate',
        'PlaceOfWorship',
        'AdvanceDirectiveCode',
        'ImmunizationRegistryStatus',
        'ImmunizationRegistryStatusEffectiveDate',
        'PublicityCodeEffectiveDate',
        'MilitaryBranch',
        'MilitaryRankGrade',
        'MilitaryStatus',
        'AdvanceDirectiveLastVerifiedDate',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PD1');
        this.setValues(values);
    }

    get LivingDependency() {
        return this.getComponent('LivingDependency');
    }

    set LivingDependency(value) {
        this.setComponentValue('LivingDependency', value);
    }

    get LivingArrangement() {
        return this.getComponent('LivingArrangement');
    }

    set LivingArrangement(value) {
        this.setComponentValue('LivingArrangement', value);
    }

    get PatientPrimaryFacility() {
        return this.getComponent('PatientPrimaryFacility');
    }

    set PatientPrimaryFacility(value) {
        this.setComponentValue('PatientPrimaryFacility', value);
    }

    get PatientPrimaryCareProviderNameIdNo() {
        return this.getComponent('PatientPrimaryCareProviderNameIdNo');
    }

    set PatientPrimaryCareProviderNameIdNo(value) {
        this.setComponentValue('PatientPrimaryCareProviderNameIdNo', value);
    }

    get PatientPrimaryCareProviderNameIDNo() {
        return this.getComponent('PatientPrimaryCareProviderNameIdNo');
    }

    set PatientPrimaryCareProviderNameIDNo(value) {
        this.setComponentValue('PatientPrimaryCareProviderNameIdNo', value);
    }

    get PatientPrimaryCareProviderNameAndIDNo() {
        return this.getComponent('PatientPrimaryCareProviderNameIdNo');
    }

    set PatientPrimaryCareProviderNameAndIDNo(value) {
        this.setComponentValue('PatientPrimaryCareProviderNameIdNo', value);
    }

    get StudentIndicator() {
        return this.getComponent('StudentIndicator');
    }

    set StudentIndicator(value) {
        this.setComponentValue('StudentIndicator', value);
    }

    get Handicap() {
        return this.getComponent('Handicap');
    }

    set Handicap(value) {
        this.setComponentValue('Handicap', value);
    }

    get LivingWillCode() {
        return this.getComponent('LivingWillCode');
    }

    set LivingWillCode(value) {
        this.setComponentValue('LivingWillCode', value);
    }

    get LivingWill() {
        return this.getComponent('LivingWillCode');
    }

    set LivingWill(value) {
        this.setComponentValue('LivingWillCode', value);
    }

    get OrganDonorCode() {
        return this.getComponent('OrganDonorCode');
    }

    set OrganDonorCode(value) {
        this.setComponentValue('OrganDonorCode', value);
    }

    get OrganDonor() {
        return this.getComponent('OrganDonorCode');
    }

    set OrganDonor(value) {
        this.setComponentValue('OrganDonorCode', value);
    }

    get SeparateBill() {
        return this.getComponent('SeparateBill');
    }

    set SeparateBill(value) {
        this.setComponentValue('SeparateBill', value);
    }

    get DuplicatePatient() {
        return this.getComponent('DuplicatePatient');
    }

    set DuplicatePatient(value) {
        this.setComponentValue('DuplicatePatient', value);
    }

    get PublicityCode() {
        return this.getComponent('PublicityCode');
    }

    set PublicityCode(value) {
        this.setComponentValue('PublicityCode', value);
    }

    get PublicityIndicator() {
        return this.getComponent('PublicityCode');
    }

    set PublicityIndicator(value) {
        this.setComponentValue('PublicityCode', value);
    }

    get ProtectionIndicator() {
        return this.getComponent('ProtectionIndicator');
    }

    set ProtectionIndicator(value) {
        this.setComponentValue('ProtectionIndicator', value);
    }

    get ProtectionIndicatorEffectiveDate() {
        return this.getComponent('ProtectionIndicatorEffectiveDate');
    }

    set ProtectionIndicatorEffectiveDate(value) {
        this.setComponentValue('ProtectionIndicatorEffectiveDate', value);
    }

    get PlaceOfWorship() {
        return this.getComponent('PlaceOfWorship');
    }

    set PlaceOfWorship(value) {
        this.setComponentValue('PlaceOfWorship', value);
    }

    get AdvanceDirectiveCode() {
        return this.getComponent('AdvanceDirectiveCode');
    }

    set AdvanceDirectiveCode(value) {
        this.setComponentValue('AdvanceDirectiveCode', value);
    }

    get ImmunizationRegistryStatus() {
        return this.getComponent('ImmunizationRegistryStatus');
    }

    set ImmunizationRegistryStatus(value) {
        this.setComponentValue('ImmunizationRegistryStatus', value);
    }

    get ImmunizationRegistryStatusEffectiveDate() {
        return this.getComponent('ImmunizationRegistryStatusEffectiveDate');
    }

    set ImmunizationRegistryStatusEffectiveDate(value) {
        this.setComponentValue('ImmunizationRegistryStatusEffectiveDate', value);
    }

    get PublicityCodeEffectiveDate() {
        return this.getComponent('PublicityCodeEffectiveDate');
    }

    set PublicityCodeEffectiveDate(value) {
        this.setComponentValue('PublicityCodeEffectiveDate', value);
    }

    get MilitaryBranch() {
        return this.getComponent('MilitaryBranch');
    }

    set MilitaryBranch(value) {
        this.setComponentValue('MilitaryBranch', value);
    }

    get MilitaryRankGrade() {
        return this.getComponent('MilitaryRankGrade');
    }

    set MilitaryRankGrade(value) {
        this.setComponentValue('MilitaryRankGrade', value);
    }

    get MilitaryStatus() {
        return this.getComponent('MilitaryStatus');
    }

    set MilitaryStatus(value) {
        this.setComponentValue('MilitaryStatus', value);
    }

    get AdvanceDirectiveLastVerifiedDate() {
        return this.getComponent('AdvanceDirectiveLastVerifiedDate');
    }

    set AdvanceDirectiveLastVerifiedDate(value) {
        this.setComponentValue('AdvanceDirectiveLastVerifiedDate', value);
    }
}
