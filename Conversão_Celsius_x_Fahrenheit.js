function conversaoFahrenheit(celsius){
   
    let calculoConversão = celsius * 1.8 + 32
   
    if( typeof celsius !== 'number'){
        throw new ReferenceError ('Celsius precisa ser um número, entrada inválida')
   } else return calculoConversão
        
}

console.log(conversaoFahrenheit('10'))