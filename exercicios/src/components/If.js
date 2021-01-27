

function condicional(props){

    let {teste, children} = props;

    if(teste){
        return children;
    }else{
        // não vai renderizar nada
        return false;
    }
}

export default condicional;