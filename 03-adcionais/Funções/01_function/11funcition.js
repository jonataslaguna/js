let soma = function(...valores){
    let res = 0
    for( i of valores){
        res += i
    }
    return res
}
console.log(soma(5,7,7))