
interface Course {
    title:string;
    lessonsCount:number;
}

const course1:Course = {
    title: "Typescript Bootcamp",
    lessonsCount: 100
};

const course2: Course = {
    title: "Angular For Beginners",
    lessonsCount: 20
};

//UTILIZANDO O SPREAD OPERATOR, PODEMOS TORNAR ESSE PARAMETRO CRESCENTE, O QUE QUER DIZER QUE PODEMOS AO INVES DE MANDAR UM ARRAY
//COM TODOS  OS CURSOS NA CHAMADA DESSA FUNCAO, PODEMOS MANDAR UM A UM, E QUANDO CHEGAR AQUI VAI TER TODOS
//ISSO FAZ COM QUE ESSE PARAMETRO SEJA CRESCENTE,MAS ELE PRECISA NESSE CASO SER O UTILMO, SENÃO VAI DAR RUIM
function printCourses(message:string, ...courses: Course[]) {

    console.log(message);

    for (let course of courses) {
        console.log(course.title);
    }

}

printCourses("Welcome to the Angular University", course1, course2,{title:"dsakdsadsa",lessonsCount:1234});


