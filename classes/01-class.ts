class Course {




    //PODEMOS FAZER UM SET E UM GET, MAS PRO COMPILADOR NÃO CONFUDIR SE ESTAMOS CHAMANDO O TITLE OU SE ESTAMOS CHAMANDO O SET
    constructor(
        //SE TIVESSEMSO COLCOADO private title:string
        //ACABARIA NO CASO QUE FALEI ACIMA, QUE O COMPILADOR IA FICAR BUGADO
        private _title:string,
        private subtitle:string,
        private creationDt: Date
    ) {

    }

    //PODEMOS UTILZIAR O SET PRA UTILZIAR NUMA VALIDAÇÃO DE ATRIBUIÇÃO
    set title(newTitle:string) {
        if (!newTitle) {
            throw "Title cannot be empty";
        }

        this._title = newTitle;
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


//AQUI TA CHAMANDO NA VERDADE O SET E LA NO SET ELE VAI VEIRIFICAR
course.title= "New Value";

console.log(course);
