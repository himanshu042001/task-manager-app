import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
