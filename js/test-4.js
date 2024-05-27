document.addEventListener('DOMContentLoaded', () => {
    const backdrop = document.querySelector('.backdrop');
    const burgerButton = document.querySelector('.burger-btn');
    const closeModalButton = document.querySelector('.cls-btn');

    // Open modal when burger button is clicked
    burgerButton.addEventListener('click', () => {
        backdrop.classList.add('is-open');
        backdrop.classList.remove('is-closed');
    });

    // Close modal when close button is clicked
    closeModalButton.addEventListener('click', () => {
        backdrop.classList.remove('is-open');
        backdrop.classList.add('is-closed');
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === backdrop) {
            backdrop.classList.remove('is-open');
            backdrop.classList.add('is-closed');
        }
    });
});

