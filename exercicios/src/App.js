import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

//se for do export default não precisa de chaves,
import Primeiro from './components/Primeiro'

// se não for default deve ser declarado
import CompPadrao, {Comp1, Comp2} from './components/Mult'


import MinMax from "./components/MinMax";


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

  return minMaxTest();

}

export default App;

