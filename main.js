
const alunos = [
    { nome: 'Marta', nota: 5 },
    { nome: 'Vinicius', nota: 8 },
    { nome: 'Ana', nota: 7 },
    { nome: 'Pedro', nota: 4 },
    { nome: 'Lucas', nota: 9 },
    { nome: 'Marus', nota: 6 },
];


function filtrarAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}


const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);
