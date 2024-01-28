window.addEventListener('load', () => {
  const grid = document.querySelector('.grid'); // Adjust if your grid has a different class
  const gridItems = grid.querySelectorAll('.grid-item');
  let maxImageHeight = 0;

  // Find the tallest image
  gridItems.forEach(item => {
    const imageHeight = item.querySelector('img').naturalHeight;
    if (imageHeight > maxImageHeight) {
      maxImageHeight = imageHeight;
    }
  });

  // Set padding-bottom for each grid item
  gridItems.forEach(item => {
    const imageHeight = item.querySelector('img').naturalHeight;
    const paddingBottom = maxImageHeight - imageHeight;
    item.style.paddingBottom = `${paddingBottom}px`;
  });
});
