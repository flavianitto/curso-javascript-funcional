function geraNumerosEntre(min, max, tempo) {
    if(min > max) {
        //invertendo os valores das variaveis usando destructuring
        [max, min] = [min, max]; 
    }
    //retornando valor aleatorio entre o max e min depois de um tempo
    return new Promise(function(resolve) {
        setTimeout(function() {
            const fator = max-min+1;
            const aleatorio = parseInt(Math.random()*fator)+min;
            resolve(aleatorio);
        }, tempo);
    })
}

//funcao que retorna um array com varios numeros aleatorios em tempos diferentes
function gerarVariosNumeros() {
    return Promise.all([
        geraNumerosEntre(1, 60, 4000),
        geraNumerosEntre(1, 60, 1000),
        geraNumerosEntre(1, 60, 500),
        geraNumerosEntre(1, 60, 3000),
        geraNumerosEntre(1, 60, 100),
        geraNumerosEntre(1, 60, 1500),
    ])
}

// só chamar o then quando todas as promises forem resolvidas
// o que mais demora é o de 4 segundos - só imprime no console quando todos os numeros forem gerados

// medindo o tempo de execução 
console.time('promise');

gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => console.timeEnd('promise'));