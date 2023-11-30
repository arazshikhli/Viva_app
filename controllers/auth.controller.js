const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('config');
const { validationResult } = require('express-validator')
async function register(req, res) {

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Некорректные данные при регистрации "
            })
        }
        const { email, password } = req.body;
        console.log("EMAIL:   ", email)
        const candidate = await User.findOne({ email });

        if (candidate) {
            return res.status(400).json({
                message: " Данный email зарегистрирован другим пользователем"
            })
        }
        const hashedPassword = bcrypt.hashSync(password, 12)
        const user = new User({ email, password: hashedPassword })

        await user.save()
        res.status(201).json({
            message: "Пользователь успешно создан",
            user
        })

    } catch (error) {
        res.status(500).json({
            message: "Чтото пошло не так",
            error: error.message
        }
        )
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "Пользователь не найден"
            })
        }
        const isMatch = await bcrypt.compareSync(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                message: "Введен неверный пароль"
            })
        }
        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtsecret'),
            { expiresIn: '5h' }
        )
        res.status(200).json({
            token,
            userId: user.id,
            message: "Авторизация произошла успешно"
        })
    } catch (error) {
        res.status(500).json({
            message: "Чтото пошло не так"
        })
    }
}

async function getme(req, res) {
    try {

    } catch (error) {

    }
}

module.exports = { getme, login, register }