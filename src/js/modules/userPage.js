import toggleSearch from "./search";
import masterIcon from "../../assets/img/icons/star-6-16.png"
import proeficientIcon from "../../assets/img/icons/student-16.png"
import noSkillIcon from "../../assets/img/icons/pacifier-2-16.png"

const loadUserPage = (id) => {
  toggleSearch();
  const searchContainer = document.querySelector('.search-bar-container');
  const userPage = document.querySelector('.user-page-container');

  searchContainer.classList.toggle('hidden');
  userPage.classList.toggle('hidden');

  const usersData = JSON.parse(localStorage.getItem('usersData')).results;
  const result = usersData.filter( (user) => {
    if (user.subjectId === id) {
      return user;
    }
  });
  const user = result[0];
  const userPageHtml = (
    `<div class="frame-big"><img class="user-photo-big" src="${user.picture}" alt="${user.name}-photo"></div>
    <h2 class="user-page-title">${user.name}</h2>
    <h3 class="user-page-subtitle">Skills and interests:</h3>
    <div class="skill-title"><i class="icon"><img src="${masterIcon}" alt="icon"></i><h4>Master / influencer</h4></div>
    <ul class="master-skill-container"></ul>
    <div class="skill-title"><i class="icon"><img src="${proeficientIcon}" alt="icon"></i><h4>Proeficient</h4></div>
    <ul class="proeficient-skill-container"></ul>
    <div class="skill-title"><i class="icon"><img src="${noSkillIcon}" alt="icon"></i><h4>No experience, but interested</h4></div>
    <ul class="no-skill-container"></ul>`
  );
  userPage.innerHTML += userPageHtml;
  for (let i = 0; i < user.skills.length; i += 1) {
    const skill = user.skills[i];
    if (skill.weight === 0) {
      const noSkillContainer = document.querySelector('.no-skill-container');
      noSkillContainer.innerHTML += `<li class="skill">${skill.name}</li>`
    } else if (skill.weight > 0 && skill.weight < 750) {
      const proeficientSkillContainer = document.querySelector('.proeficient-skill-container');
      proeficientSkillContainer.innerHTML += `<li class="skill">${skill.name}</li>`
    } else if (skill.weight >= 750) {
      const masterSkillContainer = document.querySelector('.master-skill-container');
      masterSkillContainer.innerHTML += `<li class="skill">${skill.name}</li>`
    }
  }
  window.history.pushState('', '', `https://felipeg005.github.io/Skills-Website/${user.name}`);
}

export default loadUserPage;