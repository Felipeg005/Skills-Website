import '../styles.css';
import toggleMenu from './modules/navBar';
import getUsers from './modules/apiUsersRequest';

// Listener for nav bar
const header = document.querySelector('.nav-button');
header.addEventListener('click', toggleMenu);

// Get information from api when all content loaded
window.addEventListener('DOMContentLoaded', getUsers);
