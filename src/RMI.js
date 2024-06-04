import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { DTM } from '@healthcare-interoperability/hl7v2-datatypes';
import { TS } from '@healthcare-interoperability/hl7v2-datatypes';

export class RMI extends Segment {
    static components = {
        RiskManagementIncidentCode: {
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
        DateTimeIncident: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        IncidentTypeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
    };

    static componentsByIndex = ['', 'RiskManagementIncidentCode', 'DateTimeIncident', 'IncidentTypeCode'];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('RMI');
        this.setValues(values);
    }

    get RiskManagementIncidentCode() {
        return this.getComponent('RiskManagementIncidentCode');
    }

    set RiskManagementIncidentCode(value) {
        this.setComponentValue('RiskManagementIncidentCode', value);
    }

    get DateTimeIncident() {
        return this.getComponent('DateTimeIncident');
    }

    set DateTimeIncident(value) {
        this.setComponentValue('DateTimeIncident', value);
    }

    get IncidentTypeCode() {
        return this.getComponent('IncidentTypeCode');
    }

    set IncidentTypeCode(value) {
        this.setComponentValue('IncidentTypeCode', value);
    }
}
