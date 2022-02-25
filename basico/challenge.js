/*criar uma função range (intervalo)
*   a ideia é trabalhar com diferentes tipos de parametros
*   função precisa gerar um array 
*   range(5) -> [1, 2, 3, 4, 5] = do 1 até o parametro passado
*   range(6, 11) -> [6, 7, 8, 9, 10, 11] = 6 > 11 crescente do 6 até o 11
*   range(10, 19, 2) -> [10, 12, 14, 16, 18] = dentro do intervalo pulando de 2 em 2
*   range(6, 2) -> [6, 5, 4, 3, 2] = 6 < 2 decrescente do 6 até o 2
*   range(8, -3, 4) -> [8, 4, 0] = do 8 até o -3 pulando de 4 em 4
*/

function range(a, b, s=1) {
  const x = b === undefined ? 1 : a; //se for undefined, x=1 senao x=a
  const y = b === undefined ? a : b; //se for undefined, x=a senao x=b

  const array = [];
  const step = x<=y ? Math.abs(s) : -Math.abs(s); //definindo o passo

  //condicional dentro do for => se x<y entao vai até i<=y, senao, i=>y
  for (let i=x; x<=y ? i<=y : i>= y; i+=step) {
    array.push(i);
  }
  return array;
}
console.log(range(5));
console.log(range(6, 11));
console.log(range(10, 19, 2));
console.log(range(6, 2));
console.log(range(8, -3, 4));
