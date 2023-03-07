const numbers: (number | string)[]  = [1, 2 ,3,"dsakjdaskj"];


//TEMOS TAMBEM FAZER SPREAD COM ARRAYS
//ADICIONADIO
const moreNumbers = [...numbers, 4, 5, 6];

console.log(moreNumbers);

//PODEMOS FAZER UM DESTRUCTURING DE UM ARRAY TBM
const [first, second, third] = moreNumbers;
//EXEMPLO ACIMA, ELE VAI PEGANDO NA ORDEM QUE ESTA ESCRITO

console.log(first, second, third);
