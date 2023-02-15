function iniciar(){
    var primeiro = document.querySelector('input#n1')
    var segundo = document.querySelector('input#n2')
    var res = document.querySelector('div#res')
    if(primeiro.value.length == 0 || segundo.value.length == 0){
        res.innerHTML= '<p>Por favor, preencha todos os campos.</p>'
    }else{
        var n1 = Number(primeiro.value)
        var n2 = Number(segundo.value)
        if(n1 > n2){
            res.innerHTML = '<p>O primeiro número é maior!</p>'
        }else {
            res.innerHTML = '<p>O segundo número é maior!</p>'
        } if(n1 == n2){
            res.innerHTML = '<p>Os dois números são iguais!</p>'
        }
    }
}