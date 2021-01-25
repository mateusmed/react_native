import React from 'react'
import {Text, View} from 'react-native'

//se for do export default não precisa de chaves,
import Primeiro from './components/Primeiro'


function App(){
  return <View>
             {/*<Primeiro/>*/}
             <Text> {1 + 1} </Text>
             <Primeiro/>

         </View>
}

export default App;