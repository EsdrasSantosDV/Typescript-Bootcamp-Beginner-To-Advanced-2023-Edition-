class Course {



    //PODEMOS TAMBEM JA NO CONSTRUCTOR CRIAR OS ATRIBUTOS E DAR OS MODIFICADORES DE ACESSO A ELES
    constructor(
        private title:string,
        private subtitle:string,
        private creationDt: Date
    ) {

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


