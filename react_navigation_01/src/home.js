/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React , {Component} from 'react';
import { View, Text, Button} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
        <View>
            <Text>Home screen</Text>
            <Button
            title="To user Scree"
            onPress={()=> {
                this.props.navigation.navigate('User',{
                    userIdx: 100, 
                    userName: 'Gildong',
                    userLastName: 'Hong'
                })
            }}
            />
            <Button
              title="Change"
              onPress={() =>
                this.props.navigation.setOptions({
                  title: "Changed!",
                  headerStyle: {
                    backgroundColor: 'pink',
                  },
                  headerTintColor: 'red'
                })
              }
            ></Button>
        </View>
    )
  }
}


export default HomeScreen;