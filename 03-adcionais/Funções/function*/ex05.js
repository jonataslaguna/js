function* geradora(){
    yield 'UM'
    yield 'DOIS'
    yield 'TRÊS'
}

const interador = geradora()
for(let i=1;i<=3;i++){
    console.log(interador.next().value)
}