import React, {Fragment, useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from '../../components/estilo'


import Filho from './Filho'

function component(props){

    const [num, setNum] = useState(0);

    function callbackFunction(numero){
        setNum(numero)
    }

    return  <Fragment>
                <Text>{num}</Text>
                <Filho min={1}
                       max={10}
                       callback={callbackFunction}  />
            </Fragment>


}

export default component;