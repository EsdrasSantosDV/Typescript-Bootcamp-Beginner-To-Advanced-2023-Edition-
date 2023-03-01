class Course {



    //PODEMOS TAMBEM JA NO CONSTRUCTOR CRIAR OS ATRIBUTOS E DAR OS MODIFICADORES DE ACESSO A ELES

    //NÃO E PERMITIDO FAZER MULTIPLOS CONSTRUCTORES IGUAL A GENTE FAZ NO JAVA COM PADRAO E DE INICIALIZAÇÃO
    //MAS MEIO QUE PODEMOS TRONAR OS CAMPOS OPCIONAIS ATRVUINDO VALORES AOS ATRIBUTOS
    constructor(
        private title: string,
        private subtitle="",
        private creationDt=new Date(2000,1,1)
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


const course2 = new Course(
    "Typescript Bootcamp","sadasasd");

//E A CHAMADA DO METODO DO MESMO JEITO QUE E NO JAVA
console.log(course.age())


