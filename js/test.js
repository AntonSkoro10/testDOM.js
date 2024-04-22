const parent = document.querySelector("#parent")
const child = document.querySelector("#child")
const descendant = document.querySelector("#descendant")

parent.addEventListener('click', () => {
    console.log("Parent click heandler")
})

child.addEventListener('click', () => {
    console.log("Child click heandler")
})

descendant.addEventListener('click', () => {
    console.log("Descendant click heandler")
})

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

