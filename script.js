document.addEventListener('DOMContentLoaded', () => {
    // Accordion
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const content = button.nextElementSibling;
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        });
    });

    // Modal
    const modal = document.querySelector('.modal');
    const modalTrigger = document.querySelector('.modal-trigger');
    const modalClose = document.querySelector('.modal-close');

    modalTrigger.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

