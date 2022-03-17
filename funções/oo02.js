// criando classe, construtor e metodos
class Produto {
    constructor(nome, preco, desc = 0.50) {
        this.nome = nome;
        this.preco = preco;
        this.desc = desc;    
    }

    //nao usa o comando function 
    //se tiver o metodo get - chama como atributo
    //se for sem o get tem que chamar como função()
    precoFinal() {
        return this.preco * (1 - this.desc);
    }
}

//instanciando os objetos da classe produto 
const p1 = new Produto('Caneta', 10);
console.log(p1.nome);
console.log('Preço original: '+p1.preco);
console.log('Preço com desconto: '+p1.precoFinal());


const p2 = new Produto('Geladeira', 10000, 0.80);
console.log(p2.nome);
console.log('Preço original: '+p2.preco);
console.log('Preço com desconto: '+p2.precoFinal());
