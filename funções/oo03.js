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
    this.desconto = desc;

    this.precoFinal = function() {
        return this.preco * (1 - this.desconto);
    } 
}

console.log(typeof Produto); // é uma function

//todas as instancias de Produto terao a função log()
Produto.prototype.log = function () {
    console.log(`Nome: ${this.nome}\nPreço: ${this.preco}`);
}

// (objeto, nome da propriedade, {atributos}) - get e set não pode usar arrow functions
Object.defineProperty(Produto.prototype, 'desc', {
    get: function() {
        return this.desconto;
    },
    set: function(novoDesc) { //setando novo desconto para valores validos
        if(novoDesc>=0 && novoDesc<=1) {
            this.desconto = novoDesc;
        }
    }
});

Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `Desconto de ${this.desconto * 100}%`;
    }
});


//instanciando os objetos
const p1 = new Produto('Caneta', 10);
p1.log();

const p2 = new Produto('Geladeira', 3000);
p2.log();
console.log('Preço final: '+p2.precoFinal());
p2.desc = 3; //ele não muda se o valor for invalido 
console.log('Valor do desconto: '+p2.desconto);
console.log(p2.descString);
