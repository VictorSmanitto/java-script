
const lista = document.querySelector('#lista');

const linguagens = ['HTML', 'CSS', 'JavaScript', 'C#'];

linguagens.forEach(linguagem =>{
    const li = document.createElement('li');
    li.textContent = linguagem;
    lista.appendChild(li);
})

console.log(`Lista: \n${lista.textContent}`);