import { createReducer } from './utils';
import { USER_TYPE } from '../constants/actionReducerConstants';

const initialState = {
  userDetails: {
    userId: '',
    registrationProvider: "SBIS",
    roleName: "INDIVIDUAL",
    username: '',
    password: "",
    confirmpassword: "",
    token:'',
    roleName:'',
    emailAddress: "",
    contactNo: '',
    medicalHistory:{},
    address: [],
    orders:[],
    userPicSrc:'',
    commonData: "",
    name: "",
    userOTP: '',
  },
  
  otpActions: {
    sendActionType: 'OTPSEND',
    verifyActionType:'OTPVERIFY',
  },

  loading: false,
  showPassword: true, // toggle between password/otp
  responseTriggerred: false,
  status: '',
  successMessage: '', // get success details for an api
  failureMessage: '', // get failure details for an api

  doctorsList:[], // List of doctors
  doctorDetails:{
    doctorName:'',
    doctorResgistrationNumber:'',
    password:'',
    doctorAddress:[],
  },

};

const handlers = {
  [USER_TYPE.UPDATE_STATE]: (_, action) => (action.payload),

  // For Login
  [USER_TYPE.LOGIN_USER]:() => {
    // console.log(action)
    return {
      // userDetails,
      successMessage:'',
      failureMessage:'',
      loading:true,
      responseTriggerred: false,
    };
  },
  [USER_TYPE.LOGIN_USER_SUCCESS]: (state, action) => {
    const {userDetails} = state;
    let successMessage = '';
    let failureMessage = '';
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
  },
  
  // For OTP-SEND
  [USER_TYPE.SEND_OTP]: () => {
    return {
      loading: true,
    };
  },
  [USER_TYPE.SEND_OTP_SUCCESS]: (state, action) => {
    return {
      loading: false,
    };
  },
  [USER_TYPE.SEND_OTP_FAILURE]: (_, action) => {
    this.props.navigation.navigate('CreateAccount');
    return {
      loading: false,
      responseTriggerred: true,
    };
  },

    // For OTP-VERIFY
  [USER_TYPE.VERIFY_OTP]: () => {
    return {
      successMessage: '',
      failureMessage: '',
      loading: true,
      responseTriggerred: false,
      status:'',
    };
  },
  [USER_TYPE.VERIFY_OTP_SUCCESS]: (state, action) => {
    console.log(action.payload);
    let successMessage='';
    let failureMessage='';
    let status = '';
    if(action.payload.status === 2000) {
      status = action.payload.status;
      successMessage = action.payload.message;
    } else {
      failureMessage = action.payload.message;
    }
    return {
      status,
      successMessage,
      failureMessage,
      loading: false,
      responseTriggerred: true,
    };
  },
  [USER_TYPE.VERIFY_OTP_FAILURE]: (_, action) => {
    return {
      loading: false,
      // responseTriggerred: true,
    };
  },

  // For SignUp
  [USER_TYPE.REGISTER_USER]:() => {
    return {
      successMessage: '',
      failureMessage: '',
      loading: true,
      responseTriggerred: false,
    };
  },
  [USER_TYPE.REGISTER_USER_SUCCESS]:(state, action) => {
    console.log(action.payload);
    if (action.payload.status === 2000) {
      successMessage = 'Successfully Account Created';
    }else if (response.status === 5051) {
      successMessage = `already exists`;
    }
    else {
      failureMessage = action.payload.message;
    }
    return {
      successMessage,
      failureMessage,
      loading: false,
      responseTriggerred: true,
    };
  },
  [USER_TYPE.REGISTER_USER_FAILURE]: (_,action) => {
    console.log(action.payload)
    return {
      loading: false,
      responseTriggerred: true,
    };
  },

};

export default createReducer(initialState, handlers);