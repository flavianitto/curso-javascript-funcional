const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtd: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtd: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtd: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtd: 1, preco: 19.20, fragil: true },
];


// OBS: usar map, filter e reduce nos desafios

/* 
// 1. mostrar apenas os itens com fragil: true
console.log('Itens frágeis: ');
const filtraFrageis = item => item.fragil;
const nomesFrageis = item => item.nome;
const frageis = carrinho
    .filter(filtraFrageis)
    .map(nomesFrageis);
console.log(frageis);


// 2. mostrar total = qtd * preco
console.log('\nTotal calculado: ');
const calculaPreco = item => item.qtd * item.preco;
const total = carrinho
    .filter(filtraFrageis)
    .map(calculaPreco);
console.log(total);
*/

// 3. calcular a media dos totais (qtd * preco) - calcular dentro da função e retornar como objeto
console.log('\nMédia calculada: ');

const filtraFrageis = item => item.fragil;
const calculaPreco = item => item.qtd * item.preco;
const calculaMedia = (acc, el) => {        
    const novaQtd = acc.qtd + 1;
    const novoTotal = acc.total + el;

    //retornando o objeto com qtd, total e media
    return {
        qtd: novaQtd,
        total: novoTotal,
        media: novoTotal / novaQtd
    }
}

const mediaInicial = { qtd: 0, total: 0, media: 0 };
const mediaFinal = carrinho
    .filter(filtraFrageis)
    .map(calculaPreco)
    .reduce(calculaMedia, mediaInicial)
    .media;
console.log(`A média é ${mediaFinal}`);
