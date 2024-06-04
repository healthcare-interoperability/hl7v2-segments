import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { SPS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { NA } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { SN } from '@healthcare-interoperability/hl7v2-datatypes';

export class SAC extends Segment {
    static components = {
        ExternalAccessionIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AccessionIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrimaryParentContainerIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Primary: { aliasOf: 'PrimaryParentContainerIdentifier' },
        EquipmentContainerIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecimenSource: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: SPS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RegistrationDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerStatus: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CarrierType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CarrierIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PositionInCarrier: {
            defaultDataType: NA,
            dataTypes: [{ dataType: NA, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TrayTypeSac: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TrayIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PositionInTray: {
            defaultDataType: NA,
            dataTypes: [{ dataType: NA, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Location: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 15,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ContainerHeight: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerDiameter: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 17,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BarrierDelta: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 18,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        BottomDelta: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 19,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerHeightDiameterDeltaUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 20,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ContainerVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 21,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AvailableSpecimenVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 22,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AvailableVolume: { aliasOf: 'AvailableSpecimenVolume' },
        InitialSpecimenVolume: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 23,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VolumeUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 24,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SeparatorType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 25,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CapType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 26,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Additive: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4'] },
            ],
            position: 27,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecimenComponent: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 28,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        DilutionFactor: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 29,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Treatment: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 30,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Temperature: {
            defaultDataType: SN,
            dataTypes: [{ dataType: SN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 31,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        HemolysisIndex: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 32,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        HemolysisIndexUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 33,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LipemiaIndex: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 34,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        LipemiaIndexUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 35,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IcterusIndex: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 36,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IcterusIndexUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 37,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FibrinIndex: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 38,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        FibrinIndexUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 39,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SystemInducedContaminants: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 40,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        DrugInterference: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 41,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        ArtificialBlood: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 42,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SpecialHandlingCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4'] },
            ],
            position: 43,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        SpecialHandlingConsiderations: { aliasOf: 'SpecialHandlingCode' },
        OtherEnvironmentalFactors: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 44,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'ExternalAccessionIdentifier',
        'AccessionIdentifier',
        'ContainerIdentifier',
        'PrimaryParentContainerIdentifier',
        'EquipmentContainerIdentifier',
        'SpecimenSource',
        'RegistrationDateTime',
        'ContainerStatus',
        'CarrierType',
        'CarrierIdentifier',
        'PositionInCarrier',
        'TrayTypeSac',
        'TrayIdentifier',
        'PositionInTray',
        'Location',
        'ContainerHeight',
        'ContainerDiameter',
        'BarrierDelta',
        'BottomDelta',
        'ContainerHeightDiameterDeltaUnits',
        'ContainerVolume',
        'AvailableSpecimenVolume',
        'InitialSpecimenVolume',
        'VolumeUnits',
        'SeparatorType',
        'CapType',
        'Additive',
        'SpecimenComponent',
        'DilutionFactor',
        'Treatment',
        'Temperature',
        'HemolysisIndex',
        'HemolysisIndexUnits',
        'LipemiaIndex',
        'LipemiaIndexUnits',
        'IcterusIndex',
        'IcterusIndexUnits',
        'FibrinIndex',
        'FibrinIndexUnits',
        'SystemInducedContaminants',
        'DrugInterference',
        'ArtificialBlood',
        'SpecialHandlingCode',
        'OtherEnvironmentalFactors',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('SAC');
        this.setValues(values);
    }

    get ExternalAccessionIdentifier() {
        return this.getComponent('ExternalAccessionIdentifier');
    }

    set ExternalAccessionIdentifier(value) {
        this.setComponentValue('ExternalAccessionIdentifier', value);
    }

    get AccessionIdentifier() {
        return this.getComponent('AccessionIdentifier');
    }

    set AccessionIdentifier(value) {
        this.setComponentValue('AccessionIdentifier', value);
    }

    get ContainerIdentifier() {
        return this.getComponent('ContainerIdentifier');
    }

    set ContainerIdentifier(value) {
        this.setComponentValue('ContainerIdentifier', value);
    }

    get PrimaryParentContainerIdentifier() {
        return this.getComponent('PrimaryParentContainerIdentifier');
    }

    set PrimaryParentContainerIdentifier(value) {
        this.setComponentValue('PrimaryParentContainerIdentifier', value);
    }

    get Primary() {
        return this.getComponent('PrimaryParentContainerIdentifier');
    }

    set Primary(value) {
        this.setComponentValue('PrimaryParentContainerIdentifier', value);
    }

    get EquipmentContainerIdentifier() {
        return this.getComponent('EquipmentContainerIdentifier');
    }

    set EquipmentContainerIdentifier(value) {
        this.setComponentValue('EquipmentContainerIdentifier', value);
    }

    get SpecimenSource() {
        return this.getComponent('SpecimenSource');
    }

    set SpecimenSource(value) {
        this.setComponentValue('SpecimenSource', value);
    }

    get RegistrationDateTime() {
        return this.getComponent('RegistrationDateTime');
    }

    set RegistrationDateTime(value) {
        this.setComponentValue('RegistrationDateTime', value);
    }

    get ContainerStatus() {
        return this.getComponent('ContainerStatus');
    }

    set ContainerStatus(value) {
        this.setComponentValue('ContainerStatus', value);
    }

    get CarrierType() {
        return this.getComponent('CarrierType');
    }

    set CarrierType(value) {
        this.setComponentValue('CarrierType', value);
    }

    get CarrierIdentifier() {
        return this.getComponent('CarrierIdentifier');
    }

    set CarrierIdentifier(value) {
        this.setComponentValue('CarrierIdentifier', value);
    }

    get PositionInCarrier() {
        return this.getComponent('PositionInCarrier');
    }

    set PositionInCarrier(value) {
        this.setComponentValue('PositionInCarrier', value);
    }

    get TrayTypeSac() {
        return this.getComponent('TrayTypeSac');
    }

    set TrayTypeSac(value) {
        this.setComponentValue('TrayTypeSac', value);
    }

    get TrayIdentifier() {
        return this.getComponent('TrayIdentifier');
    }

    set TrayIdentifier(value) {
        this.setComponentValue('TrayIdentifier', value);
    }

    get PositionInTray() {
        return this.getComponent('PositionInTray');
    }

    set PositionInTray(value) {
        this.setComponentValue('PositionInTray', value);
    }

    get Location() {
        return this.getComponent('Location');
    }

    set Location(value) {
        this.setComponentValue('Location', value);
    }

    get ContainerHeight() {
        return this.getComponent('ContainerHeight');
    }

    set ContainerHeight(value) {
        this.setComponentValue('ContainerHeight', value);
    }

    get ContainerDiameter() {
        return this.getComponent('ContainerDiameter');
    }

    set ContainerDiameter(value) {
        this.setComponentValue('ContainerDiameter', value);
    }

    get BarrierDelta() {
        return this.getComponent('BarrierDelta');
    }

    set BarrierDelta(value) {
        this.setComponentValue('BarrierDelta', value);
    }

    get BottomDelta() {
        return this.getComponent('BottomDelta');
    }

    set BottomDelta(value) {
        this.setComponentValue('BottomDelta', value);
    }

    get ContainerHeightDiameterDeltaUnits() {
        return this.getComponent('ContainerHeightDiameterDeltaUnits');
    }

    set ContainerHeightDiameterDeltaUnits(value) {
        this.setComponentValue('ContainerHeightDiameterDeltaUnits', value);
    }

    get ContainerVolume() {
        return this.getComponent('ContainerVolume');
    }

    set ContainerVolume(value) {
        this.setComponentValue('ContainerVolume', value);
    }

    get AvailableSpecimenVolume() {
        return this.getComponent('AvailableSpecimenVolume');
    }

    set AvailableSpecimenVolume(value) {
        this.setComponentValue('AvailableSpecimenVolume', value);
    }

    get AvailableVolume() {
        return this.getComponent('AvailableSpecimenVolume');
    }

    set AvailableVolume(value) {
        this.setComponentValue('AvailableSpecimenVolume', value);
    }

    get InitialSpecimenVolume() {
        return this.getComponent('InitialSpecimenVolume');
    }

    set InitialSpecimenVolume(value) {
        this.setComponentValue('InitialSpecimenVolume', value);
    }

    get VolumeUnits() {
        return this.getComponent('VolumeUnits');
    }

    set VolumeUnits(value) {
        this.setComponentValue('VolumeUnits', value);
    }

    get SeparatorType() {
        return this.getComponent('SeparatorType');
    }

    set SeparatorType(value) {
        this.setComponentValue('SeparatorType', value);
    }

    get CapType() {
        return this.getComponent('CapType');
    }

    set CapType(value) {
        this.setComponentValue('CapType', value);
    }

    get Additive() {
        return this.getComponent('Additive');
    }

    set Additive(value) {
        this.setComponentValue('Additive', value);
    }

    get SpecimenComponent() {
        return this.getComponent('SpecimenComponent');
    }

    set SpecimenComponent(value) {
        this.setComponentValue('SpecimenComponent', value);
    }

    get DilutionFactor() {
        return this.getComponent('DilutionFactor');
    }

    set DilutionFactor(value) {
        this.setComponentValue('DilutionFactor', value);
    }

    get Treatment() {
        return this.getComponent('Treatment');
    }

    set Treatment(value) {
        this.setComponentValue('Treatment', value);
    }

    get Temperature() {
        return this.getComponent('Temperature');
    }

    set Temperature(value) {
        this.setComponentValue('Temperature', value);
    }

    get HemolysisIndex() {
        return this.getComponent('HemolysisIndex');
    }

    set HemolysisIndex(value) {
        this.setComponentValue('HemolysisIndex', value);
    }

    get HemolysisIndexUnits() {
        return this.getComponent('HemolysisIndexUnits');
    }

    set HemolysisIndexUnits(value) {
        this.setComponentValue('HemolysisIndexUnits', value);
    }

    get LipemiaIndex() {
        return this.getComponent('LipemiaIndex');
    }

    set LipemiaIndex(value) {
        this.setComponentValue('LipemiaIndex', value);
    }

    get LipemiaIndexUnits() {
        return this.getComponent('LipemiaIndexUnits');
    }

    set LipemiaIndexUnits(value) {
        this.setComponentValue('LipemiaIndexUnits', value);
    }

    get IcterusIndex() {
        return this.getComponent('IcterusIndex');
    }

    set IcterusIndex(value) {
        this.setComponentValue('IcterusIndex', value);
    }

    get IcterusIndexUnits() {
        return this.getComponent('IcterusIndexUnits');
    }

    set IcterusIndexUnits(value) {
        this.setComponentValue('IcterusIndexUnits', value);
    }

    get FibrinIndex() {
        return this.getComponent('FibrinIndex');
    }

    set FibrinIndex(value) {
        this.setComponentValue('FibrinIndex', value);
    }

    get FibrinIndexUnits() {
        return this.getComponent('FibrinIndexUnits');
    }

    set FibrinIndexUnits(value) {
        this.setComponentValue('FibrinIndexUnits', value);
    }

    get SystemInducedContaminants() {
        return this.getComponent('SystemInducedContaminants');
    }

    set SystemInducedContaminants(value) {
        this.setComponentValue('SystemInducedContaminants', value);
    }

    get DrugInterference() {
        return this.getComponent('DrugInterference');
    }

    set DrugInterference(value) {
        this.setComponentValue('DrugInterference', value);
    }

    get ArtificialBlood() {
        return this.getComponent('ArtificialBlood');
    }

    set ArtificialBlood(value) {
        this.setComponentValue('ArtificialBlood', value);
    }

    get SpecialHandlingCode() {
        return this.getComponent('SpecialHandlingCode');
    }

    set SpecialHandlingCode(value) {
        this.setComponentValue('SpecialHandlingCode', value);
    }

    get SpecialHandlingConsiderations() {
        return this.getComponent('SpecialHandlingCode');
    }

    set SpecialHandlingConsiderations(value) {
        this.setComponentValue('SpecialHandlingCode', value);
    }

    get OtherEnvironmentalFactors() {
        return this.getComponent('OtherEnvironmentalFactors');
    }

    set OtherEnvironmentalFactors(value) {
        this.setComponentValue('OtherEnvironmentalFactors', value);
    }
}
