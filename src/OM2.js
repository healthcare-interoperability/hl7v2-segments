import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';
import { RFR } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_RFR } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_RANGE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NR } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_ABS_RANGE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DLT } from '@healthcare-interoperability/hl7v2-datatypes';
import { CM_DLT } from '@healthcare-interoperability/hl7v2-datatypes';

export class OM2 extends Segment {
    static components = {
        SequenceNumberTestObservationMasterFile: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SequenceNumber: { aliasOf: 'SequenceNumberTestObservationMasterFile' },
        UnitsOfMeasure: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RangeOfDecimalPrecision: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CorrespondingSiUnitsOfMeasure: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CorrespondingSIUnitsOfMeasure: { aliasOf: 'CorrespondingSiUnitsOfMeasure' },
        SiConversionFactor: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SIConversionFactor: { aliasOf: 'SiConversionFactor' },
        ReferenceNormalRangeForOrdinalAndContinuousObservations: {
            defaultDataType: RFR,
            dataTypes: [
                { dataType: RFR, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_RFR, versions: ['2.3'] },
            ],
            position: 6,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        Reference: { aliasOf: 'ReferenceNormalRangeForOrdinalAndContinuousObservations' },
        ReferenceNormalRangeOrdinalAndContinuousObservations: { aliasOf: 'ReferenceNormalRangeForOrdinalAndContinuousObservations' },
        CriticalRangeForOrdinalAndContinuousObservations: {
            defaultDataType: RFR,
            dataTypes: [
                { dataType: RFR, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_RANGE, versions: ['2.3'] },
                { dataType: NR, versions: ['2.3.1', '2.4'] },
            ],
            position: 7,
            isArray: true,
            maxOccurence: 999999,
            minOccurence: 1,
        },
        CriticalRangeForOrdinalContinuousObs: { aliasOf: 'CriticalRangeForOrdinalAndContinuousObservations' },
        AbsoluteRangeForOrdinalAndContinuousObservations: {
            defaultDataType: RFR,
            dataTypes: [
                { dataType: RFR, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_ABS_RANGE, versions: ['2.3', '2.3.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AbsoluteRangeForOrdinalContinuousObs: { aliasOf: 'AbsoluteRangeForOrdinalAndContinuousObservations' },
        DeltaCheckCriteria: {
            defaultDataType: DLT,
            dataTypes: [
                { dataType: DLT, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_DLT, versions: ['2.3'] },
            ],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        MinimumMeaningfulIncrements: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SequenceNumberTestObservationMasterFile',
        'UnitsOfMeasure',
        'RangeOfDecimalPrecision',
        'CorrespondingSiUnitsOfMeasure',
        'SiConversionFactor',
        'ReferenceNormalRangeForOrdinalAndContinuousObservations',
        'CriticalRangeForOrdinalAndContinuousObservations',
        'AbsoluteRangeForOrdinalAndContinuousObservations',
        'DeltaCheckCriteria',
        'MinimumMeaningfulIncrements',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('OM2');
        this.setValues(values);
    }

    get SequenceNumberTestObservationMasterFile() {
        return this.getComponent('SequenceNumberTestObservationMasterFile');
    }

    set SequenceNumberTestObservationMasterFile(value) {
        this.setComponentValue('SequenceNumberTestObservationMasterFile', value);
    }

    get SequenceNumber() {
        return this.getComponent('SequenceNumberTestObservationMasterFile');
    }

    set SequenceNumber(value) {
        this.setComponentValue('SequenceNumberTestObservationMasterFile', value);
    }

    get UnitsOfMeasure() {
        return this.getComponent('UnitsOfMeasure');
    }

    set UnitsOfMeasure(value) {
        this.setComponentValue('UnitsOfMeasure', value);
    }

    get RangeOfDecimalPrecision() {
        return this.getComponent('RangeOfDecimalPrecision');
    }

    set RangeOfDecimalPrecision(value) {
        this.setComponentValue('RangeOfDecimalPrecision', value);
    }

    get CorrespondingSiUnitsOfMeasure() {
        return this.getComponent('CorrespondingSiUnitsOfMeasure');
    }

    set CorrespondingSiUnitsOfMeasure(value) {
        this.setComponentValue('CorrespondingSiUnitsOfMeasure', value);
    }

    get CorrespondingSIUnitsOfMeasure() {
        return this.getComponent('CorrespondingSiUnitsOfMeasure');
    }

    set CorrespondingSIUnitsOfMeasure(value) {
        this.setComponentValue('CorrespondingSiUnitsOfMeasure', value);
    }

    get SiConversionFactor() {
        return this.getComponent('SiConversionFactor');
    }

    set SiConversionFactor(value) {
        this.setComponentValue('SiConversionFactor', value);
    }

    get SIConversionFactor() {
        return this.getComponent('SiConversionFactor');
    }

    set SIConversionFactor(value) {
        this.setComponentValue('SiConversionFactor', value);
    }

    get ReferenceNormalRangeForOrdinalAndContinuousObservations() {
        return this.getComponent('ReferenceNormalRangeForOrdinalAndContinuousObservations');
    }

    set ReferenceNormalRangeForOrdinalAndContinuousObservations(value) {
        this.setComponentValue('ReferenceNormalRangeForOrdinalAndContinuousObservations', value);
    }

    get Reference() {
        return this.getComponent('ReferenceNormalRangeForOrdinalAndContinuousObservations');
    }

    set Reference(value) {
        this.setComponentValue('ReferenceNormalRangeForOrdinalAndContinuousObservations', value);
    }

    get ReferenceNormalRangeOrdinalAndContinuousObservations() {
        return this.getComponent('ReferenceNormalRangeForOrdinalAndContinuousObservations');
    }

    set ReferenceNormalRangeOrdinalAndContinuousObservations(value) {
        this.setComponentValue('ReferenceNormalRangeForOrdinalAndContinuousObservations', value);
    }

    get CriticalRangeForOrdinalAndContinuousObservations() {
        return this.getComponent('CriticalRangeForOrdinalAndContinuousObservations');
    }

    set CriticalRangeForOrdinalAndContinuousObservations(value) {
        this.setComponentValue('CriticalRangeForOrdinalAndContinuousObservations', value);
    }

    get CriticalRangeForOrdinalContinuousObs() {
        return this.getComponent('CriticalRangeForOrdinalAndContinuousObservations');
    }

    set CriticalRangeForOrdinalContinuousObs(value) {
        this.setComponentValue('CriticalRangeForOrdinalAndContinuousObservations', value);
    }

    get AbsoluteRangeForOrdinalAndContinuousObservations() {
        return this.getComponent('AbsoluteRangeForOrdinalAndContinuousObservations');
    }

    set AbsoluteRangeForOrdinalAndContinuousObservations(value) {
        this.setComponentValue('AbsoluteRangeForOrdinalAndContinuousObservations', value);
    }

    get AbsoluteRangeForOrdinalContinuousObs() {
        return this.getComponent('AbsoluteRangeForOrdinalAndContinuousObservations');
    }

    set AbsoluteRangeForOrdinalContinuousObs(value) {
        this.setComponentValue('AbsoluteRangeForOrdinalAndContinuousObservations', value);
    }

    get DeltaCheckCriteria() {
        return this.getComponent('DeltaCheckCriteria');
    }

    set DeltaCheckCriteria(value) {
        this.setComponentValue('DeltaCheckCriteria', value);
    }

    get MinimumMeaningfulIncrements() {
        return this.getComponent('MinimumMeaningfulIncrements');
    }

    set MinimumMeaningfulIncrements(value) {
        this.setComponentValue('MinimumMeaningfulIncrements', value);
    }
}
