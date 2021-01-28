
import React, {Fragment, useState} from 'react'
import {Text, Button} from 'react-native'


function listaProdutos(){

    return [{id: 1, nome: 'ps1', preco:500},
            {id: 2, nome: 'ps2', preco:1000},
            {id: 3, nome: 'ps3', preco:1500},
            {id: 4, nome: 'ps4', preco:2000},
            {id: 5, nome: 'ps5', preco:500000000}];
}

function listaProdutosJSX(produtos){

    let newList = produtos.map((item) => {

        return <Text key={item.id}>
                    {item.nome} custa: {item.preco}
               </Text>
    })

    return newList;
}


function component(props){

    let productList = listaProdutos();

    return <Fragment>
                <Text>Lista de produtos:</Text>
                {listaProdutosJSX(productList)}
           </Fragment>
}


export default component;