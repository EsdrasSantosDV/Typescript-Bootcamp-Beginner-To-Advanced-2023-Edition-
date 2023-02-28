const someData = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

const moreData = {
    seqNo: 10,
    price: 100,
    title:"dsjakjd"
}


//NESSE EXEMPLO AQUI QUEREMOS RETORNAR UM OBJETO COM OS ATRIBUTOS DO SOME DATA E DO MORE DATA, UTILIZANDO A INTERSEÇÃO
//e pra ISSO RECEBEMOS DOIS PARAMETROS DE FORMA GENERICA

//E ASSIM QUE MANDAMSO OS PARAMETROS DE FORMA GENERICA
export function merge<T, U>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2) as (T & U);
}

//SE VOCE VER ELE E A INTERSECAO DOS DOIS, tTENDO TANTOS OS ATRIBUTOS DO SOME DATA, QUANTO DO MORE DATA
const merged = merge(someData, moreData);



