// 5! = 5 x 4 x 3 x 2 x 1 = 120
function fatorial(n){
    let f = 1
    for(let c = n; c>1; c--){
        f *= c // f = f x c
   }
   return f
}
console.log(fatorial(5))