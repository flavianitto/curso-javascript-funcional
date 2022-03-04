// criar função somar(1)(2)(3)
function somar(a=0) {
    return function(b=0) {
        return function(c=0) {
            return a+b+c;
        }
    }
}
let soma = somar(3)(4)(5);
console.log(soma);


// criar função calcular(3)(7)(fn) 
// essa fn vai pegar os valores dos primeiros parametros 
// somar, subtrair, multiplicar e dividir
function sum(a=0, b=0) {
    return a+b;
}
function sub(a=0, b=0) {
    return a-b;
}
function mult(a=0, b=0) {
    return a*b;
}
function div(a=1, b=1) {
    return a/b;
}
function calcular(a) {
    return function(b) {
        return function(fn){
            return fn(a, b);
        }
    }
}
let resultado = calcular(10)(20)(sum);
console.log('Soma: '+resultado);

resultado = calcular(100)(50)(sub);
console.log('Subtração: '+resultado);

resultado = calcular(3)(5)(mult);
console.log('Multiplicação: '+resultado);

resultado = calcular(1600)(4)(div);
console.log('Divisão: '+resultado);