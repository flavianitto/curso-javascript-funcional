//anonymous function
(function(a, b, c) {
    console.log(`Resultado: ${a+b+c}`);
});

//chamando a função anonima usando IIFE (Immediately Invoked Function Expression)
(function(a, b, c) {
    let x = 3; 
    console.log(`Resultado: ${a+b+c}`);
    console.log(`x = ${x}`);
})(1, 2, 3);

//podemos fazer isso sem passar parametros 
(function() {
    let x = 300;
    console.log(x);
})(); //sempre lembrar de colocar ; no final dos parametros

//tambem é possivel fazer com arrow functions
(() => {
    console.log('arrow #01');
})();

//deixando tudo em uma linha só
(() => console.log('arrow #02'))();