import React, {Fragment, useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from '../../components/estilo'


function component(props){

    let {min, max, callback} = props;

    function gerarNumero(min, max){
        let fator = max - min +1;
        return parseInt(Math.random() * fator) + min;
    }

    return <Button title="executar"
                   onPress={function (){
                            let numero = gerarNumero(min, max);
                            callback(numero);
                        }
                   } />
}

export default component;