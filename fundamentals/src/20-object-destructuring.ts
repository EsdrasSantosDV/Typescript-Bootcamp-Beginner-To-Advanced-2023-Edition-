
interface Course {
    title:string;
    subtitle:string;
    lessonsCount:number;
}

let course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};

printCourse(course);

function printCourse(course:Course) {

    //POSSO com base nos valores das propriedades do objeto de curso com o mesmo nome. DESTRUTURAR UM OBJETO EM CONSTANTS
   // const {title} = course;
    //NO EXEMPLO ACIMA, PEGAMOS SOMENTE O TITULO DO OBJETO course
    //const {title,lessonsCount,subtitle}=course;
    //PODEMOS PEGAR TBM UM POR UM
    //COMO TBM PODEMOS DESTRUTURAR TODOS
    const {...todos}=course;

    console.log(`atributes: ${todos.title} ${todos.subtitle} ${todos.lessonsCount}`);

}
