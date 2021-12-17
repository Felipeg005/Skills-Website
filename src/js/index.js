import '../styles.css';
import getUsers from './modules/apiUsersRequest';
import toggleMenu from './modules/navBar';
import toggleSearch from './modules/search';
import displayUsers from './modules/userCard';

// Listener for nav bar
const header = document.querySelector('.nav-button');
header.addEventListener('click', toggleMenu);

// Animation for search bar
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('click', toggleSearch);

// Get users information when loads page and store it
window.addEventListener('DOMContentLoaded', getUsers())

// Listen input to filter users
const input = document.getElementById('search-bar-input');
input.addEventListener('keypress', (e) => {
  displayUsers(e.target.value);
});