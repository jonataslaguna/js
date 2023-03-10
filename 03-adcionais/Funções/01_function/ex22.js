//PARÂMETROS **REST**

/*function soma (...valores){             
for(i in valores){
    res += valores[i]
}
return res

}*/

function soma (...valores){
    let res = 0
    for(i of valores){
        res += i
    }
    return res
}

console.log(soma(10,5,11,20))

