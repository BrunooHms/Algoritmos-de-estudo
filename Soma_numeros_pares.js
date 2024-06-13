const lista = [1, 2, 3, 4, 5, 6, 7, 8]
let resultado = 0

for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
        resultado += lista[i]
        console.log(resultado)
    }
}