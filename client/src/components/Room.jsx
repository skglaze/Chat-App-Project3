import React, { Component } from 'react'
import axios from 'axios'

export default class Room extends Component {
    state = {
        room: {}
    }

    componentDidMount() {
        axios.get(`/api/rooms/rooms/oneRoom/${this.props.match.params.roomId}`)
            .then((response) => {
                this.setState({ room: response.data[0] })
                console.log(this.state.room)
            })
    }

    render() {
        return (
            <div>
                <h1>Hey Bois</h1>

                {this.state.room.name}
            </div>
        )
    }
}