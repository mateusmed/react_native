import React, {Fragment, useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from '../../components/estilo'


function component(props){

    let {a, b} = props;

    return <Fragment>
        <Text style={Estilo.fontGrande}>{a}</Text>
        <Text style={Estilo.fontGrande}>{b}</Text>
    </Fragment>
}

export default component;