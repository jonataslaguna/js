const nomes = ['jonatas','alissa','lauren']

const maiusculas = nomes.map((nome) => {
   return nome.slice(0,1).toUpperCase() + nome.slice(1)
   /* slice(0,1) = Pega a primeira letra de cada string. Ele recebe dois argumentos: o índice inicial '0', e o índice final '1', da parte da string que se deseja obter. O toUpperCase deixa a letra maiúscula. E utilizando novamente o slice(), neste caso para mostrar o resto da string, do indice 1 em diante, ou seja, sem mostrar a primeira letra. */ 
})
console.log(maiusculas)


