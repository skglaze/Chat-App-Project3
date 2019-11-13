import React, { Component } from 'react'
import axios from 'axios'
import io from 'socket.io-client'
import '../App.css'
import '../script.js'

let socket = io('http://localhost:4000/')

export default class Room extends Component {
    state = {
        room: {},
        messages: [],
        newMessage: {
            message: '',
            roomId: '',
        }
    }

    componentDidMount() {
        axios.get(`/api/rooms/rooms/oneRoom/${this.props.match.params.roomId}`)
            .then((response) => {
                this.setState({ room: response.data[0] })
                console.log(this.state.room)
            })
        axios.get(`/api/rooms/messages/${this.props.match.params.roomId}`)
            .then((response) => {
                this.setState({ messages: response.data })
                console.log(this.state.messages)
            })
        socket.on('new-message', (event) => {
            if (this.props.match.params.id !== event.data.roomId) {
                return
            }
            const previousState = { ...this.state }
            previousState.messages.push(event.data)
            this.setState(previousState)
        })
    }

    handleNewMessageChange = (event) => {
        const copyNewMessage = { ...this.state.newMessage }
        copyNewMessage[event.target.name] = event.target.value
        this.setState({ newMessage: copyNewMessage })
    }

    addNewMessage = (event) => {
        event.preventDefault()
        axios.post('/api/messages/messages', this.state.newMessage)
        console.log(this.state.newMessage)
        console.log(this.state.room._id)
    }

    render() {
        const messageElements = this.state.messages.map((message) => {
            return (
                <div id="message">
                    <h4>UserNameHere</h4>
                    <p>{message.message}</p>
                </div >
            )
        })
        return (
            <div>
                <h1>{this.state.room.name}</h1>
                <div id="messages">
                    {messageElements}
                </div>
                <form id="" onSubmit={this.addNewMessage}>
                    <input
                        id="text"
                        name="message"
                        type="text"
                        placeholder="Message..."
                        autoComplete="off"
                        value={this.state.newMessage.message}
                        onChange={this.handleNewMessageChange}
                    />
                    <input
                        name="roomId"
                        type="hidden"
                        placeholder="roomId"
                        autoComplete="off"
                        value={this.state.room._id}
                        onChange={this.handleNewMessageChange}
                    />
                    <input
                        id="submit"
                        type="submit"
                        value="submit"
                    />
                </form>
            </div>
        )
    }
}