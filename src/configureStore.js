import {
    createStore,
    applyMiddleware
  } from 'redux';

import {appReducer} from '../src/reducers/reducer';

import {middleware} from '../src/util/redux';

const store = createStore(
    appReducer,
    applyMiddleware(middleware),
);

  export default store;