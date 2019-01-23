import { doGet, doDelete, doPut, doPost } from '../api/utils';
import { USER_TYPE } from '../constants/actionReducerConstants';
import { URI } from '../constants';

// ================ For Update State ====================
export function updateState(payload) {
  return {
    type: USER_TYPE.UPDATE_STATE,
    payload
  };
}

// ================ For Login ====================
export function userLogin() {
  return (dispatch, getState) => {

    const { userDetails } = getState().userState;
    const loginParams = {
      // "userName": 'debayan.sen@parmancs.com',
      "userName": userDetails.username,
      // "userName": 'mystrio7',
      "password": userDetails.password,
      "roleName": "INDIVIDUAL",
    }
    dispatch({
      type: USER_TYPE.LOGIN_USER
    });

    doPost(`${URI.login}`, loginParams, dispatch)
      .then(result => dispatch(userLoginSuccess(result)))
      .catch(error => dispatch(userLoginFailure(error)));
  };
}

export function userLoginSuccess(payload) {
  return {
    type: USER_TYPE.LOGIN_USER_SUCCESS,
    payload,
  };
}

export function userLoginFailure(error) {
  return {
    type: USER_TYPE.LOGIN_USER_FAILURE,
    error,
  };
}

// ================ For OTP ====================
export function requestOTP() {
  return (dispatch, getState) => {
    const { userDetails, otpActions } = getState().userState;
    const otpParams = {
      "contactNo": userDetails.contactNo,
      "smsActionType": otpActions.sendActionType,
    }
    dispatch({
      type: USER_TYPE.SEND_OTP
    });
    console.log(otpParams);
    doPost(`${URI.otp}`, otpParams, dispatch)
      .then(result => dispatch(requestOTPSuccess(result)))
      .catch(error => dispatch(requestOTPFailure(error)));
  };
};

export function requestOTPSuccess(payload) {
  return {
    type: USER_TYPE.SEND_OTP_SUCCESS,
    payload,
  };
}

export function requestOTPFailure(error) {
  return {
    type: USER_TYPE.SEND_OTP_FAILURE,
    error,
  };
}

export function verifyOTP() {
  return (dispatch, getState) => {
    const { userDetails, otpActions } = getState().userState;
    const otpParams = {
      "contactNo": userDetails.contactNo,
      "smsActionType": otpActions.verifyActionType,
      "otp": userDetails.userOTP,
    }
    dispatch({
      type: USER_TYPE.VERIFY_OTP
    });
    console.log(otpParams);
    doPost(`${URI.otp}`, otpParams, dispatch)
      .then(result => dispatch(verifyOTPSuccess(result)))
      .catch(error => dispatch(verifyOTPFailure(error)));
  };
};

export function verifyOTPSuccess(payload) {
  return {
    type: USER_TYPE.VERIFY_OTP_SUCCESS,
    payload,
  };
}

export function verifyOTPFailure(error) {
  return {
    type: USER_TYPE.VERIFY_OTP_FAILURE,
    error,
  };
}

// ================ For Registation ====================
export function userRegistration() {
  return (dispatch, getState) => {
    const { userDetails } = getState().userState;
    const signUpParams = {
      "contactNo": userDetails.contactNo,
      "name": userDetails.name,
      "password": userDetails.password,
      "registrationProvider": userDetails.registrationProvider,
      "roleName": "INDIVIDUAL",
    }
    dispatch({
      type: USER_TYPE.REGISTER_USER
    });

    doPost(`${URI.signup}`, signUpParams, dispatch)
      .then(result => dispatch(userRegistrationSuccess(result)))
      .catch(error => dispatch(userRegistrationFailure(error)));
  };
}

export function userRegistrationSuccess(payload) {
  return {
    type: USER_TYPE.REGISTER_USER_SUCCESS,
    payload,
  };
}

export function userRegistrationFailure(error) {
  return {
    type: USER_TYPE.REGISTER_USER_FAILURE,
    error,
  };
}
// ================ For UserProfile ====================