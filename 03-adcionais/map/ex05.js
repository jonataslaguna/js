const converter = (e) => parseInt(e)

let numeros = ['1','2','3','4','5'].map(converter)

let dobro = numeros.map((n)=> n* 2)

console.log(numeros)

console.log(dobro)