interface Course {
    title:string;
    subtitle:string;
    lessonsCount: number;
}


//NO EXEMPLO ANTERIOR, VIMOS COMO UTILIZAR A INTERFACE READONLY

//MAS PODEMOS GENERIZAR AQUELA FUNCAO LA, PODENDO ASSIM RECEBER QUALQUER OBJETO OU TIPO, PRA TORNAR ESSE OBEJTO READONLH
export function freezeCourse(course:Course): Readonly<Course> {
    return Object.freeze(course);
}

function freezeLesson(lesson:Lesson): Readonly<Lesson> {
    return Object.freeze(lesson);
}
//A UNICA DIFERENCA E QUE AQUI O TIPO QUE RECEBE NESSE PARAMETRO NÃO PDOE SER TIPO PRIMITIVO
//SOMENTE OBJETOS
//O BOM DO TYPESCRIPT E QUE NÃO PRECISAMOS INFERIR O TIPO LA NA CHAMADA, NAS OUTRAS LINGUAGENS PRECISAMOS
//AQUI O SYSTEM INFERENCE JA FAZ ISSO POR DEBAIXO DOS PANOS
//POR NOTAÇÃO COLCOAMOS T MAS PODERIA SER QUALQUER LETRA MAISUCLA
function freeze<T extends object>(input: T): Readonly<T> {
    return Object.freeze(input);
}

const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

//SO PRECISMAOS MANDAR O OBJETO, ELE JA TORNA NOSSO OBJETO READONLY, NESSA FUCNAO GENERICA
const frozenCourse = freeze(course);
//COMO FALEI ANTES NÃO PRECISAMOS FAZER ISSO AQUI
const frozeCo2=<Course>freeze(course);


//SE TERTAMOS MANDAR UM TIPO PRIMITOV, COMO STRING, VAI DAR PAU, EELE NEM PERMITE
// const frozenNumber = freeze("10");


//SE TENTAMOS GRAVAR NOVAMENTE OUTRO VALOR DA PAU
//frozenCourse.title = "";

interface Lesson {
    title:string;
    seqNo:number;
}

const frozenLesson = freeze({
    title: "Lesson Title",
    seqNo: 10
})