import {
    createNavigationReducer,
  } from 'react-navigation-redux-helpers';

  import {
    combineReducers,
  } from 'redux';

import AppNavigator from '../core/AppNavigator';

import dataReducer from '../reducers/data.reducer'

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
    nav: navReducer,
    data: dataReducer
  });

export {appReducer};  