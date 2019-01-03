import React, {Component} from 'react';
// import configureStore from './store';
import store from './src/store/index';
import {Provider} from 'react-redux';
import MainApp from './src/MainApp';


// const initialState = {};
// const store = configureStore(initialState);

 <Provider store={store}>
    {/* <IntlProvider locale={localeData.locale} messages={localeData.messages}> */}
      <MainApp />
    {/* </IntlProvider> */}
  </Provider>

export default class App extends Component {
  render() {
    return (
     <MainApp />
    );
  }
}