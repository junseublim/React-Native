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

class UserScreen extends Component {

  headerStyle = () => {
    this.props.navigation.setOptions({
      title: 'Customizing',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'green'
      }
    })
  }
  headerStyle1 = () => {
    this.props.navigation.setOptions({
      title: 'Customizing',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'yellow'
      }
    })
  }

  render() {  
    const {params} = this.props.route;
    const userIdx = params ? params.userIdx : null;
    const userName = params ? params.userName : null;
    const userLastName = params ? params.userLastName : null;
    return (
        <View>
            <Text>User screen</Text>
            <Button
            title="To home Screen"
            onPress={()=> {
                this.props.navigation.navigate('Home')
            }}
            />
            <Text>User Idx: {JSON.stringify(userIdx)}</Text>
            <Text>User Name: {JSON.stringify(userName)}</Text>
            <Text>User LastName: {JSON.stringify(userLastName)}</Text>
            <Button
            title="Customize"
            onPress={ () => {
              this.headerStyle();
            }}
           ></Button>
        </View>
    )
  }
}


export default UserScreen;