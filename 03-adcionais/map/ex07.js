const palavras = ['Pizza','Hamburguer','Lanche']

const plural = palavras.map((palavra)=> {
    return `${palavra}s`
})

console.log(plural)