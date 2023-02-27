
interface Course {
    readonly title:string,
    subtitle:string,
    lessonsCount?:number
}

const course: unknown = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};

if (isCourse(course)) {

}

//TYPE PREDICATE Acontece que o TypeScript tem algo chamado proteção de tipo .
// Um protetor de tipo é alguma expressão que executa uma verificação de tempo de execução que garante o tipo em algum escopo.
// Usando predicados de tipo
// Para definir um type guard, basta definir uma função cujo tipo de retorno seja um tipo predicado :



//BASICAMENTE O MELHOR JEITO DE FAZER UM TYPE GUARD, SERIA ESSE
//Com essa função, é possível verificar com segurança se um valor é do tipo Course antes de utilizá-lo em outras partes do código, o que ajuda a evitar erros de tempo de execução e melhora a qualidade do código.
//O PREDICATE E UM JEITO DE VERIFICAR SE ESSE OBJETO E UM CURSO, SE ELE NÃO FOR RETORNA FALSE, E A MELHOR FORMA DE 
function isCourse(value: unknown): value is Course {
    //FAZEMOS UM CASTING PRA TER A PROTECAO DE TIPO
    const course = value as Course

    //SE TIVER AS DUAS PROPS,ESSE OBJETO E UM CURSO
    return course?.title != null && course?.subtitle != null;
}


