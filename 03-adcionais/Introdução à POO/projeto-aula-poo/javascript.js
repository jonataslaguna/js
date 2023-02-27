let ingredientes = ['mel','água','sal','mostarda']
let modificado = []
// - Começando da forma incorreta para identificar os problemas gerados
for(let index in ingredientes){
    let letraInicial = ingredientes[index].charAt(0).toLocaleUpperCase()
    let restoTexto = ingredientes[index].slice(1)
    let resultado = letraInicial + restoTexto
    modificado[index] = resultado
}

let ordenado = modificado.sort(function(a,b){
    return a.localeCompare(b);
})

console.log(ordenado);