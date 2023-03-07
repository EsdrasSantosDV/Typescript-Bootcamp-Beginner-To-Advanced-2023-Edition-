
interface Course {
    title:string;
    subtitle:string;
    stats: {
        lessonsCount:number;
    }
}

let course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    stats: {
        lessonsCount: 10
    }
};

//AQUI FAZEMOS UMA SHALLOW COPY OU COPIAR POR VALOR, TUDO QUE ALTERAR NO OBEJTO ORIGINAL, AFETA TAMBEM O
//OBJETO COPIUADO, PODE SER CONHECIDA TBM COMO COPIA RASA
//O SPREAD OPERATOR FAZ UMA COPIA RASA E NÃO UMA DEEP COPY
const newCourse = {...course
    ,adding:"sdadasdas"};
//BASCIAMENTE O SPREAD COMPARTILHA AS REFERENCIAS DO ORIGINAL, COM  O COPIADO


//PODEMOS TBM ADICIONAR NOVOS CAMPOS
console.log(newCourse);



course.stats.lessonsCount = 100;

console.log(newCourse);
newCourse.title="MUDEI NO COPIADO";
console.log(course);
console.log(newCourse);
