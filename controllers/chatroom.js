const express = require('express')
const router = express.Router()

const roomApi = require('../models/chatroom.js')

router.get('/', (req, res) => {
    roomApi.getAllRooms().then((rooms) => {
        res.json(rooms)
    })
})

router.get('/:roomId', (req, res) => {
    roomApi.getOneRoom(req.params.roomId).then((room) => {
        res.json(room)
    })
})

router.post('/', (req, res) => {
    roomApi.addNewRoom(req.body).then((newRoom) => {
        res.json(newRoom)
    })
})

router.put('/:roomId', (req, res) => {
    roomApi.updateRoom(req.params.roomId, req.body).then((updatedRoom) => {
        res.json(updatedRoom)
    })
})

router.delete('/:roomId', (req, res) => {
    roomApi.deleteRoom(req.params.roomId)
        .then((deletedRoom) => {
            res.json(deletedRoom)
        })
})

module.exports = {
    roomRouter: roomRouter
}