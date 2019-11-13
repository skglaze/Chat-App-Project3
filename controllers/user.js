const express = require('express')
const userRouter = express.Router()

const userApi = require('../models/user.js')
// const roomApi = require('../models/room.js')

userRouter.get('/users/', (req, res) => {
    userApi.getAllUsers().then((users) => {
        res.json(users)
    })
})

userRouter.get('/users/:userName', (req, res) => {
    userApi.getOneUser(req.params.userName).then((user) => {
        res.json(user)
    })
})

// userRouter.get('/users/rooms/:userName', (req, res) => {
//     roomApi.getAllRoomsByUserName(req.params)
//         .then((roomMessages) => {
//             res.json(roomMessages)
//         })
// })

userRouter.post('/users/', (req, res) => {
    userApi.addNewUser(req.body).then((newUser) => {
        res.json(newUser)
    })
})

userRouter.put('/users/:userId', (req, res) => {
    userApi.updateUser(req.params.userId, req.body).then((updatedUser) => {
        res.json(updatedUser)
    })
})

userRouter.delete('/users/:userId', (req, res) => {
    userApi.deleteUser(req.params.userId)
        .then((deletedUser) => {
            res.json(deletedUser)
        })
})

module.exports = {
    userRouter: userRouter
}