function numerosPrimos(numero) {
    let NumerosPrimos = [];
  
    for (let numAtual = 2; numAtual <= numero; numAtual++) {
      let numeroPrimo = true
  
      for (let numDivisor = 2; numDivisor <= numAtual; numDivisor++) {
        if (numAtual % numDivisor === 0 && numAtual !== numDivisor) { 
          numeroPrimo = false
        }
      }
  
      if (numeroPrimo === true) {
        NumerosPrimos.push(numAtual)
      }
    }
  
    return NumerosPrimos;
  }
  
  console.log(numerosPrimos(10));