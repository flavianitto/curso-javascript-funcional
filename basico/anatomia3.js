//function expression
const increment1 = function(n) {
    return n+1;
}

//arrow function 
const increment2 = (n) => {
    return n+1;
}

console.log(increment1(1));
console.log(increment2(5));

//simplificando a arrow function de apenas 1 parametro
const increment3 = n => {
    return n+1;
}
console.log(increment3(10));

//simplificando mais ainda - forma mais simplificada que tem
const increment4 = n => n+1; //não posso colocar return pq nao tem { }
console.log(increment4(24));

//arrow function com 2 parametros
const sum = (a, b) => a+b;
console.log(sum(15, 100));
