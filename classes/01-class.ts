class Course {
    //NO TYPESCRIPT PODEMOS CONSTRUIR AS CLASSES DA MESMA FORMA QUE TAMO ACOSTUMADO

    //COLOCANDO OS ATRIBUTOS
    //POR PADRAO O MODIFICADOR DE ACESSO E O PUBLICO, ENTÃO NÃO PRECISAMOS DEFINIR PUBLIC ANTES DO ATRIBUTO
    title:string;
    subtitle:string;
    creationDt: Date;

    //TEMOS DA MESMA FORMA O CONSTRUCTOR RESPONSAVEL PELA INICIALIZAÇÃO DA CLASSE
    constructor(
        title:string,
        subtitle:string,
        creationDt: Date
    ) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }


    //TEMOS OS COMPORTAMENTOS

    //PRA ACESSAR OS VALORES DOS ATRIBUTOS TEMOS O THIS
    age() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();
        return Math.round(ageInMs / 1000 / 60 / 24);
    }

}

//TEMOS AQUI A NOSSA INSTANCIA DA NOSSA CLASSE
const course = new Course(
    "Typescript Bootcamp",
    "Learn the language fundamentals, build practical projects",
    new Date(2000,1,1));

//E A CHAMADA DO METODO DO MESMO JEITO QUE E NO JAVA
console.log(course.age())


