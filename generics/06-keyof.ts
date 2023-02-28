const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

type CourseKeys = keyof Course;


//AQUI O SEGUNDO PARAMETRO SO PODE PROPRIEDADES PERTENCENTES AO PRIMEIRO PARAMETRO
//POR ISSO EXTENDEMOS O KEYOF DO PRIMEIRO
export function extractProperty<T, K extends keyof T>(data: T, property:K) {
    return data[property];
}

//O KEYOF pega um tipo de objeto e produz uma string ou união literal numérica de suas chaves.
//AQUI MANDAMOS O OBJETO E EXTRAIMOS O VALOR DO LESSON COUNT DELE
const val = extractProperty(course, "lessonsCount");


//EXEMPLO AQUI, SE TENRAMOS MANDAR UMA PROPRIEDADE QUE NÃO PERTENCE AO PRIMEIRO PARAMETRO QUE SERIA COURSE, ELE NÃO PERMITE
//const val2= extractProperty(course, "nomedeumpropriedadequenaoexistenoprimeiroparametrodessafuncao");

console.log(val);