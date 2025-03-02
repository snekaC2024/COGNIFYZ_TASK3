// Select theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️'; // Light mode icon
}

// Toggle dark/light mode
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    }
});
