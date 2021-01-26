import React from 'react';
import {Text} from 'react-native';

import Estilo from './estilo'


// props é um objeto somente de leitura,
// portanto atribuições a props não ignoradas, exemplo:
// props.min = 1000
// props por baixo dos panos usa o Objetc.freeze oq faz com q
// não seja possível atribuir novos valores
function Screen(props){

    // let max = props.max;
    // let min = props.min;
    // ou
    // isso é chamado destruturing
    let {min, max} = props;

    let between = Math.floor((Math.random() * max) + min);

    return <Text style={Estilo.fontGrande}>
        O valor entre {props.max} e {props.min} é: {between};
    </Text>
}


export default Screen;