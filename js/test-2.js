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
