function* contador(){
    let i = 0
    while(true){
        yield i++
    }
}
const interador = contador()
for(let i = 0;i<=10;i++){
    console.log(interador.next().value)
}