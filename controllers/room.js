const express = require('express')
const roomRouter = express.Router()

const roomApi = require('../models/room.js')
const messageApi = require('../models/message')

roomRouter.get('/', (req, res) => {
    roomApi.getAllRooms().then((rooms) => {
        res.json(rooms)
    })
})

// roomRouter.get('/:roomId', (req, res) => {
//     roomApi.getOneRoom(req.params.roomId).then((room) => {
//         res.json(room)
//     })
// })

roomRouter.get('/:roomId', (req, res) => {
    messageApi.getAllMessagesByRoomId(req.params.roomId)
        .then((roomMessages) => {
            res.json(roomMessages)
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
    roomRouter
}