function mediaLista(lista) {
    numeroElemtentos = lista.length
    resultado = 0
    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i]
    }

    resultadoMedia = resultado / numeroElemtentos

    return resultadoMedia

}

listaNumeros = [2, 3, 3, 5, 7, 10]

console.log(`A media da lista de números ${listaNumeros} é ${mediaLista(listaNumeros)}`)



