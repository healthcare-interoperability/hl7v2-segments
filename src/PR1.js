import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CNE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { PL } from '@healthcare-interoperability/hl7v2-datatypes';

export class PR1 extends Segment {
    static components = {
        SetIdPr1: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIDProcedure: { aliasOf: 'SetIdPr1' },
        SetIDPr1: { aliasOf: 'SetIdPr1' },
        ProcedureCodingMethod: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureFunctionalType: {
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
        ProcedureType: { aliasOf: 'ProcedureFunctionalType' },
        ProcedureMinutes: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Anesthesiologist: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: XCN, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        AnesthesiaCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AnesthesiaMinutes: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Surgeon: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: XCN, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 11,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ProcedurePractitioner: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: XCN, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        ConsentCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedurePriority: {
            defaultDataType: NM,
            dataTypes: [
                { dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AssociatedDiagnosisCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureCodeModifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CNE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 16,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProcedureDRGType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureDrgType: { aliasOf: 'ProcedureDRGType' },
        TissueTypeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 18,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ProcedureIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcedureActionCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DRGProcedureDeterminationStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgProcedureDeterminationStatus: { aliasOf: 'DRGProcedureDeterminationStatus' },
        DRGProcedureRelevance: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: IS, versions: ['2.6'] },
                { dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DrgProcedureRelevance: { aliasOf: 'DRGProcedureRelevance' },
        TreatingOrganizationalUnit: {
            defaultDataType: PL,
            dataTypes: [{ dataType: PL, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 23,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        RespiratoryWithinSurgery: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ParentProcedureId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdPr1',
        'ProcedureCodingMethod',
        'ProcedureCode',
        'ProcedureDescription',
        'ProcedureDateTime',
        'ProcedureFunctionalType',
        'ProcedureMinutes',
        'Anesthesiologist',
        'AnesthesiaCode',
        'AnesthesiaMinutes',
        'Surgeon',
        'ProcedurePractitioner',
        'ConsentCode',
        'ProcedurePriority',
        'AssociatedDiagnosisCode',
        'ProcedureCodeModifier',
        'ProcedureDRGType',
        'TissueTypeCode',
        'ProcedureIdentifier',
        'ProcedureActionCode',
        'DRGProcedureDeterminationStatus',
        'DRGProcedureRelevance',
        'TreatingOrganizationalUnit',
        'RespiratoryWithinSurgery',
        'ParentProcedureId',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('PR1');
        this.setValues(values);
    }

    get SetIdPr1() {
        return this.getComponent('SetIdPr1');
    }

    set SetIdPr1(value) {
        this.setComponentValue('SetIdPr1', value);
    }

    get SetIDProcedure() {
        return this.getComponent('SetIdPr1');
    }

    set SetIDProcedure(value) {
        this.setComponentValue('SetIdPr1', value);
    }

    get SetIDPr1() {
        return this.getComponent('SetIdPr1');
    }

    set SetIDPr1(value) {
        this.setComponentValue('SetIdPr1', value);
    }

    get ProcedureCodingMethod() {
        return this.getComponent('ProcedureCodingMethod');
    }

    set ProcedureCodingMethod(value) {
        this.setComponentValue('ProcedureCodingMethod', value);
    }

    get ProcedureCode() {
        return this.getComponent('ProcedureCode');
    }

    set ProcedureCode(value) {
        this.setComponentValue('ProcedureCode', value);
    }

    get ProcedureDescription() {
        return this.getComponent('ProcedureDescription');
    }

    set ProcedureDescription(value) {
        this.setComponentValue('ProcedureDescription', value);
    }

    get ProcedureDateTime() {
        return this.getComponent('ProcedureDateTime');
    }

    set ProcedureDateTime(value) {
        this.setComponentValue('ProcedureDateTime', value);
    }

    get ProcedureFunctionalType() {
        return this.getComponent('ProcedureFunctionalType');
    }

    set ProcedureFunctionalType(value) {
        this.setComponentValue('ProcedureFunctionalType', value);
    }

    get ProcedureType() {
        return this.getComponent('ProcedureFunctionalType');
    }

    set ProcedureType(value) {
        this.setComponentValue('ProcedureFunctionalType', value);
    }

    get ProcedureMinutes() {
        return this.getComponent('ProcedureMinutes');
    }

    set ProcedureMinutes(value) {
        this.setComponentValue('ProcedureMinutes', value);
    }

    get Anesthesiologist() {
        return this.getComponent('Anesthesiologist');
    }

    set Anesthesiologist(value) {
        this.setComponentValue('Anesthesiologist', value);
    }

    get AnesthesiaCode() {
        return this.getComponent('AnesthesiaCode');
    }

    set AnesthesiaCode(value) {
        this.setComponentValue('AnesthesiaCode', value);
    }

    get AnesthesiaMinutes() {
        return this.getComponent('AnesthesiaMinutes');
    }

    set AnesthesiaMinutes(value) {
        this.setComponentValue('AnesthesiaMinutes', value);
    }

    get Surgeon() {
        return this.getComponent('Surgeon');
    }

    set Surgeon(value) {
        this.setComponentValue('Surgeon', value);
    }

    get ProcedurePractitioner() {
        return this.getComponent('ProcedurePractitioner');
    }

    set ProcedurePractitioner(value) {
        this.setComponentValue('ProcedurePractitioner', value);
    }

    get ConsentCode() {
        return this.getComponent('ConsentCode');
    }

    set ConsentCode(value) {
        this.setComponentValue('ConsentCode', value);
    }

    get ProcedurePriority() {
        return this.getComponent('ProcedurePriority');
    }

    set ProcedurePriority(value) {
        this.setComponentValue('ProcedurePriority', value);
    }

    get AssociatedDiagnosisCode() {
        return this.getComponent('AssociatedDiagnosisCode');
    }

    set AssociatedDiagnosisCode(value) {
        this.setComponentValue('AssociatedDiagnosisCode', value);
    }

    get ProcedureCodeModifier() {
        return this.getComponent('ProcedureCodeModifier');
    }

    set ProcedureCodeModifier(value) {
        this.setComponentValue('ProcedureCodeModifier', value);
    }

    get ProcedureDRGType() {
        return this.getComponent('ProcedureDRGType');
    }

    set ProcedureDRGType(value) {
        this.setComponentValue('ProcedureDRGType', value);
    }

    get ProcedureDrgType() {
        return this.getComponent('ProcedureDRGType');
    }

    set ProcedureDrgType(value) {
        this.setComponentValue('ProcedureDRGType', value);
    }

    get TissueTypeCode() {
        return this.getComponent('TissueTypeCode');
    }

    set TissueTypeCode(value) {
        this.setComponentValue('TissueTypeCode', value);
    }

    get ProcedureIdentifier() {
        return this.getComponent('ProcedureIdentifier');
    }

    set ProcedureIdentifier(value) {
        this.setComponentValue('ProcedureIdentifier', value);
    }

    get ProcedureActionCode() {
        return this.getComponent('ProcedureActionCode');
    }

    set ProcedureActionCode(value) {
        this.setComponentValue('ProcedureActionCode', value);
    }

    get DRGProcedureDeterminationStatus() {
        return this.getComponent('DRGProcedureDeterminationStatus');
    }

    set DRGProcedureDeterminationStatus(value) {
        this.setComponentValue('DRGProcedureDeterminationStatus', value);
    }

    get DrgProcedureDeterminationStatus() {
        return this.getComponent('DRGProcedureDeterminationStatus');
    }

    set DrgProcedureDeterminationStatus(value) {
        this.setComponentValue('DRGProcedureDeterminationStatus', value);
    }

    get DRGProcedureRelevance() {
        return this.getComponent('DRGProcedureRelevance');
    }

    set DRGProcedureRelevance(value) {
        this.setComponentValue('DRGProcedureRelevance', value);
    }

    get DrgProcedureRelevance() {
        return this.getComponent('DRGProcedureRelevance');
    }

    set DrgProcedureRelevance(value) {
        this.setComponentValue('DRGProcedureRelevance', value);
    }

    get TreatingOrganizationalUnit() {
        return this.getComponent('TreatingOrganizationalUnit');
    }

    set TreatingOrganizationalUnit(value) {
        this.setComponentValue('TreatingOrganizationalUnit', value);
    }

    get RespiratoryWithinSurgery() {
        return this.getComponent('RespiratoryWithinSurgery');
    }

    set RespiratoryWithinSurgery(value) {
        this.setComponentValue('RespiratoryWithinSurgery', value);
    }

    get ParentProcedureId() {
        return this.getComponent('ParentProcedureId');
    }

    set ParentProcedureId(value) {
        this.setComponentValue('ParentProcedureId', value);
    }
}
