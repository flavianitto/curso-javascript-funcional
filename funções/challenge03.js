/* Desafio
    * usar promise pra encapsular a chamada de um arquivo 
    * continuar chamando com o readFile mas agora dentro de um promise
    * o resultado da promise vai ser um caminho (path) e esse caminho vai ser o conteúdo do arquivo 
*/
const fs = require('fs');
const path = require('path');

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString());
        });
        //console.log('Depois de ler');
    });
}

const caminho = path.join(__dirname, 'dados.txt');

lerArquivo(caminho)
   // .then(conteudo => console.log(conteudo))
    .then(conteudo => conteudo.split('\n')) //separando as linhas
   // .then(linhas => console.log(linhas[1])) //pegando apenas a linha[1]
    .then(linhas => linhas.join(','))
    .then(conteudo => `Conteudo do arquivo: ${conteudo}`)
    .then(console.log)