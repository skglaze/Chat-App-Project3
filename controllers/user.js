const express = require('express')
const router = express.Router()

const userApi = require('../models/user.js')

router.get('/', (req, res) => {
    userApi.getAllUsers().then((users) => {
        res.json(users)
    })
})

router.get('/:userId', (req, res) => {
    userApi.getOneUser(req.params.userId).then((user) => {
        res.json(user)
    })
})

router.post('/', (req, res) => {
    userApi.addNewUser(req.body).then((newUser) => {
        res.json(newUser)
    })
})

router.put('/:userId', (req, res) => {
    userApi.updateUser(req.params.userId, req.body).then((updatedUser) => {
        res.json(updatedUser)
    })
})

router.delete('/:userId', (req, res) => {
    userApi.deleteUser(req.params.userId)
        .then((deletedUser) => {
            res.json(deletedUser)
        })
})

module.exports = {
    userRouter: userRouter
}