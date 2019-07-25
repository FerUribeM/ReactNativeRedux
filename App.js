import React, { Component } from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import {createStore,applyMiddleware} from 'redux';
import { Provider, connect } from 'react-redux';
import {middleware, AppCont} from './src/util/redux';
import {appReducer} from './src/reducers/reducer';


const mapStateToProps = (state) => ({
  state: state.nav,
});

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

const AppWithNavigationState = connect(mapStateToProps)(AppCont);


export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <MenuProvider>
            <AppWithNavigationState />
        </MenuProvider>
      </Provider>
    );
  }
}