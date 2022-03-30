let numeros = Array();
let teste4 = document.getElementById('res')
function adicionar(){
    let teste = document.getElementById('num').value
    let tab = document.getElementById('selec')
    if(numeros.indexOf(teste) != -1 || teste > 100){
        alert('já adicionado ou invalido')
    }else{
        numeros.push(teste)
        console.log(numeros)
        let item = document.createElement('option')
        item.text = `Valor ${teste} adicionado`
        tab.appendChild(item)
        teste4.innerHTML = ""
    }
    document.getElementById('num').value = ""
    document.getElementById('num').focus()
    

}

function analisar(){
    if(numeros.length == 0){
        alert('adicione valores')
    }else{
    
    let teste6 = Number(numeros)
    let teste3 = numeros.length
    
    let teste7 = Math.max(...numeros)
    let teste8 = Math.min(...numeros)
    
    let soma = 0
    let media = 0
    
    for(let pos in numeros){
        soma += Number(numeros[pos]) 
    }
    media = soma / teste3
    
    teste4.innerHTML = `<br> Ao todo temos ${teste3} elementos <br> `
    teste4.innerHTML += `O maior valor é ${teste7}<br>`
    teste4.innerHTML += `O menor valor é ${teste8} <br>`
    teste4.innerHTML += `A soma dos valores é ${soma} <br>`
    teste4.innerHTML += `A media dos valores é ${media} <br>`
    }
    
}
