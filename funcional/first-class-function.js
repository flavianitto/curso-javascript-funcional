//first class function - functions são tratadas como qualquer outra variavel
//conceito de function expression

//soma
const sum = function(a, b) {
    return a+b;
}

//subtração
const sub = function(a, b) {
    return a-b;
}

//multiplicação com arrow function
const mult = (a, b) => a*b;

//divisão com arrow function
const div = (a, b) =>  a/b;


console.log('Soma: '+sum(10, 15));
console.log('Subtração: '+sub(30, 15));
console.log('Multiplicação: '+mult(2, 100));
console.log('Divisão: '+div(1500, 3));
