function gerar(){
    var tab = document.querySelector('div#tab')
    var n1 = document.querySelector('input#n')
    if (n1.value.length == 0){
         alert('Por favor, digite um número')
    } else {
    var n = Number(n1.value)
    tab.innerHTML =''
    for(var c=1; c<=10; c++){
       var res =  n * c
        tab.innerHTML += `${n} x ${c} = ${res} <br/>`
    }
}
}