import '../styles.css';
import toggleMenu from './modules/navBar';

const header = document.querySelector('.header');
header.addEventListener('click', toggleMenu);