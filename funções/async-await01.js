function esperarPor(tempo=2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo);
    })
}

/* metodo sincrono de chamar as promises - usando then
esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))    
    .then(esperarPor);
*/

function retornarValor() {
    return new Promise((resolve => {
        setTimeout(() => resolve(10), 5000)
    }))
}

async function retornarValorDiretamente() {
    return 20; //esse 20 é o valor dentro do resolve
    //promise resolvida logo na hora - não tem o parametro de tempo
}

// await precisa estar dentro de uma função async
// sem o comando await antes ele executa os 3 console de uma vez
async function executar() {
    //preciso que o valor seja resolvido para então mostrar os console de baixo

    //se nao colocar await ele vai colocar uma promise (object Promise) dentro do valor, e nao o valor (20) retornado pela promise
    let valor = await retornarValorDiretamente();

    await esperarPor(1500);
    console.log(`Async/Await ${valor}...`); 

    await esperarPor(1500);
    console.log(`Async/Await ${valor+10}...`); 

    await esperarPor(1500);
    console.log(`Async/Await ${valor+20}...`); 

    return valor+30;
}

async function executarDeVerdade() {
    const valor = await executar();
    console.log(`Async dentro de Async: ${valor}`);
}

executarDeVerdade();

/* node nao permite fazer isso
const v = await executar();
*/
