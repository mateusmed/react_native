import React, {Fragment, useState} from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'



function component(props){

    let {inc, dec} = props;

    return <View style={style.Botoes}>
                <Button  title={"+"} onPress={inc}/>
                <Button title={"-"} onPress={dec}/>
           </View>
}


const style = StyleSheet.create({

    Botoes:{
        flexDirection: "row"
    }

})


export default component;