import { createReducer } from './utils';
import { USER_TYPE } from '../constants/actionReducerConstants';

const initialState = {
  userDetails: {
    userId: '',
    registrationProvider: "SBIS",
    roleName: "INDIVIDUAL",
    username: '',
    password: "",
    token:'',
    roleName:'',
    email: '',
    contactNo: '',
    medicalHistory:{},
    address: [],
    orders:[],
    userPicSrc:'',
  },
  loading: false,
  showPassword: true, // toggle between password/otp
  responseTriggerred: false,
  successMessage: {}, // get success details for an api
  failureMessage: {}, // get failure details for an api

  doctorDetails:{
    doctorName:'',
    doctorResgistrationNumber:'',
    password:'',
    doctorAddress:[],
  },

};

const handlers = {
  [USER_TYPE.UPDATE_STATE]: (_, action) => (action.payload),
  [USER_TYPE.LOGIN_USER]:() => {
    // console.log(action)
    return {
      // userDetails,
      successMessage:{},
      failureMessage:{},
      loading:true,
      responseTriggerred: false,
    };
  },
  [USER_TYPE.LOGIN_USER_SUCCESS]: (state, action) => {
    const {userDetails} = state;
    let successMessage = {};
    let failureMessage = {};
    // console.log(action.payload.token);
    // console.log(userDetails);
    if(action.payload.token){
      successMessage = `${action.payload.username} has successfully signed in.`;
      userDetails.token = action.payload.token;
      //this.props.navigation.navigate('Home');
    } else {
      failureMessage = action.payload.message;
    }

    return {
      successMessage,
      userDetails,
      failureMessage,
      loading: false,
      responseTriggerred: true,
    };
  },
  [USER_TYPE.LOGIN_USER_FAILUTE]: (_, action) => {
    return {
      loading: false,
      responseTriggerred: true,
    };
  }
};

export default createReducer(initialState, handlers);