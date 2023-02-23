
//PODEMOS CONSTRUIR UMA INTERFACE DESSE MODO
interface Course {
    readonly title:string;
    subtitle:string;
}

const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};

//ELA E MELHOR QUE O TYPE, PQ PODEMOS DEPOIS COLOCAR MAIS ATRIBUTOS NELA
//E NO TYPE NÃO CONSEGUIMOS
interface Course {
    //ESSE ? FAZ COM QUE OS ATRIBUTOS QUE TENHAM ISSO NÃO SEJAM OBRIGATORIO
    lessonsCount?:number;
}


const otherCourse: Course = {
    title: "Typescript Bootcamp v2",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};
