const express = require('express');
const router = express.Router();
const { getMovies, addMovie, deleteMovie, getAllMovies } = require('../models/moviesmodel');
// const { getMovies } = require('../models/moviesmodel');
const { searchMovies } = require('../services/services');

router.get('/movies', getMovies, getAllMovies, (req, res) => {
  res.json(res.movies || []);
})

router.post('/movies', addMovie, (req, res) => {
  res.json(res.movies || []);
})

router.delete('/movies/:id', deleteMovie, (req, res) => {
  res.json(res.movies || []);
})

router.get('/search', searchMovies, (req, res) => {
  console.log(res.movies);
  res.json(res.movies || []);
})

module.exports = router;
