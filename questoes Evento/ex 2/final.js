const titulo = document.querySelector('#titulo');
const subtitulo = document.querySelector('#subtitulo');
const caixa = document.querySelector('#caixa');


titulo.textContent = "JavaScript no DOM!";
subtitulo.textContent = "Meu nome";
caixa.innerHTML = 'Nova <strong>caixa!</strong>';

console.log(titulo.textContent);
console.log(subtitulo.textContent);
console.log(caixa.textContent);
