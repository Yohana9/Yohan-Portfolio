// AOS Init
AOS.init({ duration: 700, once: true });

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const body = document.body;
  const isDark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.innerHTML = isDark 
    ? '<i class="bx bx-moon"></i>' 
    : '<i class="bx bx-sun"></i>';
});

// Mobile Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
