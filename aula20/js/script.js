document.addEventListener('keydown', function (event){
    console.log(event.key)
    if(event.key === 'Enter'){
        console.log('Apertou enter')
    }
})

document.addEventListener('keyup', function (e){
    console.log(e)
    if(e.key === "Enter"){
        console.log('soltou o enter')
    }
})