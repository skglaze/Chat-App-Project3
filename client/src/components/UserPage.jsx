import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class UserPage extends Component {
    state = {
        user: {},
        newRoomForm: true,
        existingRoomForm: false,
        newRoom: {
            name: '',
            password: ''
        },
        existingRoom: {
            name: '',
            password: '',
        },
        roomList: [],
        redirect: false
    }

    componentDidMount() {
        Axios.get(`/api/users/users/${this.props.match.params.userId}`)
            .then((response) => {
                this.setState({ user: response.data[0] })
            })
        Axios.get('/api/rooms/rooms')
            .then((response) => {
                this.setState({ roomList: response.data })
            })
    }

    addNewRoom = (event) => {
        event.preventDefault()
        Axios.post('/api/rooms/rooms/', this.state.newRoom)
            .then((response) => {
                const redirect = true
                this.setState({ redirect })
            })
    }

    handleNewRoomChange = (event) => {
        const copyNewRoom = { ...this.state.newRoom }
        copyNewRoom[event.target.name] = event.target.value
        this.setState({ newRoom: copyNewRoom })
    }

    handleExistingRoomChange = (event) => {
        const copyExistingRoom = { ...this.state.existingRoom }
        copyExistingRoom[event.target.name] = event.target.value
        this.setState({ existingRoom: copyExistingRoom })
    }

    checkRoomNameAndPassword = (event) => {
        event.preventDefault()
        for (let i = 0; i < this.state.roomList.length; i++) {
            console.log(this.state.roomList[i].name)
            console.log(this.state.existingRoom.name)
            if (this.state.roomList[i].name === this.state.existingRoom.name) {
                if (this.state.roomList[i].password === this.state.existingRoom.password) {
                    const redirect = true
                    this.setState({ redirect })
                }
            }
        }
    }

    redirectToRoom = () => {
        if (this.state.redirect === true) {
            return <Redirect to={`/rooms/${this.state.existingRoom.name}`} />
        }
    }

    showNewRoomForm = () => {
        const copyNewRoomForm = true
        const copyExistingRoomForm = false
        this.setState({ newRoomForm: copyNewRoomForm })
        this.setState({ existingRoomForm: copyExistingRoomForm })
    }

    showExistingRoomForm = () => {
        const copyNewRoomForm = false
        const copyExistingRoomForm = true
        this.setState({ newRoomForm: copyNewRoomForm })
        this.setState({ existingRoomForm: copyExistingRoomForm })
    }

    render() {
        return (
            <div>
                <h1>Welcome, {this.state.user.userName}</h1>
                <h2>Would you like to:</h2>
                <span>
                    <button onClick={this.showNewRoomForm}>Create a New Server</button>
                </span>
                <span> or </span>
                <span>
                    <button onClick={this.showExistingRoomForm}>Log into an Existing Server</button>
                </span>
                {this.redirectToRoom()}
                {this.state.newRoomForm ?
                    <form onSubmit={this.addNewRoom}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                            value={this.state.newRoom.roomName}
                            onChange={this.handleNewRoomChange}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={this.state.newRoom.roomPassword}
                            onChange={this.handleNewRoomChange}
                        />
                        <div>
                            <input
                                type="submit"
                                value="submit"
                            />
                        </div>
                    </form> : null}
                {this.state.existingRoomForm ?
                    <form onSubmit={this.checkRoomNameAndPassword}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                            value={this.state.existingRoom.roomName}
                            onChange={this.handleExistingRoomChange}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={this.state.existingRoom.roomPassword}
                            onChange={this.handleExistingRoomChange}
                        />
                        <div>
                            <input
                                type="submit"
                                value="submit"
                            />
                        </div>
                    </form> : null}
            </div>
        )
    }
}