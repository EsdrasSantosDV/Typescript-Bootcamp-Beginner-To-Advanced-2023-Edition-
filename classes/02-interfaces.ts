//COMO SEMPRE, UMA INTERFACE E BASICAMENTE UM CONTRATO QEU IMPOMOS A ALGO
export interface HasId {
    id:string;
    printId();
}
export interface HasTitle extends HasId {
    title:string;
}