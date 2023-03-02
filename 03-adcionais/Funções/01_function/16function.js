const nomes = ['Jonatas','Gustavo','Guilherme','Mariana','Ana','Rosa']

function caracteres(palavras){
    const maisDe6 = []
    for(i in palavras){
        if(palavras[i].length > 6){
            maisDe6.push(palavras[i])
        }
    }
        return maisDe6

}

console.log(caracteres(nomes))