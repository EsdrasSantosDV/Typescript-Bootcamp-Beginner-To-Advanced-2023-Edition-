
//O UNKNOWN TYPE E PARECIDO COM O TIPO ANY, SO QUE ELE NÃO PERMITE VOCE ATRIBUIR ELE A UMA VARIAVEL DE TIPO BOOLEEAN, PRIMITIVOS E PERSONALIZADOS
//ESSE EXEMPLO AQUI E SO PRA VC ENTENDER QUE TEM ESSE TIPO, MAS O IDEAL E NUNCA USAR , PQ SENÃO PERDEMOS O PODER DO TYYPESCRIPT
//QUE E AS TIPAGENS

let anyValue: any;
anyValue = true;
anyValue = 10;
anyValue = "Hello World";
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let value1: unknown = anyValue;
let value2: any = anyValue;
let value3: boolean = anyValue;
let value4: number = anyValue;
let value5: string = anyValue;
let value6: object = anyValue;
let value7: any[] = anyValue;
let value8: Function = anyValue;



let unknownValue: unknown;
unknownValue = true;
unknownValue = 10;
unknownValue = "Hello World";
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;



let value10: unknown = unknownValue;
let value11: any = unknownValue;
//EU NÃO CONSIGO POR EXEMPLO, ATRIBUIR  UM UNKNOWN PRA UM BOOLEAN NESSE EXEMPLO

//let value12: boolean = unknownValue;
//let value13: number = unknownValue;

if (typeof unknownValue == "string") {

    let value14: string = unknownValue;
}

// let value14: string = unknownValue;
// let value15: object = unknownValue;
// let value16: any[] = unknownValue;
// let value17: Function = unknownValue;




