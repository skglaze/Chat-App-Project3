const mongoose = require('./connection.js')

global.sampleModel = [];

const UserSchema = new mongoose.Schema({
    userName: String
})

const UserCollection = mongoose.model('User', UserSchema)

const getAllUsers = () => {
    return UserCollection.find({})
}

const getOneUser = (id) => {
    return UserCollection.findById(id)
}

const addNewUser = (newUserData) => {
    return UserCollection.create(newUserData)
}

const updateUser = (id, userData) => {
    return UserCollection.updateOne({ _id: id }, userData)
}

const deleteUser = (id) => {
    return UserCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllUsers,
    getOneUser,
    updateUser,
    addNewUser,
    deleteUser
}