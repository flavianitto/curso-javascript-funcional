// arrow function com função anonima
const felizAnoNovo = () => console.log('Feliz Ano Novo!!!');
felizAnoNovo();

const saudação = nome => `Eai, ${nome}, beleza?`;
console.log(saudação('Diego'));

/* 
arrow function pode ser substituida por uma function normal 
    const somar = exemplo => exemplo+2;
    ==
    const somar = function(exemplo) {
        return exemplo+2;
    }
*/

const somar = numeros => {
    let total=0; 
    for(let n of numeros) {
        total += n;
    }
    return total;
}
console.log(somar([1, 2, 3, 4, 5]));

//quantidade de parametros variaveis - spread/rest
const somar2 = (...numeros) => {
    let total=100; 
    for(let n of numeros) {
        total += n;
    }
    return total;
}
console.log(somar2(10, 20));
console.log(somar2(10, 20, 30));
console.log(somar2(10, 20, 30, 40, 50));

//usando arrow function - função dentro de outra função
const potencia = base => exp => Math.pow(base, exp);
console.log(potencia(10)(2));


/*  
operador this (extra)
    * nao conseguimos usar arrow function
    * usado para criar novas funcionalidades para os Arrays, nesse caso
    * conceito tem mais a ver com Orientação a Objetos do que com funções
*/
Array.prototype.ultimo = function() {
    console.log('ultimo: '+this[this.length-1]);
}
Array.prototype.primeiro = function() {
    console.log('primeiro: '+this[0]);
}
Array.prototype.log = function() {
    console.log('array: '+this);
}
const sequencia = [-100, 1, 2, 3, 4, 5, 100];
sequencia.ultimo();
sequencia.primeiro();
sequencia.log();