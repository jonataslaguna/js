function* somaCumulativa(...valores){
    let res = 0
    for(i of valores){
        res += i
        yield res
    }

}

const numeros = somaCumulativa(1,2,3,4,5,6,7,8,9,10)
for(i of numeros){
    console.log(i)
}