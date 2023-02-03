function tabuada(){
    var num = window.document.getElementsByTagName(`input`)[0]
    p1 = window.document.getElementsByTagName(`p`)[0]

    if(num.value.length == 0){
        window.alert(`[ERRO] Insira um número`)
        p1.innerHTML = ``
    }else{
        let n = Number(num.value)
        p1.innerHTML = ``
        for (let c=1; c<=10; c++){
            p1.innerHTML += (`${n} x ${c} = ${c*n} ` + "<br>")
        }
    }
}
