import { createReducer } from './utils';
import { COMMON_TYPE } from '../constants/actionReducerConstants';

const initialState = {
    selectedBTN: 'Specialities',
    specialitylist: [],
    hospitallist: [],
    countries: [],
    doctorslist: [],
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
    [COMMON_TYPE.UPDATE_STATE]: (_, action) => (action.payload),

    [COMMON_TYPE.GET_SPECIALITIES]: () => {
        return {
            specialitylist:[],
            loading: true,
        };
    },
    [COMMON_TYPE.GET_SPECIALITIES_SUCCESS]: (state, action) => {
        const specialitylist = action.payload;
        // console.log(action.payload);

        return {
            specialitylist,
            loading: false,
        };
    },
    [COMMON_TYPE.GET_SPECIALITIES_FAILUTE]: (_, action) => {
        return {
            loading: false,
        };
    },

    [COMMON_TYPE.GET_HOSPITALS]: () => {
        return {
            hospitallist: [],
            loading: true,
        };
    },
    [COMMON_TYPE.GET_HOSPITALS_SUCCESS]: (state, action) => {
        const hospitallist = action.payload;
        //console.log(action.payload);

        return {
            hospitallist,
            loading: false,
        };
    },
    [COMMON_TYPE.GET_HOSPITALS_FAILUTE]: (_, action) => {
        return {
            loading: false,
        };
    },
    //////////////Countries//////////////////////

    [COMMON_TYPE.GET_COUNTRIES]: () => {
        return {
            countries: [],
            loading: true,
        };
    },
    [COMMON_TYPE.GET_COUNTRIES_SUCCESS]: (state, action) => {
        const countries = action.payload;
        //console.log(action.payload);
        return {
            countries,
            loading: false,
        };
    },
    [COMMON_TYPE.GET_COUNTRIES_FAILUTE]: (_, action) => {
        return {
            loading: false,
        };
    },
};

export default createReducer(initialState, handlers);