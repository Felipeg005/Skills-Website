import '../styles.css';
import getUsers from './modules/apiUsersRequest';
import toggleMenu from './modules/navBar';
import toggleSearch from './modules/search';
import displayUsers from './modules/userCard';
import loadUserPage from './modules/userPage';

// Listener for nav bar
const header = document.querySelector('.nav-button');
header.addEventListener('click', toggleMenu);

// Listener for search button in menu
const searchButton = document.querySelector('.header-icon');
searchButton.addEventListener('click', () => {
  window.history.pushState('', '', `https://felipeg005.github.io/Skills-Website/`);
  location.reload();
});

// Animation for search bar and back button
const searchBar = document.querySelector('.search-bar');
const backButton = document.querySelector('.back-button');
searchBar.addEventListener('click', toggleSearch);
backButton.addEventListener('click', toggleSearch);

// Get users information when loads page and store it
window.addEventListener('DOMContentLoaded', getUsers())

// Listen input to filter users
const input = document.getElementById('search-bar-input');
input.addEventListener('keypress', (e) => {
  displayUsers(e.target.value);
});

// listen when click on user card
window.addEventListener('click', (e) => {
  const elementClass = e.target.className
  if (elementClass === 'user-container' || elementClass === 'user-description' || elementClass === 'user-title'|| elementClass === 'user-photo' || elementClass === 'user-info') {
    loadUserPage(e.target.id)
  }
  // Back from user
  if (elementClass === 'user-back' || elementClass === 'user-back-img') {
    window.history.pushState('', '', `https://felipeg005.github.io/Skills-Website/`);
    location.reload();
  }
});
