import {Course} from "./course-model";
import {loadAllCourses} from "./feature-1";
import {saveCourse} from "./feature-2";

//COM A RE-EXPORTAÇÃO ,PODEMOS AGRUPAR UM CONJUNTO DE FUNCIONALIDADES EM UM MODULO
//ESPECIFICO

export {
    Course,
    loadAllCourses,
    saveCourse
};
