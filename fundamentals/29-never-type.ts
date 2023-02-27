let anyValue:any;

//let neverValue : never = undefined;

//neverValue["property"] = 10;


type CourseStatus = "draft" | "published" | "unpublished";


//SE EU POR EXEMPLO ADIIONAR MAIS UM EXEMPLO
//AQUELE ELSE LA EMBAIXO, A UNICA POSSIBILIDADE QUE NÃO TRATEI ANTRES FOI O ESDRAS DAQUI
//type CourseStatus = "draft" | "published" | "unpublished" | "ESDRAS";
//AI NÃO VAI SER NEVER LA


let courseStatus : CourseStatus;

if (courseStatus == "draft") {

}
else if (courseStatus == "published") {

}
else if (courseStatus == "unpublished") {

}
else {

    //SE VOCE VERIFICAR O TIPO DO COURSE STATUS, NESSE PONTO VEFICAMOS QUE ELE E DO TIPO NEVER, PQ ACIMA JA VERIFICAMOS TODAS AS POSSIVEIS POSSIBILIDADES
    //ELE REPRESENTA BAISCAMENTE O TIPO DE VALORES QUE NUNCA OCORRE, DADO QUE ACIMA JA PENSAMOS EM TODAS AS POSSIBILDADES POSSIVEKS, ELE É MUITO BOM PRA UTILIZAR PRA ERROS
    //MAS NUNCA ATRIBUIA UUM VALOR A ELE
    unexpectedError(courseStatus);
}

function unexpectedError(value:never) {
    throw new Error(`Unexpected value: ${value}`);
}
