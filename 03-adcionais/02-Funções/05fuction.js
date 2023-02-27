function palindromo(palavra) {
    if(palavra.split('').reverse().join('') == palavra){
      return `A palavra ${palavra} é um palíndromo!`
    }else {
      return `A palavra ${palavra} não é um palíndromo!`
    }
    }
    
    /*Primeiro dividimos a string em um array de caracteres usando o método split. Em seguida, usamos o método reverse para inverter a ordem dos elementos do array. Finalmente, juntamos os elementos novamente em uma string usando o método join.*/
  
    console.log(palindromo('ana'))
  
    
    