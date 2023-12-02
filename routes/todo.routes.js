const { Router } = require('express');
const {createTodo} =require('../controllers/todo.controller')
const router = Router()

router.post('/create',createTodo)
module.exports = router