const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('config');
const Todo = require('../models/Todo')

async function createTodo(req, res) {
    try {
        const { title, completed, email } = req.body;
        if (!title) {
            return res.status(400).json({
                message: 'Something go wrong in creating todo'
            })

        }

        const todo = new Todo({
            title,
            completed,
            user: email
        })
        await todo.save()

        res.json({
            todo: todo,
            message: 'Todo Created'
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { createTodo }