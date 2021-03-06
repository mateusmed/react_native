import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

//se for do export default não precisa de chaves,
import Primeiro from './components/Primeiro'

// se não for default deve ser declarado
import CompPadrao, {Comp1, Comp2} from './components/Mult'


import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Fragment from "./components/Fragment";
import Botao from './components/Botao';
import Contador from './components/Contador';
import PaiDireta from './components/direta/Pai';
import PaiIndireta from './components/indireta/Pai';
import ContadorV2 from './components/contador/ContadorV2'
import ParImpar from './components/ParImpar'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'

import UsuarioLogado from './components/UsuarioLogado'
import If from './components/If'

import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import Input from './components/Input'


import Mega from './components/mega/Mega'


function teste1(){
  return <View>
             {/*<Primeiro/>*/}
             <Text> {1 + 1} </Text>
             <Primeiro/>

         </View>
}

function teste2(){
  console.warn("mensagem de teste");

  return <View style={style.App}>
              <CompPadrao/>
              <Comp1/>
              <Comp2/>
              <Primeiro/>
         </View>
}


function minMaxTest(){

  console.warn("mensagem de teste");

  return <View style={style.App}>
            <MinMax min="3" max="20" />
            <MinMax min={1} max={90} />
         </View>
}


function aleatorioTest(){

    return <View style={style.App}>
                <Aleatorio min={1} max={3}/>
           </View>
}

function fragment(){

    return <View  style={style.App}>
                <Fragment principal={"principal"}
                          secundario={"secundario"}/>

           </View>
}

function botaoTest(){

    return <View style={style.App}>
                <Botao/>
           </View>
}

function contadorTest(){
    return <View style={style.App}>
                <Contador inicial={1}/>
           </View>
}


//comunicação direta
function comunicacaoDireta(){
    return <View style={style.App}>
               <PaiDireta/>
           </View>
}


//comunicação indireta (callback)
function comunicacaoIndireta(){
    return <View style={style.App}>
        <PaiIndireta/>
    </View>
}


//comunicação indireta (callback)
function contadorV2(){
    return <View style={style.App}>
                <ContadorV2/>
           </View>
}


function parImpar(){
    return <ParImpar num={1}/>
}

function relaco(){

    // chamando o componente passando children
    return <View>
                <Familia>
                    <Membro nome={"Ana"}
                            sobrenome={"Silva"}/>
                    <Membro nome={"Jose"}
                            sobrenome={"Alencar"}/>
               </Familia>
                <Familia>
                    <Membro nome={"Carla"}
                            sobrenome={"Dias"}/>
                    <Membro nome={"Thais"}
                            sobrenome={"Aguiar"}/>
                </Familia>
            </View>
}

function condicional(){

    let usuario = { nome: 'Mateus', email: 'mateus.gmail.com'}
    let usuario2 = { email: 'mateus.gmail.com'}

    return <View>
                <UsuarioLogado usuario={usuario} />
                <UsuarioLogado usuario={usuario2} />
           </View>
}

function listaProdutos(){

    return <View>
                <ListaProdutos/>
           </View>
}


function listaProdutosV2(){

    return <View>
                 <ListaProdutosV2/>
           </View>
}

function input(){
    return <View style={style.App}>
                <Input/>
           </View>
}

// MONTANDO COMPONENTES BASEADO EM CLASSE
// lembrando q em java script, classe é uma função,
function megaTest(){
    return <View style={style.App}>
                <Mega qtdNumeros={5}/>
           </View>
}


const style = StyleSheet.create({
  App:{
    fontSize: 24,
    //backgroundColor: '#A00', //cor vermelha
    flexGrow:1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
})

function App(){

  return megaTest();

}

export default App;

