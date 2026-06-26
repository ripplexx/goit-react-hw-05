import axios from 'axios';

// API anahtarını artık .env dosyasından çekiyoruz
const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

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