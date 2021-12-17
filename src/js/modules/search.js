const toggleSearch = () => {
  const header = document.querySelector('.header');
  const searchContainer = document.querySelector('.search-bar-container');
  const searchBar = document.querySelector('.search-bar');

  header.classList.toggle('hidden');
  searchContainer.classList.toggle('search-bar-container-c')
  searchBar.classList.toggle('search-bar-c')
}

export default toggleSearch;