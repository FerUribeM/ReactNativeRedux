import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class MyHome extends Component {
    render(){
        return(
            <View>
                <Text>Esta es mi nueva pantalla de HOME</Text>
                <Text>Esta es mi nueva pantalla de HOME</Text>
                <Text>Esta es mi nueva pantalla de HOME</Text>
                <Text>Esta es mi nueva pantalla de HOME</Text>
                <Text>Esta es mi nueva pantalla de HOME</Text>
                <Text>Esta es mi nueva pantalla de HOME</Text>
                <Text>Esta es mi nueva pantalla de HOME</Text>
                <Text>Esta es mi nueva pantalla de HOME</Text>
                <Text>Esta es mi nueva pantalla de HOME</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(MyHome)
