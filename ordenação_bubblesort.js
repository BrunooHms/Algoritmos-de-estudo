function bubbleSort(lista) {
    let aux = 0 //Váriavel  para auxiliar na troca de posições, para organizar a lista
    for (let i = 0; i < lista.length; i++) { //Interando sobre a lista e recebida e percorrendo ela.
        for (let j = 0; j < lista.length - (i - 1); j++) { //Percorrendo de 2 em 2 elementos, para compara-los
            if (lista[j] > lista[j + 1]) { //Condição para troca
                aux = lista[j + 1]
                lista[j + 1] = lista[j] //Trocando os elementos de lugar, utilizando uma varivável auxiliar
                lista[j] = aux
            }
        }

    }
    return lista
}

lista = [1, 5, 2, 6, 8, 10, 3, 7, 4, 9]

console.log(bubbleSort(lista))





