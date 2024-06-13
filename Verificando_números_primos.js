function nPrimo(n) {
    if (n % 2 === 0 || n === 0 || n === 1) {
        console.log("Não é um número primo")
    } else if (n === 2 || n % 2 === 1) {
        console.log('È um número primo')
    }
}

nPrimo(7)