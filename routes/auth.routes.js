const { Router } = require('express');
const {getme,login,register} =require('../controllers/auth.controller')
const router = Router()


router.post('/register',register)
router.post('/login',login)
router.get('/me',getme)
module.exports = router