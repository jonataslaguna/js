function* reverter(palavra){
    let reverso = yield palavra.split('').reverse().toString()
    
}

const interador = reverter('Jonatas')
console.log(interador.next().value)