var novoParagrafo =  document.createElement('p')
/*
novoParagrafo.innerHTML = 'teste'
*/
var texto = document.createTextNode("Este é o conteudo do paragrafo")
novoParagrafo.appendChild(texto)
console.log(novoParagrafo)
var body = document.querySelector('body')
console.log(body)
body.appendChild(novoParagrafo)
var container = document.getElementById('container')
var el = document.createElement('span')
el.appendChild(document.createTextNode('texto do span'))
container.appendChild(el)