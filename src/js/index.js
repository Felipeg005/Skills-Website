import '../styles.css';
import toggleMenu from './modules/navBar';

const header = document.querySelector('.nav-button');
header.addEventListener('click', toggleMenu);