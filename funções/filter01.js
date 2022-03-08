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
const itensValidos = carrinho.filter(qtdMaiorQueZero);
console.log(itensValidos);

//usando filter junto com map
const nomeItensValidos = carrinho
    .filter(qtdMaiorQueZero)
    .map(getNomes);
console.log(nomeItensValidos);

//se o filter gerar um array vazio, o map será aplicado em cima desse array vazio
const qtdMuitoGrande = item => item.qtd > 1000;
const nomeItensGrandeQtd = carrinho 
    .filter(qtdMuitoGrande)
    .map(getNomes);
console.log(nomeItensGrandeQtd);