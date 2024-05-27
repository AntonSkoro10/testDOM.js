document.addEventListener('DOMContentLoaded', () => {
    const backdropMobile = document.querySelector('.backdrop');
    const openModalButton = document.querySelector('.burger-btn-js');
    const closeModalButton = document.querySelector('.cls-btn');

    openModalButton.addEventListener('click', () => {
        backdropMobile.classList.add('is-open')
        backdropMobile.classList.remove('is-closed')
    })
    
    closeModalButton.addEventListener('click', () => {
        backdropMobile.classList.add('is-closed')
        backdropMobile.classList.remove('is-open')
    })

    window.addEventListener('click', function(event) {
        if (event.target === backdropMobile) {
            backdropMobile.classList.add('is-closed');
            backdropMobile.classList.remove('is-open');
        }
    })
}) 

