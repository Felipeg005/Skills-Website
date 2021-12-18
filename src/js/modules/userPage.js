import toggleSearch from "./search";

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
    <h4 class="skill-title">Master / influencer</h4>
    <ul class="master-skill-container"></ul>
    <h4 class="skill-title">Proeficient</h4>
    <ul class="proeficient-skill-container"></ul>
    <h4 class="skill-title">No experience, but interested</h4>
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
}

export default loadUserPage;