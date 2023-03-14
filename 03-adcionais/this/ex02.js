function pessoas(nome,idade){
    this.nome = nome
    this.idade = idade
    this.apresentar = function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const pessoa = new pessoas('Jonatas',27)
pessoa.apresentar()