let time = 2000 // em milissegundos
let currentImgIndex = 0
let imagens = document.querySelectorAll("#slider img")
let max = imagens.length

function nextImage(){

    imagens[currentImgIndex].classList.remove("selected")

    currentImgIndex ++
    currentImgIndex %= max

    imagens[currentImgIndex].classList.add("selected")
}

function start(){
    setInterval(nextImage, time) // executa uma função a cada um certo tempo definido
}


window.addEventListener("load", start)