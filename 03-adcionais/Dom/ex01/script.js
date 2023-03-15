let form = document.querySelector('#form')
let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let pes = document.querySelector('#peso')
let alt = document.querySelector('#altura')
let res = document.querySelector('div#res')
let res2 = document.querySelector('div#res2')

function enviar(){
    let peso = Number(pes.value)
    let altura = Number(alt.value)
    let name = (nome.value)
    let imc = peso / altura ** 2
    res.innerHTML = `Seu IMC é ${imc}`
    if(imc < 17){
        res2.innerHTML += `Olá ${name}, você está muito abaixo do peso.`
    } else if(imc >= 17 && imc <= 18.49){
        res2.innerHTML += `Olá ${name}, você está abaixo do peso ideal`
    } else if (imc >= 18.5 && imc <= 24.99){
        res2.innerHTML += `Olá ${name}, você está no peso ideal!`
    } else if (imc >= 25 && imc <= 29.99){
        res2.innerHTML += `Olá ${name}, você está um pouco acima do peso.`
    } else if (imc >= 30 && imc <= 34.99){
        res2.innerHTML += `Olá ${name}, você está cima do peso`
    } else if (imc >= 35 && imc >= 39.99){
        res2.innerHTML += `Olá ${name}, você está em obesidade`
    } else if (imc > 40){
        res2.innerHTML += `Olá ${name}, você está em obesidade`
    }

}

