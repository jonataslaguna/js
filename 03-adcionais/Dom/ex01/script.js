let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let pes = document.querySelector('#peso')
let alt = document.querySelector('#altura')
let res = document.querySelector('div#res')
let res2 = document.querySelector('div#res2')

function enviar(){
    if(nome.value.length === 0 && pes.value.length === 0 && alt.value.length === 0){
       alert('Por favor, preencha todos os campos obrigatórios')
    }else{
    const divParaMostrar = document.querySelector('div#res')
    let peso = Number(pes.value)
    let altura = Number(alt.value)
    let name = (nome.value)
    let imc = peso / altura ** 2
    
    res.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong>`
    divParaMostrar.style.display = 'block';
    
    if(imc < 17){
        res2.innerHTML = `Olá ${name}, de acordo com o cálculo IMC, você está muito abaixo do peso.`
    } else if(imc >= 17 && imc <= 18.49){
        res2.innerHTML = `Olá ${name}, de acordo com o cálculo IMC, você está abaixo do peso ideal`
    } else if (imc >= 18.5 && imc <= 24.99){
        res2.innerHTML = `Olá ${name}, de acordo com o cálculo IMC, você está no peso ideal!`
    } else if (imc >= 25 && imc <= 29.99){
        res2.innerHTML = `Olá ${name}, de acordo com o cálculo IMC, você está um pouco acima do peso.`
    } else if (imc >= 30 && imc <= 34.99){
        res2.innerHTML = `Olá ${name}, de acordo com o cálculo IMC, você está cima do peso`
    } else if (imc >= 35 && imc >= 39.99){
        res2.innerHTML = `Olá ${name}, de acordo com o cálculo IMC, você está muito acima do peso`
    } else if (imc > 40) {
        res2.innerHTML = `Olá ${name}, de acordo com o cálculo IMC, você está em obesidade`
    }
   }
}

