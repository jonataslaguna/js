let a = 56
let b = 70

//Vários argumentos:

let c = (a, b) => a + b // Simples

console.log(c(a,b))

let d = (x,y) => {  // Mais complexo
    let operacao

  if(x > 5){
    operacao = x * y
  }else{
    operacao = x / y
  }
  return operacao
}

console.log(d(a,b))

//Um argumento
let frase = 'I love rock and roll'

let fraseArray = (frase) => frase.split(' ')

console.log(fraseArray(frase))

//Sem Argumentos
let sem = () => console.log('Sem argumentos')

sem()

//Casos de uso
let roupas = [
    {produto: 'Camiseta', preco: 25, cor: 'Amarelo'},
    {produto: 'Calça', preco: 80, cor: 'Azul'},
    {produto: 'Jaqueta', preco: 100, cor: 'Preto'},
    {produto: 'Camiseta', preco: 15, cor: 'Rosa'},
    {produto: 'Camiseta', preco: 20, cor: 'Azul'}
]

let maiorQue50 = roupas.filter((roupa) =>{
    return roupa.preco >= 50
}) 

console.log(maiorQue50)
