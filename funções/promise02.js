//callback hell - muitas callbacks aninhadas
/* setTimeout(function() {
    console.log('Executando callback...');

    setTimeout(function() {
        console.log('Executando callback 2...');
            
        setTimeout(function() {
            console.log('Executando callback 3...');
        }, 2000);

    }, 2000);

}, 2000); */

//fazendo esse mesmo processo usando promise
function esperarPor(tempo=2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...');
            resolve();
        }, tempo);
    });
}

//função retorna uma promise - definimos a promise pra fazer o setTimeout
let p = esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)

//muito mais fácil compor as coisas com promise do que com o callback
