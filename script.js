var imgAtual = 1

function slidePassando() { 
        document.getElementById('branco').style.animation = 'passando 3s'
        if (imgAtual == 3) {
            imgAtual = 0
        }
        mudarImagem('slide', `img/cupcake${imgAtual + 1}.jpg`)
        imgAtual++  
}

function mudarImagem(slide, caminhoNovoSlide) {
    setTimeout(function() {
        document.getElementById(slide).src = caminhoNovoSlide
        document.getElementById('branco').style.animation = 'none'
    }, 1500)  
}

const intervalo = window.setInterval(slidePassando, 5000);

function imagemAnterior() {
    if (imgAtual == 1) {
        imgAtual = 3
    } else {
        imgAtual--
    }
    document.getElementById('branco').style.animation = 'passando 3s'
    mudarImagem('slide', `img/cupcake${imgAtual}.jpg`)
}

function imagemPosterior() {
    if (imgAtual == 3) {
        imgAtual = 1
    } else {
        imgAtual++
    }
    document.getElementById('branco').style.animation = 'passando 3s'
    mudarImagem('slide', `img/cupcake${imgAtual}.jpg`)
}

function voltar() {
    location.replace('https://aarthx.github.io/');
}