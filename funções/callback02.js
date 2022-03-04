//importando as bibliotecas do node
const fs = require('fs');
const path = require('path');

//concatena o caminho do diretorio atual com o arquivo de dados
const caminho = path.join(__dirname, 'dados.txt');

/* 
function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString());
}
*/

//como nao usamos o primeiro parametro, podemos colocar _ só por convenção
function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString());
}

/* 
console.log('Conteúdo do arquivo: ');
fs.readFile(caminho, {}, exibirConteudo);
*/

//lendo o arquivo usando arrow function como parametro
console.log('Conteúdo do arquivo acessado por arrow function: ');
fs.readFileSync(caminho, exibirConteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
console.log('Fim arrow');

//leitura síncrona dos dados - ele espera o callback 
console.log('Inicio Sync: ');
const content = fs.readFileSync(caminho);
console.log(content.toString());
console.log('Fim Sync...\n');
