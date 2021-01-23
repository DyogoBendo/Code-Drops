const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=theme]')

const getStyle = (element, style) => {
    return window.getComputedStyle(element).getPropertyValue(style)
}

const initialColors = {
    bg: getStyle(html, "--bg"),  // pegar a cor inicial do fundo do css
    bgPanel: getStyle(html, "--bg-panel"),  // pegar a cor inicial do fundo do css
    colorHeading: getStyle(html, "--color-heading"),  // pegar a cor inicial do fundo do css
    colorText: getStyle(html, "--color-text")  // pegar a cor inicial do fundo do css
}

const darkMode = {
    bg: "#333333",
    bgPanel: '#434343',
    colorHeading:"#3664ff",
    colorText:"#B5B5B5"
}

const transformKey = (key) => {
    return '--' + key.replace(/([A-Z])/, '-$1').toLowerCase() // pega as letras maiusculas, e sempre antes de uma letra maiuscula coloca um traço

}

const changeColors = (colors) =>{
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key])
    })
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})