//function declaration
function bomDia() {
    console.log('Bom dia!');
}
bomDia();

//function expression - armazenando função dentro de uma variavel
const boaTarde = function() {
    console.log('Boa tarde!');
} 
boaTarde();

//flexibilidade dos parametros - parametros a mais e a menos - definindo valor default
function somar(a=0, b=0) {
    return a+b;
}
let result = somar(4, 10);
console.log(result)

result = somar(1, 10, 15, 20);
console.log(result);

result = somar(1);
console.log(result);

result = somar();
console.log(result);