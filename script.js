const num1 = prompt("insira um numero")
const num2 = prompt("insira outro numero")
let soma = parseInt(num1) + parseInt(num2);
let sub = parseInt(num1) - parseInt(num2);
let mult= parseInt(num1) * parseInt(num2);
let div = parseInt(num1) / parseInt(num2);
alert(`
    Resultado:
    ${num1} + ${num2} = ${soma}
    ${num1} - ${num2} = ${sub}
    ${num1} * ${num2} = ${multi}
    ${num1} / ${num2} = ${div}
`)
let nome = prompt('insira seu nome')
console.log (`Olá ${nome}`)

let nome1 = rompt('qual o seu prmeiro nome?')
let nome2 = prompt('qual o seu segundo nome?')
let curso = prompt('qual o seu curso tecnico?')
let ano = 2024 - Number(prompt ('em que ano você nasceu?'))

alert(`Olá ${nome1}${nome2}`)
alert(`Então você está aprendendo ${curso} e tem ${ano} anos. Que daora!`)