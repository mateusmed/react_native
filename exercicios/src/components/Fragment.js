import React, {Fragment} from 'react'
import {View, Text} from 'react-native'
import Estilo from './estilo'


/*

View renders a native view. Which means it'll affect styling, layout etc.

Fragment is just a way to group things under a single element in React.
It doesn't render anything and doesn't affect styling or layout.
It's like it's not even there.

* */

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