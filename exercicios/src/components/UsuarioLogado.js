import React, {Fragment, useState} from 'react'
import {Text, Button} from 'react-native'
import If from './If'

import Estilo from './estilo'


function component(props){

    let {usuario} = props;

    return <If teste={usuario.nome !== undefined}>
                   <Text style={Estilo.fontGrande}>
                        {usuario.nome} - {usuario.email}
                   </Text>
           </If>
}


export default component;