import React, {Fragment, useState} from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'
import Estilo from './estilo'


function component({num = 0}){

    //como a tag de script js no jsx é um {}(chaves)
    // portanto não é possível fazer condicional classica if(<condição>){<corpo>}
    return <View>

                {
                    (num % 2) == 0 ?
                        <Text style={Estilo.fontGrande}>Par</Text>
                    :
                        <Text style={Estilo.fontGrande}>impar</Text>
                }

           </View>
}



export default component;