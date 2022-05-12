imgAtual = 1

function slidePassando() {
    if (imgAtual == 3) {
        imgAtual = 0
    }
    mudarImagem('slide', `img/cupcake${imgAtual + 1}.jpg`)
    imgAtual++
}

function mudarImagem(slide, caminhoNovoSlide) {
    document.getElementById(slide).src = caminhoNovoSlide
}

const intervalo = window.setInterval(function(){
    slidePassando()
  }, 5000);

function imagemAnterior() {
    if (imgAtual == 1) {
        imgAtual = 3
    } else {
        imgAtual--
    }
    mudarImagem('slide', `img/cupcake${imgAtual}.jpg`)
}

function imagemPosterior() {
    if (imgAtual == 3) {
        imgAtual = 1
    } else {
        imgAtual++
    }
    mudarImagem('slide', `img/cupcake${imgAtual}.jpg`)
}




//clearInterval(intervalo)