import React, {Fragment, useState} from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'
import Estilo from '../estilo'




function component(props){

    let {num} = props;

    // fragment não possui style
    // adicionando mais de um estilo, por lista
    return <View style={style.Display}>
                <Text style={[style.DisplayText, Estilo.fontGrande]}>
                    {num}
                </Text>
           </View>
}


export default component;


const style = StyleSheet.create({
    Display:{
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },

    DisplayText:{
        color: '#FFF'
    }


})