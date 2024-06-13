//Função que pega a palavra, e inverte ela
function InverterPalavra(palavra) {
    palavraMinuscula = palavra.toLowerCase() //Tranforma qualquer palavra em minusculo, para fazer a inversão,e não ocorrer erros independente de como foi digitado
    palavraArray = palavraMinuscula.split(''); // Faz com que a palavra vire um array
    palavraInvertidaArray = palavraArray.reverse();// Faz os elementos dos arrays serem invertidos, como é um palavra, ficara invertida
    palavraInvertida = palavraInvertidaArray.join('');// Faz com que o array vire novamente uma palavra, so que agora, invertida

    return palavraInvertida // Retorna a palavra invertida
}

//Função que verifica se a palavra é palindroma
function palindromo(palavra) {
    palavraMinuscula = palavra.toLowerCase() //Coloca a palavra recebida em minúscula, para ficar melhor de tratá-la
    if (InverterPalavra(palavra) === palavraMinuscula) { //  Verifica se a palavra invertida é igual a palavra recebida no parâmetro
        return `${palavra} é um palindromo`//Se ela for igual, vai retornar que ela é um palindromo
    } else return `${palavra} não é um palindromo` // Se nao for, Retorna que ela não é
}

console.log(palindromo('ala'))


