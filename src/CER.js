import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ED } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';

export class CER extends Segment {
    static components = {
        SetIdCer: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDCER: { aliasOf: 'SetIdCer' },
        SerialNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Version: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GrantingAuthority: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IssuingAuthority: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Signature: {
            defaultDataType: ED,
            dataTypes: [{ dataType: ED, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SignatureOfIssuingAuthority: { aliasOf: 'Signature' },
        GrantingCountry: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GrantingStateProvince: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        GrantingCountyParish: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertificateType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertificateDomain: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubjectId: {
            defaultDataType: EI,
            dataTypes: [
                { dataType: EI, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.5', '2.5.1', '2.6'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubjectID: { aliasOf: 'SubjectId' },
        SubjectName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SubjectDirectoryAttributeExtension: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SubjectDirectoryAttributeExtensionHealthProfessionalData: { aliasOf: 'SubjectDirectoryAttributeExtension' },
        SubjectPublicKeyInfo: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AuthorityKeyIdentifier: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BasicConstraint: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CrlDistributionPoint: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CRLDistributionPoint: { aliasOf: 'CrlDistributionPoint' },
        JurisdictionCountry: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        JurisdictionStateProvince: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        JurisdictionCountyParish: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        JurisdictionBreadth: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        GrantingDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IssuingDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ActivationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InactivationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpirationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 27,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RenewalDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RevocationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RevocationReasonCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.5', '2.5.1'] },
            ],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertificateStatusCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertificateStatus: { aliasOf: 'CertificateStatusCode' },
    };

    static componentsByIndex = [
        '',
        'SetIdCer',
        'SerialNumber',
        'Version',
        'GrantingAuthority',
        'IssuingAuthority',
        'Signature',
        'GrantingCountry',
        'GrantingStateProvince',
        'GrantingCountyParish',
        'CertificateType',
        'CertificateDomain',
        'SubjectId',
        'SubjectName',
        'SubjectDirectoryAttributeExtension',
        'SubjectPublicKeyInfo',
        'AuthorityKeyIdentifier',
        'BasicConstraint',
        'CrlDistributionPoint',
        'JurisdictionCountry',
        'JurisdictionStateProvince',
        'JurisdictionCountyParish',
        'JurisdictionBreadth',
        'GrantingDate',
        'IssuingDate',
        'ActivationDate',
        'InactivationDate',
        'ExpirationDate',
        'RenewalDate',
        'RevocationDate',
        'RevocationReasonCode',
        'CertificateStatusCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('CER');
        this.setValues(values);
    }

    get SetIdCer() {
        return this.getComponent('SetIdCer');
    }

    set SetIdCer(value) {
        this.setComponentValue('SetIdCer', value);
    }

    get SetIDCER() {
        return this.getComponent('SetIdCer');
    }

    set SetIDCER(value) {
        this.setComponentValue('SetIdCer', value);
    }

    get SerialNumber() {
        return this.getComponent('SerialNumber');
    }

    set SerialNumber(value) {
        this.setComponentValue('SerialNumber', value);
    }

    get Version() {
        return this.getComponent('Version');
    }

    set Version(value) {
        this.setComponentValue('Version', value);
    }

    get GrantingAuthority() {
        return this.getComponent('GrantingAuthority');
    }

    set GrantingAuthority(value) {
        this.setComponentValue('GrantingAuthority', value);
    }

    get IssuingAuthority() {
        return this.getComponent('IssuingAuthority');
    }

    set IssuingAuthority(value) {
        this.setComponentValue('IssuingAuthority', value);
    }

    get Signature() {
        return this.getComponent('Signature');
    }

    set Signature(value) {
        this.setComponentValue('Signature', value);
    }

    get SignatureOfIssuingAuthority() {
        return this.getComponent('Signature');
    }

    set SignatureOfIssuingAuthority(value) {
        this.setComponentValue('Signature', value);
    }

    get GrantingCountry() {
        return this.getComponent('GrantingCountry');
    }

    set GrantingCountry(value) {
        this.setComponentValue('GrantingCountry', value);
    }

    get GrantingStateProvince() {
        return this.getComponent('GrantingStateProvince');
    }

    set GrantingStateProvince(value) {
        this.setComponentValue('GrantingStateProvince', value);
    }

    get GrantingCountyParish() {
        return this.getComponent('GrantingCountyParish');
    }

    set GrantingCountyParish(value) {
        this.setComponentValue('GrantingCountyParish', value);
    }

    get CertificateType() {
        return this.getComponent('CertificateType');
    }

    set CertificateType(value) {
        this.setComponentValue('CertificateType', value);
    }

    get CertificateDomain() {
        return this.getComponent('CertificateDomain');
    }

    set CertificateDomain(value) {
        this.setComponentValue('CertificateDomain', value);
    }

    get SubjectId() {
        return this.getComponent('SubjectId');
    }

    set SubjectId(value) {
        this.setComponentValue('SubjectId', value);
    }

    get SubjectID() {
        return this.getComponent('SubjectId');
    }

    set SubjectID(value) {
        this.setComponentValue('SubjectId', value);
    }

    get SubjectName() {
        return this.getComponent('SubjectName');
    }

    set SubjectName(value) {
        this.setComponentValue('SubjectName', value);
    }

    get SubjectDirectoryAttributeExtension() {
        return this.getComponent('SubjectDirectoryAttributeExtension');
    }

    set SubjectDirectoryAttributeExtension(value) {
        this.setComponentValue('SubjectDirectoryAttributeExtension', value);
    }

    get SubjectDirectoryAttributeExtensionHealthProfessionalData() {
        return this.getComponent('SubjectDirectoryAttributeExtension');
    }

    set SubjectDirectoryAttributeExtensionHealthProfessionalData(value) {
        this.setComponentValue('SubjectDirectoryAttributeExtension', value);
    }

    get SubjectPublicKeyInfo() {
        return this.getComponent('SubjectPublicKeyInfo');
    }

    set SubjectPublicKeyInfo(value) {
        this.setComponentValue('SubjectPublicKeyInfo', value);
    }

    get AuthorityKeyIdentifier() {
        return this.getComponent('AuthorityKeyIdentifier');
    }

    set AuthorityKeyIdentifier(value) {
        this.setComponentValue('AuthorityKeyIdentifier', value);
    }

    get BasicConstraint() {
        return this.getComponent('BasicConstraint');
    }

    set BasicConstraint(value) {
        this.setComponentValue('BasicConstraint', value);
    }

    get CrlDistributionPoint() {
        return this.getComponent('CrlDistributionPoint');
    }

    set CrlDistributionPoint(value) {
        this.setComponentValue('CrlDistributionPoint', value);
    }

    get CRLDistributionPoint() {
        return this.getComponent('CrlDistributionPoint');
    }

    set CRLDistributionPoint(value) {
        this.setComponentValue('CrlDistributionPoint', value);
    }

    get JurisdictionCountry() {
        return this.getComponent('JurisdictionCountry');
    }

    set JurisdictionCountry(value) {
        this.setComponentValue('JurisdictionCountry', value);
    }

    get JurisdictionStateProvince() {
        return this.getComponent('JurisdictionStateProvince');
    }

    set JurisdictionStateProvince(value) {
        this.setComponentValue('JurisdictionStateProvince', value);
    }

    get JurisdictionCountyParish() {
        return this.getComponent('JurisdictionCountyParish');
    }

    set JurisdictionCountyParish(value) {
        this.setComponentValue('JurisdictionCountyParish', value);
    }

    get JurisdictionBreadth() {
        return this.getComponent('JurisdictionBreadth');
    }

    set JurisdictionBreadth(value) {
        this.setComponentValue('JurisdictionBreadth', value);
    }

    get GrantingDate() {
        return this.getComponent('GrantingDate');
    }

    set GrantingDate(value) {
        this.setComponentValue('GrantingDate', value);
    }

    get IssuingDate() {
        return this.getComponent('IssuingDate');
    }

    set IssuingDate(value) {
        this.setComponentValue('IssuingDate', value);
    }

    get ActivationDate() {
        return this.getComponent('ActivationDate');
    }

    set ActivationDate(value) {
        this.setComponentValue('ActivationDate', value);
    }

    get InactivationDate() {
        return this.getComponent('InactivationDate');
    }

    set InactivationDate(value) {
        this.setComponentValue('InactivationDate', value);
    }

    get ExpirationDate() {
        return this.getComponent('ExpirationDate');
    }

    set ExpirationDate(value) {
        this.setComponentValue('ExpirationDate', value);
    }

    get RenewalDate() {
        return this.getComponent('RenewalDate');
    }

    set RenewalDate(value) {
        this.setComponentValue('RenewalDate', value);
    }

    get RevocationDate() {
        return this.getComponent('RevocationDate');
    }

    set RevocationDate(value) {
        this.setComponentValue('RevocationDate', value);
    }

    get RevocationReasonCode() {
        return this.getComponent('RevocationReasonCode');
    }

    set RevocationReasonCode(value) {
        this.setComponentValue('RevocationReasonCode', value);
    }

    get CertificateStatusCode() {
        return this.getComponent('CertificateStatusCode');
    }

    set CertificateStatusCode(value) {
        this.setComponentValue('CertificateStatusCode', value);
    }

    get CertificateStatus() {
        return this.getComponent('CertificateStatusCode');
    }

    set CertificateStatus(value) {
        this.setComponentValue('CertificateStatusCode', value);
    }
}
