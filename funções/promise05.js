// tratamento de erro - reject e try catch
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!');
        }
        else {
            resolve(valor);
        }
    });
}

// chamando a promise
funcionarOuNao('Funcionou', 0.8)
    .then(v => console.log(v))
    .then(
        () => console.lo('Sera que funciona?'),
        err => console.log(`Erro dentro do then: ${err}`) //erro especifico do then - o catch de fora não é chamado
    )
    .then(() => console.log('Quase fim'))
    .catch(err => console.log(`Erro: ${err}`)) 
    .then(() => console.log('Fim'))

// geralmente colocamos o catch no final - qualquer erro cai nele
// catch no meio faz com que o proximo then nao receba nenhum valor
