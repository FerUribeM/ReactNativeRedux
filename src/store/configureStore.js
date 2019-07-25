import { combineReducers } from 'redux';

import nav from './reducers/NavigationReducer';

const AppReducer = combineReducers({
    nav: nav
  });

export default AppReducer;