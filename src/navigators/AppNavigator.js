// React Native
import React from 'react';
import PropTypes from 'prop-types';

// UI
import { View } from 'react-native';

// Redux
import { connect } from 'react-redux';
import { initializeListeners } from 'react-navigation-redux-helpers';
import { navigationPropConstructor } from '../util/redux';

// Navigation
import { createStackNavigator } from 'react-navigation';

// Stacks
import Main from './MainNavigator'

export const AppNavigator = createStackNavigator({
    MainScreen: {
        screen: Main
    },
},
    {
        initialRouteName: 'Main',
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: true,
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0
            }
        },
    }
);




class AppWithNavigationState extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    componentDidMount() {
        initializeListeners('root', this.props.nav);
    }

    render() {

        

        const { dispatch, nav } = this.props;

        const navigation = navigationPropConstructor(dispatch, nav);

        return (
            <View style={{ flex: 1 }}>
                <AppNavigator navigation={navigation} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
