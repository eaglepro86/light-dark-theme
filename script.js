const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');
const textBox = document.getElementById('text-box');

// Dark or light images
function imageMode(color) {
    img1.src = `img/undraw_conceptual_idea_${color}.svg`;
    img2.src = `img/undraw_feeling_proud_${color}.svg`;
    img3.src = `img/undraw_proud_coder_${color}.svg`;
}

function toggleDarkLightMode(isDark) {

    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}

function switchTheme(event) {
    // console.log(event.target.checked);
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false)
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// check for local theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}