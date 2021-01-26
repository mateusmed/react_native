import React, {Fragment, useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from './estilo'


function useStateEstudo(inicial){

    let f = function(valor){
        // essa função será responsável por alterar o valor inicial
        // e será responsavel por notificar o react, para q 'atualize' a pagina
        // isso é oq acontece dentro de um useState
        inicial = valor;
    }
    return [inicial, f];
}


/*
Error: Invalid hook call.

====> RESUMO, USAR O STATE DENTRO DO COMPONENTE PRINCIPAL

Hooks can only be called inside of the body of a function component.
This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
* */
/*
Impossibilitando as tentativas abaixo:

function increment(value){
    let newValue =  value + 1;

    const [numero, setNumero] = useState(newValue);
    setNumero(newValue);
}

function decrement(value){

    let newValue =  value + 1;

    const [numero, setNumero] = useState(newValue);
    setNumero(newValue);
}


function increment(value, setNumero){
    let newValue =  value + 1;
    setNumero(newValue);
}

function decrement(value, setNumero){

    let newValue =  value + 1;
    setNumero(newValue);
}
 */


// um componente pode ter variaveis iniciais default
// a melhor maneira de fazer isso sem ficar verificando com if é
// usando destructing ao receber props
// function component({inicial = 1});
function component(props){

    //assim como podemos receber valores direto atribuindo e criando um novo obj
    let {inicial} = props;

    // podemos fazer o mesmo com lista
    // dessa forma já temos acesso ao elemento sem precisar acessar o 'index' da lista
    const [numero, setNumero] = useState(inicial);

    function increment(){
        setNumero(numero + 1);
    }

    function decrement(){
        setNumero(numero - 1);
    }

    return <Fragment>
                <Text>{numero}</Text>
                <Button title="+" onPress={increment}/>
                <Button title="-" onPress={decrement}/>
           </Fragment>
}


export default component;







