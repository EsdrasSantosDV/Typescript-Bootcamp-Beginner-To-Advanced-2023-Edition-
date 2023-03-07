//AQUI TEMOS UM PADRAO DE PROJETO, CHAMADO SINGLETON
//QUANDO TEMOS UMA APLICAÇÃO QEU SE FORMOS INTANCIAR UM SERVIÇO QUE TEM GRANDE TEMPO DE CONSTRUÇAÕ DELE, ONDE GASTA RECURSOS
//PODEMOS UTILIZAR ESSE PATTERN QUE SALVA PRA CARAMBA
export class CoursesService {

    //PODEMOS UTILIZAR A MESMA INSTANCIA VARIAS VEZES, PODEMOS FAZER UMA ANALOGIA COM O SERVICES DO ANGULAR QUE UTILIZA POR DEBAIXO DOS PANOS ESSE PATTERN
    private static INSTANCE: CoursesService;
    //A INSTANCIA PRECISA SER STATICA, DADO QUE UTILZIAMOS O CONTEXTO DESSA CLASS
    private constructor() {
        console.log(`The CoursesService was initialized.`);
    }

    static instance() {
        //E TODA VEZ QUE FORMOS INSATANCIAMOS E QUERERMOS UTILZIAR A ISNTANCIA UNICA
        if (!CoursesService.INSTANCE) {
            //VERIFICAMOS SE A INSTANCIA NÃO EXISTE
            //SE ELA NÃO EXISTE, CONSTRUIMOS ELA, UMA UNICA VEZ
            CoursesService.INSTANCE = new CoursesService();
        }
        //E APOS ISSO RETORNAMOS ESSA ISNTANCIA
        //SE JA TIVER SIDO CRIADA ESSA INSTANCIA, NÃO VIA ENTRAR NA CONDIÇÃO A CIMA, E JA RETONRA A INTANCIA QUE JA FOI CRIADA
        return CoursesService.INSTANCE;
    }


    Metodo1desseservico()
    {
        return "METODO 1"
    }
}
