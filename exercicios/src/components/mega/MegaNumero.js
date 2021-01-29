import React, {Fragment, useState, Component} from 'react'
import {Text, View, Button, TextInput , StyleSheet} from 'react-native'

import Estilo from '../estilo'



function component(props){

    let {num} = props;

    return <View style={style.Container}>
                <Text style={[Estilo.fontGrande, style.Num]}>
                    {num}
                </Text>
           </View>
}

const style = StyleSheet.create({

   Container:{
        height: 50,
        width: 50,
        backgroundColor:'#000',
       margin:5,
       borderRadius:25
   },
   Num:{
        color:'#FFF'
   }
});



export default component;