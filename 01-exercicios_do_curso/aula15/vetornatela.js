let n =[5,8,4,9,3,3,6,8,7,4]

/*console.log(n)

for(let c=0; c<n.length;c++){
    console.log(`A posição ${c} tem o valor ${n[c]}`)
}
SIMPLIFICAÇÃO:*/

for(let c in n){
    console.log(`A posição ${c} tem o valor ${n[c]}`)
}