const produtos = [
    {nome:'sabonete',preco: 2.00},
    {nome:'shampoo', preco: 10.00},
    {nome:'detergente', preco: 1.00 }
]

const precos = produtos.map((produto) => produto.preco )

console.log(precos)