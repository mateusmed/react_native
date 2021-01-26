import React, {Fragment, useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from '../../components/estilo'


import Filho from './Filho'

function component(props){

        let a = 19;
        let b = 2;

    return <Filho a={a} b={b} />
}

export default component;