const mongoose = require('./connection.js')

global.sampleModel = [];

const MessageSchema = new mongoose.Schema({
    message: String,
    isLiked: Boolean,
    numberLikes: Number,
    userId: mongoose.ObjectId,
    roomId: mongoose.ObjectId
})

const MessageCollection = mongoose.model('Message', MessageSchema)

const getAllMessages = () => {
    return MessageCollection.find({})
}

const getAllMessagesByRoomId = (roomId) => {
    return MessageCollection.find({ roomId: roomId })
}

const getOneMessage = (id) => {
    return MessageCollection.findById(id)
}

const addNewMessage = (newMessageData) => {
    return MessageCollection.create(newMessageData)
}

const updateMessage = (id, messageData) => {
    return MessageCollection.updateOne({ _id: id }, messageData)
}

const deleteMessage = (id) => {
    return MessageCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllMessages,
    getAllMessagesByRoomId,
    getOneMessage,
    addNewMessage,
    updateMessage,
    deleteMessage
}