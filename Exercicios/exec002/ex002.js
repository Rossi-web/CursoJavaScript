function dt(){
    var p1 = window.document.getElementsByTagName('p')[0]

    var data = new Date()
    var ano = data.getFullYear()
    var inputNasc = window.document.getElementsByTagName(`input`)[0]
    var dtNasc = inputNasc.value
    
    var res = document.querySelector("div#res")
    if (ano>dtNasc && dtNasc>=1900){
        var idade = ano - dtNasc
        var sexo = window.document.getElementsByName(`sexo`)
        var genero = ``
        var img = document.getElementById('ft')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked){
            var genero = `um homem`
            if (idade < 10){
                img.src = 'crianca.masc.jpeg'
            } else if (idade < 21){
                img.src = 'jovem.masc.jpeg'
            } else if (idade < 50){
                img.src = 'adulto.masc.jpeg'
            } else{
                img.src = 'idoso.masc.jpeg'
            }
        } else{
            var genero = `uma mulher`
            if (idade < 10){
                img.src = 'crianca.fem.jpeg'
            } else if (idade < 21){
                img.src = 'jovem.fem.jpeg'
            } else if (idade < 50){
                img.src = 'adulto.fem.jpeg'
            } else{
                img.src = 'idoso.fem.jpg'
            }
        }
        img.style.width = `300px`
        img.style.height = `300px`
        img.style.borderRadius = `50%`

        p1.innerHTML = `Detectamos ${genero} de ${idade} anos`
        
    }else{
        window.alert(`[ERRO] Data de nascimento invalida`)
   }
}

