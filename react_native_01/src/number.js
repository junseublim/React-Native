
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Number = (props) => {
    return (    
        props.numbers.map((item,idx) => (
            <TouchableOpacity style={styles.number} key={idx} onPress={ () => props.remove(idx)}>
                <Text>{item}</Text>
            </TouchableOpacity>
        ))
    )
}

const styles = StyleSheet.create({
    number: {
        backgroundColor : '#cecece',
        alignItems : 'center',
        padding : 10,
        marginTop: 10,
        width : '100%',
        color : 'black'
    }
})

export default Number;