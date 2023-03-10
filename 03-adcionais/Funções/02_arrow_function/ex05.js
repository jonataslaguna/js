const media = (...valores) => {
    let res = 0
    for(i in valores){
        res += valores[i]
    }
    return res / valores.length
}

console.log(media(5,20,5,8,10,50,8,25))