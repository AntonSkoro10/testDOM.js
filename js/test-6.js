let timeoutId = null
const buttoSucces = document.querySelector('.js-btn-succes')

showNotification()

function onNotification() {
    hideNotification()
    clearTimeout(timeoutId)
}


function showNotification() {
    buttoSucces.classList.add('is-visible')
   timeoutId = setTimeout(() => {
        hideNotification();
        console.log('Закриваємо сповіщення автоматично, щоб воно не залишалося відкритим');
    }, 5000);
}


function hideNotification() {
    buttoSucces.classList.remove('is-visible')
}