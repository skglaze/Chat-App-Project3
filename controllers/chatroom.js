const express = require('express')
const roomRouter = express.Router()

const roomApi = require('../models/chatroom.js')
const messageApi = require('../models/message')

roomRouter.get('/', (req, res) => {
    roomApi.getAllRooms().then((rooms) => {
        res.json(rooms)
    })
})

roomRouter.get('/:roomId', (req, res) => {
    roomApi.getOneRoom(req.params.roomId).then((room) => {
        res.json(room)
    })
})

roomRouter.get('/opponents/:opponentId', (req, res) => {
    opponentApi.getOneOpponent(req.params.opponentId)
        .then((opponent) => {
            gameApi.getAllGamesByOpponentId(req.params.opponentId)
                .then((opponentGames) => {
                    res.render('opponentViews/opponent', { opponent, opponentGames })
                })
        })
})

roomRouter.post('/', (req, res) => {
    roomApi.addNewRoom(req.body).then((newRoom) => {
        res.json(newRoom)
    })
})

roomRouter.put('/:roomId', (req, res) => {
    roomApi.updateRoom(req.params.roomId, req.body).then((updatedRoom) => {
        res.json(updatedRoom)
    })
})

roomRouter.delete('/:roomId', (req, res) => {
    roomApi.deleteRoom(req.params.roomId)
        .then((deletedRoom) => {
            res.json(deletedRoom)
        })
})

module.exports = {
    roomRouter: roomRouter
}