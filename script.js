// Navigation logic
function showPage(page) {
    document.getElementById('home').style.display = (page === 'home') ? 'block' : 'none';
    document.getElementById('profile').style.display = (page === 'profile') ? 'block' : 'none';
    document.getElementById('categories').style.display = (page === 'categories') ? 'block' : 'none';
    document.getElementById('explore').style.display = (page === 'explore') ? 'block' : 'none';
}

// Theme toggle logic
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Search functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.explore-cards .card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
});

// Load user data from Telegram WebApp
const userData = window.Telegram.WebApp.initDataUnsafe;
if (userData.user) {
    document.getElementById('profile-pic').src = userData.user.photo_url || 'https://via.placeholder.com/100';
    document.getElementById('username').innerText = `@${userData.user.username || 'Anonymous'}`;
    document.getElementById('bio').innerText = userData.user.bio || 'No bio provided';
}

window.Telegram.WebApp.ready();
