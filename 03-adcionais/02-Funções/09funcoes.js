function imprimeAteristico(n){
    let linha = ''
    for(let index=1;index<=n;index++){
        linha += '*'
    }
    for(let index=1;index<=n;index++){
        console.log(linha)
    }
}

let numero = 4
imprimeAteristico(numero)