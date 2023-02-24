let lista = [3, 7, 8, 6, 10, 56, 80, 56]
let pares = []
let impares=[]

for(index in lista){
    if(lista[index] % 2 === 0){
       pares.push(lista[index])
    }else{
        impares.push(lista[index])
    }
} console.log(`Números pares: ${pares} Números impares: ${impares}`)
