import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CX } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { XPN } from '@healthcare-interoperability/hl7v2-datatypes';

export class MRG extends Segment {
    static components = {
        PriorPatientIdentifierList: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        PriorPatientIdInternal: { aliasOf: 'PriorPatientIdentifierList' },
        PriorAlternatePatientId: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CX, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        PriorPatientAccountNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PriorPatientId: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: CX, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PriorPatientIdExternal: { aliasOf: 'PriorPatientId' },
        PriorVisitNumber: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PriorAlternateVisitId: {
            defaultDataType: CX,
            dataTypes: [{ dataType: CX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PriorPatientName: {
            defaultDataType: XPN,
            dataTypes: [{ dataType: XPN, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'PriorPatientIdentifierList',
        'PriorAlternatePatientId',
        'PriorPatientAccountNumber',
        'PriorPatientId',
        'PriorVisitNumber',
        'PriorAlternateVisitId',
        'PriorPatientName',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('MRG');
        this.setValues(values);
    }

    get PriorPatientIdentifierList() {
        return this.getComponent('PriorPatientIdentifierList');
    }

    set PriorPatientIdentifierList(value) {
        this.setComponentValue('PriorPatientIdentifierList', value);
    }

    get PriorPatientIdInternal() {
        return this.getComponent('PriorPatientIdentifierList');
    }

    set PriorPatientIdInternal(value) {
        this.setComponentValue('PriorPatientIdentifierList', value);
    }

    get PriorAlternatePatientId() {
        return this.getComponent('PriorAlternatePatientId');
    }

    set PriorAlternatePatientId(value) {
        this.setComponentValue('PriorAlternatePatientId', value);
    }

    get PriorPatientAccountNumber() {
        return this.getComponent('PriorPatientAccountNumber');
    }

    set PriorPatientAccountNumber(value) {
        this.setComponentValue('PriorPatientAccountNumber', value);
    }

    get PriorPatientId() {
        return this.getComponent('PriorPatientId');
    }

    set PriorPatientId(value) {
        this.setComponentValue('PriorPatientId', value);
    }

    get PriorPatientIdExternal() {
        return this.getComponent('PriorPatientId');
    }

    set PriorPatientIdExternal(value) {
        this.setComponentValue('PriorPatientId', value);
    }

    get PriorVisitNumber() {
        return this.getComponent('PriorVisitNumber');
    }

    set PriorVisitNumber(value) {
        this.setComponentValue('PriorVisitNumber', value);
    }

    get PriorAlternateVisitId() {
        return this.getComponent('PriorAlternateVisitId');
    }

    set PriorAlternateVisitId(value) {
        this.setComponentValue('PriorAlternateVisitId', value);
    }

    get PriorPatientName() {
        return this.getComponent('PriorPatientName');
    }

    set PriorPatientName(value) {
        this.setComponentValue('PriorPatientName', value);
    }
}
