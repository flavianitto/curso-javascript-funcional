//retorno de uma função a partir de outra função
function finalPrice(tax) {
    return function(price) {
        return price * (1+tax);
    }
}
//como é uma função anonima logo em seguida - podemos passar os parametros do lado
console.log(finalPrice(0.0875) (25.1));

/* Vantagens de quebrar em varias funções
    * podemos armazenar a função dentro de uma constante
    * em vez de declarar 0.0875 toda vez - joga dentro de uma const
    * ai dá pra passar so o parametro da função anonima
    * o preço final de NY ja fica fixo 
 * resumindo:
    * melhor reaproveitamento de código
    * posso passar os parametros parcialmente - usando variaveis
    * essa técnica de quebrar em varias funções se chama curring
    * em exemplos maiores é muito util o curring
*/

const nycFinalPrice = finalPrice(0.0875);
console.log(nycFinalPrice(21.2));
console.log(nycFinalPrice(105.9));