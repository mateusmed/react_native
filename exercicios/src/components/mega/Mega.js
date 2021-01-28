import React, {Fragment, useState, Component} from 'react'
import {Text, View, Button, TextInput} from 'react-native'

import Estilo from '../estilo'


//como herdamos de component
// temos acesso à this.props
class Mega extends Component{

    // --> não functiona, pq?
    // let {qtdNumero} = this.props;

    state = {
        qtdNumeros: this.props.qtdNumeros
    }


    /**
      Problema de bind no javascript. O objeto this é referencia de
      quem chamou a função, por isso confunde, no Java o this
      representa o scopo da instancia atual, no javascript não.

      Por esse motivo, quando usamos o bind, dizemos que a função:

      alterarQtdNumero

      precisa receber o this da minha instancia atual (classe),
      e não de quem esta chamando

      O this da minha instancia atual que possui o metodo setState

      uma das soluções abaixo:
     * **/

    // SOLUÇÃO - 1
    // ao fazer o bind,
    // constructor(props) {
    //     super(props);
    //     this.alterarQtdNumero = this.alterarQtdNumero.bind(this);
    // }
    //
    // alterarQtdNumero(qtd){
    //     this.setState({qtdNumeros:qtd})
    // }


    // SOLUÇÃO 3
    /**
        Em uma função arrow o this sempre estará associado
        ao local que a função está definida, dessa forma
        conseguimos corrigir o 'bind' do this
     * **/

    alterarQtdNumero = (qtd) => {
        this.setState({qtdNumeros:qtd})
    }

    render(){
        return <View>

                    <Text>Gerador de megasena {this.state.qtdNumeros}</Text>
                    <TextInput style={{borderBottomWidth:1}}
                               placeholder={"quantidade de numeros"}
                               value={this.state.qtdNumeros}

                               // SOLUÇÃO 2
                               // onChangeText={ (qtd) => {this.alterarQtdNumero(qtd)} }

                               // SOLUÇÃO 3
                               onChangeText={this.alterarQtdNumero}
                    />
               </View>
    }
}

export default Mega;