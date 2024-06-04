import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { EI } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';
import { XTN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DR } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';

export class REL extends Segment {
    static components = {
        SetIdRel: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RelationshipType: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ThisRelationshipInstanceIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SourceInformationInstanceIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        TargetInformationInstanceIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AssertingEntityInstanceId: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AssertingPerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AssertingOrganization: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AssertorAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 9,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AssertorContact: {
            defaultDataType: XTN,
            dataTypes: [{ dataType: XTN, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 10,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AssertionDateRange: {
            defaultDataType: DR,
            dataTypes: [{ dataType: DR, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 11,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        NegationIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 12,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        CertaintyOfRelationship: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 13,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PriorityNo: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 14,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        PrioritySequenceNoRelPreferenceForConsideration: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 15,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SeparabilityIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.6', '2.7', '2.7.1'] }],
            position: 16,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdRel',
        'RelationshipType',
        'ThisRelationshipInstanceIdentifier',
        'SourceInformationInstanceIdentifier',
        'TargetInformationInstanceIdentifier',
        'AssertingEntityInstanceId',
        'AssertingPerson',
        'AssertingOrganization',
        'AssertorAddress',
        'AssertorContact',
        'AssertionDateRange',
        'NegationIndicator',
        'CertaintyOfRelationship',
        'PriorityNo',
        'PrioritySequenceNoRelPreferenceForConsideration',
        'SeparabilityIndicator',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('REL');
        this.setValues(values);
    }

    get SetIdRel() {
        return this.getComponent('SetIdRel');
    }

    set SetIdRel(value) {
        this.setComponentValue('SetIdRel', value);
    }

    get RelationshipType() {
        return this.getComponent('RelationshipType');
    }

    set RelationshipType(value) {
        this.setComponentValue('RelationshipType', value);
    }

    get ThisRelationshipInstanceIdentifier() {
        return this.getComponent('ThisRelationshipInstanceIdentifier');
    }

    set ThisRelationshipInstanceIdentifier(value) {
        this.setComponentValue('ThisRelationshipInstanceIdentifier', value);
    }

    get SourceInformationInstanceIdentifier() {
        return this.getComponent('SourceInformationInstanceIdentifier');
    }

    set SourceInformationInstanceIdentifier(value) {
        this.setComponentValue('SourceInformationInstanceIdentifier', value);
    }

    get TargetInformationInstanceIdentifier() {
        return this.getComponent('TargetInformationInstanceIdentifier');
    }

    set TargetInformationInstanceIdentifier(value) {
        this.setComponentValue('TargetInformationInstanceIdentifier', value);
    }

    get AssertingEntityInstanceId() {
        return this.getComponent('AssertingEntityInstanceId');
    }

    set AssertingEntityInstanceId(value) {
        this.setComponentValue('AssertingEntityInstanceId', value);
    }

    get AssertingPerson() {
        return this.getComponent('AssertingPerson');
    }

    set AssertingPerson(value) {
        this.setComponentValue('AssertingPerson', value);
    }

    get AssertingOrganization() {
        return this.getComponent('AssertingOrganization');
    }

    set AssertingOrganization(value) {
        this.setComponentValue('AssertingOrganization', value);
    }

    get AssertorAddress() {
        return this.getComponent('AssertorAddress');
    }

    set AssertorAddress(value) {
        this.setComponentValue('AssertorAddress', value);
    }

    get AssertorContact() {
        return this.getComponent('AssertorContact');
    }

    set AssertorContact(value) {
        this.setComponentValue('AssertorContact', value);
    }

    get AssertionDateRange() {
        return this.getComponent('AssertionDateRange');
    }

    set AssertionDateRange(value) {
        this.setComponentValue('AssertionDateRange', value);
    }

    get NegationIndicator() {
        return this.getComponent('NegationIndicator');
    }

    set NegationIndicator(value) {
        this.setComponentValue('NegationIndicator', value);
    }

    get CertaintyOfRelationship() {
        return this.getComponent('CertaintyOfRelationship');
    }

    set CertaintyOfRelationship(value) {
        this.setComponentValue('CertaintyOfRelationship', value);
    }

    get PriorityNo() {
        return this.getComponent('PriorityNo');
    }

    set PriorityNo(value) {
        this.setComponentValue('PriorityNo', value);
    }

    get PrioritySequenceNoRelPreferenceForConsideration() {
        return this.getComponent('PrioritySequenceNoRelPreferenceForConsideration');
    }

    set PrioritySequenceNoRelPreferenceForConsideration(value) {
        this.setComponentValue('PrioritySequenceNoRelPreferenceForConsideration', value);
    }

    get SeparabilityIndicator() {
        return this.getComponent('SeparabilityIndicator');
    }

    set SeparabilityIndicator(value) {
        this.setComponentValue('SeparabilityIndicator', value);
    }
}
