import { RESET_TO_MAIN } from '../actions/actionTypes'
import { NavigationActions, StackActions } from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';


const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('MainScreen')
);

const resetToMain = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: 'MainScreen' })],
});

export default (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case RESET_TO_MAIN:
            nextState = AppNavigator.router.getStateForAction(resetToMain, state);
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}