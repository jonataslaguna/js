function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var forano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')
    if (forano.value.length == 0 || forano.value > ano){
        alert('Verifique os dados e tente novamente!')
    }else{
         var sexo = document.getElementsByName('sexo')
         var idade = ano - Number(forano.value)
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')

         if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else{
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }
         } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'mulhercrianca.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 60){
                //adulta
                img.setAttribute('src', 'mulheradulta.png')
            } else{
                //idosa
                img.setAttribute('src', 'mulheridosa.png')
            }
         }
         res.style.textAlin = 'center'
         res.innerHTML =`${genero} com ${idade} anos.`
         res.appendChild(img)
    }
    
}