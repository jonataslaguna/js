function carros(modelo, ano){
    this.modelo = modelo
    this.ano = ano
    this.apresentar = function(){
        console.log(`Um clásssico dos clśssicos, o ${this.modelo} ${this.ano}...`)
    }
}

const carro = new carros('Dodge Charger', 1970)

carro.apresentar()


