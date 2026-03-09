'use scrict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('pouco','medio','alto')

}

function calcularDesconto(){

    const valor = document.getElementById('valor')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    const valorReal = Number(valor.value)
    const descontoReal = Number(desconto.value)




    const percentualFinal = (valorReal * descontoReal )/100
    const resultadoFinal = valorReal - percentualFinal
    const precodesconto = valorReal - resultadoFinal

    removerClasses()
    
    if(desconto.value <= 5){
       resultado.textContent = `Economizou  R$${precodesconto.toFixed(2)} \nValor final R$${resultadoFinal}`
        resultado.classList.add('pouco')


    }else if(desconto.value >5 && desconto.value <=10){
         resultado.textContent = `Economizou R$${precodesconto.toFixed(2)}\n Valor final R$${resultadoFinal}`
        resultado.classList.add('medio')


    }else{
       resultado.textContent = `Economizou R$${precodesconto.toFixed(2)}\n Valor final R$${resultadoFinal}`
        resultado.classList.add('alto')


    }

}