//NAO A DIFERENCIA ENTRE INTEIROS E REAIS
const lessonsC=10.12;


const total=lessonsC+10;

console.log(total);

//STRING SAO IMUTAVIES
//o valor inicial não e alterado
//CRIA UMA NOVA STRING E CRIADA COM O NOVO TEXTO CONCATENADO
//E ATRIBUIDO A VARIAVEL LET
///O TEMPO DE EXCECUAO DO JS FARA A COLETA DE LIXO DA STRING
//INICIAL
//POIS NÃO HA MAIS REFERENCENCIAS NO PROGRAMA

//TYPESCRIPT ACEITA ASPAS SIMPLES OU DUPLA PRA STRING
let title = 'Typescript Bootcamp';

//FUNCIONA TAMBEM
let title2=`TYPE BOOTECAMP`;


let subtitle = "Learn the language fundamentals, build practical projects";
//TEMOS O TEMPALTE STRING QUE E A MELHOR FORMA DE USAR CONCATENAÇÃO


//FICA MUITO MAIS LEGIVEL
let fullTitle = `Full title:${title}: ${subtitle}`;

console.log(`Full title: ${fullTitle}`);


// PRIMITIVO TIPO BOOLEAN
const published = true;

if (published) {
    console.log("The course is published.");
}


//printCourse(title,subtitle,lessonsC);

//PRA FUNCOES O IDEAL E UTILIZAR A INFERENCENCIA DE TIPO
//PRA LOCAIS ONDE POR EXEMPLO ELE NÃO POSSUI INFORMACOES SOBRE OS TIPOS DAS
//VARIAVEIS
//COMO POR EXEMPLO ARGUMENTO S DE ENTRADA DE UMA FUNCÃO
// function printCourse(title:string,subtitle:string,lessonsCount:number)
// {
//     let fullTitle=title +subtitle;
//
//     fullTitle=10;
// }

//PRIMITIVE O OBJECT

let course={
    title:"Typescript",
    subtitle:"TESTE",
    lessonsCount:10
}

console.log("type of course is" + typeof  course);
