var agora = new Date()
var hora = agora.getHours()
console.log(`O horario atual e de ${hora} hora(s)`)

if (hora>=6 && hora<12){
    console.log(`Bom dia!`)
}
else if (hora >=12 && hora < 18) {
    console.log(`Boa tarde!`)
}
else if(hora>=18 && hora<=23){
    console.log(`Boa noite!`)
} else{
    console.log(`Boa madrugada!`)
}