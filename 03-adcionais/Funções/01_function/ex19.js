const arr = [2,4,3,5,6,20,22,16,14,17,50,52]

function numerosPrimos(numeros){
   const apenasPrimos = []
   let primo = true
   for(i in numeros){
    if(numeros[i] % 2 === 0 && numeros[i] !== 2){
        let primo = false
    }else{
        apenasPrimos.push(numeros[i])
    }
   }
   return apenasPrimos
}

console.log(numerosPrimos(arr))