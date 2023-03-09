function numerosPrimos(numero){
    let primo = true
    for(let i=2;i<numero;i++){
        if(numero % i === 0){
            let primo = false
        }
    }
    if(primo === true){
        return `O número ${numero} é primo`
    }else{
        return `O número ${numero} não é primo`
    }
} console.log(numerosPrimos(3))