
function imprimeQuadrado(n) {
    let linha = ''
  
    for (let index = 1; index <= n; index++) {
      linha += '*'
    }
  
    for (let index = 1; index <= n; index++) {
      console.log(linha)
    }
  }

  let num = 4

  imprimeQuadrado(num)