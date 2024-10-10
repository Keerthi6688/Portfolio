// Function to show sections
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(section).classList.add('active');
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

// // Toggle Dark/Light Mode
// function toggleMode() {
//   const body = document.body;
//   body.classList.toggle('dark-mode');

//   // Store the current mode in localStorage
//   if (body.classList.contains('dark-mode')) {
//     localStorage.setItem('mode', 'dark');
//   } else {
//     localStorage.setItem('mode', 'light');
//   }
// }

// // Load the preferred mode on page load
// window.onload = function() {
//   showSection('home'); // Set the Home section as active by default
//   showAbout('education'); // Set the Education section in About as active by default

//   // Check localStorage for the mode preference
//   const mode = localStorage.getItem('mode');
//   if (mode === 'dark') {
//     document.body.classList.add('dark-mode');
//   }
// };

const themeSwitch = document.getElementById('theme-switch');
const themeLabel = document.getElementById('theme-label');
const body = document.body;
 
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        themeLabel.textContent = 'Dark Mode';
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        themeLabel.textContent = 'Light Mode';
    }
});
 
// Set initial theme to light mode
window.onload = () => {
    body.classList.add('light-mode');
    themeLabel.textContent = 'Light Mode';
};
 
 

// Event Listeners
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(e.target.getAttribute('href').substring(1));
    });
});



//  Animate Progress Bars
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      bar.style.width = percentage + '%';
    });
  }
  
  // Trigger animation when the skills section is in view
  window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
  
    if (sectionPosition < screenPosition) {
      animateProgressBars();
    }
  });
