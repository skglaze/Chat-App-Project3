import React, { Component } from 'react'
import Axios from 'axios'

export default class UserPage extends Component {
    state = {
        user: {},
        newRoomForm: "true",
        oldRoomSignIn: "false",
        newRoom: {
            name: '',
            password: ''
        },
        roomList: []
    }

    componentDidMount() {
        axios.get(`/api/users/${this.props.match.params.userId}`)
            .then((response) => {
                this.setState({ user: response.data })
            })
        axios.get('/api/rooms')
            .then((response) => {
                this.setState({ roomList: response.data })
            })
    }

    addNewRoom = (event, newRoom) => {
        event.preventDefault()
        Axios.post('/api/rooms/', this.state.newRoom)
    }

    handleNewRoomChange = (event) => {
        const copyNewRoom = { ...this.state.newRoom }
        copyNewRoom[event.target.name] = event.target.value
        this.setState({ newRoom: copyNewRoom })
    }

    handleRoomChange = (event) => {
        const copyNewRoom = { ...this.state.newRoom }
        copyNewUser[event.target.name] = event.target.value
        this.setState({ newUser: copyNewUser })
    }

    checkRoomNameAndPassword = (roomName, roomPassword) => {
        for (let i = 0; i < this.state.roomList.length; i++) {
            if (this.state.roomList[i].name === roomName) {
                if (this.state.roomList[i].password === roomPassword) {

                }
            }
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}