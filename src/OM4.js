import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CQ } from '@healthcare-interoperability/hl7v2-datatypes';

export class OM4 extends Segment {
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
        DerivedSpecimen: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerDescription: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Specimen: {
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
        Additive: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Preparation: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecialHandlingRequirements: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NormalCollectionVolume: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MinimumCollectionVolume: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenRequirements: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenPriorities: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenRetentionTime: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenHandlingCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 15,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenPreference: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PreferredSpecimenAttribtureSequenceId: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TaxonomicClassificationCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 18,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SequenceNumberTestObservationMasterFile',
        'DerivedSpecimen',
        'ContainerDescription',
        'ContainerVolume',
        'ContainerUnits',
        'Specimen',
        'Additive',
        'Preparation',
        'SpecialHandlingRequirements',
        'NormalCollectionVolume',
        'MinimumCollectionVolume',
        'SpecimenRequirements',
        'SpecimenPriorities',
        'SpecimenRetentionTime',
        'SpecimenHandlingCode',
        'SpecimenPreference',
        'PreferredSpecimenAttribtureSequenceId',
        'TaxonomicClassificationCode',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('OM4');
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

    get DerivedSpecimen() {
        return this.getComponent('DerivedSpecimen');
    }

    set DerivedSpecimen(value) {
        this.setComponentValue('DerivedSpecimen', value);
    }

    get ContainerDescription() {
        return this.getComponent('ContainerDescription');
    }

    set ContainerDescription(value) {
        this.setComponentValue('ContainerDescription', value);
    }

    get ContainerVolume() {
        return this.getComponent('ContainerVolume');
    }

    set ContainerVolume(value) {
        this.setComponentValue('ContainerVolume', value);
    }

    get ContainerUnits() {
        return this.getComponent('ContainerUnits');
    }

    set ContainerUnits(value) {
        this.setComponentValue('ContainerUnits', value);
    }

    get Specimen() {
        return this.getComponent('Specimen');
    }

    set Specimen(value) {
        this.setComponentValue('Specimen', value);
    }

    get Additive() {
        return this.getComponent('Additive');
    }

    set Additive(value) {
        this.setComponentValue('Additive', value);
    }

    get Preparation() {
        return this.getComponent('Preparation');
    }

    set Preparation(value) {
        this.setComponentValue('Preparation', value);
    }

    get SpecialHandlingRequirements() {
        return this.getComponent('SpecialHandlingRequirements');
    }

    set SpecialHandlingRequirements(value) {
        this.setComponentValue('SpecialHandlingRequirements', value);
    }

    get NormalCollectionVolume() {
        return this.getComponent('NormalCollectionVolume');
    }

    set NormalCollectionVolume(value) {
        this.setComponentValue('NormalCollectionVolume', value);
    }

    get MinimumCollectionVolume() {
        return this.getComponent('MinimumCollectionVolume');
    }

    set MinimumCollectionVolume(value) {
        this.setComponentValue('MinimumCollectionVolume', value);
    }

    get SpecimenRequirements() {
        return this.getComponent('SpecimenRequirements');
    }

    set SpecimenRequirements(value) {
        this.setComponentValue('SpecimenRequirements', value);
    }

    get SpecimenPriorities() {
        return this.getComponent('SpecimenPriorities');
    }

    set SpecimenPriorities(value) {
        this.setComponentValue('SpecimenPriorities', value);
    }

    get SpecimenRetentionTime() {
        return this.getComponent('SpecimenRetentionTime');
    }

    set SpecimenRetentionTime(value) {
        this.setComponentValue('SpecimenRetentionTime', value);
    }

    get SpecimenHandlingCode() {
        return this.getComponent('SpecimenHandlingCode');
    }

    set SpecimenHandlingCode(value) {
        this.setComponentValue('SpecimenHandlingCode', value);
    }

    get SpecimenPreference() {
        return this.getComponent('SpecimenPreference');
    }

    set SpecimenPreference(value) {
        this.setComponentValue('SpecimenPreference', value);
    }

    get PreferredSpecimenAttribtureSequenceId() {
        return this.getComponent('PreferredSpecimenAttribtureSequenceId');
    }

    set PreferredSpecimenAttribtureSequenceId(value) {
        this.setComponentValue('PreferredSpecimenAttribtureSequenceId', value);
    }

    get TaxonomicClassificationCode() {
        return this.getComponent('TaxonomicClassificationCode');
    }

    set TaxonomicClassificationCode(value) {
        this.setComponentValue('TaxonomicClassificationCode', value);
    }
}
