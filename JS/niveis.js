

let resultadoDaOperacao = document.getElementById("resultadoDaOperacao")
let resultado2
let x = document.getElementById("x").innerHTML
let y = document.getElementById("y").innerHTML
let operacao = document.getElementById("operacao").innerHTML
let fase = document.getElementById("fase")
var nivel = 1
niveis()

function niveis(){
    let nX = 9
    let nY = 9
    let operador
    do{
        nX = Math.floor(Math.random() * nivel * 10) 
        nY = Math.floor(Math.random() * nivel * 10)
        operador = Math.floor(Math.random() * 2)
        if (operador == 0){
            operador = "+"
            resultado2 = nX+nY
        }else{
            operador = "-"
            resultado2 = nX-nY
        }
        
    }while(resultado2 <0 || resultado2 >(nivel *10 - 1))
    document.getElementById("x").innerHTML = nX
    document.getElementById("y").innerHTML = nY
    document.getElementById("sinal").innerHTML = operador
    document.getElementById("inpNumero").value = ""
    document.getElementById("inpNumero").focus()


}
document.onkeyup = function (evento){
    let tecla = (evento.key)
    console.log(evento)
    if(tecla == 'Enter'){
    let resposta = Number(document.getElementById('inpNumero').value)
        if(resposta == resultado2){
            nivel++
            fase.innerHTML = "Nivel " + `${nivel}`
            window.alert('Correto');

        }else{
            alert('Errado')
        }
    }
}