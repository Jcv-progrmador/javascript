//clearTimeOut

var x = 0

var mytimer = setTimeout(function(){
    console.log("O x é 0")
}, 1500)

x = 5


if(x > 0){
    clearTimeout(mytimer)
    console.log('O x passou de 0')
}

// clearInterval

var myinterval = setInterval(function(){
    console.log('imprimindo interval')
}, 500)


setTimeout(function(){
    console.log('Não precismos mais repetir')
    clearInterval(myinterval)
}, 6000)
