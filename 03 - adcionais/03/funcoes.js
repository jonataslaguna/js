
function imprimeQuadrado(n) {
    let linha = ''
  
    for (let index = 1; index <= n; index += 1) {
      linha += '*'
    }
  
    for (let index = 1; index <= n; index += 1) {
      console.log(linha)
    }
  }

  let num = 4

  imprimeQuadrado(num)