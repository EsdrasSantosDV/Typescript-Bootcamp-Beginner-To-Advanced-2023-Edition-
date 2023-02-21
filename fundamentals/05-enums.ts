
enum CourseType{
    //DIFERENTES
    FREE,
    PREMIUM,
    PRIVATE="PRIVATE",
    //O IDEAL E USAR STRING, BEM MAIS FACIL
    //TAMBEM AFETAR COLOCANDO UMA STRING
    HIDDEN=10
    //VOCE PODE AFETAR A INCRMENTAÇÃO IGUAL ACIMA
}

const course={
    title:"Typescript Bootcamp",
    type:CourseType.PRIVATE
}

console.log(course);
