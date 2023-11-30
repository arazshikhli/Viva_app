const { Router } = require('express');
const {getme,login,register} =require('../controllers/auth.controller')
const router = Router()
const {check,validationResult}=require('express-validator')

router.post('/register',[
    check('email','Введен некоректный email')
    .isEmail(),
    check('password','Минимальная длина пароля 6 символов')
    .isLength({min:6})
],
register)
router.post('/login',
[
    check('email','Введен некоректный email')
    .isEmail(),
    check('password','Минимальная длина пароля 6 символов')
    .isLength({min:6})
]
,login)
router.get('/me',getme)
module.exports = router