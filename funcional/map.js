//map de numeros - transforma no dobro (usando arrow function)
const numbers = [1, 2, 3, 4, 5, 6, 7];

const double = numbers.map(el => el*2)
console.log(double);

//fazendo o map do score dos estudantes
//criando array de objetos { }
const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

const getScore = el => el.score;
const scores = students.map(getScore);
const scoreCeil = students.map(getScore).map(Math.ceil);
console.log(students, scores, scoreCeil);

//o array original continua a mesma coisa 
