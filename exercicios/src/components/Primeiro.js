import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

function Segundo(){
    return <Text> segundo </Text>
}


function Primeiro(){
    return <Text style={Estilo.fontGrande}>
                primeiro componente
           </Text>
}

export default Primeiro;
