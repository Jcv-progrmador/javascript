var btn =document.getElementById('btn')
console.log(btn)

btn.addEventListener('click', function(){
    console.log('clicou')
    console.log(this)
    this.style.color = 'red';
})


var title = document.querySelector('#title')
title.addEventListener('click', function(){
    var subtile = document.querySelector('.subtitle')
    subtile.style.display = 'none';

})

var subtitle = document.getElementById('paragrafo')
console.log(subtitle)
subtitle.addEventListener('dblclick', function(){
    console.log('clique duplo')
})