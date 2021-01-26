import React, {Fragment} from 'react'
import {View, Text} from 'react-native'
import Estilo from './estilo'


function screen(props){

    let {principal, secundario} = props;


    // para retornar mais de um component,
    // deve estar dentro de uma view ou fragment
    // também é possível retornar um fragment dessa forma:
    // <> </>
    return <Fragment>
                <Text style={Estilo.fontGrande}> {principal} </Text>
                <Text> {secundario} </Text>
           </Fragment>

}

export default screen;