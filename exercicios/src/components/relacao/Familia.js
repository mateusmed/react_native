import React, {Fragment, useState} from 'react'
import {Text, Button} from 'react-native'

import Membro from './Membro'

function component(props){

    let {children} = props;

    return  <Fragment>
                {children}
            </Fragment>


}

export default component;