const produto = {}
produto.nome = 'Celular Ultra Power'
produto.preco = 4888.98
produto['Desconto Legal'] = 0.40 //Evitar atributos com espaço 

console.log(produto)

const produto2 = {
    nome: 'Camisa Polo',
    valor: 79.90,
    marca: 'jacarezinho',

    obj:{
        blabla:2
    }
}

"{nome: camisa polo, valor: 79.90}"
console.log(produto2)
