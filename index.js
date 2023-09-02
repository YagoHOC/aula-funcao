function imprimirHelloWorld(){
    console.log('Hello World')
}

imprimirHelloWorld()


function Multiplicacao(numero,numero2){
    console.log(numero*numero2)
}
 
Multiplicacao(3,3)
Multiplicacao(3,4)
Multiplicacao(3,5)
Multiplicacao(3,6)

 com boas praticas

function olaNome(nome){
    console.log('Olá '+nome)
}

olaNome(nome = prompt('Qual é seu nome?'))
olaNome(nome = 'Laura')
olaNome(nome = 'João')


function calculaArea(base,altura){
    const area = base*altura
    return area
}

const areaCalculada = calculaArea(2,3)

 console.log(areaCalculada)
 //ou
 console.log(calculaArea(2,3))


function soma(numero1,numero2){
    const somaEh = numero1+numero2
    return somaEh
}

const resultado = soma(4,4)

console.log(resultado)

function arrayFun(){
    arrayOld = [1,2,3,4,5,6,7,8,9,,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26]
    let lastElement = arrayOld[0];
    let novoElement = arrayOld[arrayOld.length -1];
    novoArray = [lastElement/2,novoElement/2]
    return novoArray
}

let resultado = arrayFun()
console.log(resultado)


function soma (num,num2){
    return num + num2
}

let resultado = soma(2,3)

let minhaFuncao = soma(num,num2){
     return num + num2
}

let minhaFuncao = (num,num2) => {
    return num1 +num2
}


