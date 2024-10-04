
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });

    card.addEventListener('click', () => {
        // Add logic to open blog posts for each category
    });
});
