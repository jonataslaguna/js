let num = [5,8,2,9,3]
num.push(1)
num.sort()
num[5]=10
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor de vetor é ${num[0]}`)
let pos = num.indexOf(8) // Onde está localizado o valor 8?
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

