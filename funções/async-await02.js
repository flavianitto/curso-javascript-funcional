// gerando numeros aleatorios da mega sena - não pode repetir
// numerosGerados é um array com os numeros ja sorteados
function geraNumerosEntre(min, max, numerosGerados) {
    if(min > max) {
        //invertendo os valores das variaveis usando destructuring
        [max, min] = [min, max]; 
    }
    
    //retornando valor aleatorio entre o max e min 
    return new Promise(function(resolve, reject) {
        const fator = max-min+1;
        const aleatorio = parseInt(Math.random()*fator)+min;
        if(numerosGerados.includes(aleatorio)) {
            reject('Número repetido!');
        }
        else {
            resolve(aleatorio);
        }
    })
}

//gerando os numeros - com try catch agora ele pega o erro do throw
async function gerarMegaSena(qtdNumeros, tentativas=1) {
    try {
        const numeros = [];
        // só quero percorrer o array de tamanho qtdNumeros - não importa o conteudo dele
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push(await geraNumerosEntre(1, 60, numeros));
        }
        return numeros;
    } 
    catch(err) {
        //tentando novamente - máximo de 5 tentativas
        if(tentativas>5) {
            throw "Throwing error: número repetido!";
        }
        else {
            return gerarMegaSena(qtdNumeros, tentativas+1);        
        }
    }
}

// gerando os numeros da mega sena - quanto mais numeros, mais dificil fica de ele gerar sem repetir
gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)


/* gerando numeros de forma sincrona
geraNumerosEntre(1, 5, [1, 4])
    .then(console.log)
    .catch(console.log)
*/