const pessoa = {
    Nome: "Ana",
    Idade: 20,
    Cidade: "Tupã",

    Endereço: {
        Rua: 'Aracaju',
        Numero: 1000,
        Bairro: 'Brasil'
    }
}
//console.log(pessoa.Nome, pessoa.Endereço)

const{Nome, Idade} = pessoa
console.log(Nome, Idade)

const{Nome: n, Idade: i} = pessoa
console.log(n, i)

const{Sobrenome, BomHumor = true} = pessoa
console.log(Sobrenome, BomHumor)

const{Endereço:{Rua: r, Bairro: b, Numero: nm}} = pessoa
console.log("Rua:",r,  "Bairro:",b, "Numero:",nm,) 