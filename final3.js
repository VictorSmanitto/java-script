const valor = document.querySelector("#valor-imc");
const classificacao = document.querySelector("#classificacao");
const resultado = document.querySelector("#resultado");
const btnCalcular = document.querySelector("#btn-calcular");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");

let detalhes = false;


btnCalcular.addEventListener("click", ()=>{

    const IMC = Number(peso.value) / (Number(altura.value) * Number(altura.value));
    valor.textContent = IMC.toFixed(2);

    if (IMC < 18.5){
        classificacao.textContent = "classificação : Abaixo do peso";
    }else if (IMC >= 18.5 && valor <= 24.9){
        classificacao.textContent = "classificação : normal";
    }else if(IMC >= 25 && valor< 29.9){
        classificacao.textContent = "classificação : sobrepeso";
    }else{
        classificacao.textContent = " classificação : obeso";
    }

  detalhes = !detalhes;
  resultado.style.display = detalhes ? "block" : "none";
  btnCalcular.textContent = detalhes ? "Ocultar Resultado" : "mostrar Resultado"

});