

function imc (peso , altura){
    let conta = peso/(altura*altura)
    var verificaIMC = (conta >= 25? "sobrepeso" : "normal")
    var verificaIMC = (conta >= 25? "sobrepeso" : "normal")
    console.log(`seu imc é:${(Math.round(conta))} ${verificaIMC}`)
    
   
}
imc(70,1.60)


