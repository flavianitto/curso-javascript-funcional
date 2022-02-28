//função que passa como parametro uma outra função
function run(funcao) {
    //return funcao();
    return `Result = ${funcao()}`;
}

function sayHello() {
    console.log(`Hello!`);
}

//nao invocar a função que é passada como parametro - ela nao retorna nada
run(sayHello);

//passando uma função anonima como parametro
run(function() {
    console.log('Função anonima');
})

//passando uma função que já é interna do JS
const result = run(Math.random);
console.log(result);