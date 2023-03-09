const arr = [54,27,46,20,8,23]

function par(array){
    const pares = []
    for(i in array){
        if(array[i]%2==0){
            pares.push(array[i])
        }
    }
    return pares
}
 console.log(par(arr))