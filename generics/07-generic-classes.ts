//AQUI PODEMOS TAMBEM FAZER INTERFACES COM ATRIBUTOS GENERICOS
import {Course} from "./02-partial-interface-generic";
//SO PRECISAMOS UTILIZAR ESSA SINTAXE
class KeyValue<K, V> {

    constructor(

        //COLOCAMOS OS VALORES ALI, DE FORMA GENERICA
        public readonly key: K,
        public readonly value: V) {
    }

    print() {
        console.log(`key = ${this.key} value = ${this.value}`);
    }
}

const p1 = new KeyValue("1", "DSASDASADDSA");
const val1 = p1.value;
const p2 = new KeyValue(2, "Hello World");
const val2 = p2.value;

const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}
//PODEMOS MANDAR ATE OBJETO PRA ESSA CLASSE
const p3 = new KeyValue("3", course);


//ISSO E FODA PRA CARAMBA, PODEMOS FAZER UM FORMULARIO COM ISSO AQUI, DE FORMA DINAMICA NO ANGULAR, ENTRE OUTRAS COISAS
console.log(p3)
const val3 = p3.value;