function* geradora(){
    const nome = yield 'Qual é seu nome?'
    const idade = yield 'Sua idade?'
    const esporte = yield 'Seu esporte favorito?'
    return `Meu nome é ${nome}, tenho ${idade} anos, e meu esporte favorito é ${esporte}`
}

const interator = geradora()
console.log(interator.next().value)
console.log(interator.next('Jonatas').value)
console.log(interator.next('27').value)
console.log(interator.next('karate'))
