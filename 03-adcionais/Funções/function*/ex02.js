function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i>10){
            break
        }
    }
}
const interador = contador()
for(i of interador){
    console.log(i)
}