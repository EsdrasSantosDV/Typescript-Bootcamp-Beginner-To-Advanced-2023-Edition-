
interface Course {
    title:string;
    subtitle: string;
    lessonsCount:number;
}

//PODEMOS DEFINIR TUPLAS, AO INVES DE USARMOS INTERFACES PERSONALIDAS NOS RETORNOS DAS FUNCOES, PODEMOS DEFINIR UMA TUPLA
type CourseRecord = [string,string, number];
//POR EXEMPLO SE EU DEFINRI UM NUMBER, COMO SEGUNDO PARAMETRO JA DA PAU
// type CourseRecord = [string,number,string];
const courseRecord: CourseRecord =
    ["Typescript Bootcamp","Learn the language fundamentals", 100];

function createCourse(title:string, subtitle:string): CourseRecord {

    console.log(` Creating course with Title: ${title}, Subtitle: ${subtitle} `);
    //MAS O IDEAL MESMO E UTILIZAR INTERFACES PERSONALIDAS, NOS RETORNOS DAS FUNCOES
    return [title, subtitle, 100];
}
