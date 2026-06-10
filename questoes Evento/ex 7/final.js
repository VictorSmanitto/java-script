const src = document.querySelector("#foto");
const href = document.querySelector("#link");
const campo = document.querySelector("#campo");

src.setAttribute('src', './img/OIP.jpg');
href.setAttribute('href', 'https://github.com');
href.innerHTML = 'meu github';
campo.setAttribute("disabled", "");
const linkizinho = src.getAttribute('src');
console.log(linkizinho);