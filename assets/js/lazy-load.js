document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.post-image');

    images.forEach(image => {
        // Check if the image is already loaded (for cached images)
        if (image.complete && image.naturalHeight !== 0) {
            image.classList.add('loaded');
        } else {
            // Wait for the image to load
            image.addEventListener('load', function() {
                image.classList.add('loaded');
            });

            // Optional: Handle error scenarios
            image.addEventListener('error', function() {
                console.error('Image failed to load:', image.src);
            });
        }
    });
});
