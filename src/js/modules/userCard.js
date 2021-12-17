const displayUsers = (e) => {
  const usersData = JSON.parse(localStorage.getItem('usersData')).results;
  console.log(e);
  const userCardHtml = (
  '<li class="user-container">' +
    '<img class="user-photo" src="#" alt="user-photo">' +
    '<h3 class="user-title">Username</h3>' +
    '<p class="user-description">Here a description of the user</p>' +
  '</li>'
  );
}

export default displayUsers;