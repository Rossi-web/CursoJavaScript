let num = [1, 4, 5, 8, 12, 15]

for(let pos=0; pos<num.length; pos++){
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
}