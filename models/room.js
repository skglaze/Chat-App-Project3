const mongoose = require('./connection.js')

global.sampleModel = [];

const RoomSchema = new mongoose.Schema({
    name: String,
    password: String,
    usersAssociated: [],
})

const RoomCollection = mongoose.model('Room', RoomSchema)

const getAllRooms = () => {
    return RoomCollection.find({})
}

const getAllRoomsByUserName = (userName) => {
    return RoomCollection.find({ userName })
}

const getOneRoom = (name) => {
    return RoomCollection.find({ name })
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
    deleteRoom,
    getAllRoomsByUserName
}