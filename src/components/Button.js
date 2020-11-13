import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import {buttonStyles, buttonOutlineStyles} from './styles'

export const Button = (props) =>{
    const style = props.noBorder ? buttonOutlineStyles : buttonStyles   
    return(
        <TouchableOpacity
            style = {style.button}
            onPress = {props.onPress}
        >
            <Text style = {style.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}