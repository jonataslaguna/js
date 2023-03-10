function maiorNumero(...numeros){
    let maior = 0
    for(i in numeros){
        if(numeros[i] > maior){
            maior = numeros[i]
        }
    }

    return maior
}

console.log(maiorNumero(100,50,25,10,200,27))