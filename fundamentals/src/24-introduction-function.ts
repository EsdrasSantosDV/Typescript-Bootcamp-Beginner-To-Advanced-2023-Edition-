
interface Course {
    title:string;
    subtitle: string;
    lessonsCount:number;
}


//O TIPO DE RETONRO PODE SER VOID, QUANDO NÃO PRECISAMOS RETORNAR NADA

//O IDEAL E SEMPRE UTILIZAR UMA INTERFACE PERSONALIZADA PRA RETORNOS
function createCourse(title:string, subtitle:string,
                      lessonsCount:number) :Course {

    console.log(` Creating course with Title: ${title}, 
    Subtitle: ${subtitle} lessons count: ${lessonsCount}`);


    return {
        title,
        subtitle,
        lessonsCount
    };
}

const result = createCourse("Typescript Bootcamp", "Learn the language fundamentals", 100);

console.log(typeof createCourse);
console.log(typeof result);


