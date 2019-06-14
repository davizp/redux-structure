import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import thunk from 'react-thunk';

const rootReducer = () => [];

const initialState = {};

const middleware = applyMiddleware(...[]);

const store = createStore(
  rootReducer,
  initialState,
  middleware,
);

export default store;
