function* fibonacciGerator(){
    let current = 0
    let next = 1
    while(true){
        yield current;
        [current, next] = [next,current + next]
    }
}

const interator = fibonacciGerator()
for(let i=1;i<=3;i++){
    console.log(interator.next().value)
}


