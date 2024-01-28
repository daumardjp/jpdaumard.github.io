document.addEventListener('DOMContentLoaded', () => {
    const lazyLoadImages = document.querySelectorAll('img[loading="lazy"]');

    lazyLoadImages.forEach(img => {
        img.onload = () => {
            img.classList.add('loaded');
        };
    });
});
