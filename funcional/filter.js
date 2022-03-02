const numbers = [1, 2, 3, 4, 5, 6, 7];

//filtrando os numeros - exemplos da aula
const maioresQueZero = el => el>0;
console.log('Maiores que 0: '+numbers.filter(maioresQueZero));

const maioresQueDez = el => el>10;
console.log('Maiores que 10: '+numbers.filter(maioresQueDez));

const pares = el => el%2 === 0;
console.log('Pares: '+numbers.filter(pares));

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

//filtrando notas maiores que 9 - array original não é alterado
const notas = student => student.score >= 9;
console.log('Alunos com nota >= 9: ');
console.log(students.filter(notas));
console.log('Array original: ');
console.log(students);