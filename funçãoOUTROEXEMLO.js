//Armazenar uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a+b)
}

imprimirSoma(5, 9)

//Armazenando uma função arrow em uma variável 

const soma = (a, b) =>{
    return a + b 
}
console.log(soma(4, 6))

// Recurso arrow -> Retorno implícito

const subtrair = (a, b) => a - b
console.log(subtrair(5, 6))

const imprimir = a => console.log(a)
imprimir('Legalzinnn!!!')