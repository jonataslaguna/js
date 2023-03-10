const contarVogais = (texto) => {
    const textoArray = texto.split('')
    const vogais = ['a','A','e','E','i','I','o','O','u','U']
    const apenasVogais = []
    for(a in vogais){
        for(b in texto){
            if(vogais[a] == texto[b]){
                apenasVogais.push(texto[b])
            }
        }
    }
    return apenasVogais
}

console.log(contarVogais('My name is Jonatas, I love rock and roll'))