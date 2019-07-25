// React Native
import React, { Component } from 'react';
import { connect } from 'react-redux';

// UI
import { View, Image, StyleSheet } from 'react-native';
import { Container } from 'native-base';

// React Navigation
import { createStackNavigator } from 'react-navigation';

//Screens
import Home from '../screens/Home'

// Return the screen
getScreens = () => {
    return {
        Home: { screen : Home }
    }
}

export const StackNavigator = createStackNavigator(
    this.getScreens(),
    {
        headerMode: 'screen',
        navigationOptions: {
            gesturesEnabled: false,
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0
            }
        }
    }
);

class MainNavigator extends Component {
    static router = StackNavigator.router;

    constructor(props) {
        super(props);
    }

    render() {
        let { navigation } = this.props;
        
        return (
            <Container>
                <View>
                    <StackNavigator navigation={navigation} />
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(MainNavigator);