export const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = 'af468b47558a0483ee60828cb8f72c98';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};