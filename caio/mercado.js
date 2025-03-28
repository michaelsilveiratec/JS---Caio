class mercado {
    constructor(nome,preco,prod_qtd){
        this.nome = nome;
        this.preco = preco;
        this.prod_qtd = prod_qtd;
    }
    //Meu método construtor
}
//----------------------------------------------------------------------------
class ListaProduto {
    constructor(){
        this.produtos = [];
    }
//--Minha lista vazia para add meus produtos


//-----------------------------------------------------------------------------
add(produto){ // Este add vai inserir o que está em produtos e criar uma lista após o meu var
        this.produtos.push(produto);
    }
}

//---Declaração dos meus parametros
var camisa = new mercado('camisa1 Nike', 'R$ 50,00', 5);
var calca = new mercado('calca jeans', 'R$ 56,00', 5);
var meia = new mercado('meia lupo', 'R$ 15,00', 3);

console.log(camisa)
console.log(calca)
console.log(meia)
