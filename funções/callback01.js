//função callback - chama a função dentro de outra função

function exec(fn, a, b) {
    return fn(a, b);
}

const somarNoTerminal = (a, b) => console.log(a+b);
const subtraiNoTerminal = (a, b) => console.log(a-b);

exec(somarNoTerminal, 56, 38);
exec(subtraiNoTerminal, 182, 27);

/*  
função setInterval 
*   primeiro parametro: função que vai ser chamada
*   function pode ser passada por const ou dentro do ( ) já
*   segundo parametro: milissegundos que ela vai demorar pra ser chamada
*/

const cb = () => console.log('+2 segundos...');
setInterval(cb, 2000); //2 segundos

setInterval(() => console.log('+5 segundos...'), 5000);

setTimeout(() => console.log('5 segundos se passaram!'), 5000);
