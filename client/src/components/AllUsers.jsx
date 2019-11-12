import React, { Component } from 'react'
import axios from 'axios'

export default class AllUsers extends Component {
    state = {
        userList: []
    }

    componentDidMount() {
        axios.get('/api/users/users')
            .then((response) => {
                this.setState({ userList: response.data })
                console.log(this.state.userList)
            })
    }

    render() {
        const userListElements = this.state.userList.map((user) => {
            return (
                <div>
                    <h1>{user.userName}</h1>
                    <button onClick={() => { axios.delete(`/api/users/users/${user._id}`) }}>Delete</button>
                </div >
            )
        })
        return (
            <div>
                <ul>
                    {userListElements}
                </ul>
            </div >
        )
    }
}