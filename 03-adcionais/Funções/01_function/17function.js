const alunos = [
    {nome:"Jonatas", idade:27,nota: 10},
    {nome:'Ana', idade:'27',nota: 8},
    {nome:'Gustavo', idade:'30', nota: 9},
    {nome:'Anderson',idade: '20',nota: 4}
]
const aprovadas = alunos.filter((pessoa) => pessoa.nota > 6)

console.log(aprovadas)

