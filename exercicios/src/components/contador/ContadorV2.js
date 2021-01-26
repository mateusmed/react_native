import React, {Fragment, useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from '../estilo'

import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

function component(props){

    const [num, setNum] = useState(0);

    function inc(){
        setNum(num + 1);
    }

    function dec(){
        setNum(num - 1);
    }

    return  <Fragment>
                <Text style={Estilo.fontGrande}>contador v2</Text>
                <ContadorDisplay num={num} inc={inc} dec={dec}/>

                <ContadorBotoes inc={inc} dec={dec}/>
            </Fragment>

}

export default component;