export const getSearchResults = () =>
  fetch('https://vehiculum-coding-challenge.herokuapp.com/api/search-results')
    .then(res => res.json());

export const getProductDetails = (id) =>
  fetch(`https://vehiculum-coding-challenge.herokuapp.com/api/details/${id}`)
    .then(res => res.json());