function comprar(trabalho1, trabalho2){
    const Sorvete = trabalho1 || trabalho2
    const Tv50 = trabalho1 && trabalho2
    //const tv32 = !!(trabalho1 ^ trabalho2) bitwise xor
    const tv32 = trabalho1 != trabalho2
    const mantersaude = !Sorvete

    return{ 
        Sorvete, 
        Tv50, 
        tv32, 
        mantersaude }
}

console.log(comprar(true, true))
console.log(comprar(true, false))
console.log(comprar(false, true))
console.log(comprar(false, false))


// v e v = v
// v e f = f
// f e ? = f

// v ou f = v
// f ou f = f
// v ou ? = f

// v xor v = f
// v xor f = v
// f xor v = v
// f xor f = f