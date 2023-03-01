class Course {

    //TEMOS AQUI ATRIBUTOS STATICOS, QUE ESTÃO NO CONTEXTO DA CLASSE
    //E NÃO DAS INSTANCIAS DELA
    private static TOTAL_COURSES = 0;

    //PODEMOS TRANSFORMAR ESSES ATRIBUTOS ESTATICOS, TBM DEE SOMENTE LEITURA
    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp";



    constructor(
        private _title:string,
        private price:number,
        private subtitle = "",
        private creationDt = new Date(2000,1,1)
    ) {
        this.validate();

        Course.TOTAL_COURSES++;
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
    validate() {
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

//TEMOS AQUI A NOSSA INSTANCIA DA NOSSA CLASSE
const typescript = new Course(Course.TYPESCRIPT_TITLE, 100);
const angular = new Course("Angular For Beginners", 10);