/*
podemos ter acesso a 3 parametros no dobro
    * primeiro é o elemento
    * segundo é o indice
    * terceiro é o array 
*/

//faz a callback do dobro dentro da função map
const nums = [1, 2, 3, 4, 5];
const dobro = n => n*2;
const dobroia = (n, i, a) => n*2 + i + a.length;

console.log('Array: '+nums);
console.log('Dobro: '+nums.map(dobro));
console.log('Dobro+(i)+(a.length): '+nums.map(dobroia));

//tranformando apenas a primeira letra dos nomes
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'];
const primeiro = nome => nome[0];
const letras = nomes.map(primeiro);
console.log(nomes, letras);
