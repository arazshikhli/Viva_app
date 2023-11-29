const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {check,validationResult} =require('express-validator')
async function register(req, res) {
    try {
        const { email, password } = req.body;

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
            message: "Чтото пошло не так"
        })
    }
}

async function login(req, res) {
    try {

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