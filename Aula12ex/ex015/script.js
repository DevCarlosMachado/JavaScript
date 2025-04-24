function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 12){
                //crianca
                img.setAttribute('src', 'nenem-menino.jpg')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 12){
                //crianca
                img.setAttribute('src', 'nenem-menina.jpg')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}