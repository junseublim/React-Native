/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
  state = {
    sampleText: 'Hello Korea',
    sampleBoolean: true
  }
  inputText = () => (
    this.state.sampleBoolean ?
      <Text>sampleBoolean is true</Text>
    :
      <Text>sampleBoolean is false</Text>
  )

  changeState = () => {
    this.setState({
      sampleText: 'text changed'
    })
  }
  
  render() {
    return (
    <View style={styles.background}>
      <Text onPress={this.changeState}>
        {this.state.sampleText}
      </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create ({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;