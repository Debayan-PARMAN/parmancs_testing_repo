import { createReducer } from './utils';

const initialState = {
  userDetails: {
    userId: '',
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userMobile: '',
  },

};

const handlers = {
  
};

export default createReducer(initialState, handlers);