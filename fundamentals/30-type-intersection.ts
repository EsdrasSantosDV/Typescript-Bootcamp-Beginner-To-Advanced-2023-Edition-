
interface HasId {
    id:string;
    testenumber:number;
}
interface HasTitle {
    title:string;
    description:string;
}

//ESSE OPERADOR DE INTERSEÇÃO, ESTAMOS DIZENDO QUE O TIPO COURSE, TEM TANTOS OS ATRIBUTOS DO HASID E TANTO DO HASTITLE
type Course = HasId & HasTitle;

let course: Course = {
    id:"dsasdads",
    description:"dsdsaasd",
    title:"asdssad",
    testenumber:10
};

console.log(course);