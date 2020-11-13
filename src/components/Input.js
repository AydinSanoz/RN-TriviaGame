import React from 'react'
import {View, TextInput} from 'react-native'
import {inputStyles} from './styles'

export const Input =(props ) => {
    return(
        <View style = {inputStyles.container}>
            <TextInput
                placeholder = {props.text}
                onChangeText = {props.onText}
            />
        </View>
    )
} 