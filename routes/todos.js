var express = require('express');
var router = express.Router();
var todosController = require('../controllers/todos');

// All actual paths start with "/todos"

// GET request to /todos
router.get('/', todosController.index);
// GET /todos/:id
router.get('/:id', todosController.show);

module.exports = router;

