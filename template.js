const nome = 'rebeca'
const concatenar = 'Olá ' + nome + '!'

const template = ` 
Olá 
${nome}!`

console.log(concatenar, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)