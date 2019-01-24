import { doGet, doDelete, doPut, doPost } from '../api/utils';
import { DOCTOR_TYPE } from '../constants/actionReducerConstants';
import { URI } from '../constants';

// ================ For Update State ====================
export function updateState(payload) {
    return {
        type: DOCTOR_TYPE.UPDATE_STATE,
        payload
    };
};

// ================ For Search Doctor ===================
export function findDoctors() {
    return (dispatch, getState) => {
        const { searchDetails } = getState().doctorState;
        const searchParams = {
            "searchQuery": searchDetails.searchQuery,
            "location": searchDetails.location,
            "pincode": searchDetails.pincode,
        }
        dispatch({
            type: USER_TYPE.LOGIN_USER
        });

        doPost(`${URI.findDoctors}`, searchParams, dispatch)
            .then(result => dispatch(findDoctorsSuccess(result)))
            .catch(error => dispatch(findDoctorsFailure(error)));
    };
}

export function findDoctorsSuccess(payload) {
    return {
        type: USER_TYPE.LOGIN_USER_SUCCESS,
        payload,
    };
}

export function findDoctorsFailure(error) {
    return {
        type: USER_TYPE.LOGIN_USER_FAILURE,
        error,
    };
}