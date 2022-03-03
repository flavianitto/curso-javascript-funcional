//usar map, filter e reduce para calcular a media dos estudantes que tiraram nota acima de 9
const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
];

//filtrar notas boas com filter
const notasBoas = student => student.score >= 9;

//separar só as notas com o map
const notas = el => el.score;

//calcula a media das notas filtradas
const media = (sum, el, i, array) => {
    if(i === array.length-1) {
        return (sum+el) / array.length;
    }
    else {
        return sum+el;
    }
}

//exibindo o resultado
console.log(
    students
        .filter(notasBoas)
        .map(notas)
        .reduce(media)
);

/* Anotações
    * nao precisa recriar os algoritmos do 0
    * tenho funções prontas (pequenas) que já fazem o serviço
    * reaproveitamento de código 
    * coloca tudo em um console.log e mostra os resultados que eu quero
*/