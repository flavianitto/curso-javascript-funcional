/* anotações
    * uso da palavra this 
    * toda vez que criar uma nova instancia da classe produto vou poder acessar o nome correto dessa determinada instancia
    * this deixa os atributos publicos - acessiveis para todos os escopos
    * se eu quiser criar atributos privados - uso o let e deixo como variavel interna da função
    * let não é acessivel a outros escopos 
*/

//função construtora
function Produto(nome, preco, desc=0.50) {
    this.nome = nome;
    this.preco = preco;
    this.desc = desc;

    //calculando o preço final com o desconto
    this.precoFinal = function() {
        return this.preco * (1 - this.desc);
    } 
    
    //let privado = 3;
}

//instanciando os objetos
const p1 = new Produto('Caneta', 10);
console.log(p1.nome);
console.log('Preço original: '+p1.preco);
console.log('Preço com desconto: '+p1.precoFinal());


const p2 = new Produto('Geladeira', 3000);
console.log(p2.nome);
console.log('Preço original: '+p2.preco);
console.log('Preço com desconto: '+p2.precoFinal());
