var idade = 50
console.log(`Voce tem ${idade} anos.`)
if (idade < 16){
    console.log(`Nao vota`)
}else if (idade < 18 || idade >= 60){
    console.log(`Voto opcional`)
}else{
    console.log(`Voto Obrigatorio`)
}