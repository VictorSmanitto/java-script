const lista = document.querySelectorAll('.item');
let contador = 1;

lista.forEach(listinha =>{
    console.log(`Posição: ${contador}  Texto: ${listinha.textContent}`);

    if(contador == 3) {
        listinha.innerHTML = `<Strong>${listinha.textContent}<Strong>`;
    }              
    contador ++;          
})