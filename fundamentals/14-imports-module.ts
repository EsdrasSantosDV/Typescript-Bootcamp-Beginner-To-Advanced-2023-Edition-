import {addCourse, PAGE_SIZE} from "./13-exports-module";


//AQUI PODEMOS IMPORTAR OQ FOI EXPORTADO
const pageSize = PAGE_SIZE;


console.log(addCourse());



//ESSAS SINTAXES DE * E MUITO UTILIZADA EM DOCUMENTAÇÃO POR AI

import printCourse from "./16-import-default";

//PODEMOS USAR QUANDO TEMPOS UM GRANDE QUANTIDADE DE CONSTANTES
import * as constants from "./16-import-default";

printCourse({});

constants.COURSE_TOTAL;
