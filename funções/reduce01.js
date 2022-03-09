const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99 },
    { nome: 'Impressora', qtd: 0, preco: 649.50 },
    { nome: 'Caderno', qtd: 4, preco: 27.10 },
    { nome: 'Lapis', qtd: 3, preco: 5.82 },
    { nome: 'Tesoura', qtd: 1, preco: 19.20 },
];
 
// map para separar os precos 
const calculaPreco = item => item.qtd * item.preco;
const total = carrinho.map(calculaPreco);
console.log('Array de preços: ');
console.log(total);

// reduce para calcular a soma total do carrinho
console.log('\nOperações de soma: ');
const soma = (acc, el) => {
    console.log(acc+' + '+el);
    return acc+el;
}

const totalGeral = total.reduce(soma, 0);
console.log('\nSoma de todos os itens: ');
console.log(totalGeral);