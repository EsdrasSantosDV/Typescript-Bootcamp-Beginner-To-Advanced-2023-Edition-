import {HasId} from "./02-interfaces";
import {HasTitle} from "./02-interfaces";
import {CoursesService} from "./03-singleton";

//BASICAMENTE UTILIZAMOS CLASSES ABSTRACTS PRA UTILIZARMOS ELA COMO TEMPLATES, PARA CONSTRUÇÃO DAS CLASSES CONCRETAS
//
abstract class Course implements HasTitle {

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
        const service = CoursesService.instance();

        Course.TOTAL_COURSES++;
    }

   //SOMOS OBRIGADOS A IMPLEMENTAR TUDO QUE TEMOS NO CONTRATO BASICMANETE
    printId() {
        console.log(`The course id is ${this.id}`);
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
    protected abstract validate();
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


    constructor(id:string,
                title:string,
                 subtitle = "",
                 creationDt = new Date(2000,1,1)) {


        //COMO SUPER, INICIALIZAMOS O DO PAI
        super(id,title,0, subtitle, creationDt);

    }


    //AQUI E UMA CLASSE CONCRETA
    //E AQUI IMPLEMENTAMOS OS METODOS QUE SÃO ABSTRACTOS NA NOSSA CLASSE ABSTRACT
    protected  validate() {
        console.log(`Called FreeCourse validate()`);

    }


}
//AQUI UTILIZAMOS A MESMA INTANCIA
//SO CRIAMOS UMA VEZ
const angular = new FreeCourse("1", "Angular For Beginners");


const service = CoursesService.instance();

console.log(service.Metodo1desseservico());

const service2 = CoursesService.instance();