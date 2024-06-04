import { Segment } from '@healthcare-interoperability/hl7v2-core';
import { SI } from '@healthcare-interoperability/hl7v2-datatypes';
import { CWE } from '@healthcare-interoperability/hl7v2-datatypes';
import { IS } from '@healthcare-interoperability/hl7v2-datatypes';
import { DR } from '@healthcare-interoperability/hl7v2-datatypes';
import { DT } from '@healthcare-interoperability/hl7v2-datatypes';
import { XON } from '@healthcare-interoperability/hl7v2-datatypes';
import { CE } from '@healthcare-interoperability/hl7v2-datatypes';
import { XAD } from '@healthcare-interoperability/hl7v2-datatypes';

export class EDU extends Segment {
    static components = {
        SetIdEdu: {
            defaultDataType: SI,
            dataTypes: [{ dataType: SI, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AcademicDegree: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AcademicDegreeProgramDateRange: {
            defaultDataType: DR,
            dataTypes: [{ dataType: DR, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AcademicDegreeProgramParticipationDateRange: {
            defaultDataType: DR,
            dataTypes: [{ dataType: DR, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        AcademicDegreeGrantedDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        School: {
            defaultDataType: XON,
            dataTypes: [{ dataType: XON, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SchoolTypeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
            ],
            position: 7,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        SchoolAddress: {
            defaultDataType: XAD,
            dataTypes: [{ dataType: XAD, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
            isArray: false,
            maxOccurence: 0,
            minOccurence: 1,
        },
        MajorFieldOfStudy: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 9,
            isArray: true,
            maxOccurence: 99999,
            minOccurence: 1,
        },
    };

    static componentsByIndex = [
        '',
        'SetIdEdu',
        'AcademicDegree',
        'AcademicDegreeProgramDateRange',
        'AcademicDegreeProgramParticipationDateRange',
        'AcademicDegreeGrantedDate',
        'School',
        'SchoolTypeCode',
        'SchoolAddress',
        'MajorFieldOfStudy',
    ];

    constructor(values, configs, isSubComponent = false) {
        super([], configs, isSubComponent);
        this.setSegmentType('EDU');
        this.setValues(values);
    }

    get SetIdEdu() {
        return this.getComponent('SetIdEdu');
    }

    set SetIdEdu(value) {
        this.setComponentValue('SetIdEdu', value);
    }

    get AcademicDegree() {
        return this.getComponent('AcademicDegree');
    }

    set AcademicDegree(value) {
        this.setComponentValue('AcademicDegree', value);
    }

    get AcademicDegreeProgramDateRange() {
        return this.getComponent('AcademicDegreeProgramDateRange');
    }

    set AcademicDegreeProgramDateRange(value) {
        this.setComponentValue('AcademicDegreeProgramDateRange', value);
    }

    get AcademicDegreeProgramParticipationDateRange() {
        return this.getComponent('AcademicDegreeProgramParticipationDateRange');
    }

    set AcademicDegreeProgramParticipationDateRange(value) {
        this.setComponentValue('AcademicDegreeProgramParticipationDateRange', value);
    }

    get AcademicDegreeGrantedDate() {
        return this.getComponent('AcademicDegreeGrantedDate');
    }

    set AcademicDegreeGrantedDate(value) {
        this.setComponentValue('AcademicDegreeGrantedDate', value);
    }

    get School() {
        return this.getComponent('School');
    }

    set School(value) {
        this.setComponentValue('School', value);
    }

    get SchoolTypeCode() {
        return this.getComponent('SchoolTypeCode');
    }

    set SchoolTypeCode(value) {
        this.setComponentValue('SchoolTypeCode', value);
    }

    get SchoolAddress() {
        return this.getComponent('SchoolAddress');
    }

    set SchoolAddress(value) {
        this.setComponentValue('SchoolAddress', value);
    }

    get MajorFieldOfStudy() {
        return this.getComponent('MajorFieldOfStudy');
    }

    set MajorFieldOfStudy(value) {
        this.setComponentValue('MajorFieldOfStudy', value);
    }
}
