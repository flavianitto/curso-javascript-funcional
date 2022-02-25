//anonymous function - nao tem nome, só os parametros e o retorno
(function (a, b, c) {
    return a + b + c;
})


//function expression - a variavel vira uma funcao
const sum = function(a,b) {
    return a+b;
}

//chamando essa função passando parametros
console.log(sum(1, 5));

//tambem da pra criar outra variavel que aponta para essa variavel que virou função
const anotherSum = sum;
console.log(anotherSum(10, 10));

//variaveis podem receber qualquer valor 
let x = 3;
x = sum;
console.log('x: '+x(15, 10));
x = 'agora virou string';
console.log('x: '+x);
