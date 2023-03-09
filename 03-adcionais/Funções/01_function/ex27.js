let tamanho = function(...palavras){
    let quantidadeDeCaracIguais 
    for(a in palavras){
        for(b in palavras){
            if(palavras[a].length == palavras[b].length){
                quantidadeDeCaracIguais = true
            } else
              quantidadeDeCaracIguais = false
        }
    }
    return quantidadeDeCaracIguais
}

console.log(tamanho('Jonatas','Gustavo'))