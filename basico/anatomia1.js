//function declaration

//sem parametros e não retorna nada
function sayHello() {
    console.log('Hello!');
}
sayHello();

//com um parametro mas sem retornar nada
function sayHelloTo(name) {
    console.log(`Hello ${name}!`);
}
sayHelloTo('Flavia');
sayHelloTo(); //undefined

//sem parametros que retorna uma string
function returnHi() {
    return 'Hi!';
}
const hi = returnHi();
console.log(hi);
console.log(returnHi());

//com parametro e com retorno
function returnHiTo(name) {
    return `Hi ${name}!`;
}
console.log(returnHiTo('John'));