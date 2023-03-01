function palindromo(palavra) {
    let ultima = palavra.length - 1;
    for (let index in palavra) {
      if (palavra[index] !== palavra[ultima - index]) {
        return 'Infelizmente não sou um palíndromo!';
      }else{
        return 'Sim, sou um palíndromo!';
      }
    }
  }

  console.log(palindromo('ana'))