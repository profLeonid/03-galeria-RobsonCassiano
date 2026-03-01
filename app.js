'use strict'

const imagens = [
    {
        url: './img/car1.jpg', legenda: 'Camaro Vermelho',
    },
    {
        url: './img/car2.jpg', legenda: 'Fiat Azul',
    },

    {
        url: './img/car3.jpg', legenda: 'Onix Vermelho',
    },
    {
        url: './img/car4.jpg', legenda: 'Peuget Preto',
    },
    {
        url: './img/car5.jpg', legenda: 'Mustang Branco',
    },
    {
        url: './img/car6.jpg', legenda: 'Ferrari Preta',
    }
]

function criarImagem(imagem) {
    const galeria = document.getElementById('galeria')

    const figure = document.createElement('figure')

    const img = document.createElement('img')

    const figCaption = document.createElement('figcaption')
    img.src = imagem.url
    img.classList.add('imagem-galeria')

    figCaption.textContent = imagem.legenda
    figure.appendChild(img)
    figure.appendChild(figCaption)
    galeria.appendChild(figure)
}

function carregarImagens () {
    imagens.forEach(criarImagem)
}
carregarImagens()
