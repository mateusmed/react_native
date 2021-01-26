import React, {Fragment} from 'react'
import { Button } from 'react-native'



function executar(){
    console.warn("botao executar clickado");
}

const executarExemplo = function executarExemplo(){
    console.warn("botao executar clickado teste32");
}

function screen(){

    //atenção ao passar a função como parametro,
    //não colocar () que caracteriza a chamada da função
    return <Fragment>
                <Button title="Executar"
                        onPress={executar}>
                </Button>
                <Button title="Executar"
                        onPress={executarExemplo}>
                </Button>
    </Fragment>






}


export default screen;