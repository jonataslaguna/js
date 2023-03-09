function trocandoLetras(frase, letra){
    let fraseModificada = ''
    for(let index in frase){
        if(frase[index] === letra){
            fraseModificada += '*'
        }else{
            fraseModificada += frase[index]
        }
    }
    return fraseModificada
}

console.log(trocandoLetras('Meu nome é Jonatas', 'e'))