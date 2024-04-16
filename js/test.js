// const parent = document.querySelector("#parent")
// const child = document.querySelector("#child")
// const descendant = document.querySelector("#descendant")

// parent.addEventListener('click', () => {
//     console.log("Parent click heandler")
// })

// child.addEventListener('click', () => {
//     console.log("Child click heandler")
// })

// descendant.addEventListener('click', () => {
//     console.log("Descendant click heandler")
// })

// const parent = document.querySelector('#parent')

// parent.addEventListener('click', (event) => {
//     console.log("event target", event.target)
//     console.log("currentTarget event", event.currentTarget)
// })

// const parent = document.querySelector("#parent")
// const child = document.querySelector("#child")
// const descendant = document.querySelector("#descendant")

// parent.addEventListener('click', () => {
//     alert("Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!")
// })

// child.addEventListener('click', () => {
//     alert("Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!")
// })

// descendant.addEventListener('click', (event) => {
//     event.stopPropagation()
//     alert("Descendant click handler")
// })

// const boxButtons = document.querySelector('div.box')

// boxButtons.addEventListener('click', function (event) {
//     console.log(event.target)
// })

const colorPalette = document.querySelector(".color-palette")
const output = document.querySelector(".output")

colorPalette.addEventListener('click', selectColor)

function selectColor(event) {
    if (event.target.nodeName !== "BUTTON") {
        return
    }

    const selectedColor = event.target.dataset.color
    output.textContent = `Selected color: ${selectedColor}`
    output.style.color = selectedColor
}

createPaletteItems()

function createPaletteItems() {
   const items = []
    for (let i = 0; i < 60; i++) {
        const colors = getRandomHexColor()
        const item = document.createElement("button")
        item.type = "button"
        item.dataset.color = colors
        item.style.backgroundColor = colors
        item.classList.add("item")
        items.push(item)
    }
    colorPalette.append(...items)
}

function getRandomHexColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

