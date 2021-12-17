import getUsers from "./apiUsersRequest";

const displayUsers = async () => {
  const usersFetch = await getUsers();
  const usersData = usersFetch.results;
  console.log(usersData);
  const userCardHtml = ''
}

export default displayUsers;