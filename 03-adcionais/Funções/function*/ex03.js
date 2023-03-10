function* perguntas(){
    let nome = yield 'Seu nome?'
    let idade = yield 'Sua idade?'
    let banda = yield 'Sua banda favorita?'
    return `Meu nome é ${nome}, tenho ${idade} anos, e minha banda favorita é ${banda}`
}

const interador = perguntas()
console.log(interador.next().value)
console.log(interador.next('Jonatas').value)
console.log(interador.next('27').value)
console.log(interador.next('Kiss').value)