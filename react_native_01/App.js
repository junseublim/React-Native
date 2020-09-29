/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, ActivityIndicator , Button, Modal, TouchableOpacity} from 'react-native';
import Header from './src/header'
import Number from './src/number'
import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

class App extends Component {

    state = {
        appName: 'Add new number',
        numbers: [0,1],
        number: '',
        country :   "Korea",
        sliderValue: 50,
        imageLoading: true,
        modal: false
    }
    addNumber = () => {
        this.setState(prevState => {
            return {
                numbers: [...prevState.numbers, this.state.number],
                number: ''
            }
        })
    }
    removeNumber = (target) => {
        this.setState(prevState => {
            return {
                numbers: this.state.numbers.filter((num,idx)   => {
                    return idx != target
                })
            } 
        })
    }

    onChangeInput  = (event) => {
        this.setState({ 
            number: event
        })
    }
    showModal = () => {
        this.setState({
            modal : this.state.modal ? false : true
        })
    }

    render() {
        return ( 
        <View style = {styles.mainView}>
            <Button
                onPress={this.showModal}
                title="Show Modal"
                />
            <Modal 
                visible ={this.state.modal}
                animated={'slide'}

            >
                <TouchableOpacity
                style={{width: '100%', height: '100%',justifyContent: 'center', alignContent: 'center', backgroundColor: 'yellow'}}
                onPress={this.showModal}
                >
                    <Text>This is Modal</Text>
                </TouchableOpacity>
            </Modal>
            <Slider
                style={{width: '95%', height: 40}}
                value={this.state.sliderValue}
                minimumValue={0}
                maximumValue={100}
                onValueChange={(val) => {
                    this.setState({
                        sliderValue: val
                    })
                }}
                step={1}
            ></Slider>
            <Text>{this.state.sliderValue}  </Text>
            <Picker
                style= {{height: 50, width: 250 }}
                selectedValue={this.state.country}
                onValueChange={(val, idx) => {
                    this.setState({country: val})
                }}
            >
                <Picker.Item label="Korea" value="korea"/>
                <Picker.Item label="Japan" value="japan"/>

            </Picker>
            <ScrollView
                style={{width: '100%', marginTop: 150}}
                onMomentumScrollBegin={() => alert('begin')}
            >
            <TextInput
                style={{width: '100%', fontSize:30, color: 'red'}}
                value={this.state.number}
                onChangeText={this.onChangeInput}
                placeholder="Enter a number"

            ></TextInput>
            <Header name={this.state.appName} add={this.addNumber}/>
            <Number numbers={this.state.numbers} remove={this.removeNumber}/>
            <ActivityIndicator 
                size="large"
                color="purple"
                animating={this.state.imageLoading}
            />
            <Image
                style = {{width: 400, height: 400, resizeMode: 'contain'}}
                source={{uri : 'https://picsum.photos/200/300?grayscale'}}
                onLoad={() => {
                    this.setState({
                        imageLoading: false  
                    })
                }}
                />
            
            </ScrollView>
        </View>
    
        )
    }
}

const styles = StyleSheet.create({
    
    mainView: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',

    },
    subView: {
        backgroundColor: 'yellow',

    }

})
export default App;