//E ASSIM QUE FAZEMOS CASTING NO TYPESCRIPT
// const input =
//     document.getElementById("input-field")  as HTMLInputElement;

//PODEMOS USAR ESSA SINTAXE
//OU ESSA
const input =<HTMLInputElement>
    document.getElementById("input-field");

//PODEMOS FAZER AS ATRAS DE AS TBM

input.value;
