let arr = [5,9,10,50,75]

function maiorNum(vetor){
    let maior = 0
    for(i in vetor){
       if(vetor[i] > maior){
            maior = vetor[i]
        }
    }
    return maior
}

console.log(maiorNum(arr))


