import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { QSC } from '@healthcare-interoperability/hl7v2-datatypes';

export class VTQ extends Segment {
    static components = {
        QueryTag: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        QueryResponseFormatCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VtQueryName: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        VirtualTableName: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SelectionCriteria: {
            defaultDataType: QSC,
            dataTypes: [{ dataType: QSC, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] }],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'QueryTag', 'QueryResponseFormatCode', 'VtQueryName', 'VirtualTableName', 'SelectionCriteria'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('VTQ');
        this.setValues(values);
    }

    get QueryTag() {
        return this.getComponent('QueryTag');
    }

    set QueryTag(value) {
        this.setComponentValue('QueryTag', value);
    }

    get QueryResponseFormatCode() {
        return this.getComponent('QueryResponseFormatCode');
    }

    set QueryResponseFormatCode(value) {
        this.setComponentValue('QueryResponseFormatCode', value);
    }

    get VtQueryName() {
        return this.getComponent('VtQueryName');
    }

    set VtQueryName(value) {
        this.setComponentValue('VtQueryName', value);
    }

    get VirtualTableName() {
        return this.getComponent('VirtualTableName');
    }

    set VirtualTableName(value) {
        this.setComponentValue('VirtualTableName', value);
    }

    get SelectionCriteria() {
        return this.getComponent('SelectionCriteria');
    }

    set SelectionCriteria(value) {
        this.setComponentValue('SelectionCriteria', value);
    }
}
