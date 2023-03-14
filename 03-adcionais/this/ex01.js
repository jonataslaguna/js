const pessoa = {
    nome: 'Jonatas',
    idade: 27,
    apresentar(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos `)
    }
}

pessoa.apresentar()