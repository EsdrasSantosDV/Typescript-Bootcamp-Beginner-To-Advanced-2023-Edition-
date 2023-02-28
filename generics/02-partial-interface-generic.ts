
export interface Course {
    title:string;
    subtitle:string;
    lessonsCount: number;
}

//UM EXEMPLO CLARO AQUI
// export interface CourseUpdate{
//     title?:string;
//     subtitle?:string;
//     lessonsCount?: number;
// }
//

//AO INVES DE CRIARMOS UMA INTERFACE UPDATE, TORNANDO TODOS OS ATRIBUTOS DA PRIMEIRA INTERFACE, DE FORMA OPCIONAL
//QUE TERIA MUITA REPETIÇÃO DE CODIGO ATOA, E MAIS COISA PRA DAR MANUTENÇÃO, UTILZIAMOS OUTRA FORMA DE IMPLEMENTAÇÃO

//UTILIZAMOS O GENERIC PARTIAL

//FAZENDO COM QUE TORNAMOS O PARAMETRO update dessa FUNÇÃO DE FORMA QUE OS ATRIBUTOS SEJA PARCIAIS

//UM EXEMPLO CARO DISSO E OS METODOS PATCH, AO INVES DE ALTERARMOS TODO O OBJETO, SO ALTERAMOS PARCIALMENTE SE QUISERMSO

export function updateCourse(
    courseId:string, update: Partial<Course>) {

}

//AQUI MANDAMOS SOMENTE UM ATRIBUTO
updateCourse("1", {
    title: "New version of title"
});

updateCourse("1", {
    subtitle: "New version of subtitle"
});

updateCourse("1", {
    title: "New version of title",
    lessonsCount: 100
});
//E AQUI MANDAMOS OUTRA PARTIÇÃO DA NOSSA INTERFACE
updateCourse("1",{
    title:"djsksaj",
    lessonsCount:1,
    subtitle:"ksadkdsakl"
})