interface Course {
    title:string;
    subtitle: string;
    lessonsCount:number;
}

//PODEMOS CRIAR TIPOS DE FUNCOES, POR EXEMPLO ESSA, CRIA E RETORNA UM CURSO
type CreateCourse = (title:string, subtitle:string, lessonsCount:number) => Course;


type OnCourseCreated = (course: Course) => void;


const createCourse = (title:string, subtitle:string,
                      lessonsCount:number, callback: OnCourseCreated) => {

    console.log(` Creating course with Title: ${title}, 
    Subtitle: ${subtitle} lessons count: ${lessonsCount}`);

    const course = {
        title,
        subtitle,
        lessonsCount
    };

    callback(course);

    return course;
}
