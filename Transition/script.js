// Load theme preference from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.className = savedTheme;
}

// Toggle theme and store in localStorage
function toggleTheme() {
  const currentTheme = document.body.className === 'dark' ? 'light' : 'dark';
  document.body.className = currentTheme;
  localStorage.setItem('theme', currentTheme);
}

// Trigger bounce animation
function animateButton() {
  const btn = document.getElementById('animateButton');
  btn.classList.remove('bounce'); // reset animation
  void btn.offsetWidth; // trigger reflow
  btn.classList.add('bounce');
}

// Event listeners
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('animateButton').addEventListener('click', animateButton);

// Initialize on page load
loadTheme();
