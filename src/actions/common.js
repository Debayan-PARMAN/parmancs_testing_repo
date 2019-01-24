import { doGet, doDelete, doPut, doPost } from '../api/utils';
import { COMMON_TYPE } from '../constants/actionReducerConstants';
import { URI } from '../constants';

// ================ For Update State ====================
export function updateState(payload) {
    return {
        type: COMMON_TYPE.UPDATE_STATE,
        payload
    };
};

// ================ Get Specialities ===================
export function getSpecialities() {
    return (dispatch) => {
        dispatch({
            type: COMMON_TYPE.GET_SPECIALITIES
        });
        doGet(`${URI.getSpecialities}`, dispatch)
            .then(result => dispatch(getSpecialitiesSuccess(result)))
            .catch(error => dispatch(getSpecialitiesFailure(error)));
    };
};

export function getSpecialitiesSuccess(payload) {
    return {
        type: COMMON_TYPE.GET_SPECIALITIES_SUCCESS,
        payload,
    };
};

export function getSpecialitiesFailure(error) {
    return {
        type: COMMON_TYPE.GET_SPECIALITIES_FAILURE,
        error,
    };
};

// ================ Get Hospitals ===================
export function getHospitals() {
    return (dispatch) => {
        dispatch({
            type: COMMON_TYPE.GET_HOSPITALS
        });
        doGet(`${URI.getHospitals}`, dispatch)
            .then(result => dispatch(getHospitalsSuccess(result)))
            .catch(error => dispatch(getHospitalsFailure(error)));
    };
};

export function getHospitalsSuccess(payload) {
    return {
        type: COMMON_TYPE.GET_HOSPITALS_SUCCESS,
        payload,
    };
};

export function getHospitalsFailure(error) {
    return {
        type: COMMON_TYPE.GET_HOSPITALS_FAILURE,
        error,
    };
};

// ================ Get Countries ===================
export function getCountries() {
    return (dispatch) => {
        dispatch({
            type: COMMON_TYPE.GET_COUNTRIES
        });
        doGet(`${URI.getCountries}`, dispatch)
            .then(result => dispatch(getCountriesSuccess(result)))
            .catch(error => dispatch(getCountriesFailure(error)));
    };
};

export function getCountriesSuccess(payload) {
    return {
        type: COMMON_TYPE.GET_COUNTRIES_SUCCESS,
        payload,
    };
};

export function getCountriesFailure(error) {
    return {
        type: COMMON_TYPE.GET_COUNTRIES_FAILURE,
        error,
    };
};