const welcomeContainer = document.getElementById('welcomeContainer')
const welcomeText = document.getElementById('welcomeText')
const welcomeButton = document.getElementById('welcomeButton')
const pageContainer = document.getElementById('pageContainer')

const devsTitle = document.getElementById('devsTitle')
const background = document.getElementById('background')

if (window.matchMedia("(max-width: 1250px)").matches) {
    welcomeText.innerText = 'Click to start ;)' 
    welcomeButton.style.animation = 'opacityin 1s forwards'
} else {
    welcomeText.innerText = 'Hover to start ;)' 
    welcomeButton.style.animation = 'opacityin 1s forwards'
}

window.addEventListener("mousemove", function (e) {
    let width = window.innerWidth
    let height = window.innerHeight
    let clientHeight = document.body.clientHeight
    let skew = {}

    skew.y = (20 * ((e.x / width) - 0.5))
    skew.x = -(20 * ((e.y / height) - 0.5))
      
    if (!window.matchMedia("(max-width: 1250px)").matches) {
        welcomeContainer.style.webkitTransform = "perspective(" + clientHeight + "px) rotateX(" + skew.x + "deg) rotateY(" + skew.y + "deg)"
        devsTitle.style.webkitTransform = "perspective(" + clientHeight + "px) rotateX(" + skew.x + "deg) rotateY(" + skew.y + "deg)"
        background.style = `transform: scaleY(${1.3 + (skew.y * 0.03)}) scaleX(${1.3 + (skew.x * 0.03)})`
    } 
})

let transitioning = false
const time = 3

welcomeContainer.addEventListener('click', () => {
    if (!transitioning) {
        document.body.style.filter = "invert(1)"
        welcomeContainer.style.animation = `opacityout ${time}s forwards`
        transitioning = true
        welcomeText.innerText = 'Get ready bro!'
        setTimeout(() => {
            document.body.style.filter = ""
            setTimeout(() => {
                welcomeContainer.remove()
                showMainPage()
            }, (time * 1000) - 300)
        }, 300)
    }
})

welcomeContainer.onmouseenter = () => !transitioning && (welcomeText.innerText = 'Now click to see the magic!')
welcomeContainer.onmouseleave = () => {
    if (window.matchMedia("(max-width: 1250px)").matches) {
        !transitioning ? welcomeText.innerText = 'Click to start ;)' : welcomeButton.style.animation = 'opacityin 1s forwards'
    } else {
        !transitioning ? welcomeText.innerText = 'Hover to start ;)' : welcomeButton.style.animation = 'opacityin 1s forwards'
    }
}

// PAGINA PRINCIPAL

const header = document.getElementById('header')
const main = document.getElementById('main')
const footer = document.getElementById('footer')

function showMainPage() {
    welcomeContainer.style.display = 'none'
    pageContainer.style.display = 'grid'    

    header.style.animation = `opacityin 2s forwards`
    main.style.animation = `opacityin 2s ease-in-out 0.5s forwards`
    footer.style.animation = `opacityin 2s forwards`
}