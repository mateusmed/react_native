import React, {Fragment, useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from '../estilo'


function component(props){

    let {nome, sobrenome} = props;

    return  <Fragment>
                <Text style={Estilo.fontGrande}>{nome} {sobrenome}</Text>
            </Fragment>
}

export default component;