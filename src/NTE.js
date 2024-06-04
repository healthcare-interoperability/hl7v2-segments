import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { FT } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XCN } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';

export class NTE extends Segment {
    static components = {
        SetIdNte: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SetIdNotesAndComments: { aliasOf: 'SetIdNte' },
        SourceOfComment: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Comment: {
            defaultDataType: FT,
            dataTypes: [{ dataType: FT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
        CommentType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EnteredBy: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EnteredDateTime: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        EffectiveStartDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ExpirationDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'SetIdNte', 'SourceOfComment', 'Comment', 'CommentType', 'EnteredBy', 'EnteredDateTime', 'EffectiveStartDate', 'ExpirationDate'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('NTE');
        this.setValues(values);
    }

    get SetIdNte() {
        return this.getComponent('SetIdNte');
    }

    set SetIdNte(value) {
        this.setComponentValue('SetIdNte', value);
    }

    get SetIdNotesAndComments() {
        return this.getComponent('SetIdNte');
    }

    set SetIdNotesAndComments(value) {
        this.setComponentValue('SetIdNte', value);
    }

    get SourceOfComment() {
        return this.getComponent('SourceOfComment');
    }

    set SourceOfComment(value) {
        this.setComponentValue('SourceOfComment', value);
    }

    get Comment() {
        return this.getComponent('Comment');
    }

    set Comment(value) {
        this.setComponentValue('Comment', value);
    }

    get CommentType() {
        return this.getComponent('CommentType');
    }

    set CommentType(value) {
        this.setComponentValue('CommentType', value);
    }

    get EnteredBy() {
        return this.getComponent('EnteredBy');
    }

    set EnteredBy(value) {
        this.setComponentValue('EnteredBy', value);
    }

    get EnteredDateTime() {
        return this.getComponent('EnteredDateTime');
    }

    set EnteredDateTime(value) {
        this.setComponentValue('EnteredDateTime', value);
    }

    get EffectiveStartDate() {
        return this.getComponent('EffectiveStartDate');
    }

    set EffectiveStartDate(value) {
        this.setComponentValue('EffectiveStartDate', value);
    }

    get ExpirationDate() {
        return this.getComponent('ExpirationDate');
    }

    set ExpirationDate(value) {
        this.setComponentValue('ExpirationDate', value);
    }
}
