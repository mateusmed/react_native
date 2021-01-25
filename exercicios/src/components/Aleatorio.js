import React from 'react';
import {Text} from 'react-native';

import Estilo from './estilo'


function Screen(props){

    // let max = props.max;
    // let min = props.min;
    // ou
    let {min, max} = props;

    let between = Math.floor((Math.random() * max) + min);

    return <Text style={Estilo.fontGrande}>
        O valor entre {props.max} e {props.min} é: {between};
    </Text>
}


export default Screen;