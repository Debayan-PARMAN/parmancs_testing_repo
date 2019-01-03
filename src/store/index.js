import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
// import thunkMiddleware from 'redux-thunk';

export default store = createStore(rootReducer);

