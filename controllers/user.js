const express = require('express')
const userRouter = express.Router()

const userApi = require('../models/user.js')

userRouter.get('/', (req, res) => {
    userApi.getAllUsers().then((users) => {
        res.json(users)
    })
})

userRouter.get('/:userId', (req, res) => {
    userApi.getOneUser(req.params.userId).then((user) => {
        res.json(user)
    })
})

userRouter.post('/', (req, res) => {
    userApi.addNewUser(req.body).then((newUser) => {
        res.json(newUser)
    })
})

userRouter.put('/:userId', (req, res) => {
    userApi.updateUser(req.params.userId, req.body).then((updatedUser) => {
        res.json(updatedUser)
    })
})

userRouter.delete('/:userId', (req, res) => {
    userApi.deleteUser(req.params.userId)
        .then((deletedUser) => {
            res.json(deletedUser)
        })
})

module.exports = {
    userRouter: userRouter
}