let num = [5, 8, 2, 9, 3]

//Adiciona um valor ao vetor
num.push(12)
//Ordena os valores do vetor por ordem crescente - Perde o funcionamento com o push
num.sort()

console.log(num)
//O comando .lenght exibe a quantidade de items em uma array 
console.log(`O vetor tem ${num.length} elementos. `)
console.log(`O primeiro valor do vetor é o ${num[0]}`)

//Exibe o index do valor desejado
console.log(num.indexOf(8))