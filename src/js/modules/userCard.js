const displayUsers = (e) => {
  const usersContainer = document.querySelector('.users-container');
  const usersData = JSON.parse(localStorage.getItem('usersData')).results;
  const result = usersData.filter( (user) => {
    if (user.name.toLowerCase().includes(e.toLowerCase())) {
      return user;
    }
  });
  
  usersContainer.innerHTML = '';
  for (let i = 0; i < result.length; i += 1) {
    const user = result[i];
    const userCardHtml = (
      `<li id="${user.subjectId}" class="user-container">` +
        `<div class="frame"><img id="${user.subjectId}" class="user-photo" src="${user.picture}" alt="user-photo"></div>` +
        `<div id="${user.subjectId}" class="user-info">` +
        `<p id="${user.subjectId}" class="user-title">${user.name}</p>` +
        `<p id="${user.subjectId}" class="user-description">${user.professionalHeadline}</p>` +
        '</div>' +
      '</li>'
    );
    usersContainer.innerHTML += userCardHtml;
  }
}

export default displayUsers;