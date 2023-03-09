function soma(...valores){
    let res = 0
    for(i in valores){ // ou (let i=0;i<valores.length;i++) 
        res+= valores[i]
    }
    return res
}

console.log(soma(7,6,8,10,50))