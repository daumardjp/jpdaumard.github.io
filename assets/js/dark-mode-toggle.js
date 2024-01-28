document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById('dark-mode-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  }

  document.body.style.visibility = 'visible';
  document.body.style.opacity = '1';
});



// Function to update the theme mode
function updateThemeMode(newMode) {
    document.body.classList.remove("dark-mode"); // Remove the dark mode class
    if (newMode === 'dark-mode') {
        document.body.classList.add(newMode); // Add dark mode class if necessary
    }
    localStorage.setItem("theme-mode", newMode); // Save the new theme mode in localStorage
}

// Function to toggle between normal and dark modes
function toggleMode() {
    const currentMode = localStorage.getItem("theme-mode") || 'normal';
    const newMode = currentMode === 'normal' ? 'dark-mode' : 'normal';

    // Update the theme mode
    updateThemeMode(newMode);
}

// Check the user's preference in localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.querySelector("#dark-mode-toggle");

    // Restore the saved theme mode
    const savedTheme = localStorage.getItem("theme-mode") || 'normal';
    updateThemeMode(savedTheme);

    // Add click event listener to the toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleMode);
    } else {
        console.error("Dark mode toggle not found.");
    }
});
