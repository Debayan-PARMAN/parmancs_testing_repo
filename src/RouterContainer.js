// import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ROUTES from '../src/constants/route';

const RootStack = createStackNavigator({
  Home: ROUTES.HOME,
  Loading: ROUTES.LOADING,
  Login: ROUTES.LOGIN,
  Registration: ROUTES.REGISTRATION,
  Testing: ROUTES.TEST_PAGE,
  UserProfile: ROUTES.USER_PROFILE,
  UpdateUserProfile: ROUTES.UPDATE_USER_PROFILE,
  VerifyMobileMumber: ROUTES.VERIFY_NUMBER,
  AddAddress: ROUTES.ADDADDRESS,
  CreateAccount: ROUTES.CREATE_ACCOUNT,
  DoctorAppoinment: ROUTES.DOCTOR_APPOINMENT,
  BookAppoinment: ROUTES.BOOK_APPOINMENT,
  BookAppoinmentSecond: ROUTES.BOOK_APPOINMENT_SECOND,
  FindDoctor: ROUTES.FIND_DOCTOR,
  Specialitis: ROUTES.SPECIALITIS,
  SearchDoctor: ROUTES.SEARCH_DOCTOR,
},
  {
    initialRouteName: 'Home',
  });

export default AppContainer = createAppContainer(RootStack);