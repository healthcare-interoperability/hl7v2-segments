import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { NM } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { ID } from '@healthcare-interoperability/hl7v2-datatypes';
import { ST } from '@healthcare-interoperability/hl7v2-datatypes';
import { TQ } from '@healthcare-interoperability/hl7v2-datatypes';
import { TX } from '@healthcare-interoperability/hl7v2-datatypes';

export class ECD extends Segment {
    static components = {
        ReferenceCommandNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RemoteControlCommand: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        ResponseRequired: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        RequestedCompletionTime: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: TQ, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        Parameters: {
            defaultDataType: TX,
            dataTypes: [
                { dataType: TX, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.4'] },
            ],
            position: 5,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'ReferenceCommandNumber', 'RemoteControlCommand', 'ResponseRequired', 'RequestedCompletionTime', 'Parameters'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('ECD');
        this.setValues(values);
    }

    get ReferenceCommandNumber() {
        return this.getComponent('ReferenceCommandNumber');
    }

    set ReferenceCommandNumber(value) {
        this.setComponentValue('ReferenceCommandNumber', value);
    }

    get RemoteControlCommand() {
        return this.getComponent('RemoteControlCommand');
    }

    set RemoteControlCommand(value) {
        this.setComponentValue('RemoteControlCommand', value);
    }

    get ResponseRequired() {
        return this.getComponent('ResponseRequired');
    }

    set ResponseRequired(value) {
        this.setComponentValue('ResponseRequired', value);
    }

    get RequestedCompletionTime() {
        return this.getComponent('RequestedCompletionTime');
    }

    set RequestedCompletionTime(value) {
        this.setComponentValue('RequestedCompletionTime', value);
    }

    get Parameters() {
        return this.getComponent('Parameters');
    }

    set Parameters(value) {
        this.setComponentValue('Parameters', value);
    }
}
