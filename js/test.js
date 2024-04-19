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



// const { title, author, isPublic, rating } = book

// const accessType = isPublic ? "public" : "private"
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`

// console.log(title)
// console.log(author)
// console.log(rating)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// const book = {
//     title: "The last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.71,
// }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

