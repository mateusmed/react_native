import React, {Fragment, useState} from 'react'
import {Text, View, Button, TextInput} from 'react-native'

import Estilo from './estilo'

function component(props){

    let [nome, setNome] = useState("teste")

    return  <Fragment>
                <TextInput
                    placeholder={"digite o seu nome"}
                    value={nome}
                    onChangeText={ (nome) => {setNome(nome)} }
                />
            </Fragment>
}


export default component;