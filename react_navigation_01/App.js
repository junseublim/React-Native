/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React , {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserScreen from './src/user';
import HomeScreen from './src/home';
import DrawerUserScreen from './src/user_drawer';
import DrawerHomeScreen from './src/home_drawer';
import TabUserScreen from './src/user_tab';
import TabHomeScreen from './src/home_tab';
import TabMessageScreen from './src/message_tab';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconName;
 
  if (name === "home") {
    iconName = "home-outline"
  }
  else if (name ==="user") {
    iconName = "people-outline"
  }
  else if (name === "message") {
    iconName = "mail-outline"
  }
  let iconSize = focused ? 30 : 20
  return (
    <Ionicons
    name={iconName}
    size={iconSize}
    />
  )
}



class App extends Component {
  // logoTitle = () => {
  //   return (
  //     <Image style={{width: 40, height: 40}}
  //     source={require('./src/assets/images/home2.png')}/>
  //   )
  // }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName="home"
        tabBarOptions= {{
          activeBackgroundColor: 'skyblue',
          activeTintColor: 'blue',
          inactiveTintColor: '#fff',
          style : {
            backgroundColor: '#c6cbef'
          }
        }}
        screenOptions= {({route}) => ({
          tabBarLabel : route.name,
          tabBarIcon: ({focused}) => (
            TabBarIcon(focused, route.name)
          )
        })}
        >
          <Tab.Screen name="home" component={TabHomeScreen}/>
          <Tab.Screen name="user" component={TabUserScreen}/>
          <Tab.Screen name="message" component={TabMessageScreen}/>
        </Tab.Navigator>
      </NavigationContainer>




      // <NavigationContainer>
      //   <Drawer.Navigator>
      //     <Drawer.Screen name="Home" component={DrawerHomeScreen}></Drawer.Screen>
      //     <Drawer.Screen name="user" component={DrawerUserScreen}></Drawer.Screen>
      //   </Drawer.Navigator>
      // </NavigationContainer>



      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="User"
      //   //전역적으로 스타일 주기
      //   // screenOptions={{
      //   //   title: "Global Custom",
      //   //   headerStyle: {
      //   //     backgroundColor: 'blue',
      //   //   },
      //   //   headerTintColor: 'green',
      //   //   headerTitleStyle: {
      //   //     fontWeight: 'bold',
      //   //     color: 'purple'
      //   //   }}}
      //   >
      //     <Stack.Screen  
      //       name="Home"  
      //       component={HomeScreen}
      //       //각 스크린마다 스타일 주기
      //       options={{
      //         title: "Home screen",
      //         headerRight: () => (
      //           <Button 
      //           title="Info"
      //           onPress={() => alert("I'm a Buttton!")}
      //           color= 'orange'
      //           ></Button>
      //         )

      //       }}
      //       />
      //     <Stack.Screen 
      //       name="User"
      //       component={UserScreen}
      //       initialParams= {{
      //         userIdx: 50,
      //         userName: 'Gildong',
      //         userLastName: 'Go'
      //       }}
      //       />
      //   </Stack.Navigator>
      // </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

});

export default App;