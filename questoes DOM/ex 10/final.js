
const li = document.querySelector("#lista");
const item1 = document.querySelector("#item-1");
const item3 = document.querySelector("#item-3");

document.querySelector("#item-2").remove();

const novo = document.createElement("li");
novo.textContent = "Item inserido via JS";

li.insertBefore(novo, item3);

const texto2 = document.createElement("li");
texto2.textContent = "Item substituído";

li.replaceChild(texto2, item1 );

console.log(li.innerHTML);