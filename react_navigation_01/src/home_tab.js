import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class TabHomeScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Home screen</Text>
            </View>
        )
    }
}
export default TabHomeScreen;