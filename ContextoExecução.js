//let pessoa = {
   // Nome: "Ana",
   // Falar: function(){return 'Oi, meu nome é ${this.Nome}'}
//}
//pessoa.Falar()
//console.log(pessoa.Falar())

let a = 3
console.log(this.a)

global.b = 5
this.c = 9
this.d = false
this.e = 'Teste'

console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)  //module.exports = {c: 9, d: false, e: 'Teste'}

//Criando variável insana: sem VAR ou LET.
abc = 3 // Não tente isso em casa
console.log(global.abc)

