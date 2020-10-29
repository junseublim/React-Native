/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Button
} from 'react-native';

class App extends Component {
  marginTop = new Animated.Value(100);

  animate = () => {
    Animated.timing(
      this.marginTop,
      {
        toValue: 400,
        duration: 200
      }
    ).start();
  }
  render() {
    return (
      <View style = {styles.container}>
        <Button
          title="Animate Box"
          onPress={this.animate}
          />
          <Animated.View
          style={[styles.box, {marginTop: this.marginTop}]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red'
  }

})



export default App;
