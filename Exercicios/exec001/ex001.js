var p1 = window.document.getElementsByTagName('p')[0]
var img = window.document.getElementsByTagName(`img`)[0]

dt = new Date()
hora = dt.getHours()
p1.innerHTML = `Agora sao ${hora} horas.`

if (hora>6 && hora <12){
    document.body.style.background = `lightblue`
    img.src = `Manha.jpg`
}
else if (hora>= 12 && hora <18){
    document.body.style.background = `orange`
    img.src = `Tarde.jpg`
}
else{
    document.body.style.background = `black`
    img.src = `Noite.jpg`
}