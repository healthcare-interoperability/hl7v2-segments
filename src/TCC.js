import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { SPS } from '@healthcare-interoperability/hl7v2-datatypes';
import { SN } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';

export class TCC extends Segment {
    static components = {
        UniversalServiceIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EquipmentTestApplicationIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TestApplicationIdentifier: { aliasOf: 'EquipmentTestApplicationIdentifier' },
        SpecimenSource: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: SPS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AutoDilutionFactorDefault: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RerunDilutionFactorDefault: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PreDilutionFactorDefault: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EndogenousContentOfPreDilutionDiluent: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        InventoryLimitsWarningLevel: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AutomaticRerunAllowed: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AutomaticRepeatAllowed: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AutomaticReflexAllowed: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EquipmentDynamicRange: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Units: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ProcessingType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TestCriticality: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'UniversalServiceIdentifier',
        'EquipmentTestApplicationIdentifier',
        'SpecimenSource',
        'AutoDilutionFactorDefault',
        'RerunDilutionFactorDefault',
        'PreDilutionFactorDefault',
        'EndogenousContentOfPreDilutionDiluent',
        'InventoryLimitsWarningLevel',
        'AutomaticRerunAllowed',
        'AutomaticRepeatAllowed',
        'AutomaticReflexAllowed',
        'EquipmentDynamicRange',
        'Units',
        'ProcessingType',
        'TestCriticality',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('TCC');
        this.setValues(values);
    }

    get UniversalServiceIdentifier() {
        return this.getComponent('UniversalServiceIdentifier');
    }

    set UniversalServiceIdentifier(value) {
        this.setComponentValue('UniversalServiceIdentifier', value);
    }

    get EquipmentTestApplicationIdentifier() {
        return this.getComponent('EquipmentTestApplicationIdentifier');
    }

    set EquipmentTestApplicationIdentifier(value) {
        this.setComponentValue('EquipmentTestApplicationIdentifier', value);
    }

    get TestApplicationIdentifier() {
        return this.getComponent('EquipmentTestApplicationIdentifier');
    }

    set TestApplicationIdentifier(value) {
        this.setComponentValue('EquipmentTestApplicationIdentifier', value);
    }

    get SpecimenSource() {
        return this.getComponent('SpecimenSource');
    }

    set SpecimenSource(value) {
        this.setComponentValue('SpecimenSource', value);
    }

    get AutoDilutionFactorDefault() {
        return this.getComponent('AutoDilutionFactorDefault');
    }

    set AutoDilutionFactorDefault(value) {
        this.setComponentValue('AutoDilutionFactorDefault', value);
    }

    get RerunDilutionFactorDefault() {
        return this.getComponent('RerunDilutionFactorDefault');
    }

    set RerunDilutionFactorDefault(value) {
        this.setComponentValue('RerunDilutionFactorDefault', value);
    }

    get PreDilutionFactorDefault() {
        return this.getComponent('PreDilutionFactorDefault');
    }

    set PreDilutionFactorDefault(value) {
        this.setComponentValue('PreDilutionFactorDefault', value);
    }

    get EndogenousContentOfPreDilutionDiluent() {
        return this.getComponent('EndogenousContentOfPreDilutionDiluent');
    }

    set EndogenousContentOfPreDilutionDiluent(value) {
        this.setComponentValue('EndogenousContentOfPreDilutionDiluent', value);
    }

    get InventoryLimitsWarningLevel() {
        return this.getComponent('InventoryLimitsWarningLevel');
    }

    set InventoryLimitsWarningLevel(value) {
        this.setComponentValue('InventoryLimitsWarningLevel', value);
    }

    get AutomaticRerunAllowed() {
        return this.getComponent('AutomaticRerunAllowed');
    }

    set AutomaticRerunAllowed(value) {
        this.setComponentValue('AutomaticRerunAllowed', value);
    }

    get AutomaticRepeatAllowed() {
        return this.getComponent('AutomaticRepeatAllowed');
    }

    set AutomaticRepeatAllowed(value) {
        this.setComponentValue('AutomaticRepeatAllowed', value);
    }

    get AutomaticReflexAllowed() {
        return this.getComponent('AutomaticReflexAllowed');
    }

    set AutomaticReflexAllowed(value) {
        this.setComponentValue('AutomaticReflexAllowed', value);
    }

    get EquipmentDynamicRange() {
        return this.getComponent('EquipmentDynamicRange');
    }

    set EquipmentDynamicRange(value) {
        this.setComponentValue('EquipmentDynamicRange', value);
    }

    get Units() {
        return this.getComponent('Units');
    }

    set Units(value) {
        this.setComponentValue('Units', value);
    }

    get ProcessingType() {
        return this.getComponent('ProcessingType');
    }

    set ProcessingType(value) {
        this.setComponentValue('ProcessingType', value);
    }

    get TestCriticality() {
        return this.getComponent('TestCriticality');
    }

    set TestCriticality(value) {
        this.setComponentValue('TestCriticality', value);
    }
}
