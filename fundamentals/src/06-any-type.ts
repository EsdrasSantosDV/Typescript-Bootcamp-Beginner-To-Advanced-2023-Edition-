let lessonsCount:any = 10;
//any e o tipo que pode ser qualquer coisa no typescript

//NÃO FICAR FAZENDO O QUE FIZEMOS AQUI
let numbers : any[] = [10, 20, "Hello", true];

printCourse( "Typescript Bootcamp", 10);


//O IDELA NÃO E USAR ANY NO PROGRAMA, SEMPRE CONFIAR NAS TIPAGEMS
function printCourse(title:string, lessonsCount:number) {

    console.log(`Title: ${title}, lessons count: ${lessonsCount}`);

}
