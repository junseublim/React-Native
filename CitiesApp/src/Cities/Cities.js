import React from 'react'
import {
    View,Text, StyleSheet,TouchabelWithoutFeedback, ScrollView
} from 'react-native';

import CenterMessage from '../components/CenterMessage'
import {colors} from '../theme'

export default class Cities extends React.Component {

    static navigationOptions = {
        title: 'Cities',
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '400'
        }
    }
navigate = (item) => {
    this.props.navigation.navigate('City', {city: item})
}
render() {
    const {screenProps: {cities}} = this.props
    return (
        <ScrollView contentContainerStyle={[!cities.length && {flex: 1}]}>
            <View style={[!cities.length && {justifyContent: 'center', flex: 1}]}>
                {
                    !cities.length && <CenterMessage message='No saved cities!' />}
                {
                    cities.map((item, index) => (
                        <TouchabelWithoutFeedback onPress={() => this.navigate(item)} key={index}>
                            <View style={StyleSheet.cityContainer}>
                                <Text style={StyleSheet.city}>{item.country}</Text>
                                <Text style={StyleSheet.country}>{item.country}</Text>
                            </View>
                        </TouchabelWithoutFeedback>
                    ))
                }
            </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cityContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    city: {
        fontSize: 20,
    },
    country: {
        colors: 'rgba(0,0,0, 0.5)'
    }
})