function bomDia() {
    console.log('Bom dia!');
}

const boaTarde = function() {
    console.log('Boa tarde!');
}

// 1) passar função como parametro
function chamaFuncao(fn) {
    if(typeof fn === 'function') {
        return fn();
    }
    else {
        console.log('Não é uma function!');
    }
}

//não invoca as funções bomDia() e boaTarde(), só passa o nome delas
chamaFuncao(bomDia);
chamaFuncao(boaTarde);

// 2) retornar uma função a partir de outra função
function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp);
    }
}
//passa a base e o expoente separado
const pow34 = potencia(3);
console.log(pow34(4));

//passa os parametros da segunda function logo em seguida
const bits8 = potencia(2)(8); 
console.log(bits8);