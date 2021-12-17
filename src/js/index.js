import '../styles.css';
import toggleMenu from './modules/navBar';
import toggleSearch from './modules/search';

// Listener for nav bar
const header = document.querySelector('.nav-button');
header.addEventListener('click', toggleMenu);

// Logic for search bar
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('click', toggleSearch)