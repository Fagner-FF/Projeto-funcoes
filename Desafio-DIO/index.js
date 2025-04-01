// Calculadora de partidas rankeadas 

partidas(50 , 20)
function partidas(vitorias, derrotas){
    let resultado = vitorias - derrotas
    let ranking = ""

    if(resultado <= 10){
        ranking = "Ferro"
 }
    else if(resultado >= 11 && resultado <= 20){
        ranking = "Bronze"
}
    else if(resultado >= 21 &&  resultado <= 50){
        ranking = "Prata"
}
    else if(resultado >= 51 && resultado <= 80){
        ranking = "Ouro"
}
    else if(resultado  >= 81 && resultado <= 90){
        ranking = "Diamante"
}
    else if(resultado >= 91 && resultado <= 100){
        ranking = "Lendário"
}
    else{
        ranking = "imortal"
}
console.log("O herói tem de saldo " + resultado + (" Está no nivel " + ranking))
}
