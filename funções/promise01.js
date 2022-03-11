let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

// criando as functions separadamente pra só passar como parametro no then
const primeiroElemento = arrayOuString => arrayOuString[0]; //podemos reaproveitar no segundo then
const minuscula = letra => letra.toLowerCase();

// then é para cumprir a promessa - posso chamar varias then com as functions dentro de cada uma
// o resultado é passado para o próximo then como parametro 
// promises retornam apenas UM valor - pode ser do tipo que eu quiser

p
    .then(primeiroElemento)    
    .then(primeiroElemento)
    .then(minuscula)
    .then(console.log)
