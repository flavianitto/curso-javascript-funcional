const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99 },
    { nome: 'Impressora', qtd: 0, preco: 649.50 },
    { nome: 'Caderno', qtd: 4, preco: 27.10 },
    { nome: 'Lapis', qtd: 3, preco: 5.82 },
    { nome: 'Tesoura', qtd: 1, preco: 19.20 },
];

//função para mapear apenas os nomes dos produtos
const nomes = produto => produto.nome;
console.log(carrinho.map(nomes));

//função para mapear a quantidade pelo preço
const total = produto => produto.qtd * produto.preco;
console.log(carrinho.map(total));