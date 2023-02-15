function contar(){
    var res = document.querySelector('div#res')
    var ini = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
   
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Preencha todos os campos.'
    }else{
        res.innerHTML = 'Contando: <br/>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert('Passo invalido. Considerando Passo: 1')
            p = 1
        }
            if (f > i){
            //Contagem crescente
        for(var c=i; c<=f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }else{
            //Contagem regressiva
        for(var c=i; c>=f; c-=p){
            res.innerHTML += ` ${c} \u{1F449}` 
        }
    }
    res.innerHTML += `\u{1F3C1}`
    }
   
    

}