import { createReducer } from './utils';
import USER_TYPE from '../constants/actionReducerConstants';


const initialState = {
  userDetails: {
    userId: '',
    registrationProvider: "SBIS",
    roleName: "INDIVIDUAL",
    username: '',
    password: "",
    token:'',
    roleName:'',
    userEmail: '',
    userMobile: '',
    medicalHistory:{},
    address: [],
    orders:[],
    userPicSrc:'',
  },
  doctorDetails:{
    doctorName:'',
    doctorResgistrationNumber:'',
    password:'',
    doctorAddress:[],
  },

};

const handlers = {
//   [USER_TYPE.LOGIN_USER]:() => {
//     return dis;
//   },
//   [USER_TYPE.LOGIN_USER_SUCCESS]: () => {
//     return true;
//   },
};

export default createReducer(initialState, handlers);