function contar(){
    let ini = document.getElementById('txti')
    let alcance = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    console.log(ini, alcance, passo)
    if(ini.value.length == 0 || alcance.value.length == 0 || passo.value.length == 0){
        window.alert('[Erro] faltam dados')
        res.innerHTML = "Impossivel contar"
    }else{
        res.innerHTML = " Contando: <br> "
        let i = Number(ini.value);
        let f = Number(alcance.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert("passo invalido! considerando passo 1") 
            p = 1
        }
        if( i < f){
            for(let c = i; c <= f; c+= p){
                res.innerHTML += `${c} \u{1f449}`;
            }
            res.innerHTML += `\u{1F3C1}`;
        }else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`;
            }
            res.innerHTML += `\u{1F3C1}`;
        }
        
        
       
    }
    /*
    var c = inicio;
    document.getElementById('res').innerHTML = " "
   while(c <= alcance){
       document.getElementById('res').innerHTML += c + " "
       c++;
   }
   */
}