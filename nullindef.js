//let valor

//console.log(valor)
//console.log(valor2)

//valor = null // Ausência de valor

//console.log(valor)
//console.log(valor.toString())// Erro

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto.preco)

//Quando você, programador, precisar usar o nulo(null), use! Deixe o Undefined a cargo da linguagem.  