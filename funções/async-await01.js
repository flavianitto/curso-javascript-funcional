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

// await precisa estar dentro de uma função async
// sem o comando await antes ele executa os 3 console de uma vez
async function executar() {
    //preciso que o valor seja resolvido para então mostrar os console de baixo
    let valor = await retornarValor();

    await esperarPor(1500);
    console.log(`Async/Await ${valor}...`); 

    await esperarPor(1500);
    console.log(`Async/Await ${valor+10}...`); 

    await esperarPor(1500);
    console.log(`Async/Await ${valor+20}...`); 
}
executar();

/* node nao permite fazer isso
const v = await executar();
*/
