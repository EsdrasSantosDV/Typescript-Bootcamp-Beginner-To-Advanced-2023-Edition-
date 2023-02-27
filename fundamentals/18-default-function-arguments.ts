
//QUANDO VOCE NÃO COLOCA O TIPO, E JA ATRIBUI UM VALOR PARA O ARGUMENTO DA FUNCAO
//VOCE TORNA ESSE CAMPO NÃO COBRIGATORIO
function printCourse(title = "TITLE", subtitle ="dsakjdsakj", lessonsCount = 0) {

    console.log(`Title: ${title}, Subtitle: ${subtitle} lessons count: ${lessonsCount}`);

}

printCourse(
    "Learn the language fundamentals, build practical projects",
    "sdadasdsa",
    10
);

printCourse(
    "Typescript Bootcamp",
    "Learn the language fundamentals, build practical projects"
);

printCourse();
