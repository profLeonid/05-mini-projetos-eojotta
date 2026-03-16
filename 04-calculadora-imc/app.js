'use scrict'
function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixo','normal','sobrepeso','ObI','ObII','ObIII')
}


function calcularIMC(){
    const nome = document.getElementById ('nome')
    const peso = document.getElementById ('peso')
    const altura = document.getElementById ('altura')
    const resultado = document.getElementById ('resultado')

    const pesoReal = Number(peso.value)
    const alturaReal = Number(altura.value)

    const resultadoImc = pesoReal /(alturaReal*alturaReal)

    removerClasses()
    if(resultadoImc < 18.5){
        resultado.textContent = 'Abaixo do Peso'
        resultado.classList.add('abaixo')

    }else if(resultadoImc >= 18.5 && resultadoImc < 25){
        resultado.textContent = 'Peso Normal'
        resultado.classList.add('normal')

    }else if (resultadoImc >=25 && resultadoImc <30){
        resultado.textContent = 'Sobrepeso'
        resultado.classList.add('sobrepeso')

    }else if (resultadoImc >= 30 && resultadoImc <35){
        resultado.textContent = 'Obesidade grau I'
        resultado.classList.add('ObI')

    }else if (resultadoImc >= 35 && resultadoImc < 40){
        resultado.textContent = 'Obesidade grau II'
        resultado.classList.add('ObII')

    }else{
        resultado.textContent = 'Obesidade grau III'
        resultado.classList.add('ObIII')
    }
}