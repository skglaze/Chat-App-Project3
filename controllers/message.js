const express = require('express')
const messageRouter = express.Router()

const messageApi = require('../models/message.js')

messageRouter.get('/messages/', (req, res) => {
    messageApi.getAllMessages().then((messages) => {
        res.json(messages)
    })
})

messageRouter.get('/messages/:messageId', (req, res) => {
    messageApi.getOneMessage(req.params.messageId).then((message) => {
        res.json(message)
    })
})

messageRouter.post('/messages/', (req, res) => {
    messageApi.addNewMessage(req.body).then((newMessage) => {
        res.json(newMessage)
    })
})

messageRouter.put('/messages/:messageId', (req, res) => {
    messageApi.updateMessage(req.params.messageId, req.body).then((updatedMessage) => {
        res.json(updatedMessage)
    })
})

messageRouter.delete('/messages/:messageId', (req, res) => {
    messageApi.deleteMessage(req.params.messageId)
        .then((deletedMessage) => {
            res.json(deletedMessage)
        })
})

module.exports = {
    messageRouter: messageRouter
}