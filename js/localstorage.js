// const alena = {
//     name: "Alena",
//     lastName: "Tymchuk"
// }

// const json = JSON.stringify(alena)
// console.log(json)

// const json = '{ "name": "Alena", "lastname": "Tymchuk" }'

// const alena = JSON.parse(json)

// console.log(alena)
// console.log(alena.name)

// console.log(window.localStorage)

// localStorage.setItem("anton", "alena")
// console.log(localStorage)

// const settings = {
//     thame: "dark",
//     isAuthenticade: true,
//     options: [1, 2, 3]
// }

// localStorage.setItem("settings", JSON.stringify(settings))

// const savedTheme = localStorage.getItem("settings")
// console.log(savedTheme)

// const savedParsed = JSON.parse(savedTheme)
// console.log(savedParsed)

// localStorage.removeItem("settings")
// console.log(localStorage.getItem("settings"))

// localStorage.clear()
// console.log(localStorage)

// sessionStorage.setItem("user-id", "123")
// sessionStorage.setItem("tickets", JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 }))
// console.log(sessionStorage)

// const userId = sessionStorage.getItem("user-id")
// const tickets = JSON.parse(sessionStorage.getItem("tickets"))
// console.log(tickets)

// sessionStorage.removeItem("tickets")
// console.log(sessionStorage)

// sessionStorage.clear()
// console.log(sessionStorage)


const form = document.querySelector('.feedback-form')
const texterea = form.elements.message
const localStorageKey = "goit-example-message"

texterea.value = localStorage.getItem(localStorageKey) ?? ""

form.addEventListener('input', (evt) => {
    localStorage.setItem(localStorageKey, evt.target.value)
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log(evt.target.elements.message.value)
    localStorage.removeItem(localStorageKey)
    form.reset()
})

