const pontos = 50;
const fundo = document.querySelector("#placar");

fundo.textContent = pontos;

if(pontos <= 49) {
    fundo.style.color = "red";
    fundo.style.backgroundColor = "#fde8e8";
} else if (pontos > 49 && pontos < 74){
    fundo.style.color = "orange";
    fundo.style.backgroundColor = "#fef3e2";
} else if (pontos >= 75 && pontos <= 100){
    fundo.style.color = "green";
    fundo.style.backgroundColor = "#eafaf1";
    
}

