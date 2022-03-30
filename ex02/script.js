function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res2 = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 14){
                img.setAttribute('style', 'width:250px; border-radius: 250px')
                img.setAttribute('src', 'garoto.jpg')
            }else if (idade < 50){
                img.setAttribute('style', 'width:250px; border-radius: 250px')
                img.setAttribute('src', 'jovem homem.jpg')   
                
            }else{
                img.setAttribute('style', 'width:250px; border-radius: 250px')
                img.setAttribute('src', 'idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            img.setAttribute('id', 'foto')
            if(fsex[1].checked){
                genero = 'Mulher';
                if(idade >= 0 && idade < 14){
                    img.setAttribute('style', 'width:250px; border-radius: 250px')
                    img.setAttribute('src', 'garota.jpg')
                }else if (idade < 50){
                    img.setAttribute('style', 'width:250px; border-radius: 250px')
                    img.setAttribute('src', 'jovem mulher.jpg')   
                    
                }else{
                    img.setAttribute('style', 'width:250px; border-radius: 250px')
                    img.setAttribute('src', 'idosa.jpg')
                }
        }
        
       
    }
    res2.style.textAlign = 'center'
        res2.innerHTML = `Detectamos ${genero} com a idade e ${idade} Anos`
        res2.appendChild(img)
}}