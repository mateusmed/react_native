import React, {Fragment, useState, Component} from 'react'
import {Text, View, Button, TextInput} from 'react-native'

import Estilo from '../estilo'
import MegaNumero from './MegaNumero'


//como herdamos de component
// temos acesso à this.props
class Mega extends Component{

    // --> não functiona, pq?
    // let {qtdNumero} = this.props;

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
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

        //transformando para numerico
        qtd = +qtd
        this.setState({qtdNumeros: +qtd})
    }


    //funcao recursivo
    gerarNumeroNaoContido = (nums) => {
        const novo = parseInt(Math.random() * 60) + 1;

        if(nums.includes(novo)){
            return this.gerarNumeroNaoContido(num);
        }

        return novo;
    }

    gerarNumeros = () => {

        console.warn(this.state.qtdNumeros);

        // EXEMPLO ... (tres pontos)
        // os 3 pontos adiciona os elementos não a referencia do objeto.
        // var parts = ['two', 'three'];
        // var numbers = ['one', ...parts, 'four', 'five']; // ["one", "two", "three", "four", "five"]
        let numeros = Array(this.state.qtdNumeros)
                             .fill()
                             .reduce( (n) => [...n, this.gerarNumeroNaoContido(n)], []);

        // numeros = numeros.join(',');

        this.setState({numeros: numeros});
    }


    meuGerador = () => {
        let qtdNumeros = this.state.qtdNumeros;
        let listaGerada = this.gerarNumeros2(qtdNumeros);

        listaGerada = listaGerada.join(',');
        this.setState({listaGerada:listaGerada})
    }


    //meu metodo
    gerarNumeros2 = (qtd) => {

        const max = 60;
        const min = 1;

        let newList = [];

        while(newList.length < qtd){

            let randomNumber =Math.floor((Math.random() * max) + min);

            if(!newList.includes(randomNumber)){
                newList.push(randomNumber);
            }
        }

        return newList;
    }


    exibirNumeros = () => {
        const nums = this.state.numeros;

        let list = nums.map( (num) => {
            return <MegaNumero key={num} num={num}/>
        })

        return list;
    }

    render(){
        return <View>

                    {/*  FEITO POR MIM    */}
                    {/*<Text style={Estilo.fontGrande}>Gerador de megasena {this.state.qtdNumeros}</Text>*/}
                    {/*<TextInput keyboardTyp={"numeric"}*/}
                    {/*           style={{borderBottomWidth:1}}*/}
                    {/*           placeholder={"quantidade de numeros"}*/}
                    {/*           value={`${this.state.qtdNumeros}`}*/}

                    {/*           // SOLUÇÃO 2*/}
                    {/*           // onChangeText={ (qtd) => {this.alterarQtdNumero(qtd)} }*/}

                    {/*           // SOLUÇÃO 3*/}
                    {/*           onChangeText={this.alterarQtdNumero}*/}
                    {/*/>*/}
                    {/*<Button title={"gerar"}*/}
                    {/*        onPress={this.meuGerador}/>*/}
                    {/*<Text>*/}
                    {/*    {this.state.listaGerada}*/}
                    {/*</Text>*/}

                    {/*  FUNCIONAL - AULA */}
                    {/*<Text style={Estilo.fontGrande}>Gerador de megasena {this.state.qtdNumeros}</Text>*/}
                    {/*<TextInput keyboardTyp={"numeric"}*/}
                    {/*           style={{borderBottomWidth:1}}*/}
                    {/*           placeholder={"quantidade de numeros"}*/}
                    {/*           value={`${this.state.qtdNumeros}`}*/}
                    {/*           onChangeText={this.alterarQtdNumero}*/}
                    {/*/>*/}
                    {/*<Button title={"gerar"}*/}
                    {/*        onPress={this.gerarNumeros}/>*/}
                    {/*<Text>*/}
                    {/*    {this.state.numeros}*/}
                    {/*</Text>*/}

                    <Text style={Estilo.fontGrande}>Gerador de megasena {this.state.qtdNumeros}</Text>
                    <TextInput keyboardTyp={"numeric"}
                               style={{borderBottomWidth:1}}
                               placeholder={"quantidade de numeros"}
                               value={`${this.state.qtdNumeros}`}
                               onChangeText={this.alterarQtdNumero}
                    />
                    <Button title={"gerar"}
                            onPress={this.gerarNumeros}/>

                    <View style={ {flexDirection:'row',
                                   marginTop:20,
                                   flexWrap:'wrap',
                                   justifyContent: 'center'} }>
                        {this.exibirNumeros()}
                    </View>

               </View>
    }
}

export default Mega;