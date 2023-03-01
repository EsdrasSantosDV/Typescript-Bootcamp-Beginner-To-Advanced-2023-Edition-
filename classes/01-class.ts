import {HasId} from "./02-interfaces";
class Course  implements HasId{

    //TEMOS AQUI ATRIBUTOS STATICOS, QUE ESTÃO NO CONTEXTO DA CLASSE
    //E NÃO DAS INSTANCIAS DELA
    private static TOTAL_COURSES = 0;

    //PODEMOS TRANSFORMAR ESSES ATRIBUTOS ESTATICOS, TBM DEE SOMENTE LEITURA
    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp";

    //PUBLICO PROTECTED PRIVATE
    //QUANDO COLOCAMOS O MODIFICADOR DE ACESSO PROTECTED, OS ATRIBUTOS E METODOS SO PODEM SER ACESSADOS NO CONTEXTO DENTRO DA CLASSE
    //E NO CONTEXTO DAS FILHAS
    constructor(
        public id:string,
        protected _title:string,
        protected price:number,
        protected subtitle = "",
        protected creationDt = new Date(2000,1,1)
    ) {
        this.validate();

        Course.TOTAL_COURSES++;
    }

   //SOMOS OBRIGADOS A IMPLEMENTAR TUDO QUE TEMOS NO CONTRATO BASICMANETE
    printId() {
    }
    //PODEMOS UTILZIAR O SET PRA UTILZIAR NUMA VALIDAÇÃO DE ATRIBUIÇÃO
    set title(newTitle:string) {
        if (!newTitle) {
            throw "Title cannot be empty";
        }

        this._title = newTitle;
    }

    //PODEMOS ACESSAR TBM
    get title() {
        return this._title;
    }


    //PODEMOS VALIDAR AS ENTRADAS DO CONSTRUCTOR
    protected validate() {
        console.log(`Called Course validate()`);
        if (this.price <=0) {
            throw "Price must be larger than zero";
        }
    }
    //DA MESMA FORMA PODEMOS UTILIZAR E CRIAR METODOS ESTATICOS
    static printTitle(course: Course) {
        console.log(`The title of the course ${course.title}`)
    }
    static printQuantyCourse()
    {
        return this.TOTAL_COURSES;
    }


    //PRA ACESSAR OS VALORES DOS ATRIBUTOS TEMOS O THIS
    age() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();
        return Math.round(ageInMs / 1000 / 60 / 24);
    }



}


//AQUI EXTENDEMOS TODOS OS ATRIBUTOS E COMPORTAMENTOS DO PAI
class FreeCourse extends Course {


    constructor( title:string,
                 subtitle = "",
                 creationDt = new Date(2000,1,1)) {


        //COMO SUPER, INICIALIZAMOS O DO PAI
        super(title, 0, subtitle, creationDt);

    }

    protected  validate() {
        console.log(`Called FreeCourse validate()`);

    }


}


//TEMOS AQUI A NOSSA INSTANCIA DA NOSSA CLASSE
const typescript = new Course(Course.TYPESCRIPT_TITLE, 100);
const angular = new FreeCourse("Angular For Beginners");