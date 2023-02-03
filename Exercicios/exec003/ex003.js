function contar(){
    var inicio = window.document.getElementsByTagName(`input`)[0]
    var fim = window.document.getElementsByTagName(`input`)[1]
    var passo = window.document.getElementsByTagName(`input`)[2]
    var txt = window.document.getElementById(`contagem`)
    p1 = window.document.getElementsByTagName(`p`)[0]

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO] Uma ou mais entradas estao vazias!`)
        p1.innerHTML = ``
        txt.innerHTML = "Impossivel contar!"
    }else{
        txt.innerHTML = "Contando..."
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        p1.innerHTML = ``

        if (p <= 0){
            window.alert("Passo invalido, corrigido automaticamente para 1!")
            p = 1
            passo.value = 1
        }
        if (i<f)
            for(var c = i; c <= f; c += p){
                p1.innerHTML += `${c}👉 `
            }
        else{
            for (let c = i; c >= f; c -= p){
                p1.innerHTML += `${c}👉 ` 
            } 
        }
        p1.innerHTML += `🏁`
    }
}
