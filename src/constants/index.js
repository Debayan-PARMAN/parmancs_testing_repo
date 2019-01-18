// import ROUTES from './route';
// import styleConstants from './styleConstants';
// import * from './actionReducerConstants';

export const Constants = {};

export const HOST_NAME = 'http://206.189.150.18';
export const PORT = '9090';
export const URI_PREFIX = `${HOST_NAME}:${PORT}`;
export const URI = {
  login: `${URI_PREFIX}/gen/v1/users/login`, // For Login Api
  signup: `${URI_PREFIX}/gen/v1/users/signup`, // For User registration
  otp: `${URI_PREFIX}/gen/v1/manage-otp`, // For Generate otp


}