

let resultadoDaOperacao = document.getElementById("resultadoDaOperacao")
let resultado2
let x = document.getElementById("x").innerHTML
let y = document.getElementById("y").innerHTML
let operacao = document.getElementById("operacao").innerHTML 

function nivelum(){
    let nX = 9
    let nY = 9
    let operador

    do{
        nX = Math.floor(Math.random() * 9) + 1
        nY = Math.floor(Math.random() * 9) + 1
        operador = Math.floor(Math.random() * 2)
        if (operador == 0){
            operador = "+"
            resultado2 = nX+nY
        }else{
            operador = "-"
            resultado2 = nX-nY
        }
        
    }while(resultado2 <0 || resultado2 >9)
    document.getElementById("x").innerHTML = nX
    document.getElementById("y").innerHTML = nY
    document.getElementById("sinal").innerHTML = operador
}

function compareAnswer(){

    let answer = document.getElementById("answer").value
    
    if(answer == resultado2){
        resultadoDaOperacao.innerHTML="CORRETO"
    }else{
        resultadoDaOperacao.innerHTML="ERRADO"
    }
}
document.onkeyup = function (evento){
    let tecla = Number(evento.key)
    document.getElementById('divNumero').innerHTML = tecla
    if(!isNaN(tecla)){
        if(tecla == resultado2){
            window.alert('Correto');
            window.location.href='./nivel2.html'
        }else{
            alert('Errado')
        }
    }else{
     alert('Digite um número')
    
    }}