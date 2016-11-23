const pgp = require('pg-promise')();
const db = require('../lib/dbconnect');

function getAllMovies(req, res, next) {
  db.any(`SELECT * FROM movies;`)
  .then((results) => {
    res.movies = results
    next();
  })
  .catch(err => next(err));
}

function getMovies(req,res, next) {
  // db.any when querying to bring data out
  db.any(`SELECT * FROM movies;`)
  .then((results) => {
    res.movies = results
    next();
  })
  .catch(err => next(err));
}

function addMovie(req, res, next) {
  // db.none placing data in but not pulling anything
  db.none(`INSERT INTO movies (title, poster) VALUES ($1, $2), [req.body.title, req.body.poster]`)
  .then((results) => {
    res.movies = results
    next();
  })
  .catch(err => next(err));
}

function deleteMovie(req, res, next) {
  db.result(`DELETE * FROM movies
    WHERE id = $1`)
  .then((results) => {
    res.movies = results
    next();
  })
  .catch(err => next(err));
}


module.exports = {
  getAllMovies,
  getMovies,
  addMovie,
  deleteMovie
}
