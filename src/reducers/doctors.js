import { createReducer } from './utils';
import { DOCTOR_TYPE } from '../constants/actionReducerConstants';

const initialState = {
    // specialitylist: [],
    specialitylist: [
        {
            "createdDate": "2018-11-30T16:32:37",
            "modifiedDate": "2018-11-30T16:32:37",
            "createdBy": "system",
            "modifiedBy": "system",
            "specializationPk": 1,
            "specialization": "Allergist",
            "alternateName": "Immunologist",
            "type": "M",
            "subSpecializationList": []
        },
        {
            "createdDate": "2018-11-30T16:32:37",
            "modifiedDate": "2018-11-30T16:32:37",
            "createdBy": "system",
            "modifiedBy": "system",
            "specializationPk": 2,
            "specialization": "Andrologist",
            "alternateName": "",
            "type": "M",
            "subSpecializationList": []
        },
        {
            "createdDate": "2018-11-30T16:32:37",
            "modifiedDate": "2018-11-30T16:32:37",
            "createdBy": "system",
            "modifiedBy": "system",
            "specializationPk": 3,
            "specialization": "Anesthesiologists",
            "alternateName": "",
            "type": "M",
            "subSpecializationList": []
        },
        {
            "createdDate": "2018-11-30T16:32:37",
            "modifiedDate": "2018-11-30T16:32:37",
            "createdBy": "system",
            "modifiedBy": "system",
            "specializationPk": 4,
            "specialization": "Ayurvedic Practioner",
            "alternateName": "",
            "type": "M",
            "subSpecializationList": []
        },
        {
            "createdDate": "2018-11-30T16:32:37",
            "modifiedDate": "2018-11-30T16:32:37",
            "createdBy": "system",
            "modifiedBy": "system",
            "specializationPk": 6,
            "specialization": "Dermatologist",
            "alternateName": "",
            "type": "M",
            "subSpecializationList": []
        },
    ],
    hospitallist: [],
    doctorslist: [],
    searchDetails: {
        searchQuery:'',
        location:'',
        pincode:''
    },
    doctorDetails: {
        doctorId: '',
        registrationProvider: "SBIS",
        roleName: "INDIVIDUAL",
        username: '',
        password: "",
        token: '',
        roleName: '',
        email: '',
        contactNo: '',
        medicalHistory: {},
        address: [],
        orders: [],
        userPicSrc: '',
        doctorName: '',
        doctorResgistrationNumber: '',
        password: '',
        doctorAddress: [],
    },
    loading: false,
    showPassword: true, // toggle between password/otp
    responseTriggerred: false,
    successMessage: {}, // get success details for an api
    failureMessage: {}, // get failure details for an api

};

const handlers = {
    [DOCTOR_TYPE.UPDATE_STATE]: (_, action) => (action.payload),

    [DOCTOR_TYPE.SEARCH_DOCTORS]: () => {
        return {
            successMessage: {},
            failureMessage: {},
            loading: true,
            responseTriggerred: false,
        };
    },
    [DOCTOR_TYPE.SEARCH_DOCTORS_SUCCESS]: (state, action) => {
        const { userDetails } = state;
        let successMessage = {};
        let failureMessage = {};
        // if (action.payload.token) {
        //     successMessage = `${action.payload.username} has successfully signed in.`;
        //     userDetails.token = action.payload.token;
        // } else {
        //     failureMessage = action.payload.message;
        // }

        return {
            successMessage,
            userDetails,
            failureMessage,
            loading: false,
            responseTriggerred: true,
        };
    },
    [DOCTOR_TYPE.SEARCH_DOCTORS_FAILUTE]: (_, action) => {
        return {
            loading: false,
            responseTriggerred: true,
        };
    }
};

export default createReducer(initialState, handlers);