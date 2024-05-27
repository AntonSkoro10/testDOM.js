document.addEventListener('DOMContentLoaded', () => {
    const backdropMobile = document.querySelector('.backdrop-2')
    const openModalButton = document.querySelector('.open-modal-btn')
    const closeModalButton = document.querySelector('.close-btn-2')


    openModalButton.addEventListener('click', () => {
        backdropMobile.classList.add('is-open')
        backdropMobile.classList.remove('is-closed')
    })

    closeModalButton.addEventListener('click', () => {
        backdropMobile.classList.remove('is-open')
        backdropMobile.classList.add('is-closed')
    })

    window.addEventListener('click', (evevnt) => {
        if (evevnt.target === backdropMobile) {
            backdropMobile.classList.remove('is-open')
            backdropMobile.classList.add('is-closed')
        }
    })

})