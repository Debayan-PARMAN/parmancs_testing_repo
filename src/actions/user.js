import { doGet, doDelete, doPut, doPost } from '../api/utils';
import { USER_TYPE } from '../constants/actionReducerConstants';
import { URI } from '../constants';
 
export function updateState(payload) {
  return {
    type: USER_TYPE.UPDATE_STATE,
    payload
  };
}

export function userLogin(){
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

    doPost(`${URI.login}`,loginParams, dispatch)
      .then(result => dispatch(userLoginSuccess(result)))
      .catch(error => dispatch(userLoginFailure(error)));
  };
}

export function userLoginSuccess(payload) {
  // console.log(payload);

  return {
    type: USER_TYPE.LOGIN_USER_SUCCESS,
    payload,
  };
}

export function userLoginFailure(error) {
  // console.log(error);

  return {
    type: USER_TYPE.LOGIN_USER_FAILURE,
    error,
  };
}