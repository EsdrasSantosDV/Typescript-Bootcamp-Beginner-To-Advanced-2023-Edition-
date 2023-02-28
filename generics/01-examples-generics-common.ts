
//DOIS EXEMPLOS QUE NOS TEMOS DE UTILIZAÇÃO DO GENERICS, O PRIMEIRO DELES E O ARRAY
//TODAS AS OPERAÇOS DO Array SÃO FEITAS DE FORMA GENERICA, PRA QUALQUER TIPO
//NAO PRECISARIAMOS CRIAR UM ESTRUTURA PRA MANIPULAR ARRAYS DE STRING POR EXEMPLO
//SO PRECISAMOS INFERIR AQUI O TIPO, E O ARRAY JA SE TORAN NUMERICO
const numbers = new Array<number>();



//AQUI SE VOCE VER, O PUSH MANIPULA NUMBER,
numbers.push(10);


//SE TENTARMOS POR EXEMPLO COLOCAR UMA STRING, NÃO VAI PERMIITR
//numbers.push("jdsakdsakj");



//OUTRO EXEMPLO CLARO E A PROMISE, AQUI ESTAMOS DIZENDO QUE O TIPO INFERIDO DE RETORNO E UMA STRING, MAS PODERIAMOS COLCOAR QUALQUER VALOR

//VARIAS LIBS UTILIZAM GENERICS COMO APDRÃO
const promise = new Promise<string>((resolve, reject) => {

    resolve("Hello World");

});

promise.then(val => {


})