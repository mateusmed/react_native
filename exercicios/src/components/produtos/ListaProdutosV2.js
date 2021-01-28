
import React, {Fragment, useState} from 'react'
import {Text, Button, FlatList} from 'react-native'


function listaProdutos(){

    return [{id: 1, nome: 'ps1', preco:500},
            {id: 2, nome: 'ps2', preco:1000},
            {id: 3, nome: 'ps3', preco:1500},
            {id: 4, nome: 'ps4', preco:2000},
            {id: 5, nome: 'ps5', preco:500000000}];
}


// essa função é chamada como callback dentro do componente FlatList
// usamos destruting para receber o objeto <=== não entendi o motivo
// a palavra padrão é item, sendo possível: renderItem({ item, index, separators });
function listaProdutosJSX( { item } ){
    return <Text> {item.id} {item.name} - preco: R$: {item.preco}</Text>
}


function component(props){

    let productList = listaProdutos();

    return <Fragment>
                <Text>Lista de produtos V2:</Text>
                <FlatList data={productList}
                          keyExtractor={ (i) => {`${i.id}`}}
                          renderItem={listaProdutosJSX}
                />
           </Fragment>
}


export default component;