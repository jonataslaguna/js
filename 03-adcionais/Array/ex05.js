let soma = (...valores)=>{
    let somar = val =>{ // val é o parametro valores: 4,7,10
        let res=0
        for(v of val)
           res+=v
        return res
    }
    return somar(valores)
}
console.log(soma(4,7,10))