function* pares(...valores){
    for(i in valores){
        if(valores[i] % 2 == 0){
            yield valores[i]
        }
    }
}

const numeros = pares(5,4,10,45,28,14,24,100)
for(i of numeros){
    console.log(i)
}