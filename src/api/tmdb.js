import axios from 'axios';

// Kendi API "Read Access Token" anahtarını buraya eklemelisin
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQ5MmU0ZTZhYzNjODliNmYyMjI3MGM0M2Y1NTRkMiIsIm5iZiI6MTc3NTY2MjM4My4xMjk5OTk5LCJzdWIiOiI2OWQ2NzUyZmYzODUxM2FmYjNjYThjNmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DqKdSZM2ChZ0AZGKgR7iGUiZq8lmG8JbTJ0dxYeyCgo';

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await tmdbApi.get('/trending/movie/day');
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await tmdbApi.get('/search/movie', {
    params: { query, include_adult: false, language: 'en-US', page: 1 },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};