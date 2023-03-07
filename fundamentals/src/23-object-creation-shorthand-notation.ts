
interface Course {
    title:string;
    subtitle: string;
    lessonsCount:number;
}

const title = "Typescript Bootcamp",
    subtitle = "Learn the language fundamentals, build practical projects",
    lessonsCount = 10;


//SE TIVER ATRIBUTOS COM O MESMO NOME DA INTERFACE, NÃO PRECISA ATRIBUIR
const course:Course = {
    //COMO E MESMO NOME DOS ATRIBUTOS DA INTERFACE NAO PRECISO FAZER ISSO AQUI
  //  title:title,
    //SE FOR DIFERENTE PRECISO FAZER ISSO
    //title:title2,
    title,
    subtitle,
    lessonsCount
};

console.log(course);
