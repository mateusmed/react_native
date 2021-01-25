
function Produto(nome){
    this.nome = nome;
}

//possível instanciar uma função, após instancia, logo vc tem um objeto
const p1 = new Produto("caneta");
const p2 = new Produto("caderno");


console.log(p1.nome, p2.nome);
console.log(typeof p1);
console.log(typeof p2);
console.log(typeof Produto);