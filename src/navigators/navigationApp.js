import React from 'react';
import HomeScreen from '../screens/Home';

import {createStackNavigator, createAppContainer} from "react-navigation";

const navigationOptions = {
    navigationOptions:{
        headerStyle :{
            backgroundColor : '#f4511e'
        },
        headerTitleStyle: {
            textAlign:'center', 
            flex:1 ,
            fontSize: 20,
            color : '#FFF',
            fontWeight: 'bold'
        }
    }
};

const MainNavigator = createStackNavigator(
    {
        Home : {
            screen: HomeScreen,
			navigationOptions: ({navigation}) => ({
				title: 'Home'
			})
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions
    }
)

const App = createAppContainer(MainNavigator);

export default App;