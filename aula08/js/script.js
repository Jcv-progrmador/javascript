var el = document.createElement("h3")
el.classList = "testando-classe";
var texto = document.createTextNode('este é o texto do h3')
el.appendChild(texto)
console.log(el)
var title = document.querySelector('#title')
console.log(title)

var pai = title.parentNode;
pai.replaceChild(el, title)