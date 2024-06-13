resultado = 1;
numeroFatorial = 10

function fatorial(n) {

    if (n <= 1) {
        return n = 1
    } else
        for (i = 1; i <= n; i++) {

            resultado *= i;
            if (i === n) {
                resultadoFatorial = resultado
                return resultadoFatorial
            }
        }
}

fatorial(numeroFatorial);

console.log(`O fatorial de  ${numeroFatorial} é ${resultadoFatorial}`)



