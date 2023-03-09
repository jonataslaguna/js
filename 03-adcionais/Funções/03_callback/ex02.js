

function soma(a,b,cb){
    let somar = a + b
    exibir(somar)
}

function dividir(a,b,cb){
    let div = a / b
    exibir(div)
}

function multiplicar(a,b,cb){
    let mult = a * b
    exibir(mult)
}

function exibir(n){
    console.log(`A operação de resultou em ${n}`)
}

soma(2,5,exibir)
multiplicar(7,9,exibir)
dividir(10,2,exibir)

