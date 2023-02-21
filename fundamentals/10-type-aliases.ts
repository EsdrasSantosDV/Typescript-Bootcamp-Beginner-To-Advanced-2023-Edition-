
type CourseStatus = "draft" | "published" | "unpublished" |
    "archived";

let courseStatus:CourseStatus  = "draft";

let newStatus:CourseStatus = "published";

//PODEMOS FAZER UM TIPO SEM PRECISAR UTILIZAR INTERFACE NO MOMENTO
//JA NOS MELHORA A INFERENCIA DE TIPO,TORNANDO ELE MAIS TYPE SAFE
//USAMOS MAIS INTERFACES QUE O TYPE ALIASES
type Course = {
    readonly title:string,
    subtitle:string,
    lessonsCount?:number
};

let course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};

