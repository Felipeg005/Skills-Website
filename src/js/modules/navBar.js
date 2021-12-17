const navMenu = document.querySelector('.header');
const menuItems = document.querySelector('.menuitems');
const lines = document.querySelector('.lines');
const menuLine1 = document.querySelector('.line-1');
const menuLine2 = document.querySelector('.line-2');
const menuLine3 = document.querySelector('.line-3');

const toggleMenu = () => {
  menuItems.classList.toggle('menuitems1');
  lines.classList.toggle('lines1');
  navMenu.classList.toggle('nav-menu');
  menuLine1.classList.toggle('line-1-1');
  menuLine2.classList.toggle('line-1-2');
  menuLine3.classList.toggle('line-1-3');
}

export default toggleMenu;