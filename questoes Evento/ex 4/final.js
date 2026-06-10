const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const curso = document.querySelector('#curso');

const idadeNumero = Number(idade.value);

console.log(`Nome: ${nome.value}\nIdade ${idadeNumero}\nTexto: ${curso.value}`);