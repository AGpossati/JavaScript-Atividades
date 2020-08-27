let isAtivo = false
const up = texto => texto.toUpperCase()

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!false)

console.log(`Os ${up('verdadeiros')}!`)
console.log(!! 3)
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log(`Os ${up('falsos')}!`)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(`Para ${up('finalizar')}!`)
console.log(!!('' || null || 0 || " "))

let nome = ''
console.log(nome || `${up('Desconhecido')}!`)

nome = 'Augusto'
console.log(nome || `${up('Desconhecido')}!`)