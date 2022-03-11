//criar uma função que gera um número aleatório entre dois numeros
function geraNumerosEntre(min, max) {
    if(min > max) {
        //invertendo os valores das variaveis usando destructuring
        [max, min] = [min, max]; 
    }
    
    //retornando valor aleatorio entre o max e min 
    return new Promise(function(resolve) {
        const fator = max-min+1;
        const aleatorio = parseInt(Math.random()*fator)+min;
        resolve(aleatorio);
    })
}

//chamando a promise usando template string
geraNumerosEntre(1, 60)
    .then(numero => numero+10)
    .then(numerox10 => `O número aleatório gerado foi: ${numerox10}`)
    .then(console.log);
