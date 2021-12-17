const torreApi = ('https://search.torre.co/people/_search/?');

const getUsers = async () => {
  const response = await fetch(torreApi, {
    method: 'POST'
  });
  const json = await response.json();
  localStorage.setItem('usersData', JSON.stringify(json))
  return json;
};

export default getUsers;