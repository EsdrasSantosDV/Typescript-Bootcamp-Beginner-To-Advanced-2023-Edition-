
/*
O que acontece aqui é que cada arquivo no TypeScript é considerado um módulo isolado.
Portanto, tudo o que é definido aqui dentro do arquivo está em seu próprio módulo,
em seu próprio namespace especial,
 */
export const PAGE_SIZE = 100;

const pageSize = PAGE_SIZE;

export const COURSE = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};

export function addCourse()
{
    return "esdras esta aqui";
}
