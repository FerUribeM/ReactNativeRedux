import {
    createReduxContainer,
    createReactNavigationReduxMiddleware
  } from 'react-navigation-redux-helpers';

import AppNavigator from '../core/AppNavigator';

const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
  );
  
const AppCont = createReduxContainer(AppNavigator);

export {middleware, AppCont};