const mongoose = require('./connection.js')

global.sampleModel = [];

const ChatRoomSchema = new mongoose.Schema({
    name: String,
    password: String
})

const RoomCollection = mongoose.model('Room', ChatRoomSchema)

const getAllRooms = () => {
    return RoomCollection.find({})
}

const getOneRoom = (id) => {
    return RoomCollection.findById(id)
}

const addNewRoom = (newRoomData) => {
    return RoomCollection.create(newRoomData)
}

const updateRoom = (id, roomData) => {
    return RoomCollection.updateOne({ _id: id }, roomData)
}

const deleteRoom = (id) => {
    return RoomCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllRooms,
    getOneRoom,
    addNewRoom,
    updateRoom,
    deleteRoom
}