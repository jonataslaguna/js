function palindromo(palavra) {
    const ultima = palavra.length - 1;
    for (let index in palavra) {
      if (palavra[index] !== palavra[ultima - index]) {
        return 'Infelizmente não sou um palíndromo!';
      }
    }
    return 'Sim, sou um palíndromo!';
  }