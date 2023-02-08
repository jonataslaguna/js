var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if(hora < 12 && hora >= 5){
    console.log('Bom dia!')
} else if (hora <= 18 && hora >= 12){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
} if (hora < 5 && hora >= 0){
    console.log('Boa Madrugada!')
}
