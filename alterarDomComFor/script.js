var lista = ['Laranja', 'Maça', 'Pera', 'Jaca', 'Limão']
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body')
console.log(body[0])
body[0].appendChild(listaUl)
var listaNoBody = document.getElementsByTagName('ul')
console.log(listaNoBody[0])

for(let i = 0; i < lista.length; i++){
    var liFor = document.createElement('li')
    /*
    listaNoBody[0].appendChild(liFor)
    liFor.innerHTML = lista[i]
    console.log(lista[i])
    */
   var textoLi = document.createTextNode(lista[i])
   liFor.appendChild(textoLi);
   console.log(liFor)
   listaNoBody[0].appendChild(liFor)
}