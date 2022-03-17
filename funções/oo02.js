// criando classe, construtor e metodos
class Produto {
    constructor(nome, preco, desc = 0.50) {
        this.nome = nome; //podemos fazer o get e o set separado - todos passam pelo set nome que deixa em maiusculo
        this.preco = preco;
        this.desc = desc;    
    }

    get nome() {
        return `Produto: ${this.nomeMaiusculo}`;
    }

    set nome(novoNome) {
        this.nomeMaiusculo = novoNome.toUpperCase();
    }

    //validação do preço - se nao ele nao altera o valor
    get preco() {
        return this.precoAtualizado;
    }
    set preco (novoPreco) {
        if(novoPreco>=0) {
            this.precoAtualizado = novoPreco;
        }        
    }

    //nao usa o comando function 
    //se tiver o metodo get - chama como atributo
    //se for sem o get tem que chamar como função()
    get precoFinal() {
        return this.preco * (1 - this.desc);
    }
}

//instanciando os objetos da classe produto 
const p1 = new Produto('Caneta', 10);
//p1.nome = 'caneta'; //fica em maiusculo pq chamamos o metodo e não o atributo do construtor
console.log(p1.nome);
console.log('Preço original: '+p1.preco);
console.log('Preço com desconto: '+p1.precoFinal);


const p2 = new Produto('Geladeira', 10000, 0.80);
console.log('\n'+p2.nome);
console.log('Preço original: '+p2.preco);
p2.preco = -200; //passando um valor invalido - ele nao altera
console.log('Preço alterado: '+p2.preco);
console.log('Preço com desconto: '+p2.precoFinal);