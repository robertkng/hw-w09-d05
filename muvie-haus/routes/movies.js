const express = require('express');
const router = express.Router();
const { getMovies, addMovie, deleteMovie } = require('../models/moviesmodel');
// const { getMovies } = require('../models/moviesmodel');
const { searchMovies } = require('../services/services');

router.get('/', getMovies, (req, res) => {
  res.json(res.movies || []);
})

router.post('/', addMovie, (req, res) => {
  res.json(res.movies || []);
})

router.delete('/', deleteMovie, (req, res) => {
  res.json(res.movies || []);
})

router.get('/search', searchMovies, (req, res) => {
  console.log(res.movies);
  res.json(res.movies || []);
})

module.exports = router;
