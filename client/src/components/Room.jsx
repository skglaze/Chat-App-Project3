import React, { Component } from 'react'
import axios from 'axios'
import io from 'socket.io-client'

let socket = io('http://localhost:4000/')

export default class Room extends Component {
    state = {
        room: {},
        messages: []
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

    render() {
        const messageElements = this.state.messages.map((message) => {
            return (
                <div>
                    <h1>{message.message}</h1>
                </div >
            )
        })
        return (
            <div>
                <h1>Hey Bois</h1>

                {this.state.room.name}
                {messageElements}
            </div>
        )
    }
}