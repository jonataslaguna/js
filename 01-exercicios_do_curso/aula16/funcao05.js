//RECURSIVIDADE
function fatorial(n){
    if (n == 1){
        return 1
    }else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4! 
O fatorial de um número pode ser
calculado com base no fatorial de
outro. Exeto fatorial de 1
n! = n x (n-1)!
1! = 1
*/