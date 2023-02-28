
interface Course {
    title:string;
    subtitle:string;
    lessonsCount: number;
}
//OUTRO EXEMPLO DE GENERIC AQUI, E A INTERFACE READONLY
interface Course {
    readonly title:string;
    readonly subtitle:string;
    readonly lessonsCount: number;
}


//AO INVES DE CRIARMOS UMA INTERFACE REPETIDA, TENDO MAIS CODIGO PRA DIGITAR, COM OS ATRIBUTOS READONLY
//PODEMOS UTILIZAR A INTERFACE SOMENTE LEITURA, QUE ACEITA QUALQUER TIPO RPA SER INFERIDO
function freezeCourse(course:Course): Readonly<Course> {

    //CONGELAMOS, ELE, ELE NÃO PODE SER MAIS EDITADO ESSE OBJETO
    return Object.freeze(course);
}

const frozen = freezeCourse({
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
});


