

function  saveCourse(course,funcaoarrow:Function)
{
    //ISSO POR EXEMPLO E SO ACESSIVEL NO CONTEXTO DA FUNCAO saveCourse
    this.course=course;
    //QUANDO DAR 1 Segundo  ele vai chamar essa funcao arrow
    //CADA FUNCAO TEM SEU CONTEXTO ESPECIFICO
    //A ARROW FUNCTION HERDA O CONTEXTO DO PAI
    setTimeout(()=>
        {
            funcaoarrow("sucess",1432);
        }
    ,1000);


    //DESSE MODO SEM SER ARROW FUNCTION, ELE CRIA O PROPRIO CONTEXTO PRIVADO
    setTimeout(function ()
        {
            funcaoarrow("sucess",1432);
        }
        ,1000);
}



saveCourse({title:"Teste "},(courseteste:string,coursenumber:number)=>{
    console.log("funcao sendo chamada");
    console.log("valor do teste",courseteste);
    console.log("valor do teste2",coursenumber);

})


