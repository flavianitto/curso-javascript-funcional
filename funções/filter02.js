//implementando o meu método filter
Array.prototype.meuFilter = function(fn) {
    const novoArray = [];

    for(let i=0; i<this.length; i++) {
        const novo = fn(this[i], i, this);
        if(novo) {
            novoArray.push(this[i]);
        }        
    }
    //devolve apenas os elementos que deram verdadeiro no teste
    return novoArray;
}

//testando meuFilter com o exemplo do carrinho
const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99 },
    { nome: 'Impressora', qtd: 0, preco: 649.50 },
    { nome: 'Caderno', qtd: 4, preco: 27.10 },
    { nome: 'Lapis', qtd: 3, preco: 5.82 },
    { nome: 'Tesoura', qtd: 1, preco: 19.20 },
];
 
//filtrando produtos com quantidade maior que 0
const getNomes = item => item.nome;
const qtdMaiorQueZero = item => item.qtd > 0;

//usando filter junto com map
console.log('Filtrando com o filter: ');
const nomeItensValidos = carrinho
    .filter(qtdMaiorQueZero)
    .map(getNomes);
console.log(nomeItensValidos);

//usando meuFilter junto com map
console.log('Filtrando com o meuFilter: ')
const nomeItensValidos2 = carrinho
    .meuFilter(qtdMaiorQueZero)
    .map(getNomes);
console.log(nomeItensValidos2);