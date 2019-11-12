import React, { Component } from 'react'
import axios from 'axios'

export default class Room extends Component {
    state = {
        room: {}
    }

    componentDidMount() {
        axios.get(`/api/rooms/oneRoom/${this.props.match.params.roomId}`)
            .then((response) => {
                this.setState({ room: response.data[0] })
            })
    }

    render() {
        return (
            <div>
                Hey Bois
            </div>
        )
    }
}