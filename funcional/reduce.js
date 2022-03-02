//somar todos os numeros
const numbers = [1, 2, 3, 4, 5, 6];

const soma = (total, el) => total+el;
const total = numbers.reduce(soma, 100);
console.log(total);

/* Parametros do reduce
    * 1º é a função que vai ser usada pro reduce
    * 2º é valor inicial    
*/

//calculando media do array numbers
const media = (sum, el, i, array) => {
    if(i === array.length-1) {
        return (sum+el) / array.length;
    }
    else {
        return sum+el;
    }
}
console.log(numbers.reduce(media));