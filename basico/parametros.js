//função que recebe 3 parametros 
function showParams(a, b, c) {
    console.log(a, b, c);
}

//fazendo testes - nenhum deles dá erro
showParams(1, 2, 3, 4, 5);
showParams(1, 2, 3);
showParams(1, 2);
showParams(1);
showParams();

//definindo valores padrão para os parametros
function defaultParams(a=1, b=2, c=3) {
    console.log(a, b, c);
}
defaultParams(7, 8); 
defaultParams(1); 
defaultParams(); 

//como passar valores de uma forma flexivel - usar arrays
function showNumbers(nums) {
    for(let n of nums) {
        console.log(n);
    }
}
console.log('Mostrando array: ');
showNumbers([1, 2, 3, 4, 5]);

//operador spread/rest
function showNumbers2(...nums) {
    console.log(nums);
}
console.log('Mostrando array com spread/rest: ');
showNumbers2(1, 2, 3, 4, 5, 6, 7);

//operação de soma com spread/rest
function sumAll(...nums) {
    let sum=0;
    for(let i of nums) {
        sum += i;
    }
    return sum;
}
console.log('Soma: '+sumAll(1, 2, 3, 4, 5, 6));
