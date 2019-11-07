const express = require('express')
const messageRouter = express.Router()

const messageApi = require('../models/message.js')

messageRouter.get('/', (req, res) => {
    messageApi.getAllMessages().then((messages) => {
        res.json(messages)
    })
})

messageRouter.get('/:messageId', (req, res) => {
    messageApi.getOneMessage(req.params.messageId).then((message) => {
        res.json(message)
    })
})

messageRouter.post('/', (req, res) => {
    messageApi.addNewMessage(req.body).then((newMessage) => {
        res.json(newMessage)
    })
})

messageRouter.put('/:messageId', (req, res) => {
    messageApi.updateMessage(req.params.messageId, req.body).then((updatedMessage) => {
        res.json(updatedMessage)
    })
})

messageRouter.delete('/:messageId', (req, res) => {
    messageApi.deleteMessage(req.params.messageId)
        .then((deletedMessage) => {
            res.json(deletedMessage)
        })
})

module.exports = {
    messageRouter: messageRouter
}