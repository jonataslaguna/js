let num = document.querySelector('input#n')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let vetor = []


function inLista(n, l){
    if(l.indexOf(n) == -1 ){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(num.value.length == 0){
        alert('Por favor, digite um número.')
    }else{
        let n = Number(num.value)
        if(n > 100 || n < 0 || inLista(n, vetor) == false){
            alert('O número invalido, ou já adicionado.')
        }else{
            vetor.push(n)
            let item = document.createElement('option')
            item.text = `Valor ${n} ✔️`
            lista.appendChild(item)
            res.innerHTML = ''
            }
      num.value = '' // Apagar input automaticamente
      num.focus()
    }
}

function finalizar() {
    if(vetor.length == 0){
        alert('Adicione algum número antes de finalizar.')
    }else{
    let soma = 0
    
    for(let c in vetor){
        soma += vetor[c]
    }
    let media = soma / vetor.length
    res.innerHTML = ''
    res.innerHTML = `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor cadastrado foi ${Math.max(...vetor)}.</p>`
    res.innerHTML += `O menor valor cadastrado foi ${Math.min(...vetor)}.`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
    res.innerHTML += `A média de todos os valores é ${media} `
    }
}

