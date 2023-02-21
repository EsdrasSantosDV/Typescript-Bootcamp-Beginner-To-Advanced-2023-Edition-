
let course = null

// ESSE OPERADOR AQUI ? E O OPERADOR  DE ENCADEAMENTO OPCIONAL

/*
O operador de encadeamento opcional provê uma forma
 de simplificar o acesso a valores através de objetos conectados,
  quando é possível que uma referência ou
função possa ser undefined ou nulL.
 */

//TEMOS TAMBEM O OPERADOR DE COALESCING NULL QUE COLOCA UM VALOR ESPECIFICO
//PRA QUANDO FOR UNDEFINED OU NULL
const tile=course?.textFields?.title ?? "Não tem valor";

console.log(tile);

if(course?.textFields?.title)
{
    console.log("title "+course.textFields.title);
}
