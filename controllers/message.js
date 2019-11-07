const express = require('express')
const router = express.Router()

const messageApi = require('../models/message.js')

router.get('/', (req, res) => {
    messageApi.getAllMessages().then((messages) => {
        res.json(messages)
    })
})

router.get('/:messageId', (req, res) => {
    messageApi.getOneMessage(req.params.messageId).then((message) => {
        res.json(message)
    })
})

router.post('/', (req, res) => {
    messageApi.addNewMessage(req.body).then((newMessage) => {
        res.json(newMessage)
    })
})

router.put('/:messageId', (req, res) => {
    messageApi.updateMessage(req.params.messageId, req.body).then((updatedMessage) => {
        res.json(updatedMessage)
    })
})

router.delete('/:messageId', (req, res) => {
    messageApi.deleteMessage(req.params.messageId)
        .then((deletedMessage) => {
            res.json(deletedMessage)
        })
})

module.exports = {
    messageRouter: messageRouter
}