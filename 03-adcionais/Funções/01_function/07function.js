function operacoes (n1,n2,operacao){
    if(operacao === '+'){
        return n1 + n2
    }else if(operacao == '-'){
        return n1 - n2
    }else if(operacao == '/'){
        return n1 / n2
    }else if(operacao == 'x'){
        return n1 * n2
    }
        
    
}
console.log(operacoes(54,20,'-'))