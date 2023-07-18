const router = require('express').Router();

const { addMovieValidation, deleteMovieValidation } = require('../utils/validation');
const {
  addMovie,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');

router.post('/', addMovieValidation, addMovie);
router.get('/', getMovies);
router.delete('/:id', deleteMovieValidation, deleteMovie);

module.exports = router;
