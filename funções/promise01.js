let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
});


// then é para cumprir a promessa - posso chamar varias then com as functions dentro de cada uma
// o resultado é passado para o próximo then como parametro 
// promises retornam apenas UM valor - pode ser do tipo que eu quiser
p
    .then(primeiroElemento = array => array[0])    
    .then(primeiraLetra = nome => nome[0])
    .then(minuscula = letra => letra.toLowerCase())
    .then(console.log)