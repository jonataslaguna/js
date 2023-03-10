const funcaoAnonima = function(...valores){
    let res = 0
    for(i of valores){
        res += i
    }
    return res
}

console.log(funcaoAnonima(10,20,87,5,49))

