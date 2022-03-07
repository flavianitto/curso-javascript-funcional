//implementando o map na mão - elemento, indice e array
Array.prototype.meuMap = function(fn) {
    //criamos um array novo vazio e enche ele no final
    const mapeado = [];
    
    for(let i=0; i<this.length; i++) {
        const novo = fn(this[i], i, this);
        mapeado.push(novo);
    }
    return mapeado;
}

/* Observações
    * não pode passar arrow function no prototype
    * senão nao temos acesso ao array
    * precisa do acesso ao array pra usar o operador this
*/

const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99 },
    { nome: 'Impressora', qtd: 0, preco: 649.50 },
    { nome: 'Caderno', qtd: 4, preco: 27.10 },
    { nome: 'Lapis', qtd: 3, preco: 5.82 },
    { nome: 'Tesoura', qtd: 1, preco: 19.20 },
];

//função para mapear apenas os nomes dos produtos
const nomes = produto => produto.nome;
console.log(carrinho.meuMap(nomes));

//função para mapear a quantidade pelo preço
const total = produto => produto.qtd * produto.preco;
console.log(carrinho.meuMap(total));