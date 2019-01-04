import { createReducer } from './utils';

const initialState = {
  loginDetails:{
      userName: "dsa",
      password: "dsa",
      registrationProvider: "SBIS",
      roleName: "INDIVIDUAL"
  },
  userDetails: {
    userId: '',
    username: '',
    token:'',
    roleName:'',
    userEmail: '',
    userMobile: '',
  },

};

const handlers = {
  
};

export default createReducer(initialState, handlers);