const pessoas = [
    {nome:'Alissa', idade: 30, cidade:'Curitiba' },
    {nome: 'Jonatas', idade: 27, cidade: 'Wellington'},
    {nome: 'Lauren', idade: 27, cidade:'Auckland'}
]

const nomes = pessoas.map((pessoa) => {
    return pessoa.nome
})

console.log(nomes)